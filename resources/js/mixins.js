export const mixin = Vue.mixin({
    methods: {
        StoragePath: function(string) {
            return '/storage/image-files/'+string;
        },
        function (b64Data, contentType, sliceSize) {
                contentType = contentType || '';
                sliceSize = sliceSize || 512;

                var byteCharacters = atob(b64Data);
                var byteArrays = [];

                for (var offset = 0; offset < byteCharacters.length; offset += sliceSize) {
                    var slice = byteCharacters.slice(offset, offset + sliceSize);

                    var byteNumbers = new Array(slice.length);
                    for (var i = 0; i < slice.length; i++) {
                        byteNumbers[i] = slice.charCodeAt(i);
                    }

                    var byteArray = new Uint8Array(byteNumbers);

                    byteArrays.push(byteArray);
                }

              var blob = new Blob(byteArrays, {type: contentType});
              return blob;
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
