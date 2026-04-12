package app.juno.auth.util;

import java.util.Date;
import java.util.UUID;

import org.springframework.stereotype.Component;

import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.security.Keys;

@Component
public class JwtUtil {
  private final String secret = "random-random-bs-bs-what-do-you-know-i-know-a-lot-of-stuff";

  public String generateToken(UUID userId, String email) {
    return Jwts.builder().subject(email).claim("userId", userId).issuedAt(new Date()).expiration(
        new Date(System.currentTimeMillis() + 86400000)).signWith(Keys.hmacShaKeyFor(secret.getBytes())).compact();
  }
}
