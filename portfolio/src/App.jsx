
import styles from './App.module.css'
import { Hero } from './components/Hero/Hero'
import { NavBar } from './components/NavBar/Navbar'
import { SobreMim } from './components/SobreMim/Sobremim'

function App() {

  return (
    <div className={styles.App}>
      <NavBar />
      <Hero />
      <SobreMim />
    </div>
  )
}

export default App
