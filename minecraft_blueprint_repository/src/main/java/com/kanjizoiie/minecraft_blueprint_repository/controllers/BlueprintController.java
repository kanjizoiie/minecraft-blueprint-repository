package com.kanjizoiie.minecraft_blueprint_repository.controllers;

import com.kanjizoiie.minecraft_blueprint_repository.data_storage_types.Blueprint;
import com.kanjizoiie.minecraft_blueprint_repository.repositories.BlueprintRepository;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import java.util.NoSuchElementException;

/**
 *
 * @author Mackan
 */
@RestController
public class BlueprintController {
    private static final String PATH = "/blueprint";
    private final BlueprintRepository repository;

    public BlueprintController(BlueprintRepository repository) {
        this.repository = repository;
    }

    @RequestMapping(value = PATH, method = RequestMethod.POST, consumes = MediaType.APPLICATION_JSON_UTF8_VALUE)
    @ResponseStatus(HttpStatus.OK)
    public Blueprint createBlueprint(@RequestBody Blueprint response) {
        return repository.save(response);
    }
    
    
    @RequestMapping(value = PATH, method = RequestMethod.PUT, consumes = MediaType.APPLICATION_JSON_UTF8_VALUE)
    @ResponseStatus(HttpStatus.OK)
    public Blueprint editBlueprint(@RequestBody Blueprint response) {
        return repository.save(response);
    }

    @RequestMapping(value = PATH, method = RequestMethod.DELETE, consumes = MediaType.APPLICATION_JSON_UTF8_VALUE)
    @ResponseStatus(HttpStatus.OK)
    public void removeBlueprint(@RequestBody Blueprint response) {
        repository.delete(response);
    }

    @RequestMapping(value = PATH, method = RequestMethod.GET)
    @ResponseStatus(HttpStatus.OK)
    public Blueprint readBlueprint(@RequestParam Long id) {
        try {
            return repository.findById(id).orElseThrow();
        } catch (NoSuchElementException exception) {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND);
        }
    }
}
