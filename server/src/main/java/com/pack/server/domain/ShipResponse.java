package com.pack.server.domain;

import com.fasterxml.jackson.annotation.JsonProperty;

import lombok.Getter;
import lombok.Setter;
import java.util.List;

/* 
 * 
 * {
    "last_ais_update": null,
    "legacy_id": null,
    "model": null,
    "type": "Cargo",
    "roles": [
        "Fairing Recovery",
        "Support Ship"
    ],
    "imo": 9529695,
    "mmsi": 368456000,
    "abs": 1220625,
    "class": 9195228,
    "mass_kg": 2719740,
    "mass_lbs": 5996000,
    "year_built": 2009,
    "home_port": "Port Canaveral",
    "status": null,
    "speed_kn": null,
    "course_deg": null,
    "latitude": null,
    "longitude": null,
    "link": "https://www.marinetraffic.com/en/ais/details/ships/shipid:454731/mmsi:368456000/imo:9529695/vessel:BOB",
    "image": "https://i.imgur.com/Wr1slIc.png",
    "name": "Bob",
    "active": true,
    "launches": [
        "618faad2563d69573ed8ca9d",
        "6161c94c6db1a92bfba85349",
        "5fe3afc1b3467846b3242164",
        "6243ada6af52800c6e919253"
    ],
    "id": "618fad7e563d69573ed8caa9"
}
 */

@Getter
@Setter
public class ShipResponse {
    @JsonProperty("last_ais_update")
    private String last_ais_update;
    @JsonProperty("legacy_id")
    private String legacy_id;
    @JsonProperty("model")
    private String model;
    @JsonProperty("type")
    private String type;
    @JsonProperty("roles")
    private List<String> roles;
    @JsonProperty("imo")
    private int imo;
    @JsonProperty("mmsi")
    private int mmsi;
    @JsonProperty("abs")
    private int abs;
    @JsonProperty("class")
    private int classShip;
    @JsonProperty("mass_kg")
    private int mass_kg;
    @JsonProperty("mass_lbs")
    private int mass_lbs;
    @JsonProperty("year_built")
    private int year_built;
    @JsonProperty("home_port")
    private String home_port;
    @JsonProperty("status")
    private String status;
    @JsonProperty("speed_kn")
    private int speed_kn;
    @JsonProperty("course_deg")
    private int course_deg;
    @JsonProperty("latitude")
    private double latitude;
    @JsonProperty("longitude")
    private double longitude;
    @JsonProperty("link")
    private String link;
    @JsonProperty("image")
    private String image;
    @JsonProperty("name")
    private String name;
    @JsonProperty("active")
    private boolean active;
    @JsonProperty("launches")
    private List<String> launches;
    @JsonProperty("id")
    private String id;
}