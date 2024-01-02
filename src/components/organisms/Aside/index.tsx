import { makeStyles } from 'tss-react/mui'
import { Virtuoso } from 'react-virtuoso'
import { useGetPeople } from '../../../hooks/useGetPeople'
import { Person } from '../../../types'
import LoadingCell from '../../molecules/LoadingCell'
import NoticeCell from '../../molecules/NoticeCell'
import PersonCell from '../../molecules/PersonCell'

interface IAside {
  isMobile: boolean;
  onSelect: (person: Person) => void;
}

const Aside = ({isMobile, onSelect}: IAside) => {
  const { classes } = useStyles({ isMobile })
  const {
    data: { results, hasNextPage } = { results: [], hasNextPage: false },
    isError,
    isLoading,
    isLoadingMore,
    loadMore
  } = useGetPeople()

  const handleEndReached = (atBottom: number) => {
    if(!atBottom || isLoadingMore || !hasNextPage)return

    loadMore()
  }

  if(isError) return(
    <NoticeCell isMobile={isMobile} />
  )

  if(isLoading) return(
    <LoadingCell isMobile={isMobile} />
  )

  return (
    <aside className={classes.root}>
      <Virtuoso
        style={{ height: '100%' }}
        components={{ Footer: () => {
          if(hasNextPage)
            return <LoadingCell isMobile={isMobile} />

          return
        }}}
        data={results}
        endReached={handleEndReached}
        overscan={20}
        itemContent={(_, person) => (
          <PersonCell
            key={`${person.url}-Cell`}
            onSelect={onSelect}
            person={person} />
        )} />
    </aside>
  )
}

const useStyles = makeStyles<{ isMobile: boolean }>({ 'name': 'PersonCell'})(
  (_theme, { isMobile }) => ({
    root: {
      maxWidth: isMobile ? '100%' : 350,
      flex: '1 1 auto',
      ...(isMobile ? { minHeight: 'calc(100vh - 64px)' } : {})
    }
  })
);

export default Aside