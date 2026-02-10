package app.juno.space.service;

import java.util.List;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import app.juno.space.dto.TaskRequest;
import app.juno.space.dto.TaskResponse;
import app.juno.space.model.Task;
import app.juno.space.repository.TaskRepository;

@Service
public class TaskService {

  @Autowired
  private TaskRepository taskRepository;

  public Task createTask(TaskRequest taskRequest, UUID spaceId) {
    Task task = new Task();
    task.setTitle(taskRequest.title());
    task.setDescription(taskRequest.description());
    task.setDeadline(taskRequest.deadline());
    task.setSpaceId(spaceId);
    taskRepository.save(task);
    return task;
  }

  public List<TaskResponse> getTasksForSpace(UUID spaceId) {
    return taskRepository.findAllBySpaceId(spaceId).stream().map(
        tsk -> new TaskResponse(tsk.getId(), tsk.getTitle(), tsk.getDescription(), tsk.getDeadline(), tsk.getStatus()))
        .toList();
  }

}
