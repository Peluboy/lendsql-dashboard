import React from "react";
import { UserPageProps } from "../pages/Users";
import { Tabs } from "antd";
import type { TabsProps } from "antd";
import { Avatar } from "antd";

import Stars from "../assets/stars.svg";

import "../styles/usepage.scss";

const onChange = (key: string) => {
  console.log(key);
};

const items: TabsProps["items"] = [
  {
    key: "1",
    label: `General Details`,
    children: ``,
  },
  {
    key: "2",
    label: `Documents`,
    children: ``,
  },
  {
    key: "3",
    label: `Bank Details`,
    children: ``,
  },
  {
    key: "4",
    label: `Loans`,
    children: ``,
  },
  {
    key: "5",
    label: `Savings`,
    children: ``,
  },
  {
    key: "6",
    label: `App and System`,
    children: ``,
  },
];

const UserPage = ({
  setRenderPage,
  selectedUser,
}: {
  setRenderPage: React.Dispatch<
    React.SetStateAction<{ userTable: boolean; userPage: boolean }>
  >;
  selectedUser: UserPageProps;
}) => {
  return (
    <div className="userpage-container">
      <button>Go back</button>
      <h2>User details</h2>
      <div className="user-details-header">
        <div className="user-details-header-top">
          <div className="section-1">
            <img src={selectedUser.profile.avatar} alt="" />
            <div className="username">
              <h4>
                {" "}
                {selectedUser.profile.firstName} {selectedUser.profile.lastName}
              </h4>
              <p>{selectedUser.accountNumber}</p>
            </div>
          </div>
          <div className="section-2">
            <div className="username">
              <p>User's Tiers</p>
              <img src={Stars} alt="" />
            </div>
          </div>

          <div className="section-3">
            <div className="username">
              <h3>₦ {selectedUser.accountBalance}</h3>
              <p>{selectedUser.accountNumber}</p>
            </div>
          </div>
        </div>
        <div className="user-details-header-bottom">
          <Tabs defaultActiveKey="1" items={items} onChange={onChange} />
        </div>
      </div>

      <div className="user-details">
        <div className="user-information">
          <div className="personal-information">
            <h3>Personal Information</h3>
            <div className="details-top">
              <div className="details">
                <h4>FULL NAME</h4>
                <p>
                  {selectedUser.profile.firstName}{" "}
                  {selectedUser.profile.lastName}
                </p>
              </div>
              <div className="details">
                <h4>PHONE NUMBER</h4>
                <p>{selectedUser.phoneNumber}</p>
              </div>
              <div className="details">
                <h4>EMAIL</h4>
                <p>{selectedUser.email}</p>
              </div>
              <div className="details">
                <h4>BVN</h4>
                <p>{selectedUser.profile.bvn}</p>
              </div>
            </div>
            <div className="details-bottom">
              <div className="details">
                <h4>ADDRESS</h4>
                <p>{selectedUser.profile.address}</p>
              </div>
              <div className="details">
                <h4>ACCOUNT BALANCE</h4>
                <p>{selectedUser.accountBalance}</p>
              </div>
              <div className="details">
                <h4>ACCOUNT NUMBER</h4>
                <p>{selectedUser.accountNumber}</p>
              </div>
              <div className="details">
                <h4>GENDER</h4>
                <p>{selectedUser.profile.gender}</p>
              </div>
            </div>
          </div>

          <div className="personal-information">
            <h3>Education and Employment</h3>
            <div className="details-top">
              <div className="details">
                <h4>LEVEL OF EDUCATION</h4>
                <p>{selectedUser.education.level}</p>
              </div>
              <div className="details">
                <h4>EMPLOYMENT STATUS</h4>
                <p>{selectedUser.education.employmentStatus}</p>
              </div>
              <div className="details">
                <h4>SECTOR OF EMPLOYMENT</h4>
                <p>{selectedUser.education.sector}</p>
              </div>
              <div className="details">
                <h4>DURATION OF EMPLOYENT</h4>
                <p>{selectedUser.education.duration}</p>
              </div>
            </div>
            <div className="details-bottom">
              <div className="details">
                <h4>OFFICE EMAIL</h4>
                <p>{selectedUser.education.officeEmail}</p>
              </div>
              <div className="details">
                <h4>MONTHLY INCOME</h4>
                <p>{selectedUser.education.monthlyIncome}</p>
              </div>
              <div className="details">
                <h4>LOAN PAYMNET</h4>
                <p>{selectedUser.education.loanRepayment}</p>
              </div>
            </div>
          </div>

          <div className="personal-information">
            <h3>Socials</h3>
            <div className="details-top">
              <div className="details">
                <h4>TWITTER</h4>
                <p>{selectedUser.socials.twitter}</p>
              </div>
              <div className="details">
                <h4>FACEBOOK</h4>
                <p>{selectedUser.socials.facebook}</p>
              </div>
              <div className="details">
                <h4>INSTAGRAM</h4>
                <p>{selectedUser.socials.instagram}</p>
              </div>
            </div>
          </div>

          <div className="personal-information">
            <h3>Guarantor</h3>
            <div className="details-top">
              <div className="details">
                <h4>FULL NAME</h4>
                <p>
                  {selectedUser.guarantor.firstName}{" "}
                  {selectedUser.guarantor.lastName}
                </p>
              </div>
              <div className="details">
                <h4>GENDER</h4>
                <p>{selectedUser.guarantor.gender}</p>
              </div>
              <div className="details">
                <h4>ADDRESS</h4>
                <p>{selectedUser.guarantor.address}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div />
    </div>
  );
};

export default UserPage;
