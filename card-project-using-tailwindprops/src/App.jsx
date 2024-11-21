import './App.css'
import Card from './components/Card'

function App() {

  let randomUrl = () => `https://picsum.photos/200/300?random=${Math.random()}`;
  let name = "Bishal";
  let desc = "I am a engineering student who is practicing react and is almost ready to perform different tasks."

  return (
    <div className='flex flex-wrap'>
      <Card name={name} desc={desc} url ={randomUrl()}/>
      <Card/>
      <Card/>
    </div>
  )
}

export default App
