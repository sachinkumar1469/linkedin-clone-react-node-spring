package com.linkedin.config;

import com.linkedin.model.User;
import com.linkedin.repository.UserRepository;
import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.security.Keys;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.nio.charset.StandardCharsets;
import java.security.Key;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;
import java.util.Optional;

@Component
public class JwtUtil {
    private static final String SECRET_KEY = "mySecretKey";

    private static final Key key = Keys.hmacShaKeyFor(SECRET_KEY.getBytes(StandardCharsets.UTF_8));
    private static final long EXPIRATION_TIME = 864_000_000;


    UserRepository userRepository;

    @Autowired
    public JwtUtil(UserRepository userRepository){
        this.userRepository = userRepository;
    }

    public String generateToken(User user){
        Map<String,Object> claims = new HashMap<>();
        claims.put("id",user.getId());
        claims.put("name",user.getName());
        claims.put("email",user.getEmail());
        claims.put("username",user.getUsername());
        claims.put("profileImg",user.getProfileImg());
        claims.put("coverImg",user.getCoverImg());
        claims.put("description",user.getDescription());
        return Jwts.builder()
                .setClaims(claims)
                .setIssuedAt(new Date())
                .signWith(key)
                .compact();

    }

    public User extractUserDetails(String token){
        Claims claims = Jwts.parserBuilder()
                .setSigningKey(key)
                .build()
                .parseClaimsJws(token)
                .getBody();
        Optional<User> user = userRepository.findById((Integer) claims.get("id"));
        return user.orElse(null);
    }

    public boolean validateToken(String token){
        try{
            Jwts.parserBuilder().setSigningKey(key).build().parseClaimsJws(token);
            return true;
        } catch (Exception e){
            return false;
        }
    }

}
