import { useState } from "react";
import "./App.css";
import React from "react";
import Card from "./Card";

import imgFirefox from "./images/firefox.webp";
import imgDesertfox from "./images/desertfox.webp";
import imgSnowfox from "./images/snowfox.webp";

function App(props) {
	// Props System
	// 1. 부모에서 자식으로 전달하는 데이터를 의미합니다.
	// 2. 자식들마다 다른 데이터를 설정하는것이 가능하다.
	// 3. 부모에서 자식 방향으로만 전달이 가능하다. 그 역방향은 불가능하다.

	// Props 의 사용법
	// 1. JSX에 속성의 형태로 사용합니다.
	// 2. React는 속성을 모아서 하나의 객체로 만듭니다.
	// 3. Props 를 전달받는 자식 컴포넌트는 함수의 첫번째 인자로 Props를 전달받습니다.

	// 1. 일반 CSS : css 파일을 만들고 컴포넌트에 import. —> 클래스네이밍이 겹칠 위험이 있음
	// 2. 모듈 CSS : module.css 만들고 컴포넌트에 import  —> 클래스 네이밍을 겹치지 않게 만들어줌

	//   1. JS 안에 CSS 문법을 작성할 수 있어 편리.
	// 2. CSS 스타일의 내용을 즉각적으로 판단가능.
	// 3. 클래스 네이밍 난독화 => 클래스 네이밍을 겹치지 않게 만들어줌
	// 4. CSS 파일의 위치 제거

	console.log(props);

	return (
		<>
			<h1>World Most Cuttest Animals</h1>
			<div className="flex mb-4 px-2">
				<Card
					title="랫서판다"
					text="랫서판다는 판다보다 작다는 의미에서 lesser panda 라고 이름이 불립니다."
					imgUrl={imgFirefox}
				/>
				<Card
					title="사막여우"
					text="열을 배출하기 위한 널찍한 귀가 특징입니다."
					imgUrl={imgDesertfox}
				/>
				<Card
					title="북극여우"
					text="여름에는 또리와 다리는 갈색으로 털갈이를 합니다."
					imgUrl={imgSnowfox}
				/>
			</div>
		</>
	);
}
export default App;
