import React from "react";
import { UserPageProps } from "../pages/Users";
import { Tabs } from "antd";
import type { TabsProps } from "antd";

const onChange = (key: string) => {
  console.log(key);
};

const items: TabsProps["items"] = [
  {
    key: "1",
    label: `General Details`,
    children: `Content of Tab Pane 1`,
  },
  {
    key: "2",
    label: `Documents`,
    children: `Documents`,
  },
  {
    key: "3",
    label: `Bank Details`,
    children: `Bank Details`,
  },
  {
    key: "4",
    label: `Loans`,
    children: `Loans`,
  },
  {
    key: "5",
    label: `Savings`,
    children: `Savings`,
  },
  {
    key: "6",
    label: `App and System`,
    children: `App and System`,
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
    <>
      <div className="user-details-header">
        <div className="user-details-header-top"></div>
        <div className="user-details-header-bottom">
          <Tabs defaultActiveKey="1" items={items} onChange={onChange} />
        </div>
      </div>
      <div className="user-details"></div>
      <div>{selectedUser.orgName}</div>;
      <div>{selectedUser.education.duration}</div>
    </>
  );
};

export default UserPage;
