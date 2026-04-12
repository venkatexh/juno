package app.juno.space.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RestController;

@RestController

public class TestController {
  @GetMapping("/api/test")
  public String test(@RequestHeader("X-User-Id") String userId) {
    return "User: " + userId;
  }
}
