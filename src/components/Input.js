// import LockIcon from "@mui/icons-material/Lock";
// import CallIcon from "@mui/icons-material/Call";
const Input = props => {
	return (
		<div>
			<input
				type="email"
				id="email"
				className=" focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
				placeholder="placeholder"
				required
			></input>
		</div>
	);
};

export default Input;
