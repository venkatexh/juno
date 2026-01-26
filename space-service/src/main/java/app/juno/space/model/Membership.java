package app.juno.space.model;

import java.util.UUID;


import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;

@Entity
@Table(name = "memberships")
public class Membership {

  @Id
  @GeneratedValue(strategy = GenerationType.UUID)
  @Column(unique = true, nullable = false)
  private UUID id;

  @Column(name="user_id", nullable = false)
  private UUID userId;

  @ManyToOne(fetch = FetchType.LAZY)
  @JoinColumn(name = "space_id", nullable = false)
  private Space space;

  public Membership() {}
  public Membership(UUID userId, Space space) {
    this.userId = userId;
    this.space = space;
  }

  public Space getSpace() {
    return space;
  }

}
