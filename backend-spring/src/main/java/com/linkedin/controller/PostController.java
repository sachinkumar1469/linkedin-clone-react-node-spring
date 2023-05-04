package com.linkedin.controller;


import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

//@Controller
@RestController
public class PostController {

    @RequestMapping("/")
    public String post(){
        System.out.println("Controller called");
        return "hello";
    }
}
