package app.juno.auth.repository;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import app.juno.auth.model.User;

@Repository
public interface UserRepository extends JpaRepository<User, UUID> {
  List<User> findByIdIn(List<String> ids);

  Optional<User> findById(String id);

  Optional<User> findByEmail(String email);
}
