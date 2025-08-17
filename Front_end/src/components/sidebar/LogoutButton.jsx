// import { BiLogOut } from "react-icons/bi";
// import useLogout from "../../hooks/useLogout";
// const LogoutButton = () => {

// 	const {loading,logout}=useLogout();
// 	return (
// 		<div className='mt-auto'>
// 			{!loading ?(<BiLogOut className='w-6 h-6 text-white cursor-pointer' onClick={logout}/>):
// 			(<span className='loading loading-spinner'></span>)}
// 		</div>
// 	);
// };
// export default LogoutButton;
import { BiLogOut } from "react-icons/bi";
import { useAuthContext } from "../../context/AuthContext";
import useLogout from "../../hooks/useLogout";

const LogoutButton = () => {
	const { loading, logout } = useLogout();
	const { authUser } = useAuthContext();
	
	return (
		<div className='p-4 border-t border-gray-300 bg-gray-50'>
			<div className="flex items-center gap-3 mb-3">
				<div className='w-10 h-10 rounded-full overflow-hidden'>
					<img src={authUser.user.profilePic} alt="Your profile" className="w-full h-full object-cover" />
				</div>
				<div className="flex-1 min-w-0">
					<p className="text-sm font-medium text-gray-900 truncate">{authUser.user.fullName}</p>
					<p className="text-xs text-gray-500 truncate">{authUser.user.email}</p>
				</div>
			</div>
			<button 
				onClick={logout}
				disabled={loading}
				className="w-full flex items-center justify-center gap-2 px-4 py-2 text-sm text-red-600 hover:bg-red-50 rounded-lg transition-colors disabled:opacity-50 border border-red-200"
			>
				{loading ? (
					<div className='w-4 h-4 border-2 border-red-600 border-t-transparent rounded-full animate-spin'></div>
				) : (
					<>
						<BiLogOut className='w-4 h-4' />
						<span>Sign Out</span>
					</>
				)}
			</button>
		</div>
	);
};
export default LogoutButton;