import Layout from './layout.js'
import CONSTS from './consts.js'
import reducer from './reducer.js'

window.onload = () => {
  window.JOBS = CONSTS.JOBS
  ReactDOM.render(
    <ReactRedux.Provider store={Redux.createStore(reducer)}>
      <Layout />
    </ReactRedux.Provider>,
    document.getElementById('root')
  )
}