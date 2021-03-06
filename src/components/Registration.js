import React from 'react';
import "Enter.css"

export const Registration = () => {
    return (
        <div className="Container">
          <form className="block">
            <input type="email" name="email" placeholder="email" />
            <input type="name" name="name" placeholder="Name" />
            <input type="Password" name="Password" placeholder="Password" />
            <input type="RepeatedPassword" name="RepeatedPassword" placeholder="Repeat Password" />
            <button onClick="" type="button">Register</button>

          </form>
          </div>
    );
};


