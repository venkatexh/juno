package app.juno.space.repository.module;

import app.juno.space.model.module.Module;
import java.util.UUID;

import org.springframework.data.jpa.repository.JpaRepository;

public interface ModuleRepository extends JpaRepository<Module, UUID> {

}
