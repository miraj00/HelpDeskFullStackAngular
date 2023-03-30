package com.helpdesk.ticketbackend;
public class TicketNotFoundException extends RuntimeException {

	private static final long serialVersionUID = 1L;

	public TicketNotFoundException(Long id) {
		super("Could not find book with id " + id);
	}
}