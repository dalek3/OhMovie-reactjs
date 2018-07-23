<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>list</title>
</head>
<body>
	<table border="1">
	   <thead>
		<tr>
			<td>순위</td>
			<td>영화명</td>
			<td>개봉일</td>
			<td>매출액</td>
			<td>매출액점유율</td>
			<td>매출액증감(전일대비)</td>
			<td>누적매출액</td>
			<td>관객수</td>
			<td>관객수증감(전일대비)</td>
			<td>누적관객수</td>
			<td>스크린수</td>
			<td>상영횟수</td>
		</tr>
	   </thead>
	   <tbody>
	   </tbody>
	</table>
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.2.4/jquery.min.js"></script>
	<script src="/resources/js/list.js"></script>
</body>
</html>