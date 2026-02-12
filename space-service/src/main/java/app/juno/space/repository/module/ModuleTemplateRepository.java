package app.juno.space.repository.module;

import java.util.UUID;

import org.springframework.data.jpa.repository.JpaRepository;

import app.juno.space.model.module.ModuleTemplate;

public interface ModuleTemplateRepository extends JpaRepository<ModuleTemplate, UUID> {

}
