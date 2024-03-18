import { useSelector } from '@xstate/react';

import { AppActor } from './fsm/AppActor.js'
import Splash from './pages/Splash.jsx'
import MemberNav from './pages/MemberNav.jsx'

const selectState = (snapshot) => snapshot.context.page;

function App() {

  const uistate = useSelector(AppActor, selectState)

  return (
    <>
      {  uistate === 'splash' ? <Splash /> : null}
      {  uistate === 'membernav' ? <MemberNav /> : null}
    </>
  )
}

export default App