package app.juno.space.dto;

import java.time.LocalDateTime;

public record TaskRequest(String title, String description, LocalDateTime deadline) {
  
}
