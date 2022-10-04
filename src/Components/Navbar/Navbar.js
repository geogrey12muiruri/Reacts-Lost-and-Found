import React, { Component } from 'react'
import {MenuItems} from './MenuItems'

class Navbar extends Component {
    render() {
        return (
            <nav className='Navbaritems'>
                <h1 className='nav-logo'>Lost and Found</h1>
                <div className='menu-icons'>

                </div>
                <ul>
                  {MenuItems.map((item, index)=> {
                    return(
                        <li key = {index}>
                          <a className={item.cName} href={item.url} >
                            {item.title}
                          </a>
                        </li>

                    )
                  })}
                  
                  <li><a href='#'></a></li>
                  <li><a href='#'></a></li>
                  <li><a href='#'></a></li>
                  <li><a href='#'></a></li>
                
                </ul>
            </nav>
        )
    }
}