import React, { useEffect, useState, useContext } from "react"
import Header from "./components/Header"
import Footer from "./components/Footer"
import Posts from "./components/Posts"  // for API calls


// JSX expression
const greeting = <h1>Welcome, please enjoy your visit.</h1>

// Using React to create element
const msg1 = React.createElement('p', null, 'Using JavaScript to modify the DOM')

// using props
function UseProps1(props) {
  return <p>Prop Name: {props.name}</p>
}
// using props 2
class UseProps2 extends React.Component {
  render() {
    return <p>Prop Value: {this.props.value}</p>
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

function Subheader() {
  const theme = useContext(ThemeContext);
  // console.log("Now the theme is: " + theme)
  return (
    <div id="subheader" style={{
      backgroundColor: theme === 'light' ? '#FFF' : '#041212',
      color: theme === 'light' ? '#000' : '#FFF',
    }
    }><div>
        <p style={{opacity: .7}}>This is the SUB header</p>
      </div>
    </div>
  )
}

function App() {
  return (
    <div>

      <ThemeContext.Provider value="dark">
        <Header />
        <Subheader />
        {greeting}
        {msg1}
        <div id="main">
          <div id="usingProps">Using Props: 
            <UseProps1 name='Name1' />
            <UseProps1 name='Name2' />
            <UseProps2 value='Value1' />
            <UseProps2 value='Value2' />
          </div>
          <div id="managingState">Managing State:
            <Counter />
            <Tapper />
            <Masher />
          </div>
        </div>
        <Posts />
        <Footer />
      </ThemeContext.Provider>
    </div>
  )
}

export default App
