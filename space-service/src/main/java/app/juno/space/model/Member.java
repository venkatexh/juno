package app.juno.space.model;

import java.util.UUID;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "members")
public class Member {
  @Id
  @GeneratedValue(strategy = GenerationType.UUID)
  @Column(name="membership_id", unique = true, nullable = false)
  private UUID id;
  private UUID userId;
  private UUID spaceId;

  public Member() {}

  public Member(UUID userId, UUID spaceId) {
    this.userId = userId;
    this.spaceId = spaceId;
  }

  public UUID getSpaceId() {
    return spaceId;
  }

  public UUID getUserId() {
    return userId;
  }

  public void setSpaceId(UUID spaceId) {
    this.spaceId = spaceId;
  }

  public void setUserId(UUID userId) {
    this.userId = userId;
  }
}
