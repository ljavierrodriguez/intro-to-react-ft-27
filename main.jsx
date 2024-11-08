import React from 'react'
//import ReactDOM from 'react-dom' // <= v17
import ReactDOM from 'react-dom/client' // >= v18 

import App from './App'

//ReactDOM.render(<App />, document.getElementById('root')) // <= v17


ReactDOM.createRoot(document.getElementById('root')).render(<App />) // >= v18
