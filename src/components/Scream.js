import React, { Component } from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

const styles = {
	card: {
		display: "flex",
	},
};

export class Scream extends Component {
	render() {
		const {
			classes,
			scream: { body, createdAt },
		} = this.props;

		return (
			<Card>
				{/* <CardMedia image={userImage} title="profile image" /> */}
				<CardContent>
					{/* <Typography variant="h5"> {userHandle}</Typography>*/}

					<Typography variant="body1"> {body}</Typography>
				</CardContent>
			</Card>
		);
	}
}

export default withStyles(styles)(Scream);
