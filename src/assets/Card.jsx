import profilePic from './Screenshot 2024-09-02 130134.png';

function Card(props) {
        const handleClick =() => {
            window.open(props.directionsLink, '_blank');
        }

        return (
        <div className="card">
            <img className='card-img' src={props.image} alt="profile picture" />
            <h2 className='card-title'> {props.name}</h2>
            <p className='card-text'> Rating: {props.rating} </p>
            <p> Would go back: {props.goBack ? "Yes" : "No"}</p>
            <button className='direction-button' onClick={handleClick}>Click me for directions</button>
        </div>
    );
}

export default Card;
