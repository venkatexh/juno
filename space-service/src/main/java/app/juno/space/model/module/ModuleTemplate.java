package app.juno.space.model.module;

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
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "module_templates")
public class ModuleTemplate {

  @Id
  @GeneratedValue(strategy = GenerationType.UUID)
  @Column(unique = true, nullable = false)
  private UUID id;

  @Column(nullable = false, columnDefinition = "TEXT")
  private String name;

  @Column(nullable = false, columnDefinition = "TEXT")
  private String description;

  private Boolean systemTemplate;

  @Column(nullable = false)
  @Enumerated(EnumType.STRING)
  private SubscriptionType subscriptionType;

  @Column(nullable = false, columnDefinition = "TEXT", name = "image_url")
  private String imageURL;

  @Column(nullable = false)
  @Enumerated(EnumType.STRING)
  private ModuleType moduleType;

  private Instant createdAt;

  private Instant updatedAt;

  @Column(nullable = false)
  private Boolean published;

  @Column(nullable = false)
  private UUID addedByUserId;

  @PrePersist
  protected void onCreate() {
    this.updatedAt = Instant.now();
    this.createdAt = Instant.now();
  }

  @PreUpdate
  protected void onUpdate() {
    this.updatedAt = Instant.now();
  }
}
