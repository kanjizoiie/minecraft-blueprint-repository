/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.kanjizoiie.minecraft_blueprint_repository.requests;

import com.kanjizoiie.minecraft_blueprint_repository.data_storage_types.Blueprint;

/**
 *
 * @author Mackan
 */
public class BlueprintRequest extends Blueprint {
    BlueprintRequest(String name, int width, int height, int depth) {
        super(name, width, height, depth);
    }
}
