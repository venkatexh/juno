package app.juno.space.dto.Member;

import java.util.UUID;

import app.juno.space.model.Space;

public record MembershipResponse(UUID userId, Space space) {
  
}
