import { useRouteError } from "react-router";

const Error = () => {
    const err = useRouteError();
    console.log(err);

    return(<div>
        <h1>Oops</h1>
        <h2>Try a proper url...............</h2>
        <header>{err.status}</header>
    </div>);
};

export default Error;