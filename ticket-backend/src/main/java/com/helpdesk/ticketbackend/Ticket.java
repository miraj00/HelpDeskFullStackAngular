package com.helpdesk.ticketbackend;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="ticket")
public class Ticket {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	private String detail;
	private String resolution;
	private  boolean open;
	private String openedby;
	private String closedby;
	
	
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public String getDetail() {
		return detail;
	}
	public void setDetail(String detail) {
		this.detail = detail;
	}
	public String getResolution() {
		return resolution;
	}
	public void setResolution(String resolution) {
		this.resolution = resolution;
	}
	public boolean isOpen() {
		return open;
	}
	public void setOpen(boolean open) {
		this.open = open;
	}
	public String getOpenedby() {
		return openedby;
	}
	public void setOpenedby(String openedby) {
		this.openedby = openedby;
	}
	public String getClosedby() {
		return closedby;
	}
	public void setClosedby(String closedby) {
		this.closedby = closedby;
	}
	
		
	public Ticket() {
		super();
	}
	
	public Ticket(String detail, String resolution, boolean open, String openedby, String closedby) {
		super();
		this.detail = detail;
		this.resolution = resolution;
		this.open = open;
		this.openedby = openedby;
		this.closedby = closedby;
	}
	
	public Ticket(Long id, String detail, String resolution, boolean open, String openedby, String closedby) {
		super();
		this.id = id;
		this.detail = detail;
		this.resolution = resolution;
		this.open = open;
		this.openedby = openedby;
		this.closedby = closedby;
	}

	
	
	
	
	
	
	
	
	
	
	
}
