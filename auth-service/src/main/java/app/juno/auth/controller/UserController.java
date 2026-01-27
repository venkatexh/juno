package app.juno.auth.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import app.juno.auth.dto.UserRequest;
import app.juno.auth.service.UserService;

@RestController
@RequestMapping("/api/user")
public class UserController {
  
  @Autowired
  private UserService userService;

  @PostMapping
  @PreAuthorize("permitAll()")
  public String createNewUser(@RequestBody UserRequest userRequest) {
    userService.createNewUser(userRequest);
    return "User created";
  }
}
