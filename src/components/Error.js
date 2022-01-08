import "../index";
import { Link } from "react-router-dom";

const Error = () => {
	return (
		<div className=" w-screen h-screen">
			<div className="flex flex-col items-center justify-center m-10">
				{/* <img src={require("../img/Capture.PNG")} className="h-70 w-70" /> */}
				<h3 className="text-center font-semibold m-10 text-3xl">Coming Soon</h3>
				<Link to="/" className="error">
					Go Back to Home page
				</Link>
			</div>
		</div>
	);
};

export default Error;
