import lakshayImage from "../../../assets/images/lakshayImage.png";
import './Logo.scss'

const Logo = () => {

   return (
     <div className="logo-container">
       <img
         className="profile-portrait"
         src={lakshayImage}
         alt="JavaScript,  Developer"
       />
     </div>
   );
}

export default Logo