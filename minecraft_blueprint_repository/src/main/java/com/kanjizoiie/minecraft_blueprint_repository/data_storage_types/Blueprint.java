package com.kanjizoiie.minecraft_blueprint_repository.data_storage_types;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.validation.constraints.NotNull;

/**
 * @author Mackan
 */
@Entity
public class Blueprint {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @NotNull
    private String name;

    public Long getId() {
        return id;
    }

    public String getName() {
        return name;
    }


    protected Blueprint() {
    }

    public Blueprint(String name) {
        this.name = name;
    }
}
