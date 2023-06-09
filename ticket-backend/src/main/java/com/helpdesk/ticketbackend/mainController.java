package com.helpdesk.ticketbackend;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
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
	
	
	
	// C(R)UD -- Read One
	@GetMapping("/tickets/{id}")
	public Ticket readOne(@PathVariable("id") Long id) {
		return repo.findById(id).orElseThrow(() -> new TicketNotFoundException(id) );
	}
	
	
	
	// (C)RUD -- Create
	@PostMapping("/tickets")
	@ResponseStatus(HttpStatus.CREATED)
	public Ticket create(@RequestBody Ticket avchar) {
		avchar.setOpen(true);           //  <------ Setting Open value to TRUE to prevent cross out while adding in Ticket-List Table
		repo.save(avchar);
		return avchar;
	}
	
	@PutMapping("/tickets/{id}")
	 public String editTicket(@PathVariable long id,@RequestBody Ticket newTicket) {
	 Ticket editTicket = repo.findById(id).get();
	 editTicket.setResolution(newTicket.getResolution());
	 editTicket.setClosedby(newTicket.getClosedby());
	 editTicket.setOpen(false);
	 repo.save(editTicket);
	 return "Ticket at " + id+" updated";
	 }
	
	// CRU(D) -- Delete
	@DeleteMapping("/tickets/{id}")
	@ResponseStatus(HttpStatus.NO_CONTENT)
	public void delete(@PathVariable("id") Long id) {
		repo.deleteById(id);
	}
	
	
	
}
