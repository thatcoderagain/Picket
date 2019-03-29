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
