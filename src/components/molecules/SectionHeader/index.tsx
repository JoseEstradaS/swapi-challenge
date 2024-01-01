import { Box, Typography } from '@mui/material'

interface ISectionHeader {
  title: string
}

const SectionHeader = ({title}: ISectionHeader) => {
  return (
    <Box marginX={2} marginTop={4} marginBottom={1}>
      <Typography variant='h2'>{title}</Typography>
    </Box>
  )
}

export default SectionHeader