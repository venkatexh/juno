package app.juno.space.dto;

import java.time.LocalDateTime;
import java.util.UUID;

import app.juno.space.model.TaskStatus;

public record TaskResponse(
  UUID id,
  String title,
  String description,
  LocalDateTime deadline,
  TaskStatus status
) {
  
}
