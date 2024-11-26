import './ElectronicsItem.css';

function ElectronicsItem(props) {

    const { source, alt, name } = props;

    return (
        <>
            <div className="navItem">
                <img src={source} alt={alt} />
                <p>{name}</p>
            </div>
        </>
    )
}

export default ElectronicsItem;

