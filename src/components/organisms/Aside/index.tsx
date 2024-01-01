import { makeStyles } from 'tss-react/mui'
import { useGetPeople } from '../../../services/api'
import LoadingCell from '../../molecules/LoadingCell'
import NoticeCell from '../../molecules/NoticeCell'
import PersonCell from '../../molecules/PersonCell'

interface IAside {
  isMobile: boolean;
  onSelect: (personUrl: string) => void;
}

const Aside = ({isMobile}: IAside) => {
  const { classes } = useStyles({ isMobile })
  const {
    data: { results } = { results: [], next: ''},
    isError,
    isLoading
  } = useGetPeople()

  if(isError) return(
    <NoticeCell />
  )

  if(isLoading) return(
    <LoadingCell />
  )

  return (
    <aside className={classes.root}>
      {
        results.map(person => (
          <PersonCell key={person.url} name={person.name} specie={person.species[0]} homeworld={person.homeworld} />
        ))
      }
    </aside>
  )
}

const useStyles = makeStyles<{ isMobile: boolean }>({ 'name': 'PersonCell'})(
  (_theme, { isMobile }) => ({
    root: {
      maxWidth: isMobile ? '100%' : 350,
      flex: '1 1 auto'
    },
  })
);

export default Aside