package app.juno.space.repository;

import java.util.List;
import java.util.UUID;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import app.juno.space.model.Task;

@Repository
public interface TaskRepository extends JpaRepository<Task, UUID> {
  List<Task> findAllBySpaceId(UUID spaceId);
}
