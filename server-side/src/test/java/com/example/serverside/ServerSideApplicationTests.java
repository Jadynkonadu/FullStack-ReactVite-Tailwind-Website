package com.example.serverside;

import static org.junit.jupiter.api.Assertions.assertEquals;

import java.util.List;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import com.example.serverside.Controllers.VisitorController;
import com.example.serverside.Models.Visitor;

@SpringBootTest
class ServerSideApplicationTests {

	@Autowired
	private VisitorController visitorController = new VisitorController();

	@Test
	public void testGetVisitorByName() {
		String name = "Hubert Gigglehumpty";

		List<Visitor> result = visitorController.getVisitorByName(name);

		assertEquals(1, result.size(), "Expected one visitor to be returned");
		assertEquals(name, result.get(0).getName(), "Expected name to match");
	}

}
