import React from 'react';
import { Link } from 'react-router-dom';


const Home = () => <div className='Public'>
    <h1>Home</h1>
    <ul>
        <li>
            <Link to='/public'>Public Page</Link>
        </li>
        <li>
            <Link to='private1'>Provate Page 1</Link>
        </li>
        <li>
            <Link to='private2'>Private Page 2</Link>
        </li>
    </ul>
</div>

export default Home;