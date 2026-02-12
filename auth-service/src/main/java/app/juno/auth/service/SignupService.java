package app.juno.auth.service;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Lazy;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import app.juno.auth.dto.SignupRequest;
import app.juno.auth.model.User;
import app.juno.auth.repository.UserRepository;

@Service
public class SignupService {
  private RestTemplate restTemplate = new RestTemplate();
  @Lazy
  @Autowired
  private KeycloakAdminTokenService adminTokenService;
  @Autowired
  private UserRepository userRepository;

  @Value("${keycloak.base-url}")
  private String baseUrl;

  @Value("${keycloak.realm}")
  private String realm;

  public void signup(SignupRequest req) {
    String adminToken = adminTokenService.getAdminToken();

    String createUserUrl = baseUrl + "/admin/realms/" + realm + "/users";

    Map<String, Object> body = Map.of(
        "username", req.username(),
        "email", req.email(),
        "enabled", true);

    HttpHeaders headers = new HttpHeaders();
    headers.setBearerAuth(adminToken);
    headers.setContentType(MediaType.APPLICATION_JSON);

    restTemplate.postForEntity(createUserUrl, new HttpEntity<>(body, headers), Void.class);

    String userId = findUserId(req.username(), adminToken);

    String resetPasswordUrl = baseUrl + "/admin/realms/" + realm + "/users/" + userId + "/reset-password";

    Map<String, Object> resetPasswordBody = Map.of(
        "type", "password",
        "value", req.password(),
        "temporary", false);

    restTemplate.put(resetPasswordUrl, new HttpEntity<>(resetPasswordBody, headers));

    User user = new User();
    user.setId(userId);
    user.setEmail(req.email());

    userRepository.save(user);

  }

  private String findUserId(String username, String adminToken) {
    String findUserUrl = baseUrl + "/admin/realms/" + realm + "/users?username=" + username;

    HttpHeaders headers = new HttpHeaders();
    headers.setBearerAuth(adminToken);

    ResponseEntity<List> response = restTemplate.exchange(findUserUrl, HttpMethod.GET, new HttpEntity<>(headers),
        List.class);

    Map<?, ?> user = (Map<?, ?>) response.getBody().get(0);
    return user.get("id").toString();
  }
}
