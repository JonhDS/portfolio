
import styles from './App.module.css'
import { Experience } from './components/Experience/Experience'
import { Hero } from './components/Hero/Hero'
import { NavBar } from './components/NavBar/Navbar'
import { SobreMim } from './components/SobreMim/Sobremim'

function App() {

  return (
    <div className={styles.App}>
      <NavBar />
      <Hero />
      <SobreMim />
      <Experience />
    </div>
  )
}

export default App
