package com.cts.training.mavenweb.entity;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;


/*@Getter
@Setter
@AllArgsConstructor
@ToString*/
public class Student {

	private Integer id;
	private String name;
	private String email;
	private Integer age;
	
	public Student() {}

	
	public Student(Integer id, String name, String email,Integer age) {
		
		this.id = id;
		this.name = name;
		this.email = email;
		this.age=age;
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
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public void setAge(Integer age) {
		this.age= age;
	}
	public Integer getAge() {
		return age;
	}
	@Override
	public String toString() {
		return "Student [id=" + id + ", name=" + name + ", email=" + email + ",age=" +age+ "]";
	}
	
	
	
}
