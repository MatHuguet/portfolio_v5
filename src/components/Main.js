import React from 'react'
import Nav from './Nav'
import Content from './Content'
import '../styles/main.css'

export default function Main(){
    return (
        <main>
            <div className='main-container'>
                <Nav/>
                <Content/>
            </div>
        </main>
    )
}