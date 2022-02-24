import { useLoaderData, createCookieSessionStorage } from "remix";

export const loader = ({params}) => {
	const {imageId, width} = params;

	return {
		imageId,
		width,
	};
}

export default function () {
	const loaderData = useLoaderData(); 
	const {imageId, width} = loaderData;
	const url = `https://picsum.photos/id/${imageId}/${width}/300`;

	return (
		<>
			<a href="/form">Back</a>
			<h1>Picture - {imageId} ({width}x300)</h1>
			<img src={url} />
		</>
	)
}
