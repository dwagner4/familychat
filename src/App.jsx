import { useState } from 'react'
import './App.css'
import Auth from './components/Auth.jsx'
import AdSpace from './components/AdSpace.jsx'
import ChatDisplay from './components/ChatDisplay.jsx'
import Menu from './components/Menu.jsx'
import ProgressBar from './components/ProgressBar.jsx'
import GoGame from './components/GoGame.jsx'
import Notification from './components/Notification.jsx'
import ThreadNav from './components/ThreadNav.jsx'
import { AppActor } from './appMachine.js'

function App() {
  const [ appstate, setAppstate ] = useState({

  })

  AppActor.subscribe((snapshot) => {
    console.log(snapshot.context)
  })

  const xxx = AppActor.getSnapshot()
  console.log(xxx.context)

  console.log(AppActor)

  return (
    <>
      <AdSpace />
      <ProgressBar />
      <ChatDisplay />
      <Menu />
      <ThreadNav />
      <Notification />
      <GoGame />
      <Auth />
    </>
  )
}

export default App
