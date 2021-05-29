import React from "react";
import "./AboutMe.css";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

const AboutMe = () => {
  const classes = useStyles();
  return (
    <div>
      <Paper elevation={3} className="paper-size">
        <Grid container justify="center">
          <Grid xs={12}>
            <Typography variant="h4" style={{ marginBottom: "5px" }}>
              About me
            </Typography>
          </Grid>

          <Grid item xs={4}>
            <Card className={classes.root}>
              <CardContent></CardContent>
            </Card>
          </Grid>
          <Grid item xs={8}></Grid>
        </Grid>
      </Paper>
    </div>
  );
};

export default AboutMe;
