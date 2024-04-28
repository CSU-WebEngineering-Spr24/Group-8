package com.pack.server.domain;

import lombok.Getter;
import lombok.Setter;

import java.util.List;

import com.fasterxml.jackson.annotation.JsonProperty;

@Getter
@Setter
public class DragonResponse {
    @JsonProperty("heat_shield")
    private HeatShield heatShield;
    @JsonProperty("launch_payload_mass")
    private PayloadMass launchPayloadMass;
    @JsonProperty("launch_payload_vol")
    private PayloadVolume launchPayloadVol;
    @JsonProperty("return_payload_mass")
    private PayloadMass returnPayloadMass;
    @JsonProperty("return_payload_vol")
    private PayloadVolume returnPayloadVol;
    @JsonProperty("pressurized_capsule")
    private PressurizedCapsule pressurizedCapsule;
    @JsonProperty("trunk")
    private Trunk trunk;
    @JsonProperty("height_w_trunk")
    private Measurement heightWTrunk;
    @JsonProperty("diameter")
    private Measurement diameter;
    @JsonProperty("first_flight")
    private String firstFlight;
    @JsonProperty("flickr_images")
    private List<String> flickrImages;
    @JsonProperty("name")
    private String name;
    @JsonProperty("type")
    private String type;
    @JsonProperty("active")
    private boolean active;
    @JsonProperty("crew_capacity")
    private int crewCapacity;
    @JsonProperty("sidewall_angle_deg")
    private int sidewallAngleDeg;
    @JsonProperty("orbit_duration_yr")
    private int orbitDurationYr;
    @JsonProperty("dry_mass_kg")
    private int dryMassKg;
    @JsonProperty("dry_mass_lb")
    private int dryMassLb;
    
    private List<Thruster> thrusters;
    
    private String wikipedia;
    
    private String description;
    
    private String id;
}

@Getter
@Setter
class HeatShield {
    @JsonProperty("material")
    private String material;
    @JsonProperty("size_meters")
    private double sizeMeters;
    @JsonProperty("temp_degrees")
    private int tempDegrees;
    @JsonProperty("dev_partner")
    private String devPartner;
}

@Getter
@Setter
class PayloadMass {
    private int kg;
    private int lb;
}

@Getter
@Setter
class PayloadVolume {
    @JsonProperty("cubic_meters")
    private int cubicMeters;
    @JsonProperty("cubic_feet")
    private int cubicFeet;
}

@Getter
@Setter
class PressurizedCapsule {
    @JsonProperty("payload_volume")
    private PayloadVolume payloadVolume;
}

@Getter
@Setter
class Trunk {
    @JsonProperty("trunk_volume")
    private PayloadVolume trunkVolume;
    @JsonProperty("cargo")
    private Cargo cargo;
}

@Getter
@Setter
class Cargo {
    @JsonProperty("solar_array")
    private int solarArray;
    @JsonProperty("unpressurized_cargo")
    private boolean unpressurizedCargo;
}

@Getter
@Setter
class Measurement {
    private double meters;
    private double feet;
}

@Getter
@Setter
class Thruster {
    private String type;
    private int amount;
    private int pods;
    private String fuel_1;
    private String fuel_2;
    private int isp;
    private Thrust thrust;
}

@Getter
@Setter
class Thrust {
    @JsonProperty("kN")
    private double kN;
    private double lbf;
}
