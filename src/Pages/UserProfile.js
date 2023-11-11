import NavBar from '../features/Navbar/Navbar';
import UserProfile from '../features/User/components/UserProfle';

function UserProfilePage() {
  console.log('icnjjd')
  return (
    <div>
      <NavBar>
        <h1 className='mx-auto text-2xl'>My Profile</h1>
        <UserProfile></UserProfile>
      </NavBar>
    </div>
  );
}

export default UserProfilePage;