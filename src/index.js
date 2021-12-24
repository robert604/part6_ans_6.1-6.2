import React from 'react';
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import reducer from './reducer'

const store = createStore(reducer)

const App = () => {
  const {good,ok,bad} = {...store.getState()}
  const goodClick = () => {
    store.dispatch({
      type: 'GOOD'
    })
  }
  const okClick = () => {
    store.dispatch({
      type: 'OK'
    })
  }
  const badClick = () => {
    store.dispatch({
      type: 'BAD'
    })
  }    

  return (
    <div>
      <button onClick={goodClick}>good</button> 
      <button onClick={okClick}>ok</button> 
      <button onClick={badClick}>bad</button>
      <button>reset stats</button>
      <div>good {good}</div>
      <div>ok {ok}</div>
      <div>bad {bad}</div>
    </div>
  )
}

const renderApp = () => {
  ReactDOM.render(<App />, document.getElementById('root'))
}

renderApp()
store.subscribe(renderApp)
