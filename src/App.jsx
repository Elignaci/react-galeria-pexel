import './App.css'
import { Gallery } from './components/Gallery'

function App() {
  return (
    <>
      <header className='container'>
        <h2>Galeria de imagenes</h2>
      </header>

      <main className='container'>
        <Gallery />
        <p>Galeria</p>
      </main>

      <footer className='container'>
        <p>footer</p>
      </footer>
    </>
  )

}
export default App


