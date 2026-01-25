package app.juno.space.repository;

import java.util.UUID;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import app.juno.space.model.Space;

@Repository
public interface SpaceRepository extends JpaRepository<Space, UUID> {
}
