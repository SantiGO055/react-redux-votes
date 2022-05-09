import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"
import  CardsAnecdotes  from './CardsAnecdotes'
import CreateAnecdote from "./CreateAnecdote"

export const NavbarBootstrap = ()=>{
    return (
        <div>
            
            
            

            <Router>
            <nav className="navbar navbar-dark bg-dark">
                
            
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">Navbar</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                        {/* <a className="nav-link active" aria-current="page" href="#">Home</a> */}
                        <Link className="nav-link" to="/">home</Link>
                        </li>
                        <li className="nav-item">
                        {/* <a className="nav-link" href="#">Features</a> */}
                        <Link className="nav-link" to="/anecdotes">Anecdotes</Link>
                        </li>
                        <li className="nav-item">
                        {/* <a className="nav-link" href="#">Pricing</a> */}
                        <Link className="nav-link" to="/create">Create anecdote</Link>
                        </li>
                    </ul>
                    </div>
                </div>
            </nav>
            <Routes>
                
                <Route path="/anecdotes" element={<CardsAnecdotes/>}/>
                <Route path="/create" element={<CreateAnecdote/>}/>
                <Route path="/"/>
            </Routes>
            </Router>
        </div>
    )
}