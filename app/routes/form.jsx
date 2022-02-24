import { useLoaderData, redirect } from "remix";

export async function loader () {
	const res = await fetch('https://picsum.photos/v2/list');

	return res.json();
}

export const action = async ({request}) => {
	const form = await request.formData();
	const imageId = form.get("imageId");
	const width = form.get("width");
	const social = form.get("social");

	return width ? redirect(`picture/${imageId}/width/${width}`) : redirect(`picture/${imageId}/social/${social}`);
}

export default function Form() {
	const imageList = useLoaderData();
	console.log(imageList);

	const listItems = imageList.map(image => (
			<li>
				<img src={image.download_url} width="100" title={image.id} /><br />
				<span>Picture - {image.id} ({image.width}x{image.height}) by {image.author}</span><br />
			</li>
	))

	return(
		<div>
			<h1>Generate Cover Photo</h1>
			<form method="POST">
				<div>
					<label>Image ID:</label>
					<input name="imageId" id="imageId" />
				</div>
				<div>
					<label>Cover for:</label>
					<select name="social" id="social">
						<option>Select social media</option>
						<option value="fb">Facebook</option>
						<option value="twitter">Twitter</option>
						<option value="linkedin">LinkedIn</option>
					</select>
				</div>
				<div>
					<label>Width:</label>
					<input name="width" id="width" />
				</div>
				<div>
					<button type="submit">Submit</button>
				</div>
			</form>
			<div>
				<h2>Images:</h2>
				<ul>
					{
						listItems
					}
				</ul>
			</div>
		</div>
	)
}
