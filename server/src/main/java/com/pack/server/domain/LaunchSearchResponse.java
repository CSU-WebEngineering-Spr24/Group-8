package com.pack.server.domain;

import com.fasterxml.jackson.annotation.JsonProperty;

import lombok.Getter;
import lombok.Setter;
import java.util.List;

/* 
{
    "docs": [
      {
        "fairings": {
          "reused": false,
          "recovery_attempt": false,
          "recovered": false,
          "ships": []
        },
        "links": {
          "patch": {
            "small": "https://images2.imgbox.com/cd/48/NVrODg2G_o.png",
            "large": "https://images2.imgbox.com/97/11/mjn87zBs_o.png"
          },
          "reddit": {
            "campaign": "https://www.reddit.com/r/spacex/comments/7hjp03/falcon_heavy_demo_launch_campaign_thread/",
            "launch": "https://www.reddit.com/r/spacex/comments/7vg63x/rspacex_falcon_heavy_test_flight_official_launch/",
            "media": "https://www.reddit.com/r/spacex/comments/7vimtm/rspacex_falcon_heavy_test_flight_media_thread/",
            "recovery": null
          },
          "flickr": {
            "small": [],
            "original": [
              "https://farm5.staticflickr.com/4745/40110304192_b0165b7785_o.jpg",
              "https://farm5.staticflickr.com/4676/40110297852_6173e5cae6_o.jpg",
              "https://farm5.staticflickr.com/4615/40143096241_0324643b5e_o.jpg",
              "https://farm5.staticflickr.com/4702/40110298232_4e9c412936_o.jpg",
              "https://farm5.staticflickr.com/4610/39337245575_41d760caef_o.jpg",
              "https://farm5.staticflickr.com/4654/25254688767_59603ff06c_o.jpg",
              "https://farm5.staticflickr.com/4627/40126462801_d54b4f00be_o.jpg",
              "https://farm5.staticflickr.com/4760/40126462231_cdf00ef431_o.jpg",
              "https://farm5.staticflickr.com/4655/40202121122_5d29cfe2ac_o.jpg",
              "https://farm5.staticflickr.com/4631/39337245145_5f5630a66a_o.jpg",
              "https://farm5.staticflickr.com/4650/40126461851_14b93ec9d7_o.jpg",
              "https://farm5.staticflickr.com/4711/40126461411_b1ed283d45_o.jpg",
              "https://farm5.staticflickr.com/4696/40126460511_7b5cc64871_o.jpg",
              "https://farm5.staticflickr.com/4589/38583831555_9ae89f5c10_o.jpg",
              "https://farm5.staticflickr.com/4682/38583829815_e01509d1a7_o.jpg",
              "https://farm5.staticflickr.com/4731/39225582801_80594d5d91_o.jpg",
              "https://farm5.staticflickr.com/4641/39225582421_7aa0c65851_o.jpg",
              "https://farm5.staticflickr.com/4643/27449864329_d2424bc280_o.jpg",
              "https://farm5.staticflickr.com/4681/39225582171_137a4c75e7_o.jpg",
              "https://farm5.staticflickr.com/4644/39225582351_ac6aba2533_o.jpg",
              "https://farm5.staticflickr.com/4587/27449863849_709e135a98_o.jpg"
            ]
          },
          "presskit": "http://www.spacex.com/sites/spacex/files/falconheavypresskit_v1.pdf",
          "webcast": "https://www.youtube.com/watch?v=wbSwFU6tY1c",
          "youtube_id": "wbSwFU6tY1c",
          "article": "https://spaceflightnow.com/2018/02/07/spacex-debuts-worlds-most-powerful-rocket-sends-tesla-toward-the-asteroid-belt/",
          "wikipedia": "https://en.wikipedia.org/wiki/Elon_Musk%27s_Tesla_Roadster"
        },
        "static_fire_date_utc": "2018-01-24T17:30:00.000Z",
        "static_fire_date_unix": 1516815000,
        "net": false,
        "window": 9000,
        "rocket": "5e9d0d95eda69974db09d1ed",
        "success": true,
        "failures": [],
        "details": "The launch was a success, and the side boosters landed simultaneously at adjacent ground pads. Drone ship landing of the central core failed. Final burn to heliocentric mars-earth orbit was successful after the second stage and payload passed through the Van Allen belts.",
        "crew": [],
        "ships": [
          "5ea6ed2f080df4000697c90c",
          "5ea6ed2f080df4000697c90d",
          "5ea6ed30080df4000697c913"
        ],
        "capsules": [],
        "payloads": [
          "5eb0e4c6b6c3bb0006eeb21c"
        ],
        "launchpad": "5e9e4502f509094188566f88",
        "flight_number": 55,
        "name": "Falcon Heavy Test Flight",
        "date_utc": "2018-02-06T20:45:00.000Z",
        "date_unix": 1517949900,
        "date_local": "2018-02-06T15:45:00-05:00",
        "date_precision": "hour",
        "upcoming": false,
        "cores": [
          {
            "core": "5e9e28a5f359187f703b2653",
            "flight": 1,
            "gridfins": true,
            "legs": true,
            "reused": false,
            "landing_attempt": true,
            "landing_success": false,
            "landing_type": "ASDS",
            "landpad": "5e9e3032383ecb6bb234e7ca"
          },
          {
            "core": "5e9e28a2f359187f273b2642",
            "flight": 2,
            "gridfins": true,
            "legs": true,
            "reused": true,
            "landing_attempt": true,
            "landing_success": true,
            "landing_type": "RTLS",
            "landpad": "5e9e3032383ecb90a834e7c8"
          },
          {
            "core": "5e9e28a2f3591845c73b2640",
            "flight": 2,
            "gridfins": true,
            "legs": true,
            "reused": true,
            "landing_attempt": true,
            "landing_success": true,
            "landing_type": "RTLS",
            "landpad": "5e9e3032383ecb267a34e7c7"
          }
        ],
        "auto_update": true,
        "tbd": false,
        "launch_library_id": null,
        "id": "5eb87d13ffd86e000604b360"
      }
    ],
    "totalDocs": 1,
    "offset": 0,
    "limit": 10,
    "totalPages": 1,
    "page": 1,
    "pagingCounter": 1,
    "hasPrevPage": false,
    "hasNextPage": false,
    "prevPage": null,
    "nextPage": null
  }
 */

@Getter
@Setter
public class LaunchSearchResponse {

    @JsonProperty("docs")
    private List<LaunchResponse> docs;

    @JsonProperty("totalDocs")
    private Integer totalDocs;

    @JsonProperty("offset")
    private Integer offset;

    @JsonProperty("limit")
    private Integer limit;

    @JsonProperty("totalPages")
    private Integer totalPages;

    @JsonProperty("page")
    private Integer page;

    @JsonProperty("pagingCounter")
    private Integer pagingCounter;

    @JsonProperty("hasPrevPage")
    private Boolean hasPrevPage;

    @JsonProperty("hasNextPage")
    private Boolean hasNextPage;

    @JsonProperty("prevPage")
    private Object prevPage;

    @JsonProperty("nextPage")
    private Object nextPage;

    
}
