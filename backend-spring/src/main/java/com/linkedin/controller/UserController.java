package com.linkedin.controller;


import com.linkedin.model.User;
import com.linkedin.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.RequestEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class UserController {

    @Autowired
    UserService userService;
    @PostMapping("/api/signup")
    public String userSignup(RequestEntity<User> user){
        System.out.println("Here");
        User user1 = user.getBody();
        String token = "";
        if(user1!=null){
            token = userService.signupUser(user1);
        }
        return token;
    }
}
