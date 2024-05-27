import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.module.css'

import Header from './components/Layout/Header/Header'
import Navigation from './components/Layout/Navigation/Navigation'

function App() {
  // return a basic application ui layout with header, main, and navigation that fit a quiz app main state
  return (
    <>
      <Header />
      <main>
        <Navigation />
        <section>
          <h2>Home</h2>
          <p>Welcome to the quiz app</p>
        </section>
      </main>
    </>
  )

}

export default App
