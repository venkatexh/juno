package app.juno.auth.controller;

import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.http.ResponseEntity;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import app.juno.auth.dto.AuthRequest;
import app.juno.auth.service.AuthService;
import jakarta.servlet.http.Cookie;
import jakarta.servlet.http.HttpServletResponse;

@RestController
@RequestMapping("/auth")
public class AuthController {
  @Autowired
  private AuthService authService;

  @PostMapping("/signup")
  public ResponseEntity<?> signup(@RequestBody AuthRequest req) {
    authService.signup(req);
    return ResponseEntity.ok("User created");
  }

  @PostMapping("/login")
  public ResponseEntity<?> login(@RequestBody AuthRequest req, HttpServletResponse response) {
      String token = authService.login(req);

      Cookie cookie = new Cookie("accessToken", token);
      cookie.setHttpOnly(true); 
      cookie.setSecure(false); // set to true in production
      cookie.setPath("/");
      cookie.setMaxAge(24 * 60 * 60 * 30); // 30 days

      response.addCookie(cookie);

      return ResponseEntity.ok("Logged in");
  }
  
}
  
