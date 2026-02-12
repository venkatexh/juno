package app.juno.space.model;

import java.time.Instant;
import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import jakarta.persistence.PrePersist;
import jakarta.persistence.PreUpdate;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class Expense {

  @Id
  @GeneratedValue(strategy = GenerationType.UUID)
  @Column(unique = true, updatable = false, nullable = false)
  private UUID id;

  @Column(updatable = false, nullable = false)
  private UUID moduleId;

  @Column(columnDefinition = "TEXT", nullable = false)
  private String title;

  private LocalDate expenseDate;

  private Double amount;

  private String currency;

  private UUID addedByUserId;

  private UUID paidByUserId;

  @OneToMany(mappedBy = "expense", cascade = CascadeType.ALL)
  private List<ExpenseSplit> splits = new ArrayList<>();

  @Column(nullable = false, updatable = false)
  private Instant createdAt;

  @Column(nullable = false)
  private Instant updatedAt;

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
