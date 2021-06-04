package com.kanjizoiie.minecraft_blueprint_repository.repositories;

import com.kanjizoiie.minecraft_blueprint_repository.data_storage_types.Blueprint;
import org.springframework.data.repository.CrudRepository;

public interface BlockRepository extends CrudRepository<Blueprint, Long> {}
