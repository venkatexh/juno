package app.juno.space.model;

import java.time.Instant;
import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import jakarta.persistence.PrePersist;
import jakarta.persistence.PreUpdate;
import jakarta.persistence.Table;

@Entity
@Table(name = "spaces")
public class Space {
  @Id
  @GeneratedValue(strategy = GenerationType.UUID)
  @Column(unique = true, nullable = false)
  private UUID id;
  @Column(columnDefinition = "TEXT", nullable = false)
  private String name;
  @Column(columnDefinition = "TEXT")
  private String description;
  private String imageUrl;
  private String visibility;
  private String status;
  private UUID ownerId;
  private UUID chatId;
  @Column(nullable = false, updatable = false)
  private Instant createdAt;
  @Column(nullable = false)
  private Instant updatedAt;
  private Boolean defaultSpace;

  @OneToMany(mappedBy = "space")
  private List<Membership> memberships = new ArrayList<>();

  public Space() {
  }

  public Space(String name, String description, String imageUrl, String visibility, String status, UUID ownerId,
      UUID chatId) {
    this.name = name;
    this.description = description;
    this.imageUrl = imageUrl;
    this.visibility = visibility;
    this.status = status;
    this.ownerId = ownerId;
    this.chatId = chatId;
  }

  public UUID getId() {
    return id;
  }

  public String getName() {
    return name;
  }

  public String getDescription() {
    return description;
  }

  public String getImageUrl() {
    return imageUrl;
  }

  public String getVisibility() {
    return visibility;
  }

  public String getStatus() {
    return status;
  }

  public UUID getOwnerId() {
    return ownerId;
  }

  public UUID getChatId() {
    return chatId;
  }

  public Instant getCreatedAt() {
    return createdAt;
  }

  public Instant getUpdatedAt() {
    return updatedAt;
  }

  public Boolean getDefaultSpace() {
    return defaultSpace;
  }

  public void setName(String name) {
    this.name = name;
  }

  public void setDescription(String description) {
    this.description = description;
  }

  public void setImageUrl(String imageUrl) {
    this.imageUrl = imageUrl;
  }

  public void setVisibility(String visibility) {
    this.visibility = visibility;
  }

  public void setStatus(String status) {
    this.status = status;
  }

  public void setOwnerId(UUID ownerId) {
    this.ownerId = ownerId;
  }

  public void setChatId(UUID chatId) {
    this.chatId = chatId;
  }

  public void setDefaultSpace(Boolean defaultSpace) {
    this.defaultSpace = defaultSpace;
  }

  @PrePersist
  protected void onCreate() {
    this.updatedAt = Instant.now();
    this.createdAt = Instant.now();
    this.status = "ACTIVE";
    this.visibility = "PUBLIC";
  }

  @PreUpdate
  protected void onUpdate() {
    this.updatedAt = Instant.now();
  }
}