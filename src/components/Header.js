//header.js
import { useAuthState } from "react-firebase-hooks/auth";
import { useHistory } from "react-router-dom";
import { auth, provider } from "../firebase";
import { firestore } from '../firebase';
function Header() {
  const [user] = useAuthState(auth);
  const history = useHistory();

  const signIn = (e) => {
    e.preventDefault();

    auth
      .signInWithPopup(provider)
      .then(() => history.push("/channels"))
      .catch((error) => alert(error.message));
  };


  return (
    <header className="header " style={{ backgroundColor: 'black' }}>
      <img
          src="https://www.causevox.com/wp-content/uploads/2018/04/Amigos-International-1.png"
          className="w-30 h-80 object-contain"
          alt=""
          height="90px"
          width="100px"
          color="white"
          align="left"
          ></img>
      <div className="hidden lg:flex space-x-1">

      <a className="link" style={{ marginRight: '1rem', color: 'white' }}>Welcome</a>
      {/* <a className="link" style={{ marginRight: '2rem', color: 'white' }}>Why Discord?</a>

      <a className="link" style={{ marginRight: '1.5rem', color: 'white' }}>Nitro</a>
      <a className="link" style={{ marginRight: '1rem', color: 'white' }}>Safety</a>
      <a className="link" style={{ color: 'white' }}>Support</a> */}
      </div>
      <div className="flex ml-auto space-x-4">
        {/* <button
          className="bg-white p-2 rounded-full text-xs md:text-sm px-4 focus:outline-none hover:shadow-2xl hover:text-discord_blurple transition duration-200 ease-in-out whitespace-nowrap font-medium"
           onClick={!user ? signIn : () => history.push("/channels")}
        >
           {!user ? "Login" : "Login/Signup"}
        </button> */}
        <button
          className="bg-white p-3 rounded-lg text-base md:text-lg px-6 focus:outline-none hover:shadow-2xl hover:text-discord_blurple transition duration-200 ease-in-out whitespace-nowrap font-medium font-serif"
            onClick={!user ? signIn : () => history.push("/channels")}
        >
            {!user ? "Login" : "Login/Signup"}
        </button>


       {/* <MenuIcon className="height:20px  width: 20px  margin-left: 1250px text-white cursor-pointer lg:hidden" /> */}
       {/* <MenuIcon style={{       

      />                       */}

      </div>
    </header>
  );
}

export default Header;
