package com.pack.server.domain;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class StarlinkResponse {
    private String version;

    @JsonProperty("launch")
    private String launchId;

    private Double longitude;
    private Double latitude;
    private Double heightKm;
    private Double velocityKms;

    @JsonProperty("spaceTrack")
    private SpaceTrack spaceTrack;

    @Getter
    @Setter
    public static class SpaceTrack {
        @JsonProperty("CCSDS_OMM_VERS")
        private String ccsdsOmmVers;
        @JsonProperty("COMMENT")
        private String comment;
        @JsonProperty("CREATION_DATE")
        private String creationDate;
        @JsonProperty("ORIGINATOR")
        private String originator;
        @JsonProperty("OBJECT_NAME")
        private String objectName;
        @JsonProperty("OBJECT_ID")
        private String objectId;
        @JsonProperty("CENTER_NAME")
        private String centerName;
        @JsonProperty("REF_FRAME")
        private String refFrame;
        @JsonProperty("TIME_SYSTEM")
        private String timeSystem;
        @JsonProperty("MEAN_ELEMENT_THEORY")
        private String meanElementTheory;
        @JsonProperty("EPOCH")
        private String epoch;
        @JsonProperty("MEAN_MOTION")
        private Double meanMotion;
        @JsonProperty("ECCENTRICITY")
        private Double eccentricity;
        @JsonProperty("INCLINATION")
        private Double inclination;
        @JsonProperty("RA_OF_ASC_NODE")
        private Double raOfAscNode;
        @JsonProperty("ARG_OF_PERICENTER")
        private Double argOfPericenter;
        @JsonProperty("MEAN_ANOMALY")
        private Double meanAnomaly;
        @JsonProperty("EPHEMERIS_TYPE")
        private Integer ephemerisType;
        @JsonProperty("CLASSIFICATION_TYPE")
        private String classificationType;
        @JsonProperty("NORAD_CAT_ID")
        private Integer noradCatId;
        @JsonProperty("ELEMENT_SET_NO")
        private Integer elementSetNo;
        @JsonProperty("REV_AT_EPOCH")
        private Integer revAtEpoch;
        @JsonProperty("BSTAR")
        private Double bstar;
        @JsonProperty("MEAN_MOTION_DOT")
        private Double meanMotionDot;
        @JsonProperty("MEAN_MOTION_DDOT")
        private Double meanMotionDdot;
        @JsonProperty("SEMIMAJOR_AXIS")
        private Double semimajorAxis;
        @JsonProperty("PERIOD")
        private Double period;
        @JsonProperty("APOAPSIS")
        private Double apoapsis;
        @JsonProperty("PERIAPSIS")
        private Double periapsis;
        @JsonProperty("OBJECT_TYPE")
        private String objectType;
        @JsonProperty("RCS_SIZE")
        private String rcsSize;
        @JsonProperty("COUNTRY_CODE")
        private String countryCode;
        @JsonProperty("LAUNCH_DATE")
        private String launchDate;
        @JsonProperty("SITE")
        private String site;
        @JsonProperty("DECAY_DATE")
        private String decayDate;
        @JsonProperty("DECAYED")
        private Integer decayed;
        @JsonProperty("FILE")
        private Long file;
        @JsonProperty("GP_ID")
        private Long gpId;
        @JsonProperty("TLE_LINE0")
        private String tleLine0;
        @JsonProperty("TLE_LINE1")
        private String tleLine1;
        @JsonProperty("TLE_LINE2")
        private String tleLine2;
    }
}
