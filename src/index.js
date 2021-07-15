import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux'; //스토어 생성
import {Provider} from 'react-redux';// 프로젝트에 리덕스 적용
import {composeWithDevTools} from 'redux-devtools-extension'; //dev tools를 설치 하고 사용한다.
import './index.css';
import App from './App';
import rootReducer from './modules';
import reportWebVitals from './reportWebVitals';

const store = createStore(rootReducer, composeWithDevTools());

ReactDOM.render(

  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
