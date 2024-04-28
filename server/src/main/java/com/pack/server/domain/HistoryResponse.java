package com.pack.server.domain;

import com.fasterxml.jackson.annotation.JsonProperty;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class HistoryResponse {
    private Links links;
    private String title;
    @JsonProperty("event_date_utc")
    private String eventDateUtc;
    @JsonProperty("event_date_unix")
    private long eventDateUnix;
    private String details;
    private String id;

    @Getter
    @Setter
    public static class Links {
        private String article;
    }
}
