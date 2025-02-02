import { useDispatch, useSelector } from 'react-redux';
import './Home.css';
import { useEffect } from 'react';
import { searchDogs } from '../../store/dogs';
import DogList from '../DogList/DogList';

const Home = () => {


    return (
        <>
            <h1>Fetch!</h1>
            <form>
                <input type="text" placeholder="Filter by breed"/>
                <button> Search </button>
            </form>
            < DogList />
        </>
    );
}

export default Home;