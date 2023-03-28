package com.helpdesk.ticketbackend;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;




@CrossOrigin(origins = "http://localhost:8080/tickets")
@RestController
public class mainController {

	@Autowired
	private ticketRepository repo;
	
	@GetMapping("/tickets")
	public List<Ticket> getTickets(){
		return repo.findAll();
	}
	
	
	// (C)RUD -- Create
	@PostMapping("/tickets")
	@ResponseStatus(HttpStatus.CREATED)
	public Ticket create(@RequestBody Ticket avchar) {
		repo.save(avchar);
		return avchar;
	}
	
	// CRU(D) -- Delete
	@DeleteMapping("/tickets/{id}")
	@ResponseStatus(HttpStatus.NO_CONTENT)
	public void delete(@PathVariable("id") Long id) {
		repo.deleteById(id);
	}
	
	
	
}
