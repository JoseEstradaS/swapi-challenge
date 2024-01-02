import { Box } from '@mui/material'
import LoadingIndicator from '../LoadingIndicator'

interface ILoadingCell {
  isMobile: boolean;
}

const LoadingCell = ({isMobile}: ILoadingCell) => {
  return (
    <Box
      maxWidth={!isMobile ? 350 : undefined}
      maxHeight={56}
      width='100%'
      display='flex'
      justifyContent='center'
      alignItems='center'
      padding={2}>
      <LoadingIndicator />
    </Box>
  )
}

export default LoadingCell