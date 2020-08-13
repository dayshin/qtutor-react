import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import home from "./pages/home";
import login from "./pages/login";
import signup from "./pages/signup";
import payments from "./pages/payments";
import "./App.css";
// components
import NavBar from "./components/Navbar";
// theme
import { ThemeProvider as MuiThemeProvider } from "@material-ui/core/styles";
import createMuiTheme from "@material-ui/core/styles/createMuiTheme";

const theme = createMuiTheme({
	palette: {
		primary: {
			main: "#0097a7",
			light: "#00bcd4",
			dark: "#00bcd4",
			contrastText: "#fff",
		},
		secondary: {
			main: "#00bcd4",
			light: "#00bcd4",
			dark: "#00bcd4",
			contrastText: "#fff",
		},
	},
});

const reload = () => window.location.reload();

function App() {
	return (
		<MuiThemeProvider theme={theme}>
			<div className="App">
				<div className="container">
					<Router>
						<NavBar />
						<Switch>
							<Route exact path="/" component={home}></Route>
							<Route exact path="/login" component={login}></Route>
							<Route exact path="/signup" component={signup}></Route>
							<Route exact path="/payments" component={payments}></Route>
						</Switch>
					</Router>
				</div>
			</div>
		</MuiThemeProvider>
	);
}

export default App;
