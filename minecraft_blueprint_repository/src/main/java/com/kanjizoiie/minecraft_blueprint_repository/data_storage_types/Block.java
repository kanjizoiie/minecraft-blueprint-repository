/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.kanjizoiie.minecraft_blueprint_repository.data_storage_types;

/**
 *
 * @author Mackan
 */
public class Block {

    private final int id;
    private final String name;
    private final String unique_name;

    public Block() {
        this.id = 0;
        this.name = null;
        this.unique_name = null;
    }

    public Block(int id, String name, String unique_name) {
        this.id = id;
        this.name = name;
        this.unique_name = unique_name;
    }

    @Override
    public String toString() {
        return "Hello!";
    }

}
