package com.cts.training.lib;

public class Swaping {
	public static void main(String args[])
	{
		int num1=5;
		int num2=10;
		int temp;
		System.out.println("before swaping:" +num1);
		System.out.println("before swaping:" +num2);
		temp=num1;
		num1=num2;
		num2=temp;
		
		System.out.println("after swaping:" +num1);
		System.out.println("after swaping:" +num2);
	}

}
