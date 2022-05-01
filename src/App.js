import logo from './logo.svg';
import './App.css';
import CustomComponent from "./components/CustomComponent/CustomComponent";
import { Provider} from "react-redux";
import {createStore,applyMiddleware} from "redux";
import reducer from "./stores/reducer";
import createSagaMiddleware from 'redux-saga';
import {watchNumberUp} from "./sagas/saga";


const sagaMiddleware = createSagaMiddleware();
const store = createStore(reducer,applyMiddleware(sagaMiddleware));
sagaMiddleware.run(watchNumberUp);
function App() {
    return (
        <Provider store={store}>
            <div className="App">
                <CustomComponent/>
            </div>
        </Provider>
    );
}

export default App;
