package me.dalek.dao;

import java.util.Date;

import me.dalek.dto.LoginDTO;
import me.dalek.vo.UserVO;

public interface UserDAO {
	
	public UserVO login(LoginDTO dto) throws Exception;
	
	public void keepLogin(String uid, String sessionId, Date next);
	
	public UserVO checkUserWithSessionKey(String value);

}
