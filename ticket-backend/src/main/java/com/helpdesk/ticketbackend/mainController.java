package com.helpdesk.ticketbackend;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class mainController {

	@Autowired
	private ticketRepository repo;
	
}
