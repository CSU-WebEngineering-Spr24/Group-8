package com.pack.server.controller;

import com.pack.server.domain.CrewResponse;
import com.pack.server.domain.DragonResponse; // Assuming this is used for rockets
import com.pack.server.domain.StarlinkResponse;
import com.pack.server.domain.HistoryResponse;
import com.pack.server.services.SpaceXService;
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
    public DragonResponse getRocket(@PathVariable String id) {
        return spaceXService.getRocketDetails(id);
    }

    @GetMapping("/rockets")
    public DragonResponse[] getAllRockets() {
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
}
