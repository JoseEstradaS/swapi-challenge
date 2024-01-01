import { Box, Divider, useMediaQuery, useTheme } from '@mui/material'
import Header from '../components/organisms/Header'
import Aside from '../components/organisms/Aside'
import PersonDetails from '../components/organisms/PersonDetails'
import { useState } from 'react'

const Home = () => {
  const [selectedPerson, setSelectedPerson] = useState('')

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  
  const handleSelectPerson = (personUrl: string) => {
    setSelectedPerson(personUrl)
  }

  return (
    <>
      <Header />
      <Box display='flex'>
        <Aside onSelect={handleSelectPerson} isMobile={isMobile} />
        {!isMobile && <Divider orientation='vertical' flexItem />}
        {(!isMobile || Boolean(selectedPerson)) && <PersonDetails />}
      </Box>
    </>
  )
}

export default Home