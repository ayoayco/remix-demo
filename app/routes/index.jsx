import { Outlet, useLoaderData, redirect } from "remix";

export const loader = () => {
	return {
		 title: "HELLO",
	}
}

export default function Index() {
	const loaderData = useLoaderData();

	return(
		<div>
			<h1>{loaderData.title}</h1>
			<a href="/form">Pictures</a>
		</div>
	)
}
