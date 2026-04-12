package app.juno.space.controller;

import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import jakarta.servlet.http.HttpServletRequest;

@RestController
public class JWTValidationController {

  @GetMapping("/api/validate-jwt")
  public String test(HttpServletRequest request) {
    Authentication auth = SecurityContextHolder.getContext().getAuthentication();
    String userId = (String) auth.getPrincipal();

    return "User: " + userId;
  }
}
