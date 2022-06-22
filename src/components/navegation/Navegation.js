import React from 'react'
import IconsHome from '../../icons/IconsHome'
import { Link as Linkrouter } from 'react-router-dom'

const Navegation = () => {
    return (
        <>
            <nav className="d-flex flex-nowrap">
                <div className='d-flex flex-column flex-shrink-0 p-3 text-white bg-dark container-navig' >
                    <a href='' className='d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none'>
                    <i className='bi pe-none me-2' width="40" height="32" >im</i>
                    <span className="fs-4">Sidebar</span>
                    </a>
                    <hr />
                    <ul className='nav nav-pills flex-column mb-auto'>
                        <li className='nav-item'>
                            <Linkrouter to='/' className='nav-link active' aria-current="page">
                                <svg className='bi pe-none me-2' width="40" height="32"><IconsHome /></svg> Home
                            
                            </Linkrouter>
                        </li>
                        
                        <li >
                            <Linkrouter to='/adduser' className='nav-link text-white' >
                                <svg className='bi pe-none me-2' width="16" height="16"><IconsHome className="text-white"/></svg>
                                AgregarUsuario
                            
                            </Linkrouter>
                        </li>
                   

                    </ul>

                </div>
              
            </nav>
         

        </>
    )
}

export default Navegation