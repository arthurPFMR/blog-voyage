import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
    return (
        <div className='navigation'>
            <ul>
            <NavLink to="/1512">
                <li>1512</li>
            </NavLink>
            <NavLink to="/1512">
                <li>1789</li>
            </NavLink>
            <NavLink to="/1512">
                <li>1942</li>
            </NavLink>
            <NavLink to="/1512">
                <li>2105</li>
            </NavLink>
            </ul>
        </div>
    );
};

export default Navigation;