import { useLoaderData } from "remix";

const sizeMap = {
    fb: [820, 312, 'Facebook'],
    twitter: [1500, 500, 'Twitter'],
    linkedin: [1584, 396, 'LinkedIn']
}

export const loader = ({params}) => {
	return {
		title: 'Picture',
		imageId: params.imageId,
        social: params.social
	};
}

export default function () {
	const loaderData = useLoaderData(); 
	const imageId = loaderData.imageId;
    const social = loaderData.social;
	const title = loaderData.title;
    const [width, height] = sizeMap[social];
	const url = `https://picsum.photos/id/${imageId}/${width}/${height}`;

	return (
		<>
			<a href="/form">Back</a>
			<h1>{title} - {imageId} ({sizeMap[social][2]})</h1>
			<img src={url} />
		</>
	)
}
