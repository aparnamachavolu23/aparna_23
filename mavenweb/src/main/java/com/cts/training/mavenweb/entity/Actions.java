package com.cts.training.mavenweb.entity;

import java.time.LocalDateTime;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
/*@Getter
@Setter
@AllArgsConstructor
@ToString*/

// to convert into JPA entity
@Entity // Registers the class as entity
// Define the mappings
@Table(name = "users")
public class Actions {
	@Id // primary key
	@GeneratedValue(strategy = GenerationType.IDENTITY) // unique key and Auti Increment
	private Integer id;
	
	@Column
	private Integer mediaid;

	@Column
	private Integer userid;

	@Column
	private boolean status;
	
	@Column
	private LocalDateTime createdon;


public Actions() {}


public Actions(Integer id,Integer userid, Integer mediaid, boolean status, LocalDateTime createdon) {
	this.id = id;
	this.userid=userid;
	this.mediaid=mediaid;
	this.status=status;
	this.createdon=createdon;
}


public Integer getId() {
	return id;
}


public void setId(Integer id) {
	this.id = id;
}


public Integer getMediaid() {
	return mediaid;
}


public void setMediaid(Integer mediaid) {
	this.mediaid = mediaid;
}


public Integer getUserid() {
	return userid;
}


public void setUserid(Integer userid) {
	this.userid = userid;
}


public boolean isStatus() {
	return status;
}



public void setStatus(boolean status) {
	this.status = status;
}


public LocalDateTime getCreatedon() {
	return createdon;
}


public void setCreatedon(LocalDateTime createdon) {
	this.createdon = createdon;
}
@Override
public String toString() {
	return "Actions [id=" + id + ", userid=" + userid + ", mediaid=" + mediaid + " status=" + status + "]";
}
}
