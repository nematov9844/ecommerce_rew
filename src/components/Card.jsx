/** @format */
import { Box, Typography, Card, CardContent, CardMedia } from "@mui/material";

export default function ProductCard({ title, description, img, currentPrice, oldPrice }) {
	return (
		<Card
			sx={{
				display: "flex",
				flexDirection: "column",
				gap: 2,
				width: "100%",
				fontFamily: "Montserrat",
				boxShadow: 3,
				borderRadius: 2,
			}}>
			{/* Image Section */}
			<CardMedia
				component="img"
				image={img}
				alt="product"
				sx={{
					width: "100%",
					height: "18rem",
					objectFit: "cover",
					borderRadius: "8px",
				}}
			/>

			{/* Content Section */}
			<CardContent sx={{ padding: 2 }}>
				<Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
					<Typography
						variant="h6"
						fontWeight="bold"
						color="#252B42"
						fontSize="16px">
						{title}
					</Typography>
					<Typography
						variant="body2"
						color="#737373"
						fontWeight="bold">
						{description}
					</Typography>
				</Box>
			</CardContent>

			{/* Price Section */}
			<Box
				sx={{
					display: "flex",
					justifyContent: "space-between",
					alignItems: "center",
					paddingX: 2,
					paddingBottom: 2,
				}}>
				<Typography
					variant="body2"
					color="#BDBDBD"
					sx={{ textDecoration: "line-through" }}>
					${oldPrice}
				</Typography>
				<Typography
					variant="h6"
					fontWeight="bold"
					color="#23856D">
					${currentPrice}
				</Typography>
			</Box>
		</Card>
	);
}
