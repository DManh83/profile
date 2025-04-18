import styles from './App.module.css'
import { Navbar } from './components/Navbar/Navbar'
import { Objective } from './components/Objective/Objective'
import { About } from './components/About/About'

const App = () => {
  return (
    <div className={styles.app}>
      <Navbar />
      <Objective />
      <About />
    </div>
  )
}

export default App
