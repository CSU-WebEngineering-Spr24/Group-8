package com.pack.server.controller;


import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.*;
import com.pack.server.services.externalcall;



import java.time.LocalDate;
import java.time.format.DateTimeFormatter;

@RestController
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class contoller {
    @GetMapping("/getdragons")
	public ResponseEntity<?> apod() {
        externalcall externalcallObj =  new externalcall();
        return externalcallObj.getSpaceXDragons();
    }
        
        
}