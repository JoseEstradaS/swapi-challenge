import { Box, Divider, Skeleton, Typography } from '@mui/material'
import { makeStyles } from 'tss-react/mui';

interface IDataCell {
  property: string;
  value?: string;
  isLoading?: boolean;
}

const DataCell = ({ property, value, isLoading }: IDataCell) => {
  const { classes } = useStyles()

  return (
    <>
      <Box
      padding={2}
      display='flex'
      gap={2}
      justifyContent='space-between'
      alignItems='center'>
        <Typography variant='h2' color='primary.light'>
          { !isLoading ? property : <Skeleton width={200} />}
        </Typography>
        { Boolean(value) && <Typography className={classes.capitalize} variant='h2' color='primary.dark'>{value}</Typography>}
      </Box>
      <Divider className={classes.customDivider} />
    </>
  )
}

const useStyles = makeStyles({ 'name': 'DataCell'})(
  (theme) => ({
    capitalize: {
      textTransform: 'capitalize'
    },
    customDivider: {
      marginLeft: theme.spacing(2)
    }
  })
);

export default DataCell