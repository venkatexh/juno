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
@RequestMapping("/api/modules")
public class ModuleController {

  @Autowired
  private ModuleService moduleService;

  @PostMapping
  public ModuleResponse createNewModule(@RequestBody ModuleRequest moduleRequest) {
    return moduleService.createModule(moduleRequest);
  }

  @GetMapping("/{spaceId}")
  public List<ModuleResponse> getAllModules(@PathVariable UUID spaceId) {
    return moduleService.getAllModulesBySpaceId(spaceId);
  }
}
