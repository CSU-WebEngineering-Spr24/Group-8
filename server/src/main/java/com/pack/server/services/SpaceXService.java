package com.pack.server.services;

import com.pack.server.domain.RocketResponse;
import com.pack.server.domain.CrewResponse;
import com.pack.server.domain.StarlinkResponse;
import com.pack.server.domain.HistoryResponse;
import com.pack.server.domain.LaunchPadsResponse;
import com.pack.server.domain.LandPadsResponse;
import com.pack.server.domain.ShipResponse;
import com.pack.server.domain.DragonResponse;
import com.pack.server.domain.LaunchResponse;



public interface SpaceXService {

    RocketResponse getRocketDetails(String id);
    RocketResponse[] getAllRockets();

    CrewResponse getCrewMemberDetails(String id);
    CrewResponse[] getAllCrew();

    StarlinkResponse getStarlinkDetails(String id);
    StarlinkResponse[] getAllStarlink();

    HistoryResponse getHistoricalEventDetails(String id);
    HistoryResponse[] getAllHistory();

    LaunchPadsResponse getLaunchPadsDetails(String id);
    LaunchPadsResponse[] getAllLaunchPads();

    LandPadsResponse getLandPadsDetails(String id);
    LandPadsResponse[] getAllLandPads();

    ShipResponse getShipDetails(String id);
    ShipResponse[] getAllShips();

    DragonResponse getDragonDetails(String id);
    DragonResponse[] getAllDragons();

    LaunchResponse getLaunchDetails(String id);
    LaunchResponse[] getAllLaunches();
}
