package br.edu.ufcg.jukeboxdozenanzin.rest;

import br.edu.ufcg.jukeboxdozenanzin.entity.Artista;
import br.edu.ufcg.jukeboxdozenanzin.service.ArtistaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.security.Principal;

@RestController
@RequestMapping("/artistas")
public class ArtistaRest {

    @Autowired
    private ArtistaService artistaService;

    @RequestMapping(method = RequestMethod.POST)
    public Artista cadastraArtista(@RequestBody Artista artista) {
        Artista novoArtista = artistaService.cadastraArtista(artista);
        return novoArtista;
    }

    @RequestMapping(value = "/{id}", method = RequestMethod.PUT)
    public Artista atualizaArtista(@PathVariable Integer id, @RequestBody Artista artista) {
        return artistaService.atualizaArtista(id, artista);
    }

    @RequestMapping(method = RequestMethod.GET)
    public Iterable<Artista> listarArtistasPorNome(@RequestParam(value="nome", required = false) String nome) {
        if (nome != null) {
            return artistaService.buscarArtistasPorNome(nome);
        } else {
            return artistaService.listarArtistas();
        }
    }

    @RequestMapping(value = "/{id}", method = RequestMethod.GET)
    public Artista recuperarArtista(@PathVariable Integer id) {
        return artistaService.buscarArtista(id);
    }
}