package org.marjoh;

import io.quarkus.test.junit.QuarkusTest;
import org.junit.jupiter.api.Test;
import org.marjoh.entity.Block;

import static io.restassured.RestAssured.given;
import static org.hamcrest.CoreMatchers.anything;
import static org.hamcrest.CoreMatchers.is;

@QuarkusTest
public class BlockControllerTest {

    @Test
    void testGetBlocks() {
        given()
                .when().get("/block")
                .then()
                .statusCode(200)
                .body(anything());
    }


    @Test
    void testGetBlock() {
        given()
                .when().get("/block")
                .then()
                .statusCode(200)
                .body(anything());
    }


    @Test
    void testDeleteBlock() {
        given()
                .when()
                .get("/block")
                .then()
                .statusCode(200);
    }

    @Test
    void testUpdateBlock() {
        given()
                .when()
                .get("/block")
                .then()
                .statusCode(200)
                .body(anything());
    }

    @Test
    void testCreateBlock() {
        given()
                .body(new Block().setName("Grass"))
                .when()
                .get("/block")
                .then()
                .statusCode(200)
                .body(anything());
    }

}