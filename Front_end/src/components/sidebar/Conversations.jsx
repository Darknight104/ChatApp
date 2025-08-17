// import useGetConversations from "../../hooks/useGetConversations";
// import { getRandomEmoji } from "../../utils/emoji";
// import Conversation from "./Conversation";

// const Conversations = () => {
// 	const {loading,conversations}=useGetConversations();
// 	return (
// 		<div className='py-2 flex flex-col overflow-auto'>
			
// 		{conversations.map((conversation, idx) => (
// 				<Conversation
// 					key={conversation._id}
// 					conversation={conversation}
// 					emoji={getRandomEmoji()}
// 					lastIdx={idx === conversations.length - 1}
// 				/>
// 			))}

// 			{loading ? <span className='loading loading-spinner mx-auto'></span> : null}

// 		</div>
// 	);
// };
// export default Conversations;

// // STARTER CODE SNIPPET
// // import Conversation from "./Conversation";

// // const Conversations = () => {
// // 	return (
// // 		<div className='py-2 flex flex-col overflow-auto'>
// // 			<Conversation />
// // 			<Conversation />
// // 			<Conversation />
// // 			<Conversation />
// // 			<Conversation />
// // 			<Conversation />
// // 		</div>
// // 	);
// // };
// // export default Conversations;


import useGetConversations from "../../hooks/useGetConversations";
import Conversation from "./Conversation";

const Conversations = () => {
	const { loading, conversations } = useGetConversations();
	
	return (
		<div className='flex-1 overflow-auto'>
			{conversations.map((conversation, idx) => (
				<Conversation
					key={conversation._id}
					conversation={conversation}
					lastIdx={idx === conversations.length - 1}
				/>
			))}
			{loading && (
				<div className="flex justify-center py-6">
					<div className='w-6 h-6 border-2 border-blue-500 border-t-transparent rounded-full animate-spin'></div>
				</div>
			)}
		</div>
	);
};
export default Conversations;