package app.juno.space.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.http.HttpStatus;

import app.juno.space.dto.Member.MemberRequest;
import app.juno.space.service.MemberService;

@RestController
@RequestMapping(path="/api/spaces/member")
public class MemberController {
  @Autowired
  private MemberService memberService;

  @PostMapping
  @ResponseStatus(HttpStatus.CREATED)
  public String createNewMembership(@RequestBody MemberRequest memberRequest) {
    memberService.createNewMembership(memberRequest);
    return "Saved membership";
  }}
