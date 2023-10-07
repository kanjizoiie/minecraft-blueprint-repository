package org.marjoh.controllers;

import jakarta.inject.Inject;
import jakarta.transaction.Transactional;
import jakarta.ws.rs.*;
import jakarta.ws.rs.core.MediaType;

import org.marjoh.entity.Block;
import org.marjoh.service.BlockService;

import java.util.List;

@Path("/block")
public class BlockController {

    @Inject
    BlockService blockService;

    @GET
    @Produces(MediaType.APPLICATION_JSON)
    public List<Block> getBlockEndpoint() {
        return blockService.getAllBlocks();
    }

    @GET
    @Produces(MediaType.APPLICATION_JSON)
    @Path("/{blockId}")
    public Block getSpecificBlockEndpoint(
            @PathParam("blockId") @DefaultValue("0") Long blockId
    ) {
        return blockService.getBlock(blockId);
    }

    @PUT
    @Consumes(MediaType.APPLICATION_JSON)
    @Produces(MediaType.APPLICATION_JSON)
    @Transactional
    public Block updateBlockEndpoint(Block block) {
        return blockService.updateBlock(block);
    }

    @POST
    @Consumes(MediaType.APPLICATION_JSON)
    @Produces(MediaType.APPLICATION_JSON)
    @Transactional
    public Block insertBlockEndpoint(Block block) {
        return blockService.insertBlock(block);
    }

    @DELETE
    @Consumes(MediaType.APPLICATION_JSON)
    @Produces(MediaType.APPLICATION_JSON)
    @Transactional

    public Block deleteBlockEndpoint(
            Block block
    ) {
        return blockService.deleteBlock(block);
    }

}
