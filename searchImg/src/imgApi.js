// 	// fetch 사용할 때는 await 두개 필요함
// 	// 헤더 코드 읽는 await
// 	// 바디 코드 읽는 await
// const searchImg = async () => {

// 	let json;
// 	// 1. 페치로 요청하는데~
// 	// 1-1. headers: 우리가 서버에 어떤 정보를 요청하는지 정보에 대한 명세
// 	// 1-2. response headers:
// 	const response = await fetch(
// 		// fetch는 서버에 통신을 요청한다. 그리고 자바스크립트 엔진은 위에서부터 한줄 씩 실행한다. 서버에서 데이터를 받아오든 말든말이다.
// 		// fetch가 통신 완료 될때까지 자스한테 잠깐 기다려달라고 해야 하기 때문에 await을 사용해아한다.
// 		// https://api.unsplash.com/  +  search/photos  +  ?query=flower  +  &client_id=  +  내앱키
// 		"https://api.unsplash.com/search/photos?query=flower&client_id=pjwjcbA-FRaaUtLGhC4X5TandLHQQ015TEYkPT2craE",
// 		{
// 			method: "GET",
// 		},
// 	);
// 	if (response.ok) {
// 		// 2. body: 데이터
// 		// 바디 데이터 읽는거 기다려둬야함 그래서 바디 부분 파싱 끝날 때까지 기다려달라고 해야함
// 		json = await response.json();
// 	} else {
// 		alert("http error", +response.status);
// 	}
// 	console.log(json);
// };
//
//

// axios: 서버와 클라이언트 사이의 통신을 좀 더 쉽게 하기 위한 라이브러리이다.
import axios from "axios";

const searchImg = async (keyword) => {
	const response = await axios
		.get("https://api.unsplash.com/search/photos", {
			headers: {
				Authorization: "Client-ID CLC1gDOpj3EYHp6RShY8G_MzooHdr5kUF8wgct4Ws6s",
			},
			params: {
				query: keyword,
			},
		})
		.catch(function (error) {
			if (error.response) {
				// 요청이 전송되었고, 서버는 2xx 외의 상태 코드로 응답했습니다.
				console.log(error.response.data);
				console.log(error.response.status);
				console.log(error.response.headers);
			} else if (error.request) {
				// 요청이 전송되었지만, 응답이 수신되지 않았습니다.
				// 'error.request'는 브라우저에서 XMLHtpRequest 인스턴스이고,
				// node.js에서는 http.ClientRequest 인스턴스입니다.
				console.log(error.request);
			} else {
				// 오류가 발생한 요청을 설정하는 동안 문제가 발생했습니다.
				console.log("Error", error.message);
			}
			console.log(error.config);
		});

	return response.data.results;
};

export default searchImg;
