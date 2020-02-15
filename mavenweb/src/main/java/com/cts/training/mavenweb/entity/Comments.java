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
@Table(name = "comments")
public class Comments {
	@Id // primary key
	@GeneratedValue(strategy = GenerationType.IDENTITY) // unique key and Auti Increment
	private Integer id;
	
	@Column
	private Integer mediaid;
	
	@Column
	private Integer userid;
	
	@Column
	private Integer comment;

	@Column
	private Integer createdon;
	
	public Comments(Integer id,Integer mediaid, Integer userid, Integer comment, Integer createdon) {
		this.id = id;
		this.mediaid=mediaid;
		this.userid = userid;
		this.comment = comment;
		this.createdon = createdon;
	}

	/**
	 * @return the id
	 */
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

		public Integer getComment() {
		return comment;
	}

		public void setComment(Integer comment) {
		this.comment = comment;
	}

	
	public Integer getCreatedon() {
		return createdon;
	}

		public void setCreatedon(Integer createdon) {
		this.createdon = createdon;
	}

		@Override
		public String toString() {
			return "Comments [id=" + id + ", mediaid=" + mediaid + ", userid=" + userid + " comment=" + comment + ", createdon=" + createdon +"]";
		}
}

