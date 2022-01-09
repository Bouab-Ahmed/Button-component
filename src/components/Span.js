const Span = props => {
	return props.fromInput ? (
		<span className="input-span">&lt;Input &#47;&gt;</span>
	) : props.itHovred ? (
		<span className="hover-span">&amp;hover &amp;focus</span>
	) : (
		<span className="Span">
			&lt;Button {props.variant && <>variant="{props.variant}"</>}
			{props.disabledShadow && <>disabledShadow</>}
			{props.disabled && <>disabled</>}
			{props.startIcon && <>startIcon ="local_ grocery_store"</>}
			{props.endIcon && <>endIcon ="local_ grocery_store"</>}
			{props.size && <>size ="{props.size}"</>}
			{props.color && <>color ="{props.color}"</>}
			&#47;&gt;
		</span>
	);
};

export default Span;
