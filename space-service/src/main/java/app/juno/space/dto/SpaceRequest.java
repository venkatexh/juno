package app.juno.space.dto;

import java.util.UUID;

public record SpaceRequest(UUID id, String name, String description, String imageUrl, String visibility, String status, UUID ownerId, UUID chatId) {

}
