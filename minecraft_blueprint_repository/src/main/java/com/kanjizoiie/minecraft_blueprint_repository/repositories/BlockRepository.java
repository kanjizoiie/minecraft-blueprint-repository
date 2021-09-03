package com.kanjizoiie.minecraft_blueprint_repository.repositories;

import com.kanjizoiie.minecraft_blueprint_repository.data_storage_types.Block;
import org.springframework.data.repository.CrudRepository;

public interface BlockRepository extends CrudRepository<Block, Long> {}
