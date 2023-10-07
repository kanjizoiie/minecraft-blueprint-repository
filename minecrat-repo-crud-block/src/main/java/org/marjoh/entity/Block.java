package org.marjoh.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;

@Entity
public class Block {
  @Id
  @GeneratedValue
  private long id;

  String name;

  String description;

  String metadata;


  
  public Block setDescription(String description) {
    this.description = description;
    return this;
  }

  public String getDescription() {
    return description;
  }

  public String getName() {
    return name;
  }

  public Block setName(String name) {
    this.name = name;
    return this;
  }
}
