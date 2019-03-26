export const mixin = Vue.mixin({
    methods: {
        StoragePath: function(string) {
            return '/storage/image-files/'+string;
        },
        imagePrice(image) {
            let resolutions = image.resolution.split(' x ');
            return resolutions[0]*resolutions[1]/102400;
        }
    },
    filters: {
        moment: function (date) {
            return moment(date).add(5, 'hours').add(30, 'minutes').format('LLL');
        },
        inr(amount) {
            amount = String(amount);
            if (amount.indexOf('.') !== -1)
                return '₹'+amount.substring(0, amount.indexOf('.')+3);
            else
                return '₹'+amount;
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
            if (data > 1024) {
                data /= 1024;
                level = 'GB';
            }
            data = data.toString();
            return data.substring(0, data.indexOf('.')+2)+level;
        }
    }
});
