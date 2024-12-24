/** @format */
import { Grid, Box } from "@mui/material";
import Img1 from "../assets/brand!.png";
import Img2 from "../assets/brand2.png";
import Img3 from "../assets/brand3.png";
import Img4 from "../assets/brand4.png";
import Img5 from "../assets/brand5.png";
import Img6 from "../assets/brand6.png";

const brands = [
	{ img: Img1, alt: "brand1" },
	{ img: Img2, alt: "brand2" },
	{ img: Img3, alt: "brand3" },
	{ img: Img4, alt: "brand4" },
	{ img: Img5, alt: "brand5" },
	{ img: Img6, alt: "brand6" },
];

export default function Brands() {
	return (
		<Box
			sx={{
				width: "80%",
				maxWidth: "1440px",
				margin: "auto",
				paddingY: 4,
			}}>
			<Grid
				container
				spacing={{ xs: 2, sm: 3, lg: 4 }}
				justifyContent='center'
				alignItems='center'>
				{brands.map((brand, index) => (
					<Grid
						item
						xs={6}
						sm={4}
						md={3}
						lg={2}
						key={index}
						sx={{
							display: "flex",
							justifyContent: "center",
							alignItems: "center",
							height: "100%",
						}}>
						<Box
							component='img'
							src={brand.img}
							alt={brand.alt}
							sx={{
								width: "100%",
								maxWidth: "120px",
								objectFit: "contain",
							}}
						/>
					</Grid>
				))}
			</Grid>
		</Box>
	);
}
