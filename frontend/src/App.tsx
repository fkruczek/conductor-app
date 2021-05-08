import { Header } from 'components/Header'
import { Concert } from 'pages/Concert'
import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import { CreateRoom } from './pages/CreateRoom'
import { Lobby } from './pages/Lobby'
import { RoomsList } from './pages/RoomsList'
// import Score from './components/Score'

// TODO: how it works?
// const styles = {
//   // Move long class sets out of jsx to keep it scannable
//   container: ({ hasBackground }: { hasBackground: boolean }) => [
//     tw`flex flex-col items-center justify-center h-screen`,
//     hasBackground && tw`bg-gradient-to-b from-electric to-ribbon`,
//   ],
// }

// const Score = React.lazy(() => import('./components/Score'))
// TODO: Code splitting (rrd documentation)
const App = () => (
  <>
    <Switch>
      <Route exact path="/concert/:id">
        <Concert />
      </Route>
      <>
        <Header />
        <Route exact path="/create-concert">
          <CreateRoom />
        </Route>
        <Route exact path="/lobby/:id">
          <Lobby />
        </Route>
        <Route exact path="/">
          <RoomsList />
        </Route>
        <Route>
          <Redirect to="/" />
        </Route>
      </>
    </Switch>
  </>
)

export default App
