package app.juno.space.dto.Member;

import java.util.UUID;

public record MembershipRequest(UUID userId, UUID spaceId) {
  
}
