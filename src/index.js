import reducer from './reducer.js'

window.onload = () => {

  let store = Redux.createStore(reducer)

  ReactDOM.render(
    <p>  hello, {store.toString}  </p>,
    document.getElementById('root')
  )
}