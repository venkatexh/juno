package app.juno.space.dto.Member;

public record UserProfile(String id, String displayName, String email) {
  public String getId() {
    return id;
  }

  public String getDisplayName() {
    return displayName;
  }

  public String getEmail() {
    return email;
  }
}
