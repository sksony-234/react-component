import React from 'react'
import Data from './data'
import Cards from './components/Cards'
const App = () => {
  return (
    <div>
      <Cards data={Data}/>
    </div>
  )
}

export default App