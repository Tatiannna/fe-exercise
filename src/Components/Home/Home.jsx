import './Home.css';

const Home = () => {
    return (
        <>
            <h1>Fetch!</h1>
            <form>
                <input type="text" placeholder="Filter by breed"/>
                <button> Search </button>
            </form>
        </>
    );
}

export default Home;