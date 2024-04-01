package com.pack.server;


import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;



import java.time.LocalDate;
import java.time.format.DateTimeFormatter;

@RestController
public class contoller {
    @GetMapping("/getdragons")
	public ResponseEntity<?> apod() {
        externalcall externalcallObj =  new externalcall();
        return externalcallObj.getSpaceXDragons();
    }
        
        
}