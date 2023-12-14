
import RickImage from './image/Rick_Sanchez.png'
import "./components/search/search.jsx"
import Search from './components/search/search.jsx';
import Text from './components/text/text.jsx'
import './components/text/text.css'
import RickAndMorty from './image/Rick_and_morty.png'

function App() {
  return(
    <body>
    <div id='background'>
    <main className='salamaleikum'>
    <div className="app">
        <Search/>

      <img src={RickImage} alt='rick' className='img'/>
      <img src={RickImage} alt='rick' className='img'/>
      <img src={RickImage} alt='rick' className='img'/>

      <p><img src={RickImage} alt='rick' className='img2'/>
      <img src={RickImage} alt='rick' className='img2'/>
      <img src={RickImage} alt='rick' className='img2'/>
      </p>

      <p>
        <Text/>
      </p>

    

    </div>
    </main>
    </div>
    </body>
  )
}
export default App;