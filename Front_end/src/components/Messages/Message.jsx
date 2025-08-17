// import { useAuthContext } from "../../context/AuthContext";
// import { extractTime } from "../../utils/extractTime";
// import useConversation from "../../zustand/useConversation";

// const Message = ({ message }) => {
// 	// console.log(message,"hari")
// 	const { authUser } = useAuthContext();
// 	// console.log(message.senderId,authUser.user._id,'gekhsw')
// 	// console.log(authUser)
// 	const { selectedConversation } = useConversation();
// 	// const fromMe = message.senderId === authUser.user._id;
// 	// const fromMe = message.senderId === authUser._id || message.senderId?._id === authUser.user._id;
//   const fromMe = String(message.senderId) === String(authUser.user._id);

// 	const formattedTime = extractTime(message.createdAt);
// 	const chatClassName = fromMe ? "chat-end" : "chat-start";
// 	const profilePic = fromMe ? authUser.user.profilePic : selectedConversation?.profilePic;
// 	const bubbleBgColor = fromMe ? "bg-blue-500" : "";

// 	const shakeClass = message.shouldShake ? "shake" : "";
    

// 	return (
// 		<div className={`chat ${chatClassName}`}>
// 			<div className='chat-image avatar'>
// 				<div className='w-10 rounded-full'>
// 					<img alt='Tailwind CSS chat bubble component' src={profilePic} />
// 				</div>
// 			</div>
// 			<div className={`chat-bubble text-white ${bubbleBgColor} ${shakeClass} pb-2`}>{message.message}</div>
// 			<div className='chat-footer opacity-50 text-xs flex gap-1 items-center'>{formattedTime}</div>
// 		</div>
// 	);
// };
// export default Message;



// Message.jsx
import { useAuthContext } from "../../context/AuthContext";
import { extractTime } from "../../utils/extractTime";
import useConversation from "../../zustand/useConversation";

const Message = ({ message }) => {
	const { authUser } = useAuthContext();
	const { selectedConversation } = useConversation();
	const fromMe = String(message.senderId) === String(authUser.user._id);
	const formattedTime = extractTime(message.createdAt);
	const profilePic = fromMe ? authUser.user.profilePic : selectedConversation?.profilePic;
	const shakeClass = message.shouldShake ? "shake" : "";

	return (
		<div className={`flex items-start gap-3 mb-6 ${fromMe ? 'flex-row-reverse' : ''}`}>
			<div className='w-10 h-10 rounded-full overflow-hidden flex-shrink-0'>
				<img alt='Profile' src={profilePic} className="w-full h-full object-cover" />
			</div>
			<div className={`flex flex-col max-w-md ${fromMe ? 'items-end' : 'items-start'}`}>
				<div className={`px-4 py-3 rounded-2xl ${shakeClass} ${
					fromMe 
						? 'bg-blue-500 text-white' 
						: 'bg-gray-200 text-gray-800'
				}`}>
					<p className="text-sm leading-relaxed">{message.message}</p>
				</div>
				<span className="text-xs text-gray-500 mt-1 px-1">{formattedTime}</span>
			</div>
		</div>
	);
};
export default Message;