import React from 'react'
import Button from './Button.jsx'
import { Header } from './Header.jsx'
import Input from './Input.jsx'

function App(){
    return (
        <>
            <h1>Pagina Web</h1>
            {/* <Button /> */} <button>Hola</button>
            <Button>
                <i className='fa-brands fa-html5'></i>
                HTML 5
            </Button>
            <Button>
                <i className='fa-brands fa-css3'></i>
                CSS3
            </Button>
            <Button>
                <i className='fa-brands fa-js'></i>
                Javascript
            </Button>
            
            {/* <Header /> */}<header>Header</header>
            <Input type="password" id="password" name="password" placeholder="My Input" className="form-control" nickname="lucho" />
            <footer>
                My Footer
            </footer>
        </>
    )
}

export default App
