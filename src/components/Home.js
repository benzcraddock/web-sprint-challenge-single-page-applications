import React from 'react'
import { useHistory } from 'react-router-dom'

const Home = () => {

    const history = useHistory();

    const routeToShop = () => {
        history.push('/pizza');
    }

    return (
        <div className='home-wrapper'>
            <img
                className='home-image'
                src='../Assets/Pizza.jpg'
                alt='Pizza'
            />
            <button
                onClick={routeToShop}
                className='shop-button'
            >
                Pizza?
            </button>
        </div>
    )
}

export default Home;
