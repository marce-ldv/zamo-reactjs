import React from 'react';
import { Container, Typography, TextField, Button } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import { useStyles } from './styles';
import 'date-fns';

const Dashboard = () => {
  const classes = useStyles();
  const [selectedDate, setSelectedDate] = React.useState(new Date('2014-08-18T21:11:54'));

  const handleDateChange = date => {
    setSelectedDate(date);
  };

  return (
    <Container>
      <Typography>Find your ideal hotel and compare prices from different websites</Typography>
      <div className={classes.flexible}>
        <form className={classes.root} noValidate autoComplete="off">
          <TextField id="standard-basic" label="Standard" />
          <TextField id="outlined-basic" label="Outlined" variant="outlined" />

          <TextField
            id="date"
            label="Birthday"
            type="date"
            defaultValue="2017-05-24"
            className={classes.textField}
            InputLabelProps={{
              shrink: true,
            }}
          />
          <Button variant="primary">Search</Button>
        </form>
      </div>
    </Container>
  );
};

export default Dashboard;
