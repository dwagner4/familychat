import { useEffect, useState } from 'react'

import { AppActor } from './fsm/AppActor.js'
import Splash from './pages/Splash.jsx'
import MemberNav from './pages/MemberNav.jsx'

function App() {
  const [ uistate, setUistate ] = useState({})

  AppActor.subscribe((snapshot) => {
    setUistate(snapshot.context)
  })

  useEffect(() => {
    const snap = AppActor.getSnapshot()
    setUistate(snap.context)
  }, [])

  // console.log(uistate)

  return (
    <>
      {  uistate.page === 'splash' ? <Splash /> : null}
      {  uistate.page === 'membernav' ? <MemberNav /> : null}
    </>
  )
}

export default App