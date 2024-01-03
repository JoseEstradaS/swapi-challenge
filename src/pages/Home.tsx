import { Box, Divider, useMediaQuery } from '@mui/material'
import Header from '../components/organisms/Header'
import Aside from '../components/organisms/Aside'
import PersonDetails from '../components/organisms/PersonDetails'
import { useState } from 'react'
import { Person } from '../types'
import { makeStyles } from 'tss-react/mui'

const Home = () => {
  const [selectedPerson, setSelectedPerson] = useState<Person>()

  const { classes, theme } = useStyles()
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  
  const handleSelectPerson = (person: Person) => {
    setSelectedPerson(person)
  }

  const handleRevertSelect = () => {
    setSelectedPerson(undefined)
  }

  return (
    <>
      <Header isMobile={isMobile} onBack={handleRevertSelect} selectedPerson={selectedPerson} />
      <Box display='flex'>
        {(!isMobile || !selectedPerson) && <Aside onSelect={handleSelectPerson} isMobile={isMobile} />}
        {!isMobile && <Divider className={classes.divider} orientation='vertical' flexItem />}
        {(!isMobile || Boolean(selectedPerson)) && <PersonDetails selectedPerson={selectedPerson} />}
      </Box>
    </>
  )
}

const useStyles = makeStyles({ 'name': 'Home'})(
  () => ({
    divider: {
      minHeight: 'calc(100vh - 64px)'
    },
  })
);

export default Home