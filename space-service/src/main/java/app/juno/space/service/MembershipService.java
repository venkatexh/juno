package app.juno.space.service;

import java.util.List;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import app.juno.space.dto.Member.UserId;
import app.juno.space.model.Membership;
import app.juno.space.model.Space;
import app.juno.space.repository.MembershipRepository;

@Service
public class MembershipService {
  @Autowired
  private MembershipRepository membershipRepository;

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
}
