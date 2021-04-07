import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { RoomsList } from './pages/RoomsList'
import { CreateRoom } from './pages/CreateRoom'
import { Lobby } from './pages/Lobby'
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
  <Switch>
    <Route path="/create-concert">
      <CreateRoom />
    </Route>
    <Route path="/lobby/:id">
      <Lobby />
    </Route>
    <Route path="/">
      <RoomsList />
    </Route>
  </Switch>
)

export default App
