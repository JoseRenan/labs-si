(function () {
    'use strict';
    
    app.controller('playlistDetalhesController', function (playlist, ArtistaService, PlaylistService, NotificationService) {
        
        this.playlist = playlist;

        let getMusicas = () => {
            let artistas = ArtistaService.artistas;
            let musicas = [];
            for (let i in artistas) {
                let albums = artistas[i].albums;
                for (let j in albums) {
                    let musicasCopia = angular.copy(albums[j].musicas);
                    musicas = musicas.concat(musicasCopia);
                }
            }
            return musicas;
        }

        this.musicas = getMusicas();

        this.removerMusica = (musica) => {
            let index = this.playlist.musicas.indexOf(musica);
            if (index > -1) {
                this.playlist.musicas.splice(index, 1);
            }
        }

        this.adicionarMusica = (musica) => {
            PlaylistService.adicionaMusicaPlaylist(musica, this.playlist, () => {
                NotificationService.success(`Adicionada com sucesso`);
            }, (mensagem) => {
                NotificationService.error(`Erro ao adicionar. ${mensagem}`);
            });
        }
    });
})();