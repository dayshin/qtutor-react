import React, { Component } from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import PropTypes from "prop-types";
import Logo from "../Images/logo.png";
import axios from "axios";

import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { TextField, Button, CircularProgress } from "@material-ui/core";

const styles = {
	form: {
		textAlign: "center",
	},
	img: {
		margin: "10px auto 10px auto",
		height: 150,
		width: 150,
	},
	pageTitle: {
		margin: "10px auto 10px auto",
	},
	textField: {
		margin: "10px auto 10px auto",
	},
	button: {
		marginTop: 20,
		position: "relative",
	},
	progress: {
		position: "absolute",
	},
};

class signup extends Component {
	constructor() {
		super();
		this.state = {
			email: "",
			password: "",
			confirmPassword: "",
			handle: "",
			loading: false,
			errors: {},
		};
	}

	handleSubmit = (event) => {
		event.preventDefault();
		this.setState({
			loading: true,
		});
		const newUser = {
			email: this.state.email,
			password: this.state.password,
			confirmPassword: this.state.confirmPassword,
			handle: this.state.handle,
			belongsTo: "users",
			subjects: [],
			currentGrade: -1,
		};
		axios
			.post("/signup", newUser)
			.then((res) => {
				localStorage.setItem("FBToken", `Bearer ${res.data.token}`);
				this.setState({
					loading: false,
				});
				this.props.history.push("/");
			})
			.catch((err) => {
				console.log(err);
				console.log(err.response);
				this.setState({
					errors: err.response.data,
					loading: false,
				});
			});
	};
	handleChange = (event) => {
		this.setState({
			[event.target.name]: event.target.value,
		});
	};

	render() {
		const { classes } = this.props;
		const { errors, loading } = this.state;
		return (
			<Grid container className={classes.form}>
				<Grid item sm></Grid>
				<Grid item sm>
					<img className={classes.img} src={Logo} alt="QuickTutor"></img>
					<Typography variant="h2" className={classes.pageTitle}>
						Signup
					</Typography>
					<form noValidate onSubmit={this.handleSubmit}>
						<TextField
							id="email"
							name="email"
							type="email"
							label="Email"
							className={classes.textField}
							helperText={errors.email}
							error={errors.email}
							value={this.state.email}
							onChange={this.handleChange}
							fullWidth
						></TextField>
						<TextField
							id="password"
							name="password"
							type="password"
							label="Password"
							className={classes.textField}
							helperText={errors.password}
							error={errors.password}
							value={this.state.password}
							onChange={this.handleChange}
							fullWidth
						></TextField>
						<TextField
							id="confirmPassword"
							name="confirmPassword"
							type="password"
							label="Confirm Password"
							className={classes.textField}
							helperText={errors.confirmPassword}
							error={errors.confirmPassword}
							value={this.state.confirmPassword}
							onChange={this.handleChange}
							fullWidth
						></TextField>
						<TextField
							id="handle"
							name="handle"
							type="text"
							label="Handle"
							className={classes.textField}
							helperText={errors.handle}
							error={errors.handle}
							value={this.state.handle}
							onChange={this.handleChange}
							fullWidth
						></TextField>
						<Button
							variant="contained"
							color="primary"
							type="submit"
							className={classes.button}
						>
							Join
							{loading && (
								<CircularProgress
									classes={classes.progress}
									size={2}
								></CircularProgress>
							)}
						</Button>
					</form>
				</Grid>
				<Grid item sm></Grid>
			</Grid>
		);
	}
}

signup.propTypes = {
	classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(signup);
