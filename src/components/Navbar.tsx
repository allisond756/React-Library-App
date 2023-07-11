import { useState } from 'react'
import { Link } from 'react-router-dom'
import Button from './Button'
import { useAuth0 } from '@auth0/auth0-react'

function Navbar() {
    const [isVisible, setIsVisible ] = useState(false);
    const { isAuthenticated, loginWithRedirect, logout } = useAuth0();

    const signOutOnClick = () => {
        logout();
    };

    const signInOnClick = () => {
        loginWithRedirect();
    } 

    const dropDown = () => {
        setIsVisible(!isVisible)
    }

    const clicked = () => {
        setIsVisible(false)
    }

    return (
        <nav className='flex items-center justify-between flex-wrap bg-gradient-to-t from-white to-rose-300 p-6'>
            <div className='flex items-center flex-shrink-0 text-yellow-900 mr-6'>
                <Link to='/' className='font-semibold text-2xl tracking-light  p-2 rounded border-2 border-dashed border-rose-300'>BookVault</Link>
            </div>
            <div className="block">
                <button 
                    onClick={dropDown}
                    className='flex items-center px-3 py-2 text-yellow-900 bg-amber-200 bg-opacity-50 border-2 rounded
                     border-yellow-800 border-dashed hover:text-white hover:border-white'
                     >
                        <i className='fas fa-bars'></i>
                </button>
            </div>
            { isVisible ? (
                <div className='w-full block flex-grow items-center'>
                    <div className='text-sm lg:flex-grow ms-auto w-fit mr-10'>
                        <Button className='p-2 m-5 font-semibold tracking-wide rounded bg-amber-200 bg-opacity-50 border-2 border-dashed border-yellow-800 justify-center'>
                            <div>
                                <Link to='/' onClick={ clicked } className='flex place-items-center
                                lg:inline-block lg:mt-0 text-yellow-900 hover:text-white'>
                                    Home
                                </Link>
                            </div>
                        </Button>
                        <Button className='p-2 m-5 font-semibold tracking-wide rounded bg-amber-200 bg-opacity-50 border-2 border-dashed border-yellow-800 justify-center'>
                            <div>
                                <Link to='/about' onClick={ clicked } className='flex place-items-center
                                lg:inline-block lg:mt-0 text-yellow-900 hover:text-white'>
                                    About
                                </Link>
                            </div>
                        </Button>
                        <Button className='p-2 m-5 font-semibold tracking-wide rounded bg-amber-200 bg-opacity-50 border-2 border-dashed border-yellow-800 justify-center'>
                            <div>
                                <Link to='/contact' onClick={ clicked } className='flex place-items-center
                                lg:inline-block lg:mt-0 text-yellow-900 hover:text-white'>
                                    Contact Us
                                </Link>
                            </div>
                        </Button>
                        <Button className='p-2 m-5 font-semibold tracking-wide rounded bg-amber-200 bg-opacity-50 border-2 border-dashed border-yellow-800 justify-center'>
                            <div>
                                <Link to='/dashboard' onClick={ clicked } className='flex place-items-center
                                lg:inline-block lg:mt-0 text-yellow-900 hover:text-white'>
                                    Dashboard
                                </Link>
                            </div>
                        </Button>
                        {
                            !isAuthenticated ?
                            <Button className='p-2 m-5 font-semibold tracking-wide rounded bg-amber-200 bg-opacity-50 border-2 border-dashed border-yellow-800 justify-center'>
                            <div>
                                <Link to="/" onClick={signInOnClick} className='flex place-items-center mt-4 lg:inline-block lg:mt-0
                                 text-yellow-900 hover:text-white'>
                                    Login
                                </Link>
                            </div>
                        </Button>
                        :
                        <Button className='p-2 m-5 font-semibold tracking-wide rounded bg-amber-200 bg-opacity-50 border-2 border-dashed border-yellow-800 justify-center'>
                            <div>
                                <Link to="/" onClick={signOutOnClick} className='flex place-items-center mt-4 lg:inline-block lg:mt-0
                                 text-yellow-900 hover:text-white'>
                                    Sign Out
                                </Link>
                            </div>
                        </Button>
                        }
                        
                    </div>
                </div>
                ) : (
                <></>
            ) }
        </nav>
    )
}

export default Navbar