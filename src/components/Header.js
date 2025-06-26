import React from 'react';
import '../styles/Header.css';


function Header() {
    return (
        <header>
            <h1>Little Lemon</h1>
            <nav>
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/menu">Menu</a></li>
                    <li><a href="/reservations">Reservations</a></li>
                    <li><a href="/about">About</a></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;
// This is a simple header component for the Little Lemon restaurant website.