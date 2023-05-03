import "../styles/cards.scss";

import UserIcon from "../assets/users.svg";
import ActiveUser from "../assets/active-users.svg";
import LoanUser from "../assets/loan.svg";
import SavingsUser from "../assets/saving.svg";

const Cards = () => {
  return (
    <div className="card-container">
      <div className="data">
        <img src={UserIcon} alt="" />
        <small>USERS</small>
        <h3>2,453</h3>
      </div>

      <div className="data">
        <img src={ActiveUser} alt="" />
        <small>ACTIVE USERS</small>
        <h3>2,453</h3>
      </div>

      <div className="data">
        <img src={LoanUser} alt="" />
        <small>USERS WITH LOAN</small>
        <h3>12,453</h3>
      </div>

      <div className="data">
        <img src={SavingsUser} alt="" />
        <small>USERS WITH SAVINGS</small>
        <h3>102,453</h3>
      </div>
    </div>
  );
};

export default Cards;
