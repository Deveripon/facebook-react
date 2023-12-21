import { Link } from "react-router-dom";
const _404page = () => {
    return (
        <div className="flex justify-center flex-col items-center h-screen w-full">
            <h2 className="text-red-600">
                OOPS ! <br />
                Your requested page does not found !
            </h2>
            <p>
                Go back to{" "}
                <Link className="text-primary" to={"/"}>
                    Home
                </Link>
            </p>
        </div>
    );
};

export default _404page;
