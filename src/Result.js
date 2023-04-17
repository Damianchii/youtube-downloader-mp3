import React from "react"

export const Result = result => {
	const secondsToMinutes = time => {
		const minutes = `${Math.floor(time / 60)}`
		const seconds = `${Math.floor(time - minutes * 60)}`
		return `${minutes}min ${seconds}sec`
	}

	const progressResult = progress => {
		return progress === "success" ? (
			<p className='text-green-500'>Ready to download</p>
		) : (
			<p className='text-red-500'> Something wrong happend</p>
		)
	}
	return (
		<div className='grid grid-rows-1 grid-cols-4 border-2 border-white p-6 text-white'>
			<div className='border-white border-r-2 text-center flex justify-center items-center text-xl p-4 '>
				{result.name}
			</div>
			<div className=' p-4 border-r-2 border-white flex justify-center items-center text-xl'>
				{secondsToMinutes(result.duration)}
			</div>
			<div className=' p-4  flex justify-center items-center text-2xl border-r-2 border-white text-center font-[600] '>
				{progressResult(result.progress)}
			</div>
			<div className='flex justify-center items-center p-4 '>
				<a
					className='bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex'
					target='_blank'
					rel='noreferrer'
					href={result.urlResult}>
					Download
				</a>
			</div>
		</div>
	)
}
