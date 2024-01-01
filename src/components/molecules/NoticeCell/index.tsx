import { Box } from '@mui/material'
import NoticeText from '../../atoms/NoticeText'


const NoticeCell = () => {
  return (
    <Box
      maxWidth={350}
      width='100%'
      display='flex'
      justifyContent='center'
      alignItems='center'
      margin={2}>
      <NoticeText />
    </Box>
  )
}

export default NoticeCell