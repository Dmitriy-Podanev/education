import React from 'react';
import '../assets/styles/Enter.css'

export const Signin = () => {
    return (
        <div className="Container">
          <form className="block">
            <input type="email" name="email" placeholder="Email"/>
            <input type="password" name="password" placeholder="password"/>
            <button>Enter</button>

          </form>

        </div>
    );
};

