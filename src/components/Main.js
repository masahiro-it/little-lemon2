import React from 'react';
import '../styles/Main.css';

function Main() {
    return (
        <main>
            <section className="hero">
                <h2>Welcome to Little Lemon</h2>
                <p>Discover our fresh Mediterranean-inspired dishes made with love.</p>
                <button>Reserve a Table</button>
            </section>
            <section className="menu">
                <h2>Our Menu</h2>
                <div className="menu-item">
                    <h3>Grilled Lemon Chicken</h3>
                    <p className="price">$18</p>
                    <p>Tender chicken marinated in lemon and herbs, served with roasted vegetables.</p>
                </div>
                <div className="menu-item"> 
                    <h3>Mediterranean Salad</h3>
                    <p className="price">$12</p>
                    <p>Fresh greens, olives, feta cheese, and our signature lemon vinaigrette.</p>
                </div>
                <div className="menu-item">
                    <h3>Pasta Primavera</h3>
                    <p className="price">$15</p>
                    <p>Seasonal vegetables tossed with pasta in a light lemon cream sauce.</p>
                </div>
            </section>
        </main>
    );
}

export default Main;
// This is the Main component that serves as the main content area of the application.
// It includes a hero section with a welcome message and a button to reserve a table.
