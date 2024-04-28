package com.pack.server.controller;

import com.pack.server.domain.CrewResponse;
import com.pack.server.domain.RocketResponse; 
import com.pack.server.domain.StarlinkResponse;
import com.pack.server.domain.HistoryResponse;
import com.pack.server.services.SpaceXService;
import com.pack.server.domain.LaunchPadsResponse;
import com.pack.server.domain.LandPadsResponse;
import com.pack.server.domain.ShipResponse;
import com.pack.server.domain.DragonResponse;
import com.pack.server.domain.LaunchResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/spacex")
public class SpaceXController {

    @Autowired
    private SpaceXService spaceXService;

    // Rockets
    @GetMapping("/rockets/{id}")
    public RocketResponse getRocket(@PathVariable String id) {
        return spaceXService.getRocketDetails(id);
    }

    @GetMapping("/rockets")
    public RocketResponse[] getAllRockets() {
        return spaceXService.getAllRockets();
    }

    // Crew
    @GetMapping("/crew/{id}")
    public CrewResponse getCrew(@PathVariable String id) {
        return spaceXService.getCrewMemberDetails(id);
    }

    @GetMapping("/crew")
    public CrewResponse[] getAllCrew() {
        return spaceXService.getAllCrew();
    }

    // Starlink
    @GetMapping("/starlink/{id}")
    public StarlinkResponse getStarlink(@PathVariable String id) {
        return spaceXService.getStarlinkDetails(id);
    }

    @GetMapping("/starlink")
    public StarlinkResponse[] getAllStarlink() {
        return spaceXService.getAllStarlink();
    }

    // History
    @GetMapping("/history/{id}")
    public HistoryResponse getHistory(@PathVariable String id) {
        return spaceXService.getHistoricalEventDetails(id);
    }

    @GetMapping("/history")
    public HistoryResponse[] getAllHistory() {
        return spaceXService.getAllHistory();
    }

    // Launch Pads
    @GetMapping("/launchpads/{id}")
    public LaunchPadsResponse getLaunchPads(@PathVariable String id) {
        return spaceXService.getLaunchPadsDetails(id);
    }

    @GetMapping("/launchpads")
    public LaunchPadsResponse[] getAllLaunchPads() {
        return spaceXService.getAllLaunchPads();
    }

    // Land Pads
    @GetMapping("/landpads/{id}")
    public LandPadsResponse getLandPads(@PathVariable String id) {
        return spaceXService.getLandPadsDetails(id);
    }

    @GetMapping("/landpads")
    public LandPadsResponse[] getAllLandPads() {
        return spaceXService.getAllLandPads();
    }

    // Ships
    @GetMapping("/ships/{id}")
    public ShipResponse getShip(@PathVariable String id) {
        return spaceXService.getShipDetails(id);
    }

    @GetMapping("/ships")
    public ShipResponse[] getAllShips() {
        return spaceXService.getAllShips();
    }

    // Dragons
    @GetMapping("/dragons/{id}")
    public DragonResponse getDragon(@PathVariable String id) {
        return spaceXService.getDragonDetails(id);
    }

    @GetMapping("/dragons")
    public DragonResponse[] getAllDragons() {
        return spaceXService.getAllDragons();
    }

    // LaunchResponse
    @GetMapping("/launches/{id}")
    public LaunchResponse getLaunch(@PathVariable String id) {
        return spaceXService.getLaunchDetails(id);
    }

    @GetMapping("/launches")
    public LaunchResponse[] getAllLaunches() {
        return spaceXService.getAllLaunches();
    }
}
