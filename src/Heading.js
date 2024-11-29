import { useUser } from "./Context/UserContext";

function Heading() {
    const { numItems } = useUser();

    return (
        <p>
            {numItems}
        </p>
    )
}

export default Heading;