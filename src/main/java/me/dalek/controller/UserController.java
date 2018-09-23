package me.dalek.controller;

import java.util.ArrayList;
import java.util.Collection;
import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import me.dalek.vo.UserVO;

@RestController
@RequestMapping("/api")
public class UserController {

	@GetMapping("/users")
	Collection<UserVO> user() throws Exception{
		List<UserVO> list = new ArrayList<>();
		UserVO vo = new UserVO();
		vo.setId("test");
		vo.setName("test");
		list.add(vo);
		list.add(vo);
		return list;
	}
}
