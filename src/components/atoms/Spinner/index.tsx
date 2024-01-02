import { makeStyles } from 'tss-react/mui';

const Spinner = () => {
  const { classes } = useStyles();

  return (
    <img className={classes.spinner} src="/spinner.svg" alt="Loading..." />
  );
};

const useStyles = makeStyles({ 'name': 'Spinner'})(
  () => ({
    spinner: {
      width: 24,
      height: 'auto'
    },
  })
);

export default Spinner;
