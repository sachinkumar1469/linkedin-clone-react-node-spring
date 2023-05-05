package com.linkedin.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/post")
public class UserPostController {

//    @PostMapping("/hi")
//    public String sayHi(){
//        return "Hi";
//    }

    @GetMapping("/hi")
    public String sayHello(){
        return "Hi";
    }
}
