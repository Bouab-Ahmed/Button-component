import Button from "./Button";
const HoverStatus = props => {
	let HoverStatus = true;
	return (
		<>
			{/* <span>&amp;hover &amp;focus</span> */}
			<Button HoverStatus={HoverStatus} variant={props.variant} color={props.color} disabled={props.disabled} />
		</>
	);
};

export default HoverStatus;
