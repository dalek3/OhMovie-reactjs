package me.dalek.controller;

import java.sql.Connection;
import java.sql.DriverManager;

import org.junit.Test;

public class MysqlConnectTest {

	private static final String DRIVER = "com.mysql.cj.jdbc.Driver";
	private static final String URL = "jdbc:mysql://127.0.0.1:3308/movie?serverTimezone=Asia/Seoul&useSSL=false";
	private static final String ID = "study";
	private static final String PW = "study";
		
	@Test
	public void testConnection() throws Exception {
		Class.forName(DRIVER);
		
		try {
			Connection con = DriverManager.getConnection(URL, ID, PW);
			System.out.println(con);
		} catch(Exception e) {
			e.printStackTrace();
		}
		
		
	}
}
