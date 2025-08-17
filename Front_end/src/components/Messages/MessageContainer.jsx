// import { useEffect } from "react";
// import useConversation from "../../zustand/useConversation";
// import MessageInput from "./MessageInput";
// import Messages from "./Messages";
// import { TiMessages } from "react-icons/ti";
// import { useAuthContext } from "../../context/AuthContext";

// const MessageContainer = () => {
// 	const { selectedConversation, setSelectedConversation } = useConversation();

// 	useEffect(() => {
		
// 		return () => setSelectedConversation(null);
// 	}, [setSelectedConversation]);

// 	return (
// 		<div className='md:min-w-[450px] flex flex-col'>
// 			{!selectedConversation ? (
// 				<NoChatSelected />
// 			) : (
// 				<>
// 					{/* Header */}
// 					<div className='bg-slate-500 px-4 py-2 mb-2'>
// 						<span className='label-text'>To:</span>{" "}
// 						<span className='text-gray-900 font-bold'>{selectedConversation.fullName}</span>
// 					</div>
// 					<Messages />
// 					<MessageInput />
// 				</>
// 			)}
// 		</div>
// 	);
// };
// export default MessageContainer;

// const NoChatSelected = () => {
// 	const { authUser } = useAuthContext();
// 	return (
// 		<div className='flex items-center justify-center w-full h-full'>
// 			<div className='px-4 text-center sm:text-lg md:text-xl text-gray-200 font-semibold flex flex-col items-center gap-2'>
// 				<p>Welcome 👋 {authUser.fullName}</p>
// 				<p>Select a chat to start messaging</p>
// 				<TiMessages className='text-3xl md:text-6xl text-center' />
// 			</div>
// 		</div>
// 	);
// };

// // STARTER CODE SNIPPET
// // import MessageInput from "./MessageInput";
// // import Messages from "./Messages";

// // const MessageContainer = () => {
// // 	return (
// // 		<div className='md:min-w-[450px] flex flex-col'>
// // 			<>
// // 				{/* Header */}
// // 				<div className='bg-slate-500 px-4 py-2 mb-2'>
// // 					<span className='label-text'>To:</span> <span className='text-gray-900 font-bold'>John doe</span>
// // 				</div>

// // 				<Messages />
// // 				<MessageInput />
// // 			</>
// // 		</div>
// // 	);
// // };
// // export default MessageContainer;


import { useEffect } from "react";
import useConversation from "../../zustand/useConversation";
import MessageInput from "./MessageInput";
import Messages from "./Messages";
import { TiMessages } from "react-icons/ti";
import { useAuthContext } from "../../context/AuthContext";

const MessageContainer = () => {
	const { selectedConversation, setSelectedConversation } = useConversation();

	useEffect(() => {
		return () => setSelectedConversation(null);
	}, [setSelectedConversation]);

	return (
		<div className='flex flex-col h-full bg-white'>
			{!selectedConversation ? (
				<NoChatSelected />
			) : (
				<>
					{/* Header */}
					<div className='bg-white border-b border-gray-300 px-6 py-4 flex items-center gap-4'>
						<div className='w-12 h-12 rounded-full overflow-hidden'>
							<img src={selectedConversation.profilePic} alt="Profile" className="w-full h-full object-cover" />
						</div>
						<div className="flex-1">
							<h3 className='text-lg font-semibold text-gray-900'>{selectedConversation.fullName}</h3>
							{/* <p className='text-sm text-gray-500'>Click to view profile</p> */}
						</div>
					</div>
					<Messages />
					<MessageInput />
				</>
			)}
		</div>
	);
};
export default MessageContainer;

const NoChatSelected = () => {
	const { authUser } = useAuthContext();
	return (
		<div className='flex items-center justify-center w-full h-full bg-gray-50'>
			<div className='text-center flex flex-col items-center gap-6'>
				<TiMessages className='text-8xl text-gray-300' />
				<div>
					<h2 className="text-2xl font-semibold text-gray-800 mb-2">Welcome back, {authUser.user.fullName}!</h2>
					<p className="text-gray-600">Select a conversation from the sidebar to start chatting</p>
				</div>
			</div>
		</div>
	);
};