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
public class Users {
	@Id // primary key
	@GeneratedValue(strategy = GenerationType.IDENTITY) // unique key and Auti Increment
	private Integer id;
	
	@Column(name = "name")
	private String name;
	
	@Column
	private String password;
	
	@Column
	private String email;
	
	@Column
	private String profile;
	
	@Column
	private LocalDateTime createdon ;
	
	@Column
	private LocalDateTime updatedon ;
	
	@Column
	private LocalDateTime enabled ;
	
	public Users() {}

	
	public Users(Integer id, String name, String email,String profile, LocalDateTime createdon, LocalDateTime updatedon, LocalDateTime enabled) {
		
		this.id = id;
		this.name = name;
		this.email = email;
		this.profile = profile;
		this.createdon = createdon;
		this.updatedon = updatedon;
		this.enabled = enabled;
	}
	public Integer getId() {
		return id;
	}
	public void setId(Integer id) {
		this.id = id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}

	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String get() {
		return email;
	}
	public void setProfile(String profile) {
		this.profile = profile;
	}
	
	public LocalDateTime getCreatedon() {
		return createdon;
	}


	/**
	 * @param createdOn the createdOn to set
	 */
	public void setCreatedon(LocalDateTime createdon) {
		this.createdon = createdon;
	}


		public LocalDateTime getUpdatedon() {
		return updatedon;
	}


	
	public void setUpdatedon(LocalDateTime updatedon) {
		this.updatedon = updatedon;
	}

	public LocalDateTime getEnabled() {
		return enabled;
	}


		public void setEnabled(LocalDateTime enabled) {
		this.enabled = enabled;
	}
	


	
	@Override
	public String toString() {
		return "Student [id=" + id + ", name=" + name + ", email=" + email + " profile=" + profile + ", createdon=" + createdon +", updatedon=" + updatedon +", enabled=" + enabled +" ]";
	}
}


	