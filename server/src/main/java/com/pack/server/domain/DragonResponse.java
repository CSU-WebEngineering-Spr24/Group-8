package com.pack.server.domain;

import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
public class DragonResponse {
    private HeatShield heatShield;
    private PayloadMass launchPayloadMass;
    private PayloadVolume launchPayloadVol;
    private PayloadMass returnPayloadMass;
    private PayloadVolume returnPayloadVol;
    private PressurizedCapsule pressurizedCapsule;
    private Trunk trunk;
    private Measurement heightWTrunk;
    private Measurement diameter;
    private String firstFlight;
    private List<String> flickrImages;
    private String name;
    private String type;
    private boolean active;
    private int crewCapacity;
    private int sidewallAngleDeg;
    private int orbitDurationYr;
    private int dryMassKg;
    private int dryMassLb;
    private List<Thruster> thrusters;
    private String wikipedia;
    private String description;
    private String id;
}

@Getter
@Setter
class HeatShield {
    private String material;
    private double sizeMeters;
    private int tempDegrees;
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
    private int cubicMeters;
    private int cubicFeet;
}

@Getter
@Setter
class PressurizedCapsule {
    private PayloadVolume payloadVolume;
}

@Getter
@Setter
class Trunk {
    private PayloadVolume trunkVolume;
    private Cargo cargo;
}

@Getter
@Setter
class Cargo {
    private int solarArray;
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
    private String fuel1;
    private String fuel2;
    private int isp;
    private Thrust thrust;
}

@Getter
@Setter
class Thrust {
    private double kN;
    private double lbf;
}
