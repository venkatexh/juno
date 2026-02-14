package app.juno.auth.service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.oauth2.jwt.Jwt;
import org.springframework.stereotype.Service;

import app.juno.auth.dto.UserProfile;
import app.juno.auth.dto.UserRequest;
import app.juno.auth.model.User;
import app.juno.auth.repository.UserRepository;
import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class UserService {
  @Autowired
  private UserRepository userRepository;

  public void createNewUser(UserRequest userRequest) {
    User user = new User();
    user.setEmail(userRequest.email());
    userRepository.save(user);
  }

  public UserProfile getOrCreateUser(Jwt jwt) {

    String keycloakId = jwt.getSubject();

    Optional<User> foundUser = userRepository.findById(keycloakId);

    if (foundUser.isPresent()) {
      return new UserProfile(foundUser.get().getId(), foundUser.get().getDisplayName(), foundUser.get().getEmail());
    } else {
      return createUserProfile(jwt);
    }
  }

  private UserProfile createUserProfile(Jwt jwt) {

    User user = new User();
    user.setId(jwt.getSubject());
    user.setEmail(jwt.getClaim("email"));
    user.setDisplayName(jwt.getClaim("name"));

    userRepository.save(user);

    return new UserProfile(jwt.getSubject(), jwt.getClaim("email"), jwt.getClaim("name"));
  }
}
