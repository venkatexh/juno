package app.juno.space.service;

import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

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
}
