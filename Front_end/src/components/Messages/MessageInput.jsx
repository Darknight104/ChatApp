// import { useState } from "react";
// import { BsSend } from "react-icons/bs";
// import useSendMessage from "../../hooks/useSendMessage";

// const MessageInput = () => {


// 	const [message, setMessage] = useState("");
// 	const { loading, sendMessage } = useSendMessage();


// 	const handleSubmit = async (e) => {
// 		e.preventDefault();
// 		if (!message) return;
// 		await sendMessage(message);
// 		setMessage("");
// 	};
// 	return (
// 		<form className='px-4 my-3'onSubmit={handleSubmit}>
// 			<div className='w-full relative'>
// 				<input
// 					type='text'
// 					className='border text-sm rounded-lg block w-full p-2.5  bg-gray-700 border-gray-600 text-white'
// 					placeholder='Send a message'
// 					value={message}
// 					onChange={(e)=>setMessage(e.target.value)}
// 				/>
// 				<button type='submit' className='absolute inset-y-0 end-0 flex items-center pe-3'>
// 				{loading ? <div className='loading loading-spinner'></div> : <BsSend />}
// 				</button>
// 			</div>
// 		</form>
// 	);
// };
// export default MessageInput;

// // STARTER CODE SNIPPET
// // import { BsSend } from "react-icons/bs";

// // const MessageInput = () => {
// // 	return (
// // 		<form className='px-4 my-3'>
// // 			<div className='w-full'>
// // 				<input
// // 					type='text'
// // 					className='border text-sm rounded-lg block w-full p-2.5  bg-gray-700 border-gray-600 text-white'
// // 					placeholder='Send a message'
// // 				/>
// // 				<button type='submit' className='absolute inset-y-0 end-0 flex items-center pe-3'>
// // 					<BsSend />
// // 				</button>
// // 			</div>
// // 		</form>
// // 	);
// // };
// // export default MessageInput;


import { useState } from "react";
import { BsSend } from "react-icons/bs";
import { HiOutlinePaperClip, HiOutlineEmojiHappy } from "react-icons/hi";
import useSendMessage from "../../hooks/useSendMessage";

const MessageInput = () => {
	const [message, setMessage] = useState("");
	const { loading, sendMessage } = useSendMessage();

	const handleSubmit = async (e) => {
		e.preventDefault();
		if (!message.trim()) return;
		await sendMessage(message);
		setMessage("");
	};

	return (
		<div className='px-6 py-4 bg-white border-t border-gray-300'>
			<form onSubmit={handleSubmit}>
				<div className='flex items-center gap-3 bg-gray-100 rounded-full px-4 py-3'>
					{/* <button type="button" className="text-gray-500 hover:text-gray-700 transition-colors">
						<HiOutlinePaperClip className="w-5 h-5" />
					</button> */}
					<input
						type='text'
						className='flex-1 bg-transparent border-0 outline-none text-gray-800 placeholder-gray-500'
						placeholder='Type a message...'
						value={message}
						onChange={(e) => setMessage(e.target.value)}
					/>
					{/* <button type="button" className="text-gray-500 hover:text-gray-700 transition-colors">
						<HiOutlineEmojiHappy className="w-5 h-5" />
					</button> */}
					<button 
						type='submit' 
						disabled={loading || !message.trim()}
						className='ml-2 w-10 h-10 bg-blue-500 hover:bg-blue-600 disabled:opacity-50 text-white rounded-full flex items-center justify-center transition-colors'
					>
						{loading ? (
							<div className='w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin'></div>
						) : (
							<BsSend className="w-4 h-4" />
						)}
					</button>
				</div>
			</form>
		</div>
	);
};
export default MessageInput;
