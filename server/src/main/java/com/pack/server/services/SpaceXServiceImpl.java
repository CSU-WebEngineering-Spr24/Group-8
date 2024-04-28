package com.pack.server.services;

import com.pack.server.domain.CrewResponse;
import com.pack.server.domain.DragonResponse; // Assuming this is used for rockets
import com.pack.server.domain.StarlinkResponse;
import com.pack.server.domain.HistoryResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;
import org.springframework.web.util.UriComponentsBuilder;

@Service
public class SpaceXServiceImpl implements SpaceXService {

    // @Autowired
    // private RestTemplate restTemplate;

    @Value("${spacex.api.url}")
    private String baseUrl;

    @Override
    public DragonResponse getRocketDetails(String id) {
        RestTemplate restTemplate = new RestTemplate();
        String url = UriComponentsBuilder.fromHttpUrl(baseUrl + "/rockets/" + id).toUriString();
        return restTemplate.getForObject(url, DragonResponse.class);
    }

    @Override
    public DragonResponse[] getAllRockets() {
        RestTemplate restTemplate = new RestTemplate();
        String url = UriComponentsBuilder.fromHttpUrl(baseUrl + "/rockets").toUriString();
        return restTemplate.getForObject(url, DragonResponse[].class);
    }

    @Override
    public CrewResponse getCrewMemberDetails(String id) {
        RestTemplate restTemplate = new RestTemplate();
        String url = UriComponentsBuilder.fromHttpUrl(baseUrl + "/crew/" + id).toUriString();
        return restTemplate.getForObject(url, CrewResponse.class);
    }

    @Override
    public CrewResponse[] getAllCrew() {
        RestTemplate restTemplate = new RestTemplate();
        String url = UriComponentsBuilder.fromHttpUrl(baseUrl + "/crew").toUriString();
        return restTemplate.getForObject(url, CrewResponse[].class);
    }

    @Override
    public StarlinkResponse getStarlinkDetails(String id) {
        RestTemplate restTemplate = new RestTemplate();
        String url = UriComponentsBuilder.fromHttpUrl(baseUrl + "/starlink/" + id).toUriString();
        return restTemplate.getForObject(url, StarlinkResponse.class);
    }

    @Override
    public StarlinkResponse[] getAllStarlink() {
        RestTemplate restTemplate = new RestTemplate();
        String url = UriComponentsBuilder.fromHttpUrl(baseUrl + "/starlink").toUriString();
        return restTemplate.getForObject(url, StarlinkResponse[].class);
    }

    @Override
    public HistoryResponse getHistoricalEventDetails(String id) {
        RestTemplate restTemplate = new RestTemplate();
        String url = UriComponentsBuilder.fromHttpUrl(baseUrl + "/history/" + id).toUriString();
        return restTemplate.getForObject(url, HistoryResponse.class);
    }

    @Override
    public HistoryResponse[] getAllHistory() {
        RestTemplate restTemplate = new RestTemplate();
        String url = UriComponentsBuilder.fromHttpUrl(baseUrl + "/history").toUriString();
        return restTemplate.getForObject(url, HistoryResponse[].class);
    }
}
