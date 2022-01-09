module.exports = {
	content: [],
	theme: {
		extend: {
			colors: {
				bgnavbar: "#FAFBFD",
				nhover: "#090F31",
				grayClr: {
					50: "#E0E0E0",
					75: "#9E9E9E",
					100: "#4F4F4F",
					200: "#3F3F3F",
					300: "#455A64",
					400: "#1C313A",
					500: "#333333",
					600: "#828282",
					700: "#AEAEAE",
					800: "#455A64",
				},
				blueClr: {
					100: "#3D5AFE",
					200: "#2962FF",
					300: "#0039CB",
				},
				redClr: {
					100: "#D32F2F",
					200: "#9A0007",
				},
			},
			spacing: {
				"1/7": "237px",
				15: "3.75rem",
				29: "7.25rem",
				37: "9.25rem",
			},
			fontFamily: {
				main: ["Poppins", "sans - serif"],
				input: ["Ubuntu Mono", "sans - serif"],
			},
			gridTemplateRows: {
				layout: "50px minmax(95px, 1fr)",
			},
		},
	},
	plugins: [],
};
