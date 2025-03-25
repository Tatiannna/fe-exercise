import './Dog.css';


const Dog = ({dog}) => {
    return(
        <>
            <div className='dog-container'>
                <img src={dog.img} alt=""/>
                <p>{dog.name}</p>
                <p>{dog.breed}</p>
                <p>{dog.age}</p>
                <p>{dog.zipcode}</p>
            </div>
        </>
    );
}

export default Dog;