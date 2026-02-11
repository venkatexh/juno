package app.juno.auth.model;

import java.time.LocalDateTime;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name = "users")
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor

public class User {
  @Id
  @Column(name = "id", unique = true, nullable = false)
  private String id; // Keycloak userId (sub)

  @Column(name = "email", unique = true, nullable = false)
  private String email;

  @Column(name = "phone_number", unique = true, nullable = true)
  private String phoneNumber;

  @Column(name = "username", unique = true, nullable = true)
  private String username;

  private String firstName;
  private String lastName;
  private String avatar;
  private String displayName;
  private String profileImageUrl;
  private Gender gender;
  private String locale;
  private String timezone;
  private String providerId;

  private boolean emailVerified;
  private boolean phoneNumberVerified;

  private LocalDateTime createdAt;
  private LocalDateTime updatedAt;
  private LocalDateTime lastLoginAt;
  private LocalDateTime deletedAt;

  private Status status;
  private Source source;

  public String getId() {
    return id;
  }

  public String getEmail() {
    return email;
  }

  public String getName() {
    return displayName;
  }
}
