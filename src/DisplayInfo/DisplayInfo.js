import './DisplayInfo.css';

function DisplayInfo(props) {

    const { source, alt, name } = props;

    const url = 'https://fakestoreapi.com/products/' + alt;
    let itemData = [];

    function showInfo() {
        fetch(url)
            .then(data => data.json())
            .then(response => itemData = response);
    }

    return (
        <div className="navItem" onClick={showInfo}>
            <img src={source} alt={alt} />
            <p>{name}</p>
        </div>
    )
}

export default DisplayInfo;

