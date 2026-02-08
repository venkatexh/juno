package app.juno.space.dto;

import java.util.UUID;

import app.juno.space.model.LinkStatus;

public record LinkRequest (UUID spaceId, String title, String description, String url, UUID addedById, LinkStatus status) {
  
}
