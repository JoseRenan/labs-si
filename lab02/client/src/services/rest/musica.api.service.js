(function () {
    'use strict';
    
    app.service('Musica', function (API, $http) {

        this.url = API.getResourceUrl('/musicas');

        this.get = (id) => {
            if (id) {
                return $http.get(`${this.url}/${id}`)
                    .then(API.successCallback)
                    .catch(API.errorCallback);
            }
        }

        this.query = (nome) => {
            let data = {params: {}};
            if (nome) {
                data.params.nome = nome;
            }
            return $http.get(this.url, data)
                .then(API.successCallback)
                .catch(API.errorCallback);
        }

        this.post = (musica) => {
            return $http.post(this.url, musica)
                .then(API.successCallback)
                .catch(API.errorCallback);
        }
    });
})();