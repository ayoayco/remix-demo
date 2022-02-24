import { Outlet, useLoaderData } from "remix";

export const loader = ({params}) => {
	return {
		title: 'Picture',
		imageId: params.imageId
	};
}

export default function ImageRoute () {
	const loaderData = useLoaderData(); 
	const imageId = loaderData.imageId;
	const title = loaderData.title;
	const url = `https://picsum.photos/id/${imageId}/200/300`;

	return (
			<Outlet />
	)
}
