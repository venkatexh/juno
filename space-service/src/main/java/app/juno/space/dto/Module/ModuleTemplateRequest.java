package app.juno.space.dto.Module;

import java.util.UUID;

import app.juno.space.model.module.ModuleType;
import app.juno.space.model.module.SubscriptionType;

public record ModuleTemplateRequest(String name, ModuleType moduleType, SubscriptionType subscriptionType,
        String imageURL, String description, Boolean systemTemplate, UUID addedByUserId) {

}
