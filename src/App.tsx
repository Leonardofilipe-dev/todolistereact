import { useState } from 'react'

import './App.css'
import Header from './components/header/header'
import Footer from './components/footer/footer'
import style from './app.module.css'

function App() {
  const [] = useState(0)

  return (
    <>
      <div>
    <Header/>
    <main className={style.main}>
    <h3>Conteúdo...</h3>
    </main>
    <Footer/>
      </div>
   
    </>
  )
}

export default App
