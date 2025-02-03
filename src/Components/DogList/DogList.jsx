import './DogList.css';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { searchDogs } from '../../store/dogs';
import Dog from './Dog';



const DogList = () => {

    const dispatch = useDispatch();
    const dogs = useSelector(state => state.dogs);

    useEffect( () => {
        dispatch(searchDogs());
    }, [dispatch]);

    return (
        <>
            <h4>List of Dogs</h4>
            <div className='dog-list-container'>
                {Object.values(dogs).map((element) => <Dog dog={element}/>)}
            </div>
        </>
    );
}  

export default DogList;