declare const FB: any;

class FbAllPhotos {

    fullObj: any;
    errorObj: any;
    profilePictureURL: any;


    constructor() {
        this.fullObj = {};
        this.errorObj = {};
        this.profilePictureURL = '';
    }

    getProfilePicture() {
        return new Promise((resolve, reject) => {
            let errorReturnMsg = '';

            this.errorObj = {}; //Reset error object

            if (this.profilePictureURL) resolve(this.profilePictureURL); //If already set

            FB.api('/me?fields=picture.height(9999)', async (response: any) => { //Arbitrarily large number for largest pic
                if (response && response.error) { //If response exists and error
                    errorReturnMsg = 'fbError';
                    this.errorObj = response.error;
                } else if (!response || !response.hasOwnProperty('picture') || response.picture.data.is_silhouette) { //No picture
                    errorReturnMsg = 'noProfilePicture';
                } else { //No errors
                    this.profilePictureURL = response.picture.data.url;
                    resolve(this.profilePictureURL);
                }

                if (errorReturnMsg) reject(errorReturnMsg); //Return error message if error
            });
        });
    }

    getAlbums(limitAlbums = 25) {
        return new Promise((resolve, reject) => {
            let errorReturnMsg = '';

            this.errorObj = {};

            FB.api('/me?fields=albums.limit(' + limitAlbums + '){name,count,cover_photo{picture}}', (response: any) => {
                if (response && response.error) { //If response exists and error
                    errorReturnMsg = 'fbError';
                    this.errorObj = response.error;
                } else if (!response || !response.hasOwnProperty('albums')) {
                    errorReturnMsg = 'noAlbums';
                } else { //No errors
                    response.albums.data.forEach((album: any) => {
                        album.cover_photo = (album.cover_photo) ? album.cover_photo.picture : ''; //All we need is picture
                    });

                    this.fullObj = response.albums;
                    resolve(this.fullObj);
                }

                if (errorReturnMsg) reject(errorReturnMsg); //Return error message if error
            });
        });
    }

    getPhotosInAlbum(albumId: any, limitPhotos = 25) {
        return new Promise((resolve, reject) => {
            let errorReturnMsg = '';

            this.errorObj = {}; //Reset error object

            const index = this.fullObj.data.findIndex((album: any) => album.id == albumId); //Get index of album. Loose checking due to id as string

            if (index === -1) { //Album specified not in object
                reject('noAlbum');
            } else if (this.fullObj.data[index].hasOwnProperty('photos')) { //album already retrieved
                resolve(this.fullObj.data[index].photos);
            }

            FB.api(albumId + '/?fields=photos.limit(' + limitPhotos + '){picture,images}', (response: any) => {
                if (response && response.error) { //If response exists and error
                    errorReturnMsg = 'fbError';
                    this.errorObj = response.error;
                } else if (!response || !response.hasOwnProperty('photos')) { //No photos
                    errorReturnMsg = 'noPhotos';
                } else { //No errors
                    response.photos.data.forEach((photo: any) => {
                        photo.picture_full = photo.images[0].source; //[0] is the largest image
                        delete photo.images; //Only need one full image
                    });

                    this.fullObj.data[index].photos = response.photos;
                    resolve(this.fullObj.data[index].photos);
                }

                if (errorReturnMsg) reject(errorReturnMsg); //Return error message if error
            });
        });
    }


    async getMoreAlbums() {
        let errorReturnMsg = '';

        this.errorObj = {}; //Reset error object

        if (!this.fullObj.paging.hasOwnProperty('next')) { //If there are no more albums
            throw 'noMore';
        }

        let response: any = await fetch(this.fullObj.paging.next);

        if (!response.ok) {
            errorReturnMsg = 'serverError'; //If server error
            this.errorObj = response;
        } else {
            response = await response.json();

            if (response && response.error) {
                errorReturnMsg = 'fbError';
                this.errorObj = response.error;
            } else if (!response || !response.hasOwnProperty('data')) { //If no response or data. Likely redundant due to check of next
                errorReturnMsg = 'noMore';
            } else { //No errors
                response.data.forEach((album: any) => {
                    album.cover_photo = (album.cover_photo) ? album.cover_photo.picture : ''; //All we need is picture
                });

                this.fullObj.data.push(...response.data); //Append albums
                this.fullObj.paging = response.paging; //Set paging to new values
            }
        }

        if (errorReturnMsg) throw errorReturnMsg; //Return error message if error

        return this.fullObj;
    }


    async getMorePhotosInAlbum(albumId: any) {
        let errorReturnMsg = '';

        this.errorObj = {}; //Reset error object

        const index = this.fullObj.data.findIndex((album: any) => album.id == albumId); //Get index of album. Loose checking due to id as string

        if (index === -1) { //If album doesn't exist
            throw 'noAlbum';
        } else if (!this.fullObj.data[index].photos.paging.hasOwnProperty('next')) { //If there are no more photos in specific album
            throw 'noMore';
        }

        let response: any = await fetch(this.fullObj.paging.next);

        if (!response.ok) {
            errorReturnMsg = 'serverError'; //If server error
            this.errorObj = response;
        } else {
            response = await response.json();

            if (response && response.error) { //If response exists and error
                errorReturnMsg = 'fbError';
                this.errorObj = response.error;
            } else if (!response || !response.hasOwnProperty('data')) { //If no response or data. Likely redundant due to check of album existence and next
                errorReturnMsg = 'noMore';
            } else { //No errors
                response.data.forEach((photo: any) => {
                    photo.picture_full = photo.images[0].source; //[0] is the largest image
                    delete photo.images; //Don't need the rest, only one

                });

                this.fullObj.data[index].photos.data.push(...response.data); //Append photos in album
                this.fullObj.data[index].photos.paging = response.paging; //Set paging to new values
            }
        }

        if (errorReturnMsg) throw errorReturnMsg; //Return error message if error

        return this.fullObj.data[index].photos;
    }
}

export default FbAllPhotos;