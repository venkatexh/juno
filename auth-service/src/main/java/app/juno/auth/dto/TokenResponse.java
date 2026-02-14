package app.juno.auth.dto;

import com.fasterxml.jackson.annotation.JsonProperty;

public class TokenResponse {
  @JsonProperty("access_token")
  private String accessToken;

  @JsonProperty("refresh_token")
  private String refreshToken;

  public String getAccessToken() {
    return accessToken;
  }

  public String getRefreshToken() {
    return refreshToken;
  }
}
