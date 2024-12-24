/** @format */
import React from "react";
import { Box, Typography, Grid } from "@mui/material";
import Igm1 from "../assets/feature1.png";
import Igm2 from "../assets/feature2.png";

export default function Feature() {
	return (
		<Box
			sx={{
				display: "flex",
				justifyContent: "space-around",
				alignItems: "center",
				gap: 6,
				maxWidth: "1440px",
				margin: "auto",
				padding: 4,
				flexDirection: { xs: "column", md: "row" }, // Responsivlik uchun
			}}>
			{/* Image Section */}
			<Box
				sx={{
					display: "flex",
					gap: 2,
					width: { xs: "100%", md: "40%" },
					justifyContent: "center",
					alignItems: "center",
				flexDirection: { xs: "column", md: "row" }, // Responsivlik uchun

				}}>
				<img
					src={Igm1}
					alt="Feature 1"
					style={{ width: "100%", borderRadius: "4px" }}
				/>
				<img
					src={Igm2}
					alt="Feature 2"
					style={{ width: "100%", borderRadius: "4px" }}
				/>
			</Box>

			{/* Text Section */}
			<Box
				sx={{
					fontFamily: "Montserrat",
					display: "flex",
					flexDirection: "column",
					gap: 2,
					width: { xs: "100%", md: "40%" },
					textAlign: { xs: "center", md: "left" }, // Responsiv matn pozitsiyasi
				}}>
				<Typography
					variant="subtitle1"
					color="#23A6F0"
					fontWeight="bold"
					fontSize="16px">
					Featured Products
				</Typography>
				<Typography
					variant="h4"
					color="#252B42"
					fontWeight="bold"
                    sx={{fontSize: {xs: "2rem", sm: "2.5rem", md: "3rem"}}} // Responsivlik uchun
                    >
					We love what we do
				</Typography>
				<Typography
					variant="body2"
					color="#737373"
					fontWeight="light"
					fontSize="14px">
					Problems trying to resolve the conflict between the two major realms of Classical physics:
					Newtonian mechanics.
				</Typography>
				<Typography
					variant="body2"
					color="#737373"
					fontWeight="light"
					fontSize="14px">
					Problems trying to resolve the conflict between the two major realms of Classical physics:
					Newtonian mechanics.
				</Typography>
			</Box>
		</Box>
	);
}
