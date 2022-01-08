import Button from "../components/Button";
import HoverStatus from "../components/HoverStatus";
import Span from "../components/Span";
import Footer from "../components/Footer";
const Buttons = () => {
	return (
		<div className="buttons">
			<h1>Buttons</h1>
			<div className="container default-container">
				<div className="normal-status">
					<Span />
					<Button />
				</div>
				<div className="hover-status">
					<Span itHovred={true} />
					<HoverStatus />
				</div>
			</div>
			<div className="container outline-container">
				<div className="normal-status">
					<Span variant="outline" />
					<Button variant="outline" />
				</div>
				<div className="hover-status">
					<Span itHovred={true} />
					<HoverStatus variant="outline" />
				</div>
			</div>
			<div className="container text-container">
				<div className="normal-status">
					<Span variant="text" />
					<Button variant="text" />
				</div>
				<div className="hover-status">
					<Span itHovred={true} />
					<HoverStatus variant="text" />
				</div>
			</div>
			<div className="disabledShadow-container">
				<Span disabledShadow />
				<Button disabledShadow />
			</div>
			<div className="container disabled-container">
				<div className="normal-status">
					<Span disabled />
					<Button disabled />
				</div>
				<div className="hover-status">
					<Span itHovred={true} />
					<HoverStatus disabled />
				</div>
			</div>
			<div className="container icons-container">
				<div className="start-icon">
					<Span startIcon />
					<Button startIcon="local_grocery_store" />
				</div>
				<div className="end-icon">
					<Span endIcon />
					<Button endIcon="local_grocery_store" />
				</div>
			</div>
			<div className="container size-continer">
				<div className="sm-btn">
					<Span size="sm" />
					<Button size="sm" />
				</div>
				<div className="md-btn">
					<Span size="md" />
					<Button size="md" />
				</div>
				<div className="lg-btn">
					<Span size="lg" />
					<Button size="lg" />
				</div>
			</div>
			<div className="container color-container">
				<div>
					<Span color="default" />
					<Button />
				</div>
				<div>
					<Span color="primary" />
					<Button color="primary" />
				</div>
				<div>
					<Span color="secondary" />
					<Button color="secondary" />
				</div>
				<div>
					<Span color="danger" />
					<Button color="danger" />
				</div>
				<div>
					<Span itHovred={true} />
					<HoverStatus color="default" />
				</div>
				<HoverStatus color="primary" />
				<HoverStatus color="secondary" />
				<HoverStatus color="danger" />
			</div>
			<Footer />
		</div>
	);
};
export default Buttons;
