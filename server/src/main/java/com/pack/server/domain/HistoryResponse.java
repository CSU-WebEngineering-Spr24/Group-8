package com.pack.server.domain;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class HistoryResponse {
    private Links links;
    private String title;
    private String eventDateUtc;
    private long eventDateUnix;
    private String details;
    private String id;

    @Getter
    @Setter
    public static class Links {
        private String article;
    }
}
