package app.juno.space.controller;

import java.util.List;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import app.juno.space.dto.Member.MemberProfile;
import app.juno.space.dto.Member.MembershipRequest;
import app.juno.space.model.Space;
import app.juno.space.repository.SpaceRepository;
import app.juno.space.service.MembershipService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestParam;

@RestController
@RequestMapping(path = "/api/spaces")
public class MemberController {

  @Autowired
  private MembershipService membershipService;
  @Autowired
  private SpaceRepository spaceRepository;

  @PostMapping("/member")
  @ResponseStatus(HttpStatus.CREATED)
  public String createNewMembership(@RequestBody MembershipRequest memberRequest) {
    Space space = spaceRepository.findById(memberRequest.spaceId()).get();
    membershipService.createNewMembership(memberRequest.userId(), space);
    return "Saved membership";
  }

  @GetMapping(params = "spaceId")
  public ResponseEntity<?> getMembershipsBySpaceId(@RequestParam UUID spaceId,
      @RequestParam(defaultValue = "false") Boolean userIdOnly) {
    return userIdOnly ? ResponseEntity.ok(membershipService.getUserIdsBySpaceId(spaceId))
        : ResponseEntity.ok(membershipService.getMembershipsBySpaceId(spaceId));
  }

  @GetMapping("/{spaceId}/members")
  public List<MemberProfile> getMemberProfiles(@PathVariable UUID spaceId) {
    return membershipService.getMemberProfiles(spaceId);
  }

}
