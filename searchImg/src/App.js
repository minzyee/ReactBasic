import searchImg from "./imgApi";
import SearchBar from "./components/SearchBar";
import { useState } from "react";
import ListImg from "./components/ListImg";
// -이미지검색, 인풋창
// -이미지 리스트
// -이미지 아이템들을 데이타를 전송하는 감싸는 부모

function App() {
	const [images, setImages] = useState([]);

	const handleKeyword = async (keyword) => {
		const result = await searchImg(keyword);
		setImages(result); // images안에 전달받은 데이터가 들어갈 것이다.
		console.log(result);
	};

	return (
		<div>
			App
			<SearchBar searching={handleKeyword} />
			<ListImg images={images} />
		</div>
	);
}

export default App;
