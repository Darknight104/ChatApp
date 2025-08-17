// import Conversations from "./Conversations";
// import LogoutButton from "./LogoutButton";
// import SearchInput from "./SearchInput";

// const Sidebar = () => {
// 	return (
// 		<div className='border-r border-slate-500 p-4 flex flex-col'>
// 			<SearchInput />
// 			<div className='divider px-3'></div>
// 			<Conversations />
// 			<LogoutButton />
// 		</div>
// 	);
// };
// export default Sidebar;

// // STARTER CODE FOR THIS FILE
// // import Conversations from "./Conversations";
// // import LogoutButton from "./LogoutButton";
// // import SearchInput from "./SearchInput";

// // const Sidebar = () => {
// // 	return (
// // 		<div className='border-r border-slate-500 p-4 flex flex-col'>
// // 			<SearchInput />
// // 			<div className='divider px-3'></div>
// // 			<Conversations />
// // 			<LogoutButton />
// // 		</div>
// // 	);
// // };
// // export default Sidebar;


import Conversations from "./Conversations";
import SearchInput from "./SearchInput";
import LogoutButton from "./LogoutButton";

const Sidebar = () => {
	return (
		<div className='w-80 h-full bg-white border-r border-gray-300 flex flex-col'>
			{/* Header */}
			<div className="px-4 py-5 border-b border-gray-300 bg-white">
				<h1 className="text-xl font-bold text-gray-900">Messages</h1>
				<p className="text-sm text-gray-600 mt-1">Chat with your contacts</p>
			</div>

			<SearchInput />
			<Conversations />
			<LogoutButton />
		</div>
	);
};
export default Sidebar;