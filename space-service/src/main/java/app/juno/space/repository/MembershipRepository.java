package app.juno.space.repository;

import java.util.List;
import java.util.UUID;

import org.springframework.data.jpa.repository.JpaRepository;

import app.juno.space.model.Membership;

public interface MembershipRepository extends JpaRepository<Membership, UUID> {

  List<Membership> findByUserId(UUID userId);
}
