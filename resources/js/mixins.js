export const mixin = Vue.mixin({
    methods: {
        StoragePath: function(string) {
            return '/storage/image-files/'+string;
        }
    },
    filters: {
        moment: function (date) {
            return moment(date).add(5, 'hours').add(30, 'minutes').format('LLL');
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
