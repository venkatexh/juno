package app.juno.auth.dto;

public record SignupRequest(String username,
    String email,
    String password) {
}
