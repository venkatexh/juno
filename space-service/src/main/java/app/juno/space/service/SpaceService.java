package app.juno.space.service;

import java.util.List;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import app.juno.space.dto.SpaceRequest;
import app.juno.space.dto.SpaceResponse;
import app.juno.space.model.Space;
import app.juno.space.repository.SpaceRepository;

@Service
public class SpaceService {
  @Autowired
  private SpaceRepository spaceRepository;

  public void createNewSpace(SpaceRequest spaceRequest) {
    Space space = new Space();
    space.setName(spaceRequest.name());
    space.setDescription(spaceRequest.description());
    space.setImageUrl(spaceRequest.imageUrl());
    space.setVisibility(spaceRequest.visibility());
    space.setStatus(spaceRequest.status());
    space.setOwnerId(spaceRequest.ownerId());
    space.setChatId(spaceRequest.chatId());
    spaceRepository.save(space);
  }

  public List<SpaceResponse> getSpacesByOwnerId(UUID ownerId) {
    return spaceRepository.findAllByOwnerId(ownerId).stream().map(sp -> new SpaceResponse(sp.getId(), sp.getName(),
        sp.getDescription(), sp.getImageUrl(), sp.getVisibility(), sp.getStatus(), sp.getOwnerId(), sp.getChatId()))
        .toList();
  }
}