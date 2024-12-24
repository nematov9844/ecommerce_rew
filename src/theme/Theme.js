/** @format */

import { createTheme } from "@mui/material/styles";

export const Theme = createTheme({
	typography: {
		heroTitle: {
			fontFamily: '"Montserrat", serif',
			fontSize: "3rem",
			fontWeight: "bold",
			color: "#252B42",
            [createTheme().breakpoints.down("sm")]: {
                fontSize: "2rem",
              },
              [createTheme().breakpoints.down("md")]: {
                fontSize: "2.5rem",
              },
		},
		heroText: {
			fontFamily: '"Montserrat", serif',
			fontSize: "1.5rem",
			color: "#737373",
            [createTheme().breakpoints.down("sm")]: {
                fontSize: "1rem",
              },
              [createTheme().breakpoints.down("md")]: {
                fontSize: "1.2rem",
              },
		},
	},
	components: {
		MuiButton: {
			styleOverrides: {
				HeroBtn:{
					color: "#fff",
					backgroundColor: "#23A6F0",
					padding: "0.5rem 2rem",
					fontSize: "1.4rem",
					borderRadius: "4px",
				},
			},
		},
	},
});
