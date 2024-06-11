import React, { useEffect, useState, useContext } from "react"
import Header from "./components/Header"
import Footer from "./components/Footer"
import Posts from "./components/Posts"  // for API calls


// JSX expression
const greeting = <h1>Welcome, please enjoy your visit.</h1>

// Using React to create element
const msg1 = React.createElement('p', null, 'It\'s a very simple app.')

// using props
function UseProps1(props) {
  return <p>Hello, {props.name}</p>
}
// using props 2
class UseProps2 extends React.Component {
  render() {
    return <p>Hello, {this.props.value}</p>
  }
}
// React state using Class technique
class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    }
  }
  render() {
    return <div>
      <p>
        You clicked the button {this.state.count} times.  &nbsp; &nbsp;
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>Click</button>
      </p>
    </div>
  }
}

// React state using Function technique
function Tapper() {
  const [tap, setCount] = useState(0)

  function increment() {
    setCount(tap + 1);
  }

  return <div>
    <>
      <p>You tapped the button {tap} times. &nbsp; &nbsp;
        <button onClick={increment}>Tap</button>
      </p>
    </>
  </div>
}

// React state using Function technique & 
function Masher() {
  const [mash, setCount] = useState(0)

  useEffect(() => {
    console.log('mounted');
    const handleClick = () => setCount((m) => m + 1)
    btn_mash.addEventListener('click', handleClick)

    return () => {
      console.log('un mounted');
      btn_mash.removeEventListener('click', handleClick)
    }
  }, [])

  return <div>
    <>
      <p>You mashed the button {mash} times. &nbsp; &nbsp;
        {/* <button id="btn_mash" onClick={() => setCount(mash + 0)}>mash</button> */}
        <button id="btn_mash">Mash</button>
      </p>
    </>
  </div>
}

const ThemeContext = React.createContext('light');
// console.log("First, the theme is: " + ThemeContext.value)

function Subheader(){
  const theme = useContext(ThemeContext);
  // console.log("Now the theme is: " + theme)
    return (
      <header style={{
        backgroundColor: theme === 'light' ? '#FFF' : '#000',
        color: theme === 'light' ? '#000' : '#FFF'
      }

      }>
      <p>This is the header2.</p>
      </header>
    )
  }

function App() {
  return (
    <div>
      
      <ThemeContext.Provider value="dark">
        <Header />
        <Subheader />
        {greeting}
        <UseProps1 name='Dude' />
        <UseProps1 name='Vato' />
        <UseProps2 value='Dude2' />
        <UseProps2 value='Vato2' />
        <Counter />
        <Tapper />
        <Masher />
        {msg1}
        <Posts/>
        <Footer />
      </ThemeContext.Provider>
    </div>
  )
}

export default App
