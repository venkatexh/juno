package app.juno.space.service;

import java.util.List;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import app.juno.space.dto.LinkRequest;
import app.juno.space.model.Link;
import app.juno.space.repository.LinkRepository;

@Service
public class LinkService {
  @Autowired
  private LinkRepository linkRepository;

  public void createNewLink(LinkRequest linkBody) {
    Link link = new Link();
    link.setSpaceId(linkBody.spaceId());
    link.setTitle(linkBody.title());
    link.setDescription(linkBody.description());
    link.setUrl(linkBody.url());
    link.setAddedById(linkBody.addedById());

    linkRepository.save(link);
  }

  public List<Link> getLinks(UUID spaceId) {
    return linkRepository.findAllBySpaceId(spaceId);
  }
}
