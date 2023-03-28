package com.helpdesk.ticketbackend;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="bookmark")
public class Bookmark {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	private String username;
	private String detail;
	private Long bookmarkid;
	
	
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public String getUsername() {
		return username;
	}
	public void setUsername(String username) {
		this.username = username;
	}
	public String getDetail() {
		return detail;
	}
	public void setDetail(String detail) {
		this.detail = detail;
	}
	public Long getBookmarkId() {
		return bookmarkid;
	}
	public void setBookmarkId(Long bookmarkid) {
		this.bookmarkid = bookmarkid;
	}
	
	
	public Bookmark() {
		super();
	}
	
	
	public Bookmark(String username, String detail, Long bookmarkid) {
		super();
		this.username = username;
		this.detail = detail;
		this.bookmarkid = bookmarkid;
	}
	
	
	public Bookmark(Long id, String username, String detail, Long bookmarkid) {
		super();
		this.id = id;
		this.username = username;
		this.detail = detail;
		this.bookmarkid = bookmarkid;
	}
	
	
	
	
	
}
