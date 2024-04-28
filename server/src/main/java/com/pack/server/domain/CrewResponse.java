package com.pack.server.domain;

import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
public class CrewResponse {
    private String name;
    private String agency;
    private String image;
    private String wikipedia;
    private List<String> launches;
    private String status;
    private String id;
}
