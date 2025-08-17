// import { useSocketContext } from "../../context/SocketContext";
// import useConversation from "../../zustand/useConversation";

// const Conversation = ({ conversation, lastIdx, emoji }) => {
// 	const { selectedConversation, setSelectedConversation } = useConversation();

// 	const isSelected = selectedConversation?._id === conversation._id;
// 	const { onlineUsers } = useSocketContext();
// 	const isOnline = onlineUsers.includes(conversation._id);

// 	return (
// 		<>
// 			<div
// 				className={`flex gap-2 items-center hover:bg-sky-500 rounded p-2 py-1 cursor-pointer
// 				${isSelected ? "bg-sky-500" : ""}
// 			`}
// 				onClick={() => setSelectedConversation(conversation)}
// 			>
// 				<div className={`avatar ${isOnline ? "online" : ""}`}>
// 					<div className='w-12 rounded-full'>
// 						<img src={conversation.profilePic} alt='user avatar' />
// 					</div>
// 				</div>

// 				<div className='flex flex-col flex-1'>
// 					<div className='flex gap-3 justify-between'>
// 						<p className='font-bold text-gray-200'>{conversation.fullName}</p>
// 						<span className='text-xl'>{emoji}</span>
// 					</div>
// 				</div>
// 			</div>

// 			{!lastIdx && <div className='divider my-0 py-0 h-1' />}
// 		</>
// 	);
// };
// export default Conversation;

// // STARTER CODE SNIPPET
// // const Conversation = () => {
// // 	return (
// // 		<>
// // 			<div className='flex gap-2 items-center hover:bg-sky-500 rounded p-2 py-1 cursor-pointer'>
// // 				<div className='avatar online'>
// // 					<div className='w-12 rounded-full'>
// // 						<img
// // 							src='https://cdn0.iconfinder.com/data/icons/communication-line-10/24/account_profile_user_contact_person_avatar_placeholder-512.png'
// // 							alt='user avatar'
// // 						/>
// // 					</div>
// // 				</div>

// // 				<div className='flex flex-col flex-1'>
// // 					<div className='flex gap-3 justify-between'>
// // 						<p className='font-bold text-gray-200'>John Doe</p>
// // 						<span className='text-xl'>🎃</span>
// // 					</div>
// // 				</div>
// // 			</div>

// // 			<div className='divider my-0 py-0 h-1' />
// // 		</>
// // 	);
// // };
// // export default Conversation;


import useConversation from "../../zustand/useConversation";

const Conversation = ({ conversation, lastIdx }) => {
	const { selectedConversation, setSelectedConversation } = useConversation();
	const isSelected = selectedConversation?._id === conversation._id;

	return (
		<>
			<div
				className={`flex items-center gap-4 px-4 py-3 cursor-pointer hover:bg-gray-100 transition-colors
				${isSelected ? "bg-blue-50 border-r-3 border-blue-500" : ""}
			`}
				onClick={() => setSelectedConversation(conversation)}
			>
				<div className='w-12 h-12 rounded-full overflow-hidden relative'>
					<img src={conversation.profilePic} alt='user avatar' className="w-full h-full object-cover" />
					<div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></div>
				</div>

				<div className='flex-1 min-w-0'>
					<div className='flex items-center justify-between mb-1'>
						<h4 className='font-semibold text-gray-900 truncate text-sm'>{conversation.fullName}</h4>
						{/* <span className='text-xs text-gray-500'>5:45 AM</span> */}
						
					</div>
					{/* <p className='text-sm text-gray-600 truncate'>
						Let me go grab some snacks...
					</p> */}
				</div>
			</div>
			{!lastIdx && <div className='mx-4 border-b border-gray-200' />}
		</>
	);
};
export default Conversation;