package com.pack.server.domain;
import com.fasterxml.jackson.annotation.JsonProperty;

import lombok.Getter;
import lombok.Setter;
import java.util.List;


/* {
    "fairings": {
        "reused": false,
        "recovery_attempt": false,
        "recovered": false,
        "ships": []
    },
    "links": {
        "patch": {
            "small": "https://images2.imgbox.com/6c/cb/na1tzhHs_o.png",
            "large": "https://images2.imgbox.com/4a/80/k1oAkY0k_o.png"
        },
        "reddit": {
            "campaign": null,
            "launch": null,
            "media": null,
            "recovery": null
        },
        "flickr": {
            "small": [],
            "original": []
        },
        "presskit": null,
        "webcast": "https://www.youtube.com/watch?v=v0w9p3U8860",
        "youtube_id": "v0w9p3U8860",
        "article": "http://www.spacex.com/news/2013/02/11/falcon-1-flight-3-mission-summary",
        "wikipedia": "https://en.wikipedia.org/wiki/Trailblazer_(satellite)"
    },
    "static_fire_date_utc": null,
    "static_fire_date_unix": null,
    "net": false,
    "window": 0,
    "rocket": "5e9d0d95eda69955f709d1eb",
    "success": false,
    "failures": [
        {
            "time": 140,
            "altitude": 35,
            "reason": "residual stage-1 thrust led to collision between stage 1 and stage 2"
        }
    ],
    "details": "Residual stage 1 thrust led to collision between stage 1 and stage 2",
    "crew": [],
    "ships": [],
    "capsules": [],
    "payloads": [
        "5eb0e4b6b6c3bb0006eeb1e3",
        "5eb0e4b6b6c3bb0006eeb1e4"
    ],
    "launchpad": "5e9e4502f5090995de566f86",
    "flight_number": 3,
    "name": "Trailblazer",
    "date_utc": "2008-08-03T03:34:00.000Z",
    "date_unix": 1217734440,
    "date_local": "2008-08-03T15:34:00+12:00",
    "date_precision": "hour",
    "upcoming": false,
    "cores": [
        {
            "core": "5e9e289ef3591814873b2625",
            "flight": 1,
            "gridfins": false,
            "legs": false,
            "reused": false,
            "landing_attempt": false,
            "landing_success": null,
            "landing_type": null,
            "landpad": null
        }
    ],
    "auto_update": true,
    "tbd": false,
    "launch_library_id": null,
    "id": "5eb87cdbffd86e000604b32c"
} */


import java.util.List;

@Getter
@Setter
public class LaunchResponse {
    @JsonProperty("fairings")
    private Fairings fairings;
    @JsonProperty("links")
    private Links links;
    @JsonProperty("static_fire_date_utc")
    private String staticFireDateUtc;
    @JsonProperty("static_fire_date_unix")
    private Long staticFireDateUnix;
    @JsonProperty("net")
    private Boolean net;
    @JsonProperty("window")
    private Integer window;
    @JsonProperty("rocket")
    private String rocket;
    @JsonProperty("success")
    private Boolean success;
    @JsonProperty("failures")
    private List<Failure> failures;
    @JsonProperty("details")
    private String details;
    @JsonProperty("crew")
    private List<String> crew;
    @JsonProperty("ships")
    private List<String> ships;
    @JsonProperty("capsules")
    private List<String> capsules;
    @JsonProperty("payloads")
    private List<String> payloads;
    @JsonProperty("launchpad")
    private String launchpad;
    @JsonProperty("flight_number")
    private Integer flightNumber;
    @JsonProperty("name")
    private String name;
    @JsonProperty("date_utc")
    private String dateUtc;
    @JsonProperty("date_unix")
    private Long dateUnix;
    @JsonProperty("date_local")
    private String dateLocal;
    @JsonProperty("date_precision")
    private String datePrecision;
    @JsonProperty("upcoming")
    private Boolean upcoming;
    @JsonProperty("cores")
    private List<Core> cores;
    @JsonProperty("auto_update")
    private Boolean autoUpdate;
    @JsonProperty("tbd")
    private Boolean tbd;
    @JsonProperty("launch_library_id")
    private String launchLibraryId;
    @JsonProperty("id")
    private String id;

    @Getter
    @Setter
    public static class Fairings {
        @JsonProperty("reused")
        private Boolean reused;
        @JsonProperty("recovery_attempt")
        private Boolean recoveryAttempt;
        @JsonProperty("recovered")
        private Boolean recovered;
        @JsonProperty("ships")
        private List<String> ships;
    }

    @Getter
    @Setter
    public static class Links {
        @JsonProperty("patch")
        private Patch patch;
        @JsonProperty("reddit")
        private Reddit reddit;
        @JsonProperty("flickr")
        private Flickr flickr;
        @JsonProperty("presskit")
        private String presskit;
        @JsonProperty("webcast")
        private String webcast;
        @JsonProperty("youtube_id")
        private String youtubeId;
        @JsonProperty("article")
        private String article;
        @JsonProperty("wikipedia")
        private String wikipedia;

        @Getter
        @Setter
        public static class Patch {
            private String small;
            private String large;
        }

        @Getter
        @Setter
        public static class Reddit {
            private String campaign;
            private String launch;
            private String media;
            private String recovery;
        }

        @Getter
        @Setter
        public static class Flickr {
            private List<String> small;
            private List<String> original;
        }
    }

    @Getter
    @Setter
    public static class Failure {
        private Integer time;
        private Integer altitude;
        private String reason;
    }

    @Getter
    @Setter
    public static class Core {
        @JsonProperty("core")
        private String core;
        @JsonProperty("flight")
        private Integer flight;
        @JsonProperty("gridfins")
        private Boolean gridfins;
        @JsonProperty("legs")
        private Boolean legs;
        @JsonProperty("reused")
        private Boolean reused;
        @JsonProperty("landing_attempt")
        private Boolean landingAttempt;
        @JsonProperty("landing_success")
        private Boolean landingSuccess;
        @JsonProperty("landing_type")
        private String landingType;
        private String landpad;
    }
}

