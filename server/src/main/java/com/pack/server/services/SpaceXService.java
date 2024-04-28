package com.pack.server.services;

import com.pack.server.domain.CrewResponse;
import com.pack.server.domain.DragonResponse; // Assuming you use the same DragonResponse for rockets
import com.pack.server.domain.StarlinkResponse;
import com.pack.server.domain.HistoryResponse;

public interface SpaceXService {

    DragonResponse getRocketDetails(String id);
    DragonResponse[] getAllRockets();

    CrewResponse getCrewMemberDetails(String id);
    CrewResponse[] getAllCrew();

    StarlinkResponse getStarlinkDetails(String id);
    StarlinkResponse[] getAllStarlink();

    HistoryResponse getHistoricalEventDetails(String id);
    HistoryResponse[] getAllHistory();
}
