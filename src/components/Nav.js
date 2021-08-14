import React from 'react';
import './Nav.css';

class Nav extends React.Component{
    constructor(){
        super();
        this.state = {
            menuOpen: false,
         }
    }

    handleClick = ()=> {
        this.setState ({ menuOpen: !this.state.menuOpen })
    }

    render(){

        const menuClass = this.state.menuOpen ? 'menu-open' : ''

        return (
            <div> 
            <nav className="header">
                <h1> Start Bootstrap </h1>
                <ul className={`nav-links` }> 
                    <li>  Services </li>
                    <li>  Portfolio  </li>
                    <li>  About  </li>
                    <li> Team  </li>
                    <li>  Contact </li>   
                </ul>
                <img 
                onClick={this.handleClick}
                className="menu-img" 
                src= " https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtFsRKDNJgzB0s58riAW-SfPLDYEtLa8Wdsg&usqp=CAU"  
                alt="menu-img"
                />
            </nav>
            

            <menu className={menuClass}>
            <ul className={`menu-links ${menuClass}`}>
                    <li>  Services </li>
                    <li>  Portfolio  </li>
                    <li>  About  </li>
                    <li> Team  </li>
                    <li>  Contact </li> 
                </ul>
            </menu>

            <div className="container-two">
            <h2>Welcome To Our Studio! </h2>
            <h3> IT'S NICE TO MEET YOU </h3>
            <button class="button"> TELL ME MORE</button>
            </div>  
            
        </div>

            )
    }
}

export default Nav; 