package org.marjoh.repository;

import io.quarkus.hibernate.orm.panache.PanacheRepository;
import jakarta.enterprise.context.ApplicationScoped;
import org.marjoh.entity.Block;

@ApplicationScoped
public class BlockRepository implements PanacheRepository<Block> {

    java.util.List<Block> getAllBlocks() {
        return listAll();
    }
}
