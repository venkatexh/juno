package app.juno.space.repository.module;

import app.juno.space.model.module.Module;

import java.util.List;
import java.util.UUID;

import org.springframework.data.jpa.repository.JpaRepository;

public interface ModuleRepository extends JpaRepository<Module, UUID> {
  List<Module> findAllBySpaceId(UUID spaceId);
}
