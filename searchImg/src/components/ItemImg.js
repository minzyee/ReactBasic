import React from "react";

function ItemImg({ image }) {
	return (
		<li style={{ marginBottom: "30px" }}>
			<strong>title: {image.alt_description}</strong>
			<img src={image.urls.small} alt={image.alt_description} />
		</li>
	);
}

export default ItemImg;
