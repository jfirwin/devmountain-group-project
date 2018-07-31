import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {HashRouter} from 'react-router-dom'
import {Provider} from 'react-redux'
import store from './store'


ReactDOM.render(
	<Provider store={store}>
		<HashRouter>
	 		<App />
		</HashRouter>
	</Provider>
	, document.getElementById('root'));
<<<<<<< HEAD
// registerServiceWorker();
=======
>>>>>>> 0df573d40200f722d4932a31dca08ff48cb042dc

