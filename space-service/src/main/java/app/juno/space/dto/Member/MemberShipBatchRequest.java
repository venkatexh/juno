package app.juno.space.dto.Member;

import java.util.List;
import java.util.UUID;

public record MemberShipBatchRequest(List<UUID> userIds, UUID spaceId) {

}
