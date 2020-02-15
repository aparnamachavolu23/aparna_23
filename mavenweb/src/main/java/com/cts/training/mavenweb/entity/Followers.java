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
@Table(name = "followers")
public class Followers {
	@Id // primary key
	@GeneratedValue(strategy = GenerationType.IDENTITY) // unique key and Auti Increment
	private Integer id;
	
	@Column
	private Integer userid;

	@Column
	private Integer followerid;
	
public Followers(Integer id, Integer userid, Integer followerid) {
		this.id = id;
		this.userid = userid;
		this.followerid = followerid;
	}

		public Integer getId() {
		return id;
	}

		public void setId(Integer id) {
		this.id = id;
	}

	
	public Integer getUserid() {
		return userid;
	}

	
	public void setUserid(Integer userid) {
		this.userid = userid;
	}

		public Integer getFollowerid() {
		return followerid;
	}

		public void setFollowerid(Integer followerid) {
		this.followerid = followerid;
	}
		@Override
		public String toString() {
			return "Followers [id=" + id + ", userid=" + userid + ", followerid=" + followerid + " ]";
		}
		}


