import "./App.css"
import { AiOutlineSearch } from "react-icons/ai"
import { useRef, useState } from "react"
import axios from "axios"
import { youtubeParser } from "./utils"
import { Result } from "./Result"

function App() {
	const inputUrlRef = useRef()
	const [urlResult, setUrlResult] = useState(null)
	const [titleMp3, setTitleMp3] = useState("")
	const [durationMp3, setDurationMp3] = useState("")
	const [progress, setProgress] = useState("")

	const handleSubmit = event => {
		event.preventDefault()
		const youtubeId = youtubeParser(inputUrlRef.current.value)

		const options = {
			method: "GET",
			url: "https://youtube-mp36.p.rapidapi.com/dl",
			params: { id: youtubeId },
			headers: {
				"X-RapidAPI-Key": "2d14971540mshb5479c074d13844p182a47jsnb3b910f2b087",
				"X-RapidAPI-Host": "youtube-mp36.p.rapidapi.com",
			},
		}

		axios
			.request(options)
			.then(function (res) {
				setUrlResult(res.data.link)
				setTitleMp3(res.data.title)
				setDurationMp3(res.data.duration)
				setProgress(res.data.msg)
			})
			.catch(function (error) {
				console.error(error)
			})

		inputUrlRef.current.value = ""
	}
	return (
		<div className='flex font-montserrat  justify-center bg-gradient-to-br from-indigo-400 via-purple-600 to-pink-500 h-screen w-screen'>
			<div className='w-full max-w-screen-lg flex flex-col items-center '>
				<span className='w-full font-[600] text-left justify-self-start text-2xl p-6 '>
					Youtube MP3
				</span>
				<section className=''>
					<h1 className='text-4xl align-cente text-center px-5 py-2 font-[400]'>
						Youtube to MP3 Converter
					</h1>
					<p className='text-2xl text-center font-[300] px-4'>
						Transform YouTube videos into MP3s in just a few clicks!
					</p>
					<form
						onSubmit={handleSubmit}
						className='flex items-center justify-center my-10 px-4'>
						<input
							ref={inputUrlRef}
							placeholder='Paste URL...'
							type='text'
							className='shadow appearance-none border rounded max-w-[400px] w-full  py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
						/>
						<button
							type='submit'
							className='p-4 bg-pink-500 hover:bg-pink-600 rounded-full text-2xl mx-4'>
							<AiOutlineSearch />
						</button>
					</form>
					{urlResult ? (
						<Result
							urlResult={urlResult}
							name={titleMp3}
							duration={durationMp3}
							progress={progress}
						/>
					) : (
						""
					)}
				</section>
			</div>
		</div>
	)
}

export default App
