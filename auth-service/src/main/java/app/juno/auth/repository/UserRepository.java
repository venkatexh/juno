package app.juno.auth.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import app.juno.auth.dto.UserProfile;
import app.juno.auth.model.User;

@Repository
public interface UserRepository extends JpaRepository<User, String> {
  List<UserProfile> findByIdIn(List<String> ids);

  UserProfile findByEmail(String email);
}
