package app.juno.space.service.module;

import app.juno.space.repository.module.ModuleRepository;
import app.juno.space.repository.module.ModuleTemplateRepository;

import java.util.List;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import app.juno.space.dto.Module.ModuleRequest;
import app.juno.space.dto.Module.ModuleResponse;
import app.juno.space.model.module.Module;
import app.juno.space.model.module.ModuleType;

@Service
public class ModuleService {

  @Autowired
  private ModuleRepository moduleRepository;
  @Autowired
  private ModuleTemplateRepository moduleTemplateRepository;

  public ModuleResponse getModule(UUID moduleId) {
    Module module = moduleRepository.findById(moduleId).get();
    return new ModuleResponse(module.getId(),
        module.getName(),
        module.getSpaceId(),
        module.getTemplateId(),
        module.getModuleType(),
        module.getCreatedByUserId(),
        module.getCreatedAt(),
        module.getUpdatedAt());
  }

  public ModuleResponse createModule(ModuleRequest moduleRequest, UUID spaceId) {
    Module module = new Module();

    module.setName(moduleRequest.name());
    module.setTemplateId(moduleRequest.templateId());
    module.setCreatedByUserId(moduleRequest.createdByUserId());

    module.setSpaceId(spaceId);

    ModuleType moduleType = moduleTemplateRepository.findById(moduleRequest.templateId()).get().getModuleType();
    module.setModuleType(moduleType);

    moduleRepository.save(module);

    Module savedModule = moduleRepository.findById(module.getId()).get();
    return new ModuleResponse(savedModule.getId(),
        savedModule.getName(),
        savedModule.getSpaceId(),
        savedModule.getTemplateId(),
        savedModule.getModuleType(),
        savedModule.getCreatedByUserId(),
        savedModule.getCreatedAt(),
        savedModule.getUpdatedAt());
  }

  public List<ModuleResponse> getAllModulesBySpaceId(UUID spaceId) {
    return moduleRepository.findAllBySpaceId(spaceId).stream()
        .map(m -> new ModuleResponse(m.getId(),
            m.getName(),
            m.getSpaceId(),
            m.getTemplateId(),
            m.getModuleType(),
            m.getCreatedByUserId(),
            m.getCreatedAt(),
            m.getUpdatedAt()))
        .toList();
  }
}
