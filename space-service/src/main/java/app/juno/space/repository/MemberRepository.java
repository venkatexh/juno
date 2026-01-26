package app.juno.space.repository;

import java.util.UUID;

import org.springframework.data.jpa.repository.JpaRepository;

import app.juno.space.model.Member;

public interface MemberRepository extends JpaRepository <Member, UUID> {
  
}
