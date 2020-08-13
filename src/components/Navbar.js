import React from "react";
import AppBar from "@material-ui/core/AppBar";
import ToolBar from "@material-ui/core/ToolBar";
import Button from "@material-ui/core/Button";

import { Link } from "react-router-dom";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
	title: {
		flexGrow: 4,
	},
}));

export default function Navbar() {
	const classes = useStyles();
	return (
		<AppBar>
			<ToolBar className="nav-container">
				<Button color="inherit" component={Link} to="/">
					Home
				</Button>
				<Button color="inherit" component={Link} to="/login">
					Login
				</Button>
				<Button color="inherit" component={Link} to="/signup">
					Sign Up
				</Button>
				<Button color="inherit" component={Link} to="/tutor">
					Become a Tutor
				</Button>
				<Button color="inherit" component={Link} to="/payments">
					Buy credits
				</Button>
			</ToolBar>
		</AppBar>
	);
}
