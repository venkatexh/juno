package app.juno.auth.service;

import java.util.Map;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Service;
import org.springframework.util.LinkedMultiValueMap;
import org.springframework.util.MultiValueMap;
import org.springframework.web.client.RestTemplate;

import lombok.extern.slf4j.Slf4j;

@Service
@Slf4j
public class KeycloakAdminTokenService {
  private final RestTemplate restTemplate = new RestTemplate();

  @Value("${keycloak.base-url}")
  private String baseUrl;

  @Value("${keycloak.admin.client-id}")
  private String clientId;

  @Value("${keycloak.admin.client-secret}")
  private String clientSecret;

  public String getAdminToken() {

    String adminTokenUrl = baseUrl + "/realms/master/protocol/openid-connect/token";

    MultiValueMap<String, Object> form = new LinkedMultiValueMap<>();
    form.add("client_id", clientId);
    form.add("client_secret", clientSecret);
    form.add("grant_type", "client_credentials");

    HttpHeaders headers = new HttpHeaders();
    headers.setContentType(MediaType.APPLICATION_FORM_URLENCODED);

    HttpEntity<?> request = new HttpEntity<>(form, headers);

    Map<?, ?> response = restTemplate.postForObject(adminTokenUrl, request, Map.class);

    return response.get("access_token").toString();
  }
}
