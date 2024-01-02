import { Box, Divider, Skeleton, Typography } from '@mui/material'

interface IDataCell {
  property: string;
  value?: string;
  isLoading?: boolean;
}

const DataCell = ({ property, value, isLoading }: IDataCell) => {
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
        { Boolean(value) && <Typography variant='h2' color='primary.dark'>{value}</Typography>}
      </Box>
      <Divider />
    </>
  )
}

export default DataCell