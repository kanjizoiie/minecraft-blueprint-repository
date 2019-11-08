package com.kanjizoiie.minecraft_blueprint_repository.data_storage_types;

/**
 *
 * @author Mackan
 */
public class Blueprint {

    private final String name;
    private final int width;
    private final int height;
    private final int depth;

    public String getName() {
        return name;
    }

    public int getWidth() {
        return width;
    }

    public int getHeight() {
        return height;
    }

    public int getDepth() {
        return depth;
    }

    private Block[][][] blueprint_data;

    public Blueprint(String name, int width, int height, int depth) {
        this.width = width;
        this.height = height;
        this.depth = depth;
        this.name = name;

        // Create an 3d array containing the blocks that is required for the system.
        blueprint_data = new Block[width][height][depth];
    }

    public void setBlock(int x, int y, int z, Block block) {
        blueprint_data[x][y][z] = block;
    }

    public Block getBlock(int x, int y, int z) {
        return blueprint_data[x][y][z];
    }

    @Override
    public String toString() {
        for (Block[][] x : this.blueprint_data) {
            for (Block[] y : x) {
                for (Block z : y) {

                }
            }
        }
        return "";
    }
}
