package app.juno.space.dto.Module;

import java.util.UUID;

import app.juno.space.model.module.ModuleType;
import app.juno.space.model.module.SubscriptionType;

public record ModuleTemplateResponse(UUID id, String name, String description, ModuleType moduleType,
        SubscriptionType subscriptionType, String imageURL, Boolean systemTemplate, UUID addedByUserId) {

}
