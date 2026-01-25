package app.juno.space.controller;

import app.juno.space.service.SpaceService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import app.juno.space.dto.SpaceRequest;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.http.HttpStatus;

@RestController
@RequestMapping(path="/api/spaces")
public class SpaceController {
  @Autowired
  private SpaceService spaceService;

  @PostMapping
  @ResponseStatus(HttpStatus.CREATED)
  public String createNewSpace(@RequestBody SpaceRequest spaceRequest) {
    spaceService.createNewSpace(spaceRequest);
    return "Saved space";
  }

}
