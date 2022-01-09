import Input from "../components/Input";
import Label from "../components/Label";
import Span from "../components/Span";
const Inputs = () => {
	return (
		<div className="main">
			<h1>Inputs</h1>
			<div className="container">
				<div className="normal-status">
					<Span fromInput={true} />
					<Label />
					<Input />
				</div>
			</div>
		</div>
	);
};

export default Inputs;
