import { useRouter } from 'next/router';

const NavBar = ({ isLoggedIn }: { isLoggedIn: boolean }) => {
  const router = useRouter();

  const handleLogout = () => {
    localStorage.removeItem('token');
    router.push('/');
  };

  return (
    <nav className="bg-gray-800 p-4 text-white flex justify-between">
      <h1 className="text-xl">Netflix Clone</h1>
      <div>
        {isLoggedIn ? (
          <button onClick={handleLogout} className="bg-red-500 p-2 rounded">
            Logout
          </button>
        ) : (
          <>
            <button onClick={() => router.push('/login')} className="mr-4">
              Login
            </button>
            <button onClick={() => router.push('/signup')}>Sign Up</button>
          </>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
