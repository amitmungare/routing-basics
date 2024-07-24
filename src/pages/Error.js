import React from 'react'
import MainNavigation from '../components/MainNavigation'
import { useNavigate } from 'react-router-dom';

const Error = () => {
    const navigate = useNavigate();
    function navHandler(){
        navigate('/')
    }
  return (
    <>
    <MainNavigation/>
    <main>
        <h1>An error occurred</h1>
        <p>Could not find the page</p>
        <p>
            <button onClick={navHandler}>Home</button>
        </p>
    </main>
    </>
  )
}

export default Error