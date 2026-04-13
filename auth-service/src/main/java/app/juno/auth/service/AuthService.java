package app.juno.auth.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import app.juno.auth.dto.AuthRequest;
import app.juno.auth.kafka.KafkaProducer;
import app.juno.auth.model.User;
import app.juno.auth.repository.UserRepository;
import app.juno.auth.util.JwtUtil;

@Service
public class AuthService {

  @Autowired
  private UserRepository userRepository;

  @Autowired
  private JwtUtil jwtUtil;

  @Autowired
  private KafkaProducer kafkaProducer;

  private final BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();

  public void signup(AuthRequest req) {
    String hash = encoder.encode(req.getPassword());

    User user = new User();
    user.setEmail(req.getEmail());
    user.setPasswordHash(hash);
    userRepository.save(user);

    kafkaProducer.sendUserCreated(user.getId().toString(), user.getEmail());
  }

  public String login(AuthRequest req) {
    User user = userRepository.findByEmail(req.getEmail()).orElseThrow(() -> new RuntimeException("Invalid request"));

    if (!encoder.matches(req.getPassword(), user.getPasswordHash())) {
      throw new RuntimeException("Invalid request");
    }

    return jwtUtil.generateToken(user.getId(), user.getEmail());
  }

}
