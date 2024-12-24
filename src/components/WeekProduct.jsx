/** @format */
import { Box, Typography, Button } from "@mui/material";
import Img1 from "../assets/weekImg1.png";
import Img2 from "../assets/weekImg2.png";
import Img3 from "../assets/weekImg3.png";

export default function WeekProduct() {
	return (
		<Box
			sx={{
				width: "100%",
                maxHeight: "600px",
				maxWidth: "1440px",
				margin: " 0 auto",
				display: "flex",
				flexDirection: { xs: "column", md: "row" },
				height: "100vh",
				gap: 2,
				color: "#fff",
			}}>
			{/* Left Section */}
			<Box
				sx={{
					backgroundImage: `url(${Img1})`,
					backgroundSize: "cover",
					backgroundPosition: "center",
					display: "flex",
					justifyContent: "start",
					alignItems: "flex-end",
					width: { xs: "100%", md: "50%" },
					height: { xs: "50%", md: "100%" },
				}}>
				<Box
					sx={{
						width: { xs: "100%", sm: "80%", md: "70%" },
						height: "auto",
						padding: { xs: 1, md: "20px" },
						backgroundColor: "rgba(45, 139, 192,0.75)",
					}}>
					<Typography
						variant="h3"
						fontWeight="bold"
						sx={{ fontSize: { xs: "1.8rem", sm: "2.5rem", md: "3rem" } }}>
						Top Product Of the Week
					</Typography>
					<Button
						variant="outlined"
						sx={{
							color: "#fff",
							borderColor: "#fff",
							marginTop: 2,
							fontSize: { xs: "0.8rem", sm: "1rem", md: "1.2rem" },
							"&:hover": { backgroundColor: "#fff", color: "#000" },
						}}>
						EXPLORE ITEMS
					</Button>
				</Box>
			</Box>

			{/* Right Section */}
			<Box
				sx={{
					display: "flex",
					flexDirection: "column",
					width: { xs: "100%", md: "50%" },
					gap: 2,
				}}>
				{/* First Box */}
				<Box
					sx={{
						backgroundImage: `url(${Img2})`,
						backgroundSize: "cover",
						backgroundPosition: "center",
						display: "flex",
						justifyContent: "start",
						alignItems: "flex-end",
						width: "100%",
						height: { xs: "50%", md: "50%" },
					}}>
					<Box
						sx={{
							width: { xs: "100%", sm: "80%", md: "70%" },
							height: "auto",
							padding: { xs: 1, md: "20px" },
							backgroundColor: "rgba(45, 139, 192,0.75)",
						}}>
						<Typography
							variant="h5"
							fontWeight="bold"
							sx={{ fontSize: { xs: "1.2rem", sm: "1.5rem", md: "2rem" } }}>
							Top Product Of the Week
						</Typography>
						<Button
							variant="outlined"
							sx={{
								color: "#fff",
								borderColor: "#fff",
								marginTop: 2,
								fontSize: { xs: "0.8rem", sm: "1rem", md: "1.2rem" },
								"&:hover": { backgroundColor: "#fff", color: "#000" },
							}}>
							EXPLORE ITEMS
						</Button>
					</Box>
				</Box>

				{/* Second Box */}
				<Box
					sx={{
						backgroundImage: `url(${Img3})`,
						backgroundSize: "cover",
						backgroundPosition: "center",
						display: "flex",
						justifyContent: "start",
						alignItems: "flex-end",
						width: "100%",
						height: { xs: "50%", md: "50%" },
					}}>
					<Box
						sx={{
							width: { xs: "100%", sm: "80%", md: "70%" },
							height: "auto",
							padding: { xs: 1, md: "20px" },
							backgroundColor: "rgba(45, 139, 192,0.75)",
						}}>
						<Typography
							variant="h5"
							fontWeight="bold"
							sx={{ fontSize: { xs: "1.2rem", sm: "1.5rem", md: "2rem" } }}>
							Top Product Of the Week
						</Typography>
						<Button
							variant="outlined"
							sx={{
								color: "#fff",
								borderColor: "#fff",
								marginTop: 2,
								fontSize: { xs: "0.8rem", sm: "1rem", md: "1.2rem" },
								"&:hover": { backgroundColor: "#fff", color: "#000" },
							}}>
							EXPLORE ITEMS
						</Button>
					</Box>
				</Box>
			</Box>
		</Box>
	);
}
