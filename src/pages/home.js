import React, { Component } from "react";
import axios from "axios";
import Grid from "@material-ui/core/Grid";
// import Scream from "../components/Scream";

export class home extends Component {
	state = {
		screams: null,
	};
	componentDidMount() {
		axios
			.get("screams")
			.then((res) => {
				this.setState({
					screams: res.data,
				});
			})
			.catch((err) => console.log(err));
	}
	render() {
		let screamsMarkup = this.state.screams ? (
			this.state.screams.map((scream) => <p>{scream.createdAt}</p>)
		) : (
			<p>Content </p>
		);
		return (
			<Grid container spacing={8}>
				<Grid item sm={8} xs={12}>
					<p>Content</p>
					{screamsMarkup}
				</Grid>
				<Grid item sm={4} xs={8}>
					<p>Profile</p>
				</Grid>
			</Grid>
		);
	}
}

export default home;
