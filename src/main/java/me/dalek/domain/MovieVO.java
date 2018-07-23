package me.dalek.domain;

public class MovieVO {
	
	// 조회일자
	private String targetDt;
	// 결과row수
	private String itemPerPage;
	// "Y: 다양성 영화, "N": 상업영화 (default : 전체)
	private String multiMovieYn;
	// "K: 한국영화, "F" : 외국영화 (default : 전체)
	private String repNationCd;
	// "0105000000" 로 조회된 지역코드
	private String wideAreaCd;
	
	public String getTargetDt() {
		return targetDt;
	}
	public void setTargetDt(String targetDt) {
		this.targetDt = targetDt;
	}
	public String getItemPerPage() {
		return itemPerPage;
	}
	public void setItemPerPage(String itemPerPage) {
		this.itemPerPage = itemPerPage;
	}
	public String getMultiMovieYn() {
		return multiMovieYn;
	}
	public void setMultiMovieYn(String multiMovieYn) {
		this.multiMovieYn = multiMovieYn;
	}
	public String getRepNationCd() {
		return repNationCd;
	}
	public void setRepNationCd(String repNationCd) {
		this.repNationCd = repNationCd;
	}
	public String getWideAreaCd() {
		return wideAreaCd;
	}
	public void setWideAreaCd(String wideAreaCd) {
		this.wideAreaCd = wideAreaCd;
	}
	
	@Override
	public String toString() {
		return "MovieVO [targetDt=" + targetDt + ", itemPerPage=" + itemPerPage + ", multiMovieYn=" + multiMovieYn
				+ ", repNationCd=" + repNationCd + ", wideAreaCd=" + wideAreaCd + "]";
	}
	
	
	
}
