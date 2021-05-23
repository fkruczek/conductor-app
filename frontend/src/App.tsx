import { Header } from 'components/header'
import { Concert } from 'pages/Concert'
import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import { CreateRoom } from './pages/CreateRoom'
import { Lobby } from './pages/Lobby'
import { RoomList } from './pages/RoomList'

const App = () => (
  <>
    <Switch>
      <Route exact path="/concert/:id">
        <Concert />
      </Route>
      <>
        <Header />
        <Route exact path="/lobby/:id">
          <Lobby />
        </Route>
        <Route exact path="/create-concert">
          <CreateRoom />
        </Route>
        <Route exact path="/">
          <RoomList />
        </Route>
      </>
      <Route>
        <Redirect to="/" />
      </Route>
    </Switch>
  </>
)

export default App
