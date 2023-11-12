"use client"

import generatePayload from 'promptpay-qr'
import { useEffect, useState } from "react"
import ReactQR from 'react-qr-code'

export default function Home({params}) {

	const amount = Number(params.amount)
    const [qrCode , setQrCode] = useState(generatePayload('0924596451',{amount}))

	return (
		<>
			<div className="flex justify-center items-center h-screen">
				<div className=" max-w-xs bg-white p-2 w-full rounded-md text-center m-4">

					<ReactQR style={{maxWidth:"100%",aspectRatio:"1/1",height:"auto"}} value={qrCode} />
				</div>
			</div>
		</>
	)
}
