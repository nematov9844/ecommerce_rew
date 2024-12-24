/** @format */

import {
	Facebook,
	FavoriteBorder,
	Instagram,
	LocalPhone,
	MailOutline,
	Menu,
	PermIdentity,
	Search,
	ShoppingCartOutlined,
	Twitter,
	YouTube,
} from "@mui/icons-material";
import { Button } from "@mui/material";
import { useState } from "react";

export default function Header() {
	const [open, setOpen] = useState(false);
	return (
		<div className='max-w-[1440px] mx-auto font-montserrat flex flex-col gap-4 w-full'>
			<div className='hidden lg:flex justify-between font-montserrat font-bold items-center bg-[#252B42] text-white p-4 w-full'>
				<div className='flex items-center gap-4'>
					<h1 className='flex items-center gap-3 text-[14px]'>
						<LocalPhone /> (225) 555-0118
					</h1>
					<h1 className='flex items-center gap-3'>
						<MailOutline /> michelle.rivera@example.com
					</h1>
				</div>
				<div className='flex items-center gap-4'>
					<h1>Follow Us and get a chance to win 80% off</h1>
				</div>
				<div className='flex items-center gap-4'>
					<h1>Follow Us:</h1>
					<div className='flex items-center gap-1'>
						<Instagram />
						<YouTube />
						<Facebook />
						<Twitter />
					</div>
				</div>
			</div>

			<div className='hidden lg:flex justify-between items-center'>
				<div className='flex items-center gap-4 w-[40%] justify-between'>
					<h1 className='text-[#252B42] text-2xl font-bold'>BrandName</h1>
					<ul className='flex gap-4 text-[#252B42] text-sm font-medium'>
						<li>Home</li>
						<li>Shop</li>
						<li>About</li>
						<li>Blog</li>
						<li>Contact</li>
						<li>Pages</li>
					</ul>
				</div>
				<div className='flex items-center gap-4 text-[#23A6F0]'>
					<div className='flex gap-1 items-center'>
						<Button variant="text" startIcon={<PermIdentity />}>Login</Button>
                        /
                        <Button variant="text">Register</Button>
					</div>
					<div className='flex items-center gap-1'>
						<Search />
						<ShoppingCartOutlined />
						<FavoriteBorder />
					</div>
				</div>
			</div>

			<div className='lg:hidden flex flex-col gap-5  text-black p-4'>
				<div className='flex items-center justify-between'>
					<h1 className='text-2xl font-bold'>BrandName</h1>
					<div className='flex items-center gap-4'>
						<Search />
						<ShoppingCartOutlined />
						<button onClick={() => setOpen((prev) => !prev)}>
							<Menu />
						</button>
					</div>
				</div>

				{/* Mobile Menu */}
				{open && (
					<ul className='flex flex-col gap-4 text-xl font-bold  text-[#737373] text-center'>
						<li>Home</li>
						<li>Shop</li>
						<li>About</li>
						<li>Blog</li>
						<li>Contact</li>
						<li>Pages</li>
					</ul>
				)}
			</div>
		</div>
	);
}
