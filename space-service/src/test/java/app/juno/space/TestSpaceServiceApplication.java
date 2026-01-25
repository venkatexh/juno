package app.juno.space;

import org.springframework.boot.SpringApplication;

public class TestSpaceServiceApplication {

	public static void main(String[] args) {
		SpringApplication.from(SpaceServiceApplication::main).with(TestcontainersConfiguration.class).run(args);
	}

}
