import './Dog.css';


const Dog = ({dog}) => {
    return(
        <>
            <div className='dog-container'>
                <p>{dog.name}</p>
                <p>{dog.breed}</p>
                <p>{dog.age}</p>
                <p>{dog.zipcode}</p>
                <img src={dog.img} alt=""/>
            </div>
        </>
    );
}

export default Dog;