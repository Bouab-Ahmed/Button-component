import Button from "./Button";
const HoverStatus = props => {
	let HoverStatus = true;
	return (
		<>
			<Button HoverStatus={HoverStatus} variant={props.variant} color={props.color} disabled={props.disabled} />
		</>
	);
};

export default HoverStatus;
