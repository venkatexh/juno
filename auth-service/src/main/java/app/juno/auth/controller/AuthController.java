package app.juno.auth.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Lazy;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import app.juno.auth.dto.SignupRequest;
import app.juno.auth.service.SignupService;
import lombok.extern.slf4j.Slf4j;

@RestController
@Slf4j
@RequestMapping("/api/auth")
public class AuthController {
  @Lazy
  @Autowired
  private SignupService signupService;

  @PostMapping("/signup")
  @PreAuthorize("permitAll()")
  public ResponseEntity<Void> signup(@RequestBody SignupRequest req) {
    signupService.signup(req);
    return ResponseEntity.status(HttpStatus.CREATED).build();
  }
}
