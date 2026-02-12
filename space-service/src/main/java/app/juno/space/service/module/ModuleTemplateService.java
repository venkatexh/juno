package app.juno.space.service.module;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import app.juno.space.dto.Module.ModuleTemplateRequest;
import app.juno.space.dto.Module.ModuleTemplateResponse;
import app.juno.space.model.module.ModuleTemplate;
import app.juno.space.repository.module.ModuleTemplateRepository;

@Service
public class ModuleTemplateService {

  @Autowired
  private ModuleTemplateRepository moduleTemplateRepository;

  public String createdModuleTemplate(ModuleTemplateRequest moduleTemplateRequest) {
    ModuleTemplate moduleTemplate = new ModuleTemplate();

    moduleTemplate.setName(moduleTemplateRequest.name());
    moduleTemplate.setDescription(moduleTemplateRequest.description());
    moduleTemplate.setModuleType(moduleTemplateRequest.moduleType());
    moduleTemplate.setSubscriptionType(moduleTemplateRequest.subscriptionType());
    moduleTemplate.setImageURL(moduleTemplateRequest.imageURL());
    moduleTemplate.setPublished(false);
    moduleTemplate.setAddedByUserId(moduleTemplateRequest.addedByUserId());

    if (moduleTemplateRequest.systemTemplate() != true) {
      moduleTemplate.setSystemTemplate(false);
    } else {
      moduleTemplate.setSystemTemplate(true);
    }

    moduleTemplateRepository.save(moduleTemplate);
    return "Module template saved";
  }

  public List<ModuleTemplateResponse> getAllModuleTemplates() {
    return moduleTemplateRepository.findAll().stream().map(mt -> new ModuleTemplateResponse(mt.getId(), mt.getName(),
        mt.getDescription(), mt.getModuleType(), mt.getSubscriptionType(), mt.getImageURL(), mt.getSystemTemplate(),
        mt.getAddedByUserId()))
        .toList();
  }
}
