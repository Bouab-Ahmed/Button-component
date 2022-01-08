import "../index";
import { Link } from "react-router-dom";

const Error = () => {
	return (
		<div className="coming-soon">
			<div>
				<img src={require("../img/coming-soon.png")} />
				<h3>Coming Soon</h3>
				<Link to="/" className="error">
					Go Back to Home page
				</Link>
			</div>
		</div>
	);
};

export default Error;
