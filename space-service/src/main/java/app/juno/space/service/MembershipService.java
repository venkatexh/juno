package app.juno.space.service;

import java.util.List;
import java.util.Map;
import java.util.UUID;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import app.juno.space.client.AuthServiceClient;
import app.juno.space.dto.Member.MemberProfile;
import app.juno.space.dto.Member.UserId;
import app.juno.space.dto.Member.UserProfile;
import app.juno.space.model.Membership;
import app.juno.space.model.Space;
import app.juno.space.repository.MembershipRepository;
import lombok.extern.slf4j.Slf4j;

@Slf4j
@Service
public class MembershipService {

  @Autowired
  private MembershipRepository membershipRepository;
  @Autowired
  private AuthServiceClient authServiceClient;

  public void createNewMembership(UUID userId, Space space) {
    Membership membership = new Membership(userId, space);
    membershipRepository.save(membership);
  }

  public List<UserId> getUserIdsBySpaceId(UUID spaceId) {
    return membershipRepository.findUserIdsBySpaceId(spaceId);
  }

  public List<Membership> getMembershipsBySpaceId(UUID spaceId) {
    return membershipRepository.findBySpaceId(spaceId).stream()
        .map(memb -> new Membership(memb.getUserId(), memb.getSpace()))
        .toList();
  }

  public List<MemberProfile> getMemberProfiles(UUID spaceId) {
    List<Membership> memberships = membershipRepository.findBySpaceId(spaceId);

    List<String> userIds = memberships.stream()
        .map(m -> m.getUserId().toString())
        .toList();

    List<UserProfile> profiles = authServiceClient.getProfiles(userIds);

    Map<String, UserProfile> profileMap = profiles.stream().collect(Collectors.toMap(UserProfile::getId, p -> p));

    return memberships.stream().map(m -> {
      UserProfile p = profileMap.get(m.getUserId().toString());
      if (p == null) {
        log.warn("No profile found for user {}", m.getUserId());
        return null;
      }
      return new MemberProfile(m.getUserId(), p.getDisplayName(), p.getEmail());

    }).toList();
  }
}
