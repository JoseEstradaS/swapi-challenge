import { Box } from '@mui/material'
import NoticeText from '../../atoms/NoticeText'

interface INoticeCell {
  isMobile: boolean;
}

const NoticeCell = ({isMobile}: INoticeCell) => {
  return (
    <Box
      maxWidth={!isMobile ? 350 : undefined}
      maxHeight={56}
      width='100%'
      display='flex'
      justifyContent='center'
      alignItems='center'
      padding={2}>
      <NoticeText />
    </Box>
  )
}

export default NoticeCell