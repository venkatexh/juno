package app.juno.auth.service;

import app.juno.auth.dto.TokenResponse;
import lombok.extern.slf4j.Slf4j;

import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.*;

@Slf4j
@Service
public class KeycloakService {

  private final RestTemplate restTemplate = new RestTemplate();

  @Value("${keycloak.frontend-client-id}")
  private String clientId;

  @Value("${keycloak.realm}")
  private String realm;

  private static final String REDIRECT_URI = "http://localhost:3000/auth/callback";

  public TokenResponse exchange(String code) {

    String tokenURL = "http://localhost:9090/realms/" + realm + "/protocol/openid-connect/token";

    HttpHeaders headers = new HttpHeaders();
    headers.setContentType(MediaType.APPLICATION_FORM_URLENCODED);

    String body = "grant_type=authorization_code" +
        "&client_id=" + clientId +
        "&code=" + code +
        "&redirect_uri=" + REDIRECT_URI;

    HttpEntity<String> request = new HttpEntity<>(body, headers);

    ResponseEntity<TokenResponse> response = restTemplate.exchange(
        tokenURL,
        HttpMethod.POST,
        request,
        TokenResponse.class);

    return response.getBody();
  }
}
