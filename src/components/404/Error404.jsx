import React from 'react';
import { Link } from 'react-router-dom'; // If using React Router for navigation
import './Error404.css'; // Create a CSS file for styling

export default function Error404() {
    return (
        <div className="error-container">
            <div className="icon-container">
                <div className="icon">!</div>
            </div>
            <h1>Error 404</h1>
            <p>Oops, this page doesn't exist.</p>
            <Link to="/">
                <button>Go Home</button>
            </Link>
        </div>
    );
}
