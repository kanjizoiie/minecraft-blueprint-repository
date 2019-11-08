package com.kanjizoiie.minecraft_blueprint_repository.controllers;

import com.kanjizoiie.minecraft_blueprint_repository.data_storage_types.Blueprint;
import com.kanjizoiie.minecraft_blueprint_repository.responses.BlueprintResponse;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

/**
 *
 * @author Mackan
 */
@RestController
public class BlueprintController {

    private static final String PATH = "/blueprint";

    @RequestMapping(value = PATH, method = RequestMethod.POST)
    @ResponseStatus(HttpStatus.OK)
    public String createBlueprint(@RequestBody BlueprintResponse response) {
        Blueprint bp = response;
        return bp.getName();
    }
    
    
    @RequestMapping(value = PATH, method = RequestMethod.PUT)
    @ResponseStatus(HttpStatus.OK)
    public String editBlueprint(@RequestBody BlueprintResponse response) {
        Blueprint bp = response;
        return bp.getName();
    }

    @RequestMapping(value = PATH, method = RequestMethod.DELETE)
    @ResponseStatus(HttpStatus.OK)
    public String removeBlueprint() {
        return "REMOVED BLUEPRINT";
    }

    @RequestMapping(value = PATH, method = RequestMethod.GET)
    @ResponseStatus(HttpStatus.OK)
    public BlueprintResponse readBlueprint() {
        BlueprintResponse bp = new BlueprintResponse("testingblueprint", 0, 0, 0);
        return bp;
    }
}
