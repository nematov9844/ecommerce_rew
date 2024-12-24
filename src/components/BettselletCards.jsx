/** @format */
import { Box,  Button,  Grid2, Typography } from "@mui/material";
import Card from "./Card"; // Material-UI'ga o‘tkazilgan Card komponenti
import Img1 from "../assets/product1.png";
import Img2 from "../assets/product2.png";
import Img3 from "../assets/product3.png";
import Img4 from "../assets/product4.png";
import Img5 from "../assets/product5.png";
import Img6 from "../assets/product6.png";
import Img7 from "../assets/product7.png";
import Img8 from "../assets/product8.png";
const products = [
	{
		id: 1,
		img: Img1,
		title: "Graphic Design",
		description: "English Department",
		currentPrice: "$6.48",
		oldPrice: "$16.48",
	},
	{
		id: 2,
		img: Img2,
		title: "Graphic Design",
		description: "English Department",
		currentPrice: "$6.48",
		oldPrice: "$16.48",
	},
	{
		id: 3,
		img: Img3,
		title: "Graphic Design",
		description: "English Department",
		currentPrice: "$6.48",
		oldPrice: "$16.48",
	},
	{
		id: 4,
		img: Img4,
		title: "Graphic Design",
		description: "English Department",
		currentPrice: "$6.48",
		oldPrice: "$16.48",
	},
	{
		id: 5,
		img: Img5,
		title: "Graphic Design",
		description: "English Department",
		currentPrice: "$6.48",
		oldPrice: "$16.48",
	},
	{
		id: 6,
		img: Img6,
		title: "Graphic Design",
		description: "English Department",
		currentPrice: "$6.48",
		oldPrice: "$16.48",
	},
	{
		id: 7,
		img: Img7,
		title: "Graphic Design",
		description: "English Department",
		currentPrice: "$6.48",
		oldPrice: "$16.48",
	},
	{
		id: 8,
		img: Img8,
		title: "Graphic Design",
		description: "English Department",
		currentPrice: "$6.48",
		oldPrice: "$16.48",
	},
	{
		id: 9,
		img: Img3,
		title: "Graphic Design",
		description: "English Department",
		currentPrice: "$6.48",
		oldPrice: "$16.48",
	},
	{
		id: 10,
		img: Img1,
		title: "Graphic Design",
		description: "English Department",
		currentPrice: "$6.48",
		oldPrice: "$16.48",
	},
];
export default function BestsellerCards() {
	return (
		<Box
			sx={{
				width: "100%",
				display: "flex",
				flexDirection: "column",
				gap: 4,
				maxWidth: "1440px",
				margin: "auto",
				padding: 4,
				fontFamily: "Montserrat",
			}}>
			{/* Title Section */}
			<Box display={"flex"} flexDirection={"column"} gap={2} justifyContent={"center"} alignItems={"center"}>
				<Typography
					variant="h6"
					color="#737373"
					fontWeight="light"
					fontSize="20px">
					Featured Products
				</Typography>
				<Typography
					variant="h5"
					color="#252B42"
					fontWeight="bold"
					fontSize="24px">
					BESTSELLER PRODUCTS
				</Typography>
				<Typography
					variant="body2"
					color="#737373"
					fontWeight="light"
					fontSize="14px">
					Problems trying to resolve the conflict between
				</Typography>
			</Box>

			{/* Products Section */}
			<Grid2 justifyContent={"center"} container spacing={3} columns={{ xs: 1, sm: 3, md: 5 }}>
				{products.map((product) => (
					<Grid2 item xs={12} sm={6} md={4} lg={2.4} key={product.id}>
						<Card {...product} />
					</Grid2>
				))}
			</Grid2>
            <Box display={"flex"} justifyContent={"center"} alignItems={"center"}>
                <Button variant="contained" sx={{backgroundColor:"transparent", color: "#23A6F0",border:"2px solid #23A6F0", fontSize: "14px", fontWeight: "bold", padding: "10px 20px"}}>
                LOAD MORE PRODUCTS
                </Button>
            </Box>
		</Box>
	);
}
