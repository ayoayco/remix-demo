import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration
} from "remix";

export function meta() {
  return { title: "New Remix App" };
}

export const action = async ({request}) => {
	const form = await request.formData();
	const imageId = form.get("imageId");

	// return redirect(`https://picsum.photos/id/${imageId}/200/300`);
	// return redirect(`picture/`);
	return redirect(`picture/${imageId}`);
}

export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
