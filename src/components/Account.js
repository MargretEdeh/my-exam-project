import { UserContext } from "./AuthContext";
import pic2 from './pic2.svg'
import { Helmet } from "react-helmet-async";

export default function Account() {
  // const Navigate = useNavigate()

  const { LogOut, user } = UserContext();
  
  const handleLogout = async () => {
    try {
      await LogOut();
    } catch (error) {
      console.log(error.message);
    }
  };

  const handlePremuim = () => {
    alert(" May be in the future");
  };
  return (
    <div className="logout">
      <Helmet>
        <title>Account</title>
        <meta name="description" content="Account" />
        <link rel="canonical" href="/account" />
      </Helmet>
      <div className="dev1">
        {" "}
        <h2 className="h2-out"> About Developer's Arc </h2>
        <div>
          <p className="p-out">
            it's basically an app where you meet with other developers around
            the world who have different skill sets. They share their details
            and from one level of acquaintance to another, you begin to share
            ideas and participate in paired programming, collaboration, open-sourcing, and increase your network. therefore creating a community for yourself🧡{" "}
          </p>
          <img className="out-pic" src={pic2} alt="design "/>
        </div>
      </div>

      <div className="outtro">
        <h3>Welcome {user.displayName}, </h3>
      <p className="p-tag" >Always Remember to Sign in with <b> {user.email} </b> and keep Your details safe </p>
      <h4>Thanks for using this App</h4>
        <button className="btn-out" onClick={handleLogout}>
          {" "}
          <b>Log Out</b>{" "}
        </button>
        <button className="btn-out" onClick={handlePremuim}>
          <h2>Try Premuim Today</h2>{" "}
        </button>
      </div>
    </div>
  );
}
