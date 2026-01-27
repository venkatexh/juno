package app.juno.auth.repository;

import java.util.UUID;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import app.juno.auth.model.User;

@Repository
public interface UserRepository extends JpaRepository<User, UUID>{
  
}
