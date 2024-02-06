'use client'
import { useUser } from '@auth0/nextjs-auth0/client'
// import { getAccessToken } from '@auth0/nextjs-auth0';

function NavBar() {
  const { user, error, isLoading } = useUser();
  console.log('user: ', user);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;

  async function getAccessTokenHandler() {

    const res= await fetch("http://localhost:3000/api/my-api", { cache: 'no-cache' });

    const a = await res.json();

    console.log('access token: ', a);
  }

  if (user) {
    return (
      <div>
        <h1 className="font-bold text-green-500">Login success</h1>
        <h2>name: {user.name}</h2>
        <p>email: {user.email}</p>
        <a href="/api/auth/logout" className="p-6 bg-sky-800 block w-max">Logout</a>
        <button onClick={getAccessTokenHandler} className="border bg-blue-400">Get Access Token</button>
      </div>
    );
  }

  return (
    <div>
      <a href="/api/auth/login" className="p-6 bg-sky-800 block w-max">Login</a>
    </div>
  );
}

export default NavBar;