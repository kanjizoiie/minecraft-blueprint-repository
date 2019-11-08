package com.kanjizoiie.minecraft_blueprint_repository.controllers;

import com.kanjizoiie.minecraft_blueprint_repository.data_storage_types.Blueprint;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

/**
 *
 * @author Mackan
 */
@RestController
public class BlockController {

    private static final String PATH = "/block";

    @RequestMapping(value = PATH, method = RequestMethod.PUT)
    @ResponseStatus(HttpStatus.OK)
    public String createBlock() {
        return "CREATED BLOCK";
    }

    @RequestMapping(value = PATH, method = RequestMethod.DELETE)
    @ResponseStatus(HttpStatus.OK)
    public String removeBlock() {
        return "REMOVED BLUEPRINT";
    }

    @RequestMapping(value = PATH, method = RequestMethod.GET)
    @ResponseStatus(HttpStatus.OK)
    public String readBlock() {
        return "READ BLUEPRINT";
    }

}
