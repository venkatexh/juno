package app.juno.space.dto.Module;

import java.time.Instant;
import java.util.UUID;

import app.juno.space.model.module.ModuleType;

public record ModuleResponse(
    UUID id,
    String name,
    UUID spaceId,
    UUID templateId,
    ModuleType moduleType,
    UUID createdByUserId,
    Instant createdAt,
    Instant updatedAt) {

}
