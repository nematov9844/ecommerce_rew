/** @format */
import { Box, Typography, Button } from "@mui/material";
import HeroImg from "../assets/heroImg.png";

export default function Hero() {
	return (
		<Box
			sx={{
				display: "flex",
				flexDirection: { xs: "column", lg: "row" },
				maxWidth: "1440px",
				margin: "auto",
				gap: { xs: 4, lg: 8 },
				alignItems: "center",
				justifyContent: "center",
				padding: 2,
			}}>
			{/* Left Section */}
			<Box
				sx={{
					backgroundColor: "#66ebff",
					width: "95%",
					borderRadius: "16px",
					display: "flex",
					flexDirection: { xs: "column", lg: "row" },
					alignItems: "center",
					justifyContent: "center",
					padding: { xs: 2, sm: 3 },
					gap: { xs: 4, lg: 8 },
				}}>
				{/* Text Content */}
				<Box
					sx={{
						display: "flex",
						flexDirection: "column",
						alignItems: { xs: "center", lg: "flex-start" },
						textAlign: { xs: "center", lg: "left" },
						gap: 3,
						width: { xs: "100%", lg: "40%" },
					}}>
					<Typography
						sx={{
							fontFamily: "Montserrat, sans-serif",
							fontWeight: "bold",
							color: "#2A7CC7",
							fontSize: "1rem",
						}}>
						SUMMER 2020
					</Typography>
					<Typography
						sx={{
							fontFamily: "Montserrat, serif",
							fontSize: { xs: "2rem", sm: "2.5rem", lg: "3rem" },
							fontWeight: "bold",
							color: "#252B42",
						}}>
						NEW COLLECTION
					</Typography>
					<Typography
						sx={{
							fontFamily: "Montserrat, serif",
							fontSize: { xs: "1rem", sm: "1.2rem", lg: "1.5rem" },
							color: "#737373",
						}}>
						We know how large objects will act, but things on a small scale.
					</Typography>
					<Button
						variant="contained"
						sx={{
							backgroundColor: "#23A6F0",
							color: "#fff",
							fontSize: { xs: "0.8rem", sm: "1rem", lg: "1.2rem" },
							padding: "0.5rem 2rem",
							borderRadius: "4px",
							"&:hover": { backgroundColor: "#1d8dd6" },
						}}>
						SHOP NOW
					</Button>
				</Box>

				{/* Image Section */}
				<Box
					sx={{
						position: "relative",
						display: "flex",
						alignItems: "center",
						justifyContent: "center",
						width: { xs: "100%", lg: "50%" },
					}}>
					<Box
						sx={{
							position: "absolute",
							top: 0,
							left: 0,
							width: { xs: "100%", sm: "100%", lg: "90%" },
							height: "100%",
							minHeight: "210px",
							backgroundColor: "#fff",
							borderRadius: "50%",
                            zIndex: 1,
						}}
					/>
					<img
						src={HeroImg}
						alt="Hero"
						style={{
							position: "relative",
							zIndex: 10,
							maxWidth: "100%",
							height: "auto",
						}}
					/>
				</Box>
			</Box>
		</Box>
	);
}
