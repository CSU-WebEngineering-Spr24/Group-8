package com.pack.server.domain;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class StarlinkResponse {
    private SpaceTrack spaceTrack;
    private String launch;
    private String version;
    private double heightKm;
    private double latitude;
    private double longitude;
    private double velocityKms;
    private String id;

    @Getter
    @Setter
    public static class SpaceTrack {
        private String CCSDS_OMM_VERS;
        private String COMMENT;
        private String CREATION_DATE;
        private String ORIGINATOR;
        private String OBJECT_NAME;
        private String OBJECT_ID;
        private String CENTER_NAME;
        private String REF_FRAME;
        private String TIME_SYSTEM;
        private String MEAN_ELEMENT_THEORY;
        private String EPOCH;
        private double MEAN_MOTION;
        private double ECCENTRICITY;
        private double INCLINATION;
        private double RA_OF_ASC_NODE;
        private double ARG_OF_PERICENTER;
        private double MEAN_ANOMALY;
        private int EPHEMERIS_TYPE;
        private String CLASSIFICATION_TYPE;
        private int NORAD_CAT_ID;
        private int ELEMENT_SET_NO;
        private int REV_AT_EPOCH;
        private double BSTAR;
        private double MEAN_MOTION_DOT;
        private double MEAN_MOTION_DDOT;
        private double SEMIMAJOR_AXIS;
        private double PERIOD;
        private double APOAPSIS;
        private double PERIAPSIS;
        private String OBJECT_TYPE;
        private String RCS_SIZE;
        private String COUNTRY_CODE;
        private String LAUNCH_DATE;
        private String SITE;
        private String DECAY_DATE;
        private int DECAYED;
        private long FILE;
        private long GP_ID;
        private String TLE_LINE0;
        private String TLE_LINE1;
        private String TLE_LINE2;
    }
}
