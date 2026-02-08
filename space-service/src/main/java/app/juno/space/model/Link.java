package app.juno.space.model;

import java.time.Instant;
import java.util.UUID;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.PrePersist;
import jakarta.persistence.PreUpdate;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "links")
public class Link {

  @Id
  @GeneratedValue(strategy = GenerationType.UUID)
  @Column(unique = true, nullable = false)
  private UUID id;

  private UUID spaceId;

  @Column(columnDefinition = "TEXT", nullable = false)
  private String url;
  @Column(columnDefinition = "TEXT", nullable = false)
  private String title;
  @Column(columnDefinition = "TEXT")
  private String description;
  private UUID addedById;

  @Column(nullable = false)
  @Enumerated(EnumType.STRING)
  private LinkStatus status;

  @Column(nullable = false, updatable = false)
  private Instant createdAt;

  @Column(nullable = false)
  private Instant updatedAt;

  @PrePersist
  protected void onCreate() {
    this.updatedAt = Instant.now();
    this.createdAt = Instant.now();
    this.status = LinkStatus.ACTIVE;
  }

  @PreUpdate
  protected void onUpdate() {
    this.updatedAt = Instant.now();
  }
}

