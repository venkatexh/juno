package app.juno.space.kafka;

import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.kafka.annotation.KafkaListener;
import org.springframework.stereotype.Component;

import app.juno.space.service.SpaceService;
import lombok.extern.slf4j.Slf4j;

@Slf4j
@Component
public class KafkaConsumer {

  @Autowired
  private SpaceService spaceService;

  @KafkaListener(topics = "user-created")
  public void onUserCreated(UUID userId) {
    log.info("Received USER_CREATED event for {}", userId);

    if (spaceService.defaultSpaceExists(userId)) {
      log.info("Default space already exists for user {}", userId);
      return;
    }

    try {
      spaceService.createDefaultSpace(userId);
      log.info("Successsfully created default space for user {}", userId);
    } catch (Exception e) {
      log.error("Failed to create default space for user {}", userId, e);
    }
  }
}
