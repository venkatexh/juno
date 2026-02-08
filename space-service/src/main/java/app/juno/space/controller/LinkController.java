package app.juno.space.controller;

import java.util.List;
import java.util.UUID;

import org.springframework.http.HttpStatus;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import app.juno.space.dto.LinkRequest;
import app.juno.space.model.Link;
import app.juno.space.service.LinkService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;



@RestController
@RequestMapping("/api/spaces/{spaceId}/links")
public class LinkController {
  @Autowired
  private LinkService linkService;

  @GetMapping
  public List<Link> getLinks(@PathVariable UUID spaceId) {
      return linkService.getLinks(spaceId);
  }

  @PostMapping
  @ResponseStatus(HttpStatus.CREATED)
  public void postMethodName(@RequestBody LinkRequest linkBody) {      
      linkService.createNewLink(linkBody);
  }
  
  
}
