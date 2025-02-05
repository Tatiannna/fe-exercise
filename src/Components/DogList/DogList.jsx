import './DogList.css';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { searchDogs } from '../../store/dogs';
import Dog from './Dog';
import ReactPaginate from 'react-paginate';
import './ReactPaginate.css';



const DogList = () => {

    const dispatch = useDispatch();
    const dogs = useSelector(state => state.dogs);
    const [pageCount, setPageCount] = useState(10);

    useEffect( () => {
        dispatch(searchDogs());
    }, [dispatch]);

    const handlePageClick = () => {
        console.log("clicked");
    }

    return (
        <>
            <h4>List of Dogs</h4>
            <div className='dog-list-container'>
                {Object.values(dogs).map((element) => <Dog dog={element}/>)}
            </div>

            <ReactPaginate
                previousLabel={"Previous"}
                nextLabel={"Next"}
                breakLabel={"..."}
                breakClassName={"break-me"}
                pageCount={pageCount} 
                marginPagesDisplayed={2} // Number of pages to show at the beginning and end
                pageRangeDisplayed={3} // Number of pages to show around the current page
                onPageChange={handlePageClick}
                containerClassName={"pagination"}
                activeClassName={"active"}
            />
        </>
    );
}  

export default DogList;