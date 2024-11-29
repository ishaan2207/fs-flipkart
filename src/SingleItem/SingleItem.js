import './SingleItem.css';

function SingleItem(props) {

    const { source, alt, name, getId } = props;

    function clickHandler() {
        getId(alt);
    }

    return (
        <div className="navItem" onClick={clickHandler}>
            <img src={source} alt={alt} />
            <p>{name}</p>
        </div>
    )
}

export default SingleItem;

