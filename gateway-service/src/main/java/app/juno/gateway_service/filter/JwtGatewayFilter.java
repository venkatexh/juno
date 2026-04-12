package app.juno.gateway_service.filter;

import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.http.HttpCookie;
import org.springframework.http.HttpStatus;
import org.springframework.http.server.reactive.ServerHttpRequest;
import org.springframework.stereotype.Component;
import org.springframework.web.server.ServerWebExchange;
import org.springframework.cloud.gateway.filter.GlobalFilter;
import org.springframework.cloud.gateway.filter.GatewayFilterChain;
import app.juno.gateway_service.utils.JwtUtil;
import io.jsonwebtoken.Claims;
import reactor.core.publisher.Mono;

@Component
public class JwtGatewayFilter implements GlobalFilter {

  @Autowired
  private JwtUtil jwtUtil;

  @Override
  public Mono<Void> filter(ServerWebExchange exchange, GatewayFilterChain chain) {

    System.out.println(">>> GATEWAY FILTER HIT");

    ServerHttpRequest request = exchange.getRequest();

    HttpCookie cookie = request.getCookies().getFirst("accessToken");

    if (cookie == null) {
      return unauthorized(exchange);
    }

    try {
      Claims claims = jwtUtil.validateToken(cookie.getValue());
      String userId = String.valueOf(claims.get("userId"));

      ServerHttpRequest mutatedRequest = request.mutate()
          .header("X-User-Id", userId)
          .build();

      return chain.filter(exchange.mutate().request(mutatedRequest).build());

    } catch (Exception e) {
      return unauthorized(exchange);
    }
  }

  private Mono<Void> unauthorized(ServerWebExchange exchange) {
    System.out.println(">>> UNAUTHORIZED IN GATEWAY");
    exchange.getResponse().setStatusCode(HttpStatus.UNAUTHORIZED);
    return exchange.getResponse().setComplete();
  }
}