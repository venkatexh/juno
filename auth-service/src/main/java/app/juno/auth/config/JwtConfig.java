package app.juno.auth.config;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.oauth2.jwt.JwtDecoder;
import org.springframework.security.oauth2.jwt.JwtDecoders;

@Configuration
public class JwtConfig {

  @Value("${keycloak.realm}")
  private String realm;

  @Bean
  public JwtDecoder jwtDecoder() {
    String issuerUri = "http://localhost:9090/realms/" + realm; // Keycloak realm URL
    return JwtDecoders.fromIssuerLocation(issuerUri);
  }
}
