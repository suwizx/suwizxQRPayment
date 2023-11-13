"use client"

import Link from "next/link"
import { useState } from "react"

export default function Home() {

	const [phoneNumber, setPhoneNumber] = useState("0924596451")
	const [amount, setAmount] = useState(100)

	return (
		<>
			<div className="flex justify-center items-center h-screen">
				<form className=" max-w-xs bg-white p-2 w-full rounded-md">
					<div className="my-2">
						<label htmlFor="number">เบอร์โทร</label>
						<input id="number" type="text" placeholder="เบอร์โทร" className="w-full text-black p-1 border-2 border-pink-400 focus:border-blue-600 rounded-md outline-none" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} />
					</div>
					<div className="my-2">
						<label htmlFor="number">จำนวนเงิน</label>
						<input type="number" placeholder="จำนวน" className="w-full text-black p-1 border-2 border-pink-400 focus:border-blue-600 rounded-md outline-none" value={amount} onChange={(e) => setAmount(e.target.value)} />
					</div>
					{(phoneNumber && amount) && (
						<Link href={`/${amount}/${phoneNumber}`} className="block text-center bg-gradient-to-tr from-blue-600 to-pink-500 text-white w-full py-2 rounded-md hover:scale-95 transition duration-75">สร้าง QR Code</Link>
					)}
				</form>
			</div>
		</>
	)
}
