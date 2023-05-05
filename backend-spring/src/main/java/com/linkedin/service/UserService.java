package com.linkedin.service;

import com.linkedin.config.JwtUtil;
import com.linkedin.model.User;
import com.linkedin.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserService {

    @Autowired
    UserRepository userRepository;

    @Autowired
    JwtUtil jwtUtil;


    public String signupUser(User user){
        System.out.println(user.getCoverImg());
        User savedUser = userRepository.save(user);
        if(savedUser.getId()>0){
            System.out.println("Primary key is:"+savedUser.getId()+" "+user.getId());
            String token = jwtUtil.generateToken(savedUser);
            return token;
        }
        return null;
    }
}
