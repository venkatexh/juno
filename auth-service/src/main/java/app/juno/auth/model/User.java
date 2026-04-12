package app.juno.auth.model;

import java.time.LocalDateTime;
import java.util.UUID;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
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
  @GeneratedValue(strategy = GenerationType.UUID)
  private UUID id; 

  @Column(name = "email", unique = true, nullable = false)
  private String email;

  @Column(name = "username", unique = true, nullable = true)
  private String username;

  @Column(nullable = false)
  private String passwordHash;

  private String firstName;
  private String lastName;
  private String avatar;
  private String displayName;
  private String profileImageUrl;
  private Gender gender;
  private String locale;
  private String timezone;

  private Boolean emailVerified;

  private LocalDateTime createdAt;
  private LocalDateTime updatedAt;
  private LocalDateTime lastLoginAt;
  private LocalDateTime deletedAt;
}
