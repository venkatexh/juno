package app.juno.space.controller.Module;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import app.juno.space.dto.Module.ModuleTemplateRequest;
import app.juno.space.dto.Module.ModuleTemplateResponse;
import app.juno.space.service.module.ModuleTemplateService;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

@RestController
@RequestMapping("/api/modules/templates")
public class ModuleTemplateController {

  @Autowired
  private ModuleTemplateService moduleTemplateService;

  ModuleTemplateController(ModuleTemplateService moduleTemplateService) {
    this.moduleTemplateService = moduleTemplateService;
  }

 @GetMapping
  public List<ModuleTemplateResponse> getAllModuleTemplates() {
    return moduleTemplateService.getAllModuleTemplates();
  }

  @PostMapping
  public String createModuleTemplate(@RequestBody ModuleTemplateRequest moduleTemplateRequest) {

    return moduleTemplateService.createdModuleTemplate(moduleTemplateRequest);
  }

}
