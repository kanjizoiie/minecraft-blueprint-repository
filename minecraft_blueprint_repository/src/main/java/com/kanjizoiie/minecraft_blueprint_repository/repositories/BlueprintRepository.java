package com.kanjizoiie.minecraft_blueprint_repository.repositories;

import java.util.Optional;

import com.kanjizoiie.minecraft_blueprint_repository.data_storage_types.Blueprint;
import org.springframework.data.repository.CrudRepository;

public interface BlueprintRepository extends CrudRepository<Blueprint, Long> {}
