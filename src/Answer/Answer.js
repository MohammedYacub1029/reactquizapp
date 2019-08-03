import React from "react";
import Radio from "@material-ui/core/Radio";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import RadioGroup from "@material-ui/core/RadioGroup";
import { makeStyles } from "@material-ui/core/styles";
import FormControl from "@material-ui/core/FormControl";
import "../App.css";
const Answer = props => {
  const useStyles = makeStyles(theme => ({
    root: {
      display: "flex"
    }
  }));
  //eslint-disable-next-line
  const classes = useStyles();
  const [value, setValue] = React.useState("value");
  const handleChange = event => {
    setValue(event.target.value);
    props.setAnswer(event.target.value);
  };
  return (
    <div>
      <FormControl component="fieldset">
        {props.ansloop.map(ans => {
          return (
            <RadioGroup value={value} onChange={handleChange}>
              <FormControlLabel
                value={ans.value}
                control={<Radio color="primary" />}
                label={ans.value}
              />
            </RadioGroup>
          );
        })}
      </FormControl>
    </div>
  );
};

export default Answer;
