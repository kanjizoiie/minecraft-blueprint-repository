package org.marjoh.repository;

import io.quarkus.hibernate.orm.panache.PanacheRepository;
import jakarta.enterprise.context.ApplicationScoped;
import org.marjoh.entity.Block;

import java.util.List;

@ApplicationScoped
public class BlockRepository implements PanacheRepository<Block> {

    List<Block> getAllBlocks() {
        return listAll();
    }
}
