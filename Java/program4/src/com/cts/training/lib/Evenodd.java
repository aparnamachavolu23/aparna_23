package com.cts.training.lib;

import java.util.Scanner;

public class Evenodd {
	public static void main(String args[])
	{
		
		Scanner sc=new Scanner(System.in);
		System.out.println("enter a no");
		
		int num=sc.nextInt();
		if(num%2==0)
			System.out.println("the no is even");
			else
				System.out.println("the no is odd");
	}

}
