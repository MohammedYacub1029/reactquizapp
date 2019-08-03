import React from "react";
import Card from "@material-ui/core/Card";
import { makeStyles } from "@material-ui/core/styles";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import "../App.css";
const useStyles = makeStyles({
  card: {
    minWidth: 100
  },

  title: {
    fontSize: 14
  },
  pos: {
    marginBottom: 12
  }
});
const Question = props => {
    //eslint-disable-next-line
    const classes = useStyles();

  return (
    <div>
      <Card>
        <CardContent>
          <Typography className="questions">{props.question}</Typography>
        </CardContent>
      </Card>
    </div>
  );
};
export default Question;
