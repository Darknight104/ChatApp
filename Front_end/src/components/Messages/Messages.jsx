// import { useEffect, useRef } from "react";
// import MessageSkeleton from "../skeletons/MessageSkeletons";
// import Message from "./Message";
// import useListenMessages from "../../hooks/useListenMessages";
// import useGetMessages from "../../hooks/useGetMessages";

// const Messages = () => {
// 	const { messages, loading } = useGetMessages();
// 	useListenMessages();
// 	const lastMessageRef = useRef();

// 	useEffect(() => {
// 		setTimeout(() => {
// 			lastMessageRef.current?.scrollIntoView({ behavior: "smooth" });
// 		}, 100);
// 	}, [messages]);

// 	return (
// 		<div className='px-4 flex-1 overflow-auto'>
// 			{!loading &&
// 				messages.length > 0 &&
// 				messages.map((message) => (
// 					<div key={message._id} ref={lastMessageRef}>
// 						<Message message={message} />
// 					</div>
// 				))}

// 			{loading && [...Array(3)].map((_, idx) => <MessageSkeleton key={idx} />)}
// 			{!loading && messages.length === 0 && (
// 				<p className='text-center'>Send a message to start the conversation</p>
// 			)}
// 		</div>
// 	);
// };
// export default Messages;

// // STARTER CODE SNIPPET
// // import Message from "./Message";

// // const Messages = () => {
// // 	return (
// // 		<div className='px-4 flex-1 overflow-auto'>
// // 			<Message />
// // 			<Message />
// // 			<Message />
// // 			<Message />
// // 			<Message />
// // 			<Message />
// // 			<Message />
// // 			<Message />
// // 			<Message />
// // 			<Message />
// // 			<Message />
// // 			<Message />
// // 		</div>
// // 	);
// // };
// // export default Messages;


import { useEffect, useRef } from "react";
import MessageSkeleton from "../skeletons/MessageSkeletons";
import Message from "./Message";
import useListenMessages from "../../hooks/useListenMessages";
import useGetMessages from "../../hooks/useGetMessages";
import { TiMessages } from "react-icons/ti";


const Messages = () => {
	const { messages, loading } = useGetMessages();
	useListenMessages();
	const lastMessageRef = useRef();

	useEffect(() => {
		setTimeout(() => {
			lastMessageRef.current?.scrollIntoView({ behavior: "smooth" });
		}, 100);
	}, [messages]);

	return (
		<div className='flex-1 overflow-auto px-6 py-4 bg-gray-50'>
			{/* Date separator */}
			{messages.length > 0 && (
				<div className="flex justify-center mb-6">
					<span className="px-4 py-2 bg-white rounded-full text-xs text-gray-600 shadow-sm border">
						Today
					</span>
				</div>
			)}

			{!loading &&
				messages.length > 0 &&
				messages.map((message, index) => (
					<div key={message._id} ref={index === messages.length - 1 ? lastMessageRef : null}>
						<Message message={message} />
					</div>
				))}

			{loading && [...Array(3)].map((_, idx) => <MessageSkeleton key={idx} />)}
			
			{!loading && messages.length === 0 && (
				<div className="flex items-center justify-center h-full">
					<div className="text-center">
						<div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-4">
							<TiMessages className="w-8 h-8 text-gray-400" />
						</div>
						<p className='text-gray-600 mb-2'>No messages yet</p>
						<p className='text-sm text-gray-500'>Send a message to start the conversation</p>
					</div>
				</div>
			)}
		</div>
	);
};
export default Messages;