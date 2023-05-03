import React from "react";
import { UserPageProps } from "../pages/Users";

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
    <>
      <div>{selectedUser.orgName}</div>;
      <div>{selectedUser.education.duration}</div>
    </>
  );
};

export default UserPage;
