package app.juno.space.dto.Member;

import java.util.UUID;

public record MemberRequest(UUID userId, UUID spaceId) {
  
}
