package com.pack.server.domain;
import com.fasterxml.jackson.annotation.JsonProperty;

import lombok.Getter;
import lombok.Setter;
import java.util.List;


/* {
    "images": {
        "large": [
            "https://i.imgur.com/7uXe1Kv.png"
        ]
    },
    "name": "VAFB SLC 3W",
    "full_name": "Vandenberg Space Force Base Space Launch Complex 3W",
    "locality": "Vandenberg Space Force Base",
    "region": "California",
    "latitude": 34.6440904,
    "longitude": -120.5931438,
    "launch_attempts": 0,
    "launch_successes": 0,
    "rockets": [
        "5e9d0d95eda69955f709d1eb"
    ],
    "timezone": "America/Los_Angeles",
    "launches": [],
    "status": "retired",
    "details": "SpaceX's original west coast launch pad for Falcon 1. It was used in a static fire test but was never employed for a launch, and was abandoned due to range scheduling conflicts arising from overflying other active pads.",
    "id": "5e9e4501f5090910d4566f83"
} */

@Getter
@Setter
public class LaunchPadsResponse{

    @JsonProperty("images")
    private Images images;
    
    @JsonProperty("name")
    private String name;
    
    @JsonProperty("full_name")
    private String fullName;
    
    @JsonProperty("status")
    private String status;
    
    @JsonProperty("type")
    private String type;
    
    @JsonProperty("locality")
    private String locality;
    
    @JsonProperty("region")
    private String region;
    
    @JsonProperty("latitude")
    private Double latitude;
    
    @JsonProperty("longitude")
    private Double longitude;
    
    @JsonProperty("launch_attempts")
    private Integer launchAttempts;
    
    @JsonProperty("launch_successes")
    private Integer launchSuccesses;
    
    @JsonProperty("rockets")
    private List<String> rockets;
    
    @JsonProperty("timezone")
    private String timezone;
    
    @JsonProperty("launches")
    private List<String> launches;
    
    @JsonProperty("details")
    private String details;
    
    @JsonProperty("id")
    private String id;

    @Getter
    @Setter
    public static class Images {
        @JsonProperty("large")
        private List<String> largeImages;
    }

}
