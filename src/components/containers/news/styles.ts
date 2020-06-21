import { createUseStyles } from 'react-jss'
import { Theme } from 'typings/theme/theme'

const useNewsStyles = createUseStyles((theme: Theme) => ({
  page: {
    backgroundColor: theme.palette.primary.main,
    width: '100%',
    minHeight: '100vh',
  },
  page__title: {
    // margin: 0,
    ...theme.typography.h2,
  },

  articleContainer: {
    display: 'flex',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
  },

  article: {
    display: 'flex',
    flexDirection: 'column',
    marginTop: '20px',
    marginBottom: '20px',
    width: '300px',
    borderRadius: '20px',
    backgroundColor: 'white',
  },
  article__picture: {
    borderTopLeftRadius: '20px',
    borderTopRightRadius: '20px',
    maxWidth: '100%',
    height: 'auto',
  },
  article__inner: {
    flexGrow: 1,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '20px',
    textAlign: 'center',
  },
  article__title: {},
  article__text: {},

  article__author: {
    marginTop: 'auto',
    marginLeft: 'auto',
    width: '100%',
    textOverflow: 'ellipsis',
    overflow: 'hidden',
    whiteSpace: 'nowrap',
  },
}))

export default useNewsStyles
