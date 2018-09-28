package me.dalek.controller;

import java.sql.Connection;
import java.sql.DriverManager;

import org.junit.Test;

public class DBConnectTest {
	private static final String DRIVER 	= "com.mysql.cj.jdbc.Driver";
	private static final String URL		= "jdbc:mysql://127.0.0.1:3306/ohmovie?serverTimezone=Asia/Seoul&useSSL=true";
	private static final String USER	= "movie";
	private static final String PW		= "movie";

	@Test
	public void testConnection() throws Exception {
		Class.forName(DRIVER);
		
		try {
			Connection con = DriverManager.getConnection(URL, USER, PW);
			System.out.println(con);
		} catch(Exception e) {
			e.printStackTrace();
		}
	}

}
