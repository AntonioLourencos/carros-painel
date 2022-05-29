import type { LinksFunction, MetaFunction } from "@remix-run/node";
import {
	Links,
	LiveReload,
	Meta,
	Outlet,
	Scripts,
	ScrollRestoration,
} from "@remix-run/react";
import GlobalStyles from "./styles/global";
import Header from "@/components/header";
import Modal from "react-modal";
import { ToastContainer } from "react-toastify";
import { ThemeProvider } from "styled-components";
import DefaultTheme from "./styles/themes/default";
import { CarsProvider } from "./contexts/Cars";
import ReactToastifyStyles from "react-toastify/dist/ReactToastify.css";

Modal.setAppElement("body");

export const links: LinksFunction = () => {
	return [
		{ rel: "preconnect", href: "https://fonts.googleapis.com" },
		{ rel: "preconnect", href: "https://fonts.gstatic.com" },
		{
			rel: "stylesheet",
			href: "https://fonts.googleapis.com/css2?family=Montserrat&display=swap",
		},
		{
			rel: "stylesheet",
			href: ReactToastifyStyles,
		},
	];
};

export const meta: MetaFunction = () => ({
	charset: "utf-8",
	title: "Carros",
	viewport: "width=device-width,initial-scale=1",
});

export default function App() {
	return (
		<html lang="pt-br">
			<head>
				<Meta />
				<Links />
				{typeof document === "undefined" ? "__STYLES__" : null}
			</head>
			<body>
				<ThemeProvider theme={DefaultTheme}>
					<CarsProvider>
						<GlobalStyles />
						<Header />
						<Outlet />
						<ScrollRestoration />
						<ToastContainer
							position="top-left"
							autoClose={3000}
							newestOnTop={true}
							closeOnClick={true}
							limit={3}
							pauseOnHover={false}
							rtl={false}
						/>
						<Scripts />
						<LiveReload />
					</CarsProvider>
				</ThemeProvider>
			</body>
		</html>
	);
}
