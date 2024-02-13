import { useEffect, useState } from 'react'
import './App.css'
import Auth from './components/Auth.jsx'
import NameInput from './components/NameInput.jsx'
import AdSpace from './components/AdSpace.jsx'
import ChatDisplay from './components/ChatDisplay.jsx'
import Menu from './components/Menu.jsx'
import ProgressBar from './components/ProgressBar.jsx'
import GoGame from './components/GoGame.jsx'
import Notification from './components/Notification.jsx'
import ThreadNav from './components/ThreadNav.jsx'
import { AppActor } from './appMachine.js'

function App() {
  const [ uistate, setUistate ] = useState({})

  AppActor.subscribe((snapshot) => {
    setUistate(snapshot.context)
  })

  useEffect(() => {
    const snap = AppActor.getSnapshot()
    setUistate(snap.context)
  }, [])

  console.log(uistate)

  return (
    <>
      {  uistate.showAds ? <AdSpace /> : null}
      {  uistate.showProgress ? <ProgressBar /> : null}
      {  uistate.showChat ? <ChatDisplay /> : null}
      {  uistate.showMenu ? <Menu /> : null}
      {  uistate.showThreadNav ? <ThreadNav /> : null}
      {  uistate.showNotification ? <Notification /> : null}
      {  uistate.showGame ? <GoGame /> : null}
      {  uistate.showAuth ? <Auth /> : null}
      {  uistate.showNameInput ? <NameInput /> : null}
    </>
  )
}

export default App
