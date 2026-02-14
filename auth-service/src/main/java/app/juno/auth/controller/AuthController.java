package app.juno.auth.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Lazy;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseCookie;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import app.juno.auth.dto.CodeRequest;
import app.juno.auth.dto.SignupRequest;
import app.juno.auth.dto.TokenResponse;
import app.juno.auth.service.KeycloakService;
import app.juno.auth.service.SignupService;
import jakarta.servlet.http.HttpServletResponse;

@RestController
@RequestMapping("/api/auth")
public class AuthController {
  @Lazy
  @Autowired
  private SignupService signupService;

  @Autowired
  private KeycloakService keycloakService;

  @PostMapping("/exchange")
  public ResponseEntity<?> exchange(@RequestBody CodeRequest req, HttpServletResponse response) {
    TokenResponse token = keycloakService.exchange(req.getCode());

    ResponseCookie cookie = ResponseCookie.from("access_token", token.getAccessToken()).httpOnly(true).secure(true)
        .path("/").sameSite("None").build();

    response.addHeader(HttpHeaders.SET_COOKIE, cookie.toString());

    return ResponseEntity.ok().build();
  }

  @PostMapping("/signup")
  @PreAuthorize("permitAll()")
  public ResponseEntity<Void> signup(@RequestBody SignupRequest req) {
    signupService.signup(req);
    return ResponseEntity.status(HttpStatus.CREATED).build();
  }
}
