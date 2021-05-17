package com.kanjizoiie.minecraft_blueprint_repository.data_storage_types;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.validation.constraints.NotNull;
import java.util.Objects;

/**
 *
 * @author Mackan
 */
@Entity
public class Blueprint {

    @Id
    @GeneratedValue(strategy= GenerationType.AUTO)
    private Long id;

    @NotNull
    private String name;

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Long getId() {
        return id;
    }


    protected Blueprint() {
    }

    public Blueprint(String name) {
        this.name = name;
    }
}
