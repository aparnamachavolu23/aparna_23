package com.cts.training.mavenweb.entity;

import java.time.LocalDateTime;

import javax.persistence.Column;
import javax.persistence.Id;
import javax.persistence.Table;

import org.hibernate.annotations.CreationTimestamp;

@Table(name = "actions")

public class Actions {
	
	    @Id
	    private Integer Id;

		@Column
		private Integer mediaId;
		
		@Column
		private Integer userId;
		
		@Column
		private boolean status;
		
		@CreationTimestamp
		@Column
		private LocalDateTime createdon;

		
		public  Actions() {}
		
		public Actions(Integer id, Integer mediaId,Integer userId, boolean status, LocalDateTime createdon ) {
				
				this.Id = id;
				this.mediaId=mediaId;
				this.userId = userId;
				this.status=status;
				this.createdon =createdon;
				
			}

		public Integer getId() {
			return Id;
		}

		public void setId(Integer id) {
			Id = id;
		}

		public Integer getMediaId() {
			return mediaId;
		}

		public void setMediaId(Integer mediaId) {
			this.mediaId = mediaId;
		}

		public Integer getUserId() {
			return userId;
		}

		public void setUserId(Integer userId) {
			this.userId = userId;
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
			return "Student [id=" + Id + ", mediaid=" + mediaId + ",userid=" + userId +", status=" + status + ",createdon=" + createdon + "]";
		}

}
