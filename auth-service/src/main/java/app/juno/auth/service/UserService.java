package app.juno.auth.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

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
    user.setPassword(userRequest.password());
    userRepository.save(user);
  }
}
