package app.juno.space.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import app.juno.space.dto.Member.MemberRequest;
import app.juno.space.model.Member;
import app.juno.space.repository.MemberRepository;

@Service
public class MemberService {
  @Autowired
  private MemberRepository memberRepository;

  public void createNewMembership(MemberRequest memberRequest) {
    memberRepository.save(new Member(memberRequest.userId(), memberRequest.spaceId()));
  }
}
