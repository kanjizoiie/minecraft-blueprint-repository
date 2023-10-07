package org.marjoh.service;

import jakarta.enterprise.context.RequestScoped;
import jakarta.inject.Inject;
import org.marjoh.entity.Block;
import org.marjoh.repository.BlockRepository;

import java.util.List;

@RequestScoped
public class BlockService {

    @Inject
    BlockRepository blockRepository;

    public List<Block> getAllBlocks() {
        return blockRepository.listAll();
    }

    public Block getBlock(Long blockId) {
        return blockRepository.findById(blockId);
    }

    public Block updateBlock(Block block) {
        blockRepository.persist(block);
        return block;
    }

    public Block insertBlock(Block block) {
        blockRepository.persist(block);
        return block;
    }

    public Block deleteBlock(Block block) {
        blockRepository.delete(block);
        return block;
    }
}
