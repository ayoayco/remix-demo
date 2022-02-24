import { useLoaderData, createCookieSessionStorage } from "remix";

export const loader = ({params}) => {
	return {
		title: 'Picture',
		imageId: params.imageId,
		width: params.width,
	};
}

export default function () {
	const loaderData = useLoaderData(); 
	const {imageId, width, title} = loaderData.imageId;
	const url = `https://picsum.photos/id/${imageId}/${width}/300`;

	return (
		<>
			<a href="/form">Back</a>
			<h1>{title} - {imageId} ({width}x300)</h1>
			<img src={url} />
		</>
	)
}
