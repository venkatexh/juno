package app.juno.space.client;

import java.util.List;

import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.PostMapping;

import app.juno.space.dto.Member.UserProfile;

@FeignClient(name = "auth-service", url = "http://localhost:8081")
public interface AuthServiceClient {
  @PostMapping("/api/user/profiles/batch")
  List<UserProfile> getProfiles(List<String> userIds);
}
