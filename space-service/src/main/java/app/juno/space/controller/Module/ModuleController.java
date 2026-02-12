package app.juno.space.controller.Module;

import java.util.List;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import app.juno.space.dto.Module.ModuleRequest;
import app.juno.space.dto.Module.ModuleResponse;
import app.juno.space.service.module.ModuleService;

@RestController
@RequestMapping("/api")
public class ModuleController {

  @Autowired
  private ModuleService moduleService;

  @PostMapping("/spaces/{spaceId}/modules")
  public ModuleResponse createNewModule(@RequestBody ModuleRequest moduleRequest, @PathVariable UUID spaceId) {
    return moduleService.createModule(moduleRequest, spaceId);
  }

  @GetMapping("/modules/{moduleId}")
  public ModuleResponse getModuleById(@PathVariable UUID moduleId) {
    return moduleService.getModule(moduleId);
  }

  @GetMapping("/spaces/{spaceId}/modules")
  public List<ModuleResponse> getAllModules(@PathVariable UUID spaceId) {
    return moduleService.getAllModulesBySpaceId(spaceId);
  }
}
