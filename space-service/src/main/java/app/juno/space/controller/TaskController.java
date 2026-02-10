package app.juno.space.controller;

import java.util.List;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import app.juno.space.dto.TaskRequest;
import app.juno.space.dto.TaskResponse;
import app.juno.space.model.Task;
import app.juno.space.service.TaskService;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

@RestController
@RequestMapping("/api/spaces/{spaceId}/tasks")
public class TaskController {

  @Autowired
  private TaskService taskService;

  @GetMapping
  public List<TaskResponse> getMethodName(@PathVariable UUID spaceId) {
    return taskService.getTasksForSpace(spaceId);
  }

  @PostMapping
  public Task postMethodName(@RequestBody TaskRequest taskBody, @PathVariable UUID spaceId) {
    return taskService.createTask(taskBody, spaceId);
  }

}
