import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: 200,
    },
    flexible: {
      display: 'inline-flex',
      justifyContent: 'center',
    },
  },
}));
