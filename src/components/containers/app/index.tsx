import React from 'react'
import News from 'components/containers/news'
import theme1 from 'constants/theme1'
import { ThemeProvider } from 'react-jss'

const App: React.FC = () => (
  <ThemeProvider theme={theme1}>
    <News />
  </ThemeProvider>
)

export default App
