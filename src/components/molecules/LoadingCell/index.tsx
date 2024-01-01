import { Box } from '@mui/material'
import LoadingIndicator from '../LoadingIndicator'


const LoadingCell = () => {
  return (
    <Box
      maxWidth={350}
      width='100%'
      display='flex'
      justifyContent='center'
      alignItems='center'
      margin={2}>
      <LoadingIndicator />
    </Box>
  )
}

export default LoadingCell