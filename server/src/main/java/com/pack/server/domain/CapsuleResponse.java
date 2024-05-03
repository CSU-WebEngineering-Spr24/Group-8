package com.pack.server.domain;


import lombok.Getter;
import lombok.Setter;

import java.util.List;
/* 
 * 
 * {
    "reuse_count": 0,
    "water_landings": 1,
    "land_landings": 0,
    "last_update": "Hanging in atrium at SpaceX HQ in Hawthorne ",
    "launches": [
        "5eb87cdeffd86e000604b330"
    ],
    "serial": "C101",
    "status": "retired",
    "type": "Dragon 1.0",
    "id": "5e9e2c5bf35918ed873b2664"
}
 * 
 */

import com.fasterxml.jackson.annotation.JsonProperty;

@Getter
@Setter
 public class CapsuleResponse {

    @JsonProperty("reuse_count")
    private Integer reuseCount;
    @JsonProperty("water_landings")
    private Integer waterLandings;
    @JsonProperty("land_landings")
    private Integer landLandings;
    @JsonProperty("last_update")
    private String lastUpdate;
    @JsonProperty("launches")
    private List<String> launches;
    @JsonProperty("serial")
    private String serial;
    @JsonProperty("status")
    private String status;
    @JsonProperty("type")
    private String type;
    @JsonProperty("id")
    private String id;
    
}

