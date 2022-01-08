import LocalGroceryStoreOutlinedIcon from "@mui/icons-material/LocalGroceryStoreOutlined";
const Button = props => {
	const disableBtnProps = {};
	let classValue = ``;
	if (props.disabled) {
		disableBtnProps.disabled = true;
	} else {
		disableBtnProps.disabled = false;
	}
	props.HoverStatus
		? props.variant
			? (classValue = `btn btn-${props.variant} btn-hover-${props.variant}`)
			: props.disabled
			? (classValue = `btn btn-disabled btn-hover-disabled`)
			: props.color
			? (classValue = `btn btn-${props.color} btn-hover-${props.color}`)
			: (classValue = `btn btn-hover btn-hover-default`)
		: props.variant
		? (classValue = `btn btn-${props.variant}`)
		: props.disabledShadow
		? (classValue = `btn btn-disabledShadow`)
		: props.disabled
		? (classValue = `btn btn-disabled`)
		: props.startIcon
		? (classValue = `btn btn-icon`)
		: props.endIcon
		? (classValue = `btn btn-icon`)
		: props.size === "sm"
		? (classValue = `btn btn-disabledShadow btn-small-size`)
		: props.size === "md"
		? (classValue = `btn btn-disabledShadow`)
		: props.size === "lg"
		? (classValue = `btn btn-disabledShadow btn-large-size`)
		: props.color
		? (classValue = `btn btn-${props.color}`)
		: (classValue = `btn btn-hover`);
	return (
		<button type="button" className={`${classValue}`} {...disableBtnProps}>
			{!props.disabled &&
				!props.variant &&
				!props.disabledShadow &&
				!props.startIcon &&
				!props.endIcon &&
				!props.color &&
				"Default"}
			{(props.variant || props.disabledShadow) && "Default"}
			{props.disabled && "disabled"}
			{props.startIcon && (
				<>
					<LocalGroceryStoreOutlinedIcon /> Default
				</>
			)}
			{props.endIcon && (
				<>
					Default
					<LocalGroceryStoreOutlinedIcon />
				</>
			)}
			{(props.color === "primary" || props.color === "default") && "Default"}
			{props.color === "secondary" && "Secondary"}
			{props.color === "danger" && "Danger"}
		</button>
	);
};

export default Button;
