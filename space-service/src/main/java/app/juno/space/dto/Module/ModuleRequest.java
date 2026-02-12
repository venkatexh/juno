package app.juno.space.dto.Module;

import java.util.UUID;

import app.juno.space.model.module.ModuleType;

public record ModuleRequest(String name, UUID spaceId, UUID templateId, UUID createdByUserId, ModuleType moduleType) {

}
