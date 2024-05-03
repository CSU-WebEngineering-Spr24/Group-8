package com.pack.server.controller;


// import org.springframework.http.*;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
// import org.springframework.web.bind.annotation.*;
// import com.pack.server.services.externalcall;
import org.springframework.web.bind.annotation.PathVariable;



// import java.time.LocalDate;
// import java.time.format.DateTimeFormatter;

// @RestController
// @CrossOrigin(origins = "*", allowedHeaders = "*")
// public class contoller {
//     @GetMapping("/getdragons")
// 	public ResponseEntity<?> apod() {
//         externalcall externalcallObj =  new externalcall();
//         return externalcallObj.getSpaceXDragons();
//     }

    
// }

/* 
 * { 
        path: "",  
        element: <Home />
      },
      {
        path: "rockets",
        element: <RocketIndex />,
      },
      // allrockets path
      {
        path: "allrockets",
        element: <AllItemsPage category="rockets" ItemComponent={RocketCard} />,
      },
      // allcapsules path
      {
        path: "allcapsules",
        element: <AllItemsPage category="capsules" ItemComponent={CapsuleCard} />,
      },
      // alldragons path
      {
        path: "alldragons",
        element: <AllItemsPage category="dragons" ItemComponent={DragonCard} />,
      },
      // allships path
      {
        path: "allships",
        element: <AllItemsPage category="ships" ItemComponent={ShipsCard} />,
      },
      // <Route path="/rockets/:id" component={RocketIndividual} />
      {
        path: "rockets/:id",
        element: <RocketIndividual />,
      },
      // <Route path="/ships/:id" component={ShipIndividual} />
      {
        path: "ships/:id",
        element: <ShipIndividual />,
      },
      // DragonIndividual path
      {
        path: "dragons/:id",
        element: <DragonIndividual />,
      },
      {
        path: "*",
        element: <ErrorPage />,
      },
       {
        path: "crew",
        element: <CrewPage />,
      },
      
      {
        path: "history",
        element: <HistoryTimeline />,
      },
      
      {
        path: "starlink",
        element: <Starlink />,
      },
 * 
 * 
 * 
 */



// controller to index page 
@Controller
public class Controllerindex {
    @GetMapping(value = {"/", "/rockets", "/allrockets", "/allcapsules", "/alldragons", "/allships", "/fetcrew", "/history", "/starlink" , "/rockets/*", "/ships/*", "/dragons/*","/launches"})
    public String index() {
        return "index";
    }

}
