package app.juno.space.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.http.HttpStatus;

import app.juno.space.dto.Member.MembershipRequest;
import app.juno.space.model.Space;
import app.juno.space.repository.SpaceRepository;
import app.juno.space.service.MembershipService;

@RestController
@RequestMapping(path = "/api/spaces/member")
public class MemberController {

  @Autowired
  private MembershipService membershipService;
  @Autowired
  private SpaceRepository spaceRepository;

  @PostMapping
  @ResponseStatus(HttpStatus.CREATED)
  public String createNewMembership(@RequestBody MembershipRequest memberRequest) {
    Space space = spaceRepository.findById(memberRequest.spaceId()).get();
    membershipService.createNewMembership(memberRequest.userId(), space);
    return "Saved membership";
  }
}
