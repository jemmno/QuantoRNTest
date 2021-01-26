import Reactotron, { networking } from 'reactotron-react-native'
import { reactotronRedux } from 'reactotron-redux'
import reducers from './root-reducer';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

var store;

let middleware = applyMiddleware(thunk)

if (__DEV__) {
  Reactotron
    .configure({ name: 'test app' })
    .use(reactotronRedux())
    .use(networking())
    .connect()

  // monkey patch console.log to send log to reactotrona
  const yeOldeConsoleLog = console.log
  console.log = (...args) => {
    yeOldeConsoleLog(...args)
    Reactotron.display({
      name: 'CONSOLE.LOG',
      value: args,
      preview: args.length > 0 && typeof args[0] === 'string' ? args[0] : null
    })
  }


  store = createStore(reducers, compose(middleware, Reactotron.createEnhancer()))
}
else {
  store = createStore(reducers,compose(middleware))
}

export default store;
