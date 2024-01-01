import { Box, Typography } from '@mui/material'
import Spinner from '../../atoms/Spinner';

const LoadingIndicator = () => (
  <Box alignItems='center' display='flex' gap={1}>
    <Spinner />
    <Typography variant='h2' color='primary.light'>Loading</Typography>
  </Box>
)

export default LoadingIndicator