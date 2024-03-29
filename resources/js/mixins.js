import moment from 'moment';

export const mixin = Vue.mixin({
    methods: {
        StorageWebImages: function(string) {
            return '/storage/web-images/'+string;
        },
        StorageImageFiles: function(string) {
            return '/storage/images/files/'+string;
        },
        StorageImageWatermarks: function(string) {
            return '/storage/images/watermarks/'+string;
        },
        StorageImageThumbnails: function(string) {
            return '/storage/images/thumbnails/'+string;
        },
        StorageNoImageAvailable: function(string) {
            return string != null ? '/storage/images/profiles/'+string : '/storage/web-images/No_Image_Available.jpg';
        },
        StorageImageProfiles: function(string) {
            return string != null ? '/storage/images/profiles/'+string : '/storage/web-images/camera-sketch.jpg';
        },
        StorageCategoryImage: function(string) {
            return '/storage/categories/'+string.replace(' ','-').replace('/','-')+'.jpg';
        },
        imagePrice(image) {
            let resolutions = image.resolution.split(' x ');
            return resolutions[0]*resolutions[1]/102400;
        },
        hideNull: function (string) {
            return string != null ? string : '';
        },
        printOrDefault:function (string, alt) {
            return string != null ? string : alt;
        },
        randomString: function (length) {
            return Math.random().toString(36).substring(2, length) + Math.random().toString(36).substring(2, 15)
        }
    },
    filters: {
        moment: (date) => {
            return moment(date).add(5, 'hours').add(30, 'minutes').format('LLL');
        },
        inr: (amount) => {
            amount = String(amount);
            return (amount.indexOf('.') !== -1) ? '₹'+amount.substring(0, amount.indexOf('.')+3) : '₹'+amount;
        },
        age: (dateString) => {
            var today = new Date();
            var birthDate = new Date(dateString);
            var age = today.getFullYear() - birthDate.getFullYear();
            var m = today.getMonth() - birthDate.getMonth();
            if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
                age--;
            }
            return age;
        },
        fsize: function (data) {
            data = parseInt(data);
            let level = 'Byte';
            if (data > 1024) {
                data /= 1024;
                level = 'KB';
            }
            if (data > 1024) {
                data /= 1024;
                level = 'MB';
            }
            data = data.toString();
            return data.substring(0, data.indexOf('.')+2)+level;
        }
    }
});
