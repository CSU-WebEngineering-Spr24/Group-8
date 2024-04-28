package com.pack.server.domain;
import com.fasterxml.jackson.annotation.JsonProperty;

import lombok.Getter;
import lombok.Setter;
import java.util.List;

@Getter
@Setter
public class RocketResponse {
    @JsonProperty("height")
    private Measurement height;
    @JsonProperty("diameter")
    private Measurement diameter;
    @JsonProperty("mass")
    private Mass mass;
    @JsonProperty("first_stage")
    private Stage first_stage;
    @JsonProperty("second_stage")
    private Stage second_stage;
    @JsonProperty("engines")
    private Engines engines;
    @JsonProperty("landing_legs")
    private LandingLegs landing_legs;
    @JsonProperty("payload_weights")
    private List<PayloadWeight> payload_weights;
    @JsonProperty("flickr_images")
    private List<String> flickr_images;
    @JsonProperty("name")
    private String name;
    @JsonProperty("type")
    private String type;
    @JsonProperty("active")
    private boolean active;
    @JsonProperty("stages")
    private int stages;
    @JsonProperty("boosters")
    private int boosters;
    @JsonProperty("cost_per_launch")
    private long cost_per_launch;
    @JsonProperty("success_rate_pct")
    private double success_rate_pct;
    @JsonProperty("first_flight")
    private String first_flight;
    @JsonProperty("country")
    private String country;
    @JsonProperty("company")
    private String company;
    @JsonProperty("wikipedia")
    private String wikipedia;
    @JsonProperty("description")
    private String description;
    @JsonProperty("id")
    private String id;

    @Getter
    @Setter
    public static class Measurement {
        private double meters;
        private double feet;
    }

    @Getter
    @Setter
    public static class Mass {
        private int kg;
        private int lb;
    }

    @Getter
    @Setter
    public static class Stage {
        @JsonProperty("thrust_sea_level")
        private Thrust thrust_sea_level;
        @JsonProperty("thrust_vacuum")
        private Thrust thrust_vacuum;
        @JsonProperty("thrust")
        private Thrust thrust;
        @JsonProperty("reusable")
        private boolean reusable;
        @JsonProperty("engines")
        private int engines;
        @JsonProperty("fuel_amount_tons")
        private int fuel_amount_tons;
        @JsonProperty("burn_time_sec")
        private int burn_time_sec;
        @JsonProperty("payloads")
        private Payloads payloads;
    }

    @Getter
    @Setter
    public static class Payloads {
        private CompositeFairing composite_fairing;
        private String option1;

        @Getter
        @Setter
        public static class CompositeFairing {
            private Measurement height;
            private Measurement diameter;
        }
    }

    @Getter
    @Setter
    public static class Engines {
        private Isp isp;
        private Thrust thrust_sea_level;
        private Thrust thrust_vacuum;
        private int number;
        private String type;
        private String version;
        private String layout;
        private int engine_loss_max;
        private String propellant_1;
        private String propellant_2;
        private double thrust_to_weight;

        @Getter
        @Setter
        public static class Isp {
            private int sea_level;
            private int vacuum;
        }
    }

    @Getter
    @Setter
    public static class Thrust {
        @JsonProperty("kN")
        private int kN;

        @JsonProperty("lbf")
        private int lbf;
    }

    @Getter
    @Setter
    public static class LandingLegs {
        private int number;
        private String material;
    }

    @Getter
    @Setter
    public static class PayloadWeight {
        private String id;
        private String name;
        private int kg;
        private int lb;
    }
}

