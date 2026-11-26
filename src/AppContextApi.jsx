import React from 'react'
import Dashboard from './components/Dashboard'
import { UserContext } from './contexts/Usercontext'

const App = () => {
  let schoolName = 'hnr'
  return (
    <div>
      <UserContext.Provider value={schoolName}>
        <Dashboard />
      </UserContext.Provider>

    </div>
  )
}

export default App

