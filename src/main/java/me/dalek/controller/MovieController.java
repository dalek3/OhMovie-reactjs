package me.dalek.controller;

import java.util.HashMap;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import kr.or.kobis.kobisopenapi.consumer.rest.KobisOpenAPIRestService;
import me.dalek.domain.MovieVO;


@Controller
@RequestMapping("/movie/*")
public class MovieController {
	
	@Autowired
	private HttpServletRequest request;
	
	@RequestMapping("/list")
	public void list() throws Exception {
		
	}
	
	@ResponseBody
	@RequestMapping("/api/list")
	public Map<String, Object> restList(MovieVO vo, Model model) throws Exception {
		// 파라메터 설정		
		vo.setTargetDt(request.getParameter("targetDt") == null ? "20180701" : request.getParameter("targetDt"));
		vo.setItemPerPage(request.getParameter("itemPerPage") == null ? "10" : request.getParameter("itemPerPage"));
		vo.setMultiMovieYn(request.getParameter("multiMovieYn") == null ? "" : request.getParameter("multiMovieYn"));
		vo.setRepNationCd(request.getParameter("repNationCd") == null ? "" : request.getParameter("repNationCd"));
		vo.setWideAreaCd(request.getParameter("wideAreaCd") == null ? "" : request.getParameter("wideAreaCd"));		

		// 발급키
		String key = "886336d18a9c4536da9f8ff1db2a7c98";
		// KOBIS 오픈 API Rest Client를 통해 호출
	    KobisOpenAPIRestService service = new KobisOpenAPIRestService(key);

		// 일일 박스오피스 서비스 호출 (boolean isJson, String targetDt, String itemPerPage,String multiMovieYn, String repNationCd, String wideAreaCd)
	    String dailyResponse = service.getDailyBoxOffice(
	    		true,
	    		vo.getTargetDt(),
	    		vo.getItemPerPage(),
	    		vo.getMultiMovieYn(),
	    		vo.getRepNationCd(),
	    		vo.getWideAreaCd());

	    Map<String, Object> map = new HashMap<String, Object>();
	    // Json 라이브러리를 통해 Handlin
	    map.put("dailyResult", dailyResponse);
	    // KOBIS 오픈 API Rest Client를 통해 코드 서비스 호출 (boolean isJson, String comCode )
	    //map.put("codeResult", service.getComCodeList(true,"0105000000"));
	    
	    return map;
	}

}
