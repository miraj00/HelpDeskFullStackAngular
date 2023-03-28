package com.helpdesk.ticketbackend;

import org.springframework.data.jpa.repository.JpaRepository;

public interface ticketRepository extends JpaRepository<ticket, Long> {

	
	
}
