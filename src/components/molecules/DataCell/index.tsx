import { Box, Divider, Typography } from '@mui/material'
import { Fragment } from 'react'

interface IDataCell {
  property: string,
  value: string
}

const DataCell = ({property, value}: IDataCell) => {
  return (
    <Fragment key={`${property}-${value}`}>
      <Box
      padding={2}
      display='flex'
      gap={2}
      justifyContent='space-between'
      alignItems='center'>
        <Typography variant='h2' color='primary.light'>{property}</Typography>
        <Typography variant='h2' color='primary.dark'>{value}</Typography>
      </Box>
      <Divider />
    </Fragment>
  )
}

export default DataCell