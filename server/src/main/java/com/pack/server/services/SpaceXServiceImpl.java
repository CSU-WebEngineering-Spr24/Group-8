package com.pack.server.services;

import com.pack.server.domain.CrewResponse;
import com.pack.server.domain.RocketResponse;
import com.pack.server.domain.StarlinkResponse;
import com.pack.server.domain.HistoryResponse;
import com.pack.server.domain.LaunchPadsResponse;
import com.pack.server.domain.LandPadsResponse;
import com.pack.server.domain.ShipResponse;
import com.pack.server.domain.DragonResponse;
import com.pack.server.domain.LaunchResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;
import org.springframework.web.util.UriComponentsBuilder;

@Service
public class SpaceXServiceImpl implements SpaceXService {

    @Value("${spacex.api.url}")
    private String baseUrl;

    @Override
    public RocketResponse getRocketDetails(String id) {
        RestTemplate restTemplate = new RestTemplate();
        String url = UriComponentsBuilder.fromHttpUrl(baseUrl + "/rockets/" + id).toUriString();
        return restTemplate.getForObject(url, RocketResponse.class);
    }

    @Override
    public RocketResponse[] getAllRockets() {
        RestTemplate restTemplate = new RestTemplate();
        String url = UriComponentsBuilder.fromHttpUrl(baseUrl + "/rockets").toUriString();
        return restTemplate.getForObject(url, RocketResponse[].class);
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

    @Override
    public LaunchPadsResponse getLaunchPadsDetails(String id) {
        RestTemplate restTemplate = new RestTemplate();
        String url = UriComponentsBuilder.fromHttpUrl(baseUrl + "/launchpads/" + id).toUriString();
        return restTemplate.getForObject(url, LaunchPadsResponse.class);
    }

    @Override
    public LaunchPadsResponse[] getAllLaunchPads() {
        RestTemplate restTemplate = new RestTemplate();
        String url = UriComponentsBuilder.fromHttpUrl(baseUrl + "/launchpads").toUriString();
        return restTemplate.getForObject(url, LaunchPadsResponse[].class);
    }

    @Override
    public LandPadsResponse getLandPadsDetails(String id) {
        RestTemplate restTemplate = new RestTemplate();
        String url = UriComponentsBuilder.fromHttpUrl(baseUrl + "/landpads/" + id).toUriString();
        return restTemplate.getForObject(url, LandPadsResponse.class);
    }

    @Override
    public LandPadsResponse[] getAllLandPads() {
        RestTemplate restTemplate = new RestTemplate();
        String url = UriComponentsBuilder.fromHttpUrl(baseUrl + "/landpads").toUriString();
        return restTemplate.getForObject(url, LandPadsResponse[].class);
    }

    @Override
    public ShipResponse getShipDetails(String id) {
        RestTemplate restTemplate = new RestTemplate();
        String url = UriComponentsBuilder.fromHttpUrl(baseUrl + "/ships/" + id).toUriString();
        return restTemplate.getForObject(url, ShipResponse.class);
    }

    @Override
    public ShipResponse[] getAllShips() {
        RestTemplate restTemplate = new RestTemplate();
        String url = UriComponentsBuilder.fromHttpUrl(baseUrl + "/ships").toUriString();
        return restTemplate.getForObject(url, ShipResponse[].class);
    }

    @Override
    public DragonResponse getDragonDetails(String id) {
        RestTemplate restTemplate = new RestTemplate();
        String url = UriComponentsBuilder.fromHttpUrl(baseUrl + "/dragons/" + id).toUriString();
        return restTemplate.getForObject(url, DragonResponse.class);
    }

    @Override
    public DragonResponse[] getAllDragons() {
        RestTemplate restTemplate = new RestTemplate();
        String url = UriComponentsBuilder.fromHttpUrl(baseUrl + "/dragons").toUriString();
        return restTemplate.getForObject(url, DragonResponse[].class);
    }

    @Override
    public LaunchResponse getLaunchDetails(String id) {
        RestTemplate restTemplate = new RestTemplate();
        String url = UriComponentsBuilder.fromHttpUrl(baseUrl + "/launches/" + id).toUriString();
        return restTemplate.getForObject(url, LaunchResponse.class);
    }

    @Override
    public LaunchResponse[] getAllLaunches() {
        RestTemplate restTemplate = new RestTemplate();
        String url = UriComponentsBuilder.fromHttpUrl(baseUrl + "/launches").toUriString();
        return restTemplate.getForObject(url, LaunchResponse[].class);
    }

}
