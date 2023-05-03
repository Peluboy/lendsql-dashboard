import React from "react";
import { UserPageProps } from "../pages/Users";

const UserDetails = ({
  setRenderPage,
  selectedUser,
}: {
  setRenderPage: React.Dispatch<
    React.SetStateAction<{ userTable: boolean; userPage: boolean }>
  >;
  selectedUser: UserPageProps;
}) => {
  return (
    <>
      <div className="user-details"></div>
      <div>{selectedUser.orgName}</div>
      <div>{selectedUser.education.duration}</div>
    </>
  );
};

export default UserDetails;
