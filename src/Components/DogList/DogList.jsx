import { useDispatch, useSelector } from 'react-redux';
import './DogList.css';
import { useEffect } from 'react';
import { searchDogs } from '../../store/dogs';

const DogList = () => {

    const dispatch = useDispatch();
    const dogs = useSelector(state => state.dogs)


    useEffect( () => {
        dispatch(searchDogs());
    }, [dispatch])
    console.log(dogs);

    return (
        <>
            <ul>List of Dogs</ul>

                {dogs.resultIds.forEach(element => {
                    <li>element</li>
                })}
        </>
    );
}  

export default DogList;