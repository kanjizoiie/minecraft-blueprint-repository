/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.kanjizoiie.minecraft_blueprint_repository.data_storage_types;

import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.validation.constraints.NotNull;

/**
 *
 * @author Mackan
 */
public class Block {
    @Id
    @GeneratedValue(strategy= GenerationType.AUTO)
    private Long id;

    @NotNull
    private String name;

    public Long getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getUnique_name() {
        return unique_name;
    }

    public void setUnique_name(String unique_name) {
        this.unique_name = unique_name;
    }

    private String unique_name;

    protected Block() {}

    public Block(Long id, String name, String unique_name) {
        this.id = id;
        this.name = name;
        this.unique_name = unique_name;
    }

    @Override
    public String toString() {
        return "Hello!";
    }

}
