import { useLoaderData } from "remix";

const sizeMap = {
    fb: [820, 312, 'Facebook'],
    twitter: [1500, 500, 'Twitter'],
    linkedin: [1584, 396, 'LinkedIn']
}

export const loader = ({params}) => {
	const {imageId, social} = params;
	return {
		imageId,
        social,
	};
}

export default function () {
	const loaderData = useLoaderData(); 
	const {imageId, social} = loaderData;
    const [width, height] = sizeMap[social];
	const url = `https://picsum.photos/id/${imageId}/${width}/${height}`;

	return (
		<>
			<a href="/form">Back</a>
			<h1>Picture - {imageId} ({sizeMap[social][2]})</h1>
			<img src={url} />
		</>
	)
}
