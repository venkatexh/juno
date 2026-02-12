package app.juno.auth.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import app.juno.auth.dto.UserProfile;
import app.juno.auth.dto.UserRequest;
import app.juno.auth.repository.UserRepository;
import app.juno.auth.service.UserService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

@Slf4j
@RestController
@RequestMapping("/api/user")
public class UserController {

  @Autowired
  private UserService userService;
  @Autowired
  private UserRepository userRepository;

  @PostMapping
  @PreAuthorize("permitAll()")
  public String createNewUser(@RequestBody UserRequest userRequest) {
    userService.createNewUser(userRequest);
    return "User created";
  }

  @PostMapping("/profiles/batch")
  @PreAuthorize("permitAll()")
  public List<UserProfile> getUserProfiles(@RequestBody List<String> userIds) {
    log.info("Getting profiles for {}", userIds);
    List<UserProfile> profiles = userRepository.findByIdIn(userIds)
        .stream()
        .map(u -> new UserProfile(u.getId(), u.getDisplayName(), u.getEmail()))
        .toList();
    log.info("profiles {}", profiles);
    return profiles;

  }

  @GetMapping("/search/email/{email}")
  public UserProfile getUserByEmail(@PathVariable String email) {
    return userRepository.findByEmail(email);
  }

}
