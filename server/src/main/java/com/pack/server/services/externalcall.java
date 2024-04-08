package com.pack.server.services;

import org.springframework.http.ResponseEntity;
import org.springframework.web.client.RestTemplate;

import java.util.Arrays;
import java.util.List;

// Dragon data model class
import lombok.Getter;
import lombok.Setter;
import java.util.*;

@Getter
@Setter
class Dragon {
    private String id;
    private String name;
    private String type;
    private String active;
    private String[] flickr_images;
    private String wikipedia;
    private String description;

    // Getters and setters
}

// Service class to fetch data from SpaceX API
public class externalcall {
    private RestTemplate restTemplate;

    public externalcall() {
        this.restTemplate = new RestTemplate();
    }

    public ResponseEntity<?> getSpaceXDragons() {
        String baseUrl = "https://api.spacexdata.com/v4/dragons";

        try {
            Dragon[] dragonsArray = restTemplate.getForObject(baseUrl, Dragon[].class);
            List<Dragon> dragonsList = Arrays.asList(dragonsArray);
            return ResponseEntity.ok(dragonsList);
        } catch (Exception e) {
            e.printStackTrace();
            return ResponseEntity.badRequest().body("Failed to fetch SpaceX Dragons data");
        }
    }
}
