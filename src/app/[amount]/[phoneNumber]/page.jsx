"use client"

import generatePayload from 'promptpay-qr'
import { useEffect, useState } from "react"
import ReactQR from 'react-qr-code'

export default function Home({params}) {

	const amount = Number(params.amount)
    const phoneNumber = params.phoneNumber
    const [qrCode , setQrCode] = useState(generatePayload('0924596451',{amount}))

	return (
		<>
			<div className="flex justify-center items-center h-screen">
				<div className=" max-w-xs bg-white w-full rounded-md text-center m-4 p-4">
					<div className="inline-block bg-gradient-to-tr from-blue-600 to-pink-500 p-1 my-4 ">
						<div className='bg-white'>
							<h1 className="inline-block font-bold text-xl p-1 px-6 text-transparent bg-clip-text bg-gradient-to-tr from-blue-600 to-pink-500 bg-white">PromptPay</h1>
						</div>
					</div>
					<ReactQR style={{maxWidth:"100%",aspectRatio:"1/1",height:"auto"}} value={qrCode} className='mx-auto' />
					<div className="w-full text-center py-4">
						<h2>ปลายทาง : {phoneNumber}</h2>
						<h1 className='text-xl font-bold'><span className='text-3xl text-transparent bg-clip-text bg-gradient-to-tr from-blue-600 to-pink-500 bg-white'>{amount}</span> บาท</h1>
					</div>
				</div>
			</div>
		</>
	)
}
