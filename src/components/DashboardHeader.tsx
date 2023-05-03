import Logo from "../assets/logo.svg";
import "../styles/header.scss";
import { Avatar } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { MdArrowDropDown } from "react-icons/md";
import type { MenuProps } from "antd";
import { Dropdown, message, Space } from "antd";
import { Input } from "antd";

import { IoNotificationsOutline } from "react-icons/io5";

const DashboardHeader = () => {
  const { Search } = Input;

  const onSearch = (value: string) => console.log(value);

  const handleMenuClick: MenuProps["onClick"] = (e) => {
    message.info("Click on menu item.");
    console.log("click", e);
  };

  const items: MenuProps["items"] = [
    {
      label: "1st menu item",
      key: "1",
      icon: <UserOutlined />,
    },
    {
      label: "2nd menu item",
      key: "2",
      icon: <UserOutlined />,
    },
    {
      label: "3rd menu item",
      key: "3",
      icon: <UserOutlined />,
      danger: true,
    },
    {
      label: "4rd menu item",
      key: "4",
      icon: <UserOutlined />,
      danger: true,
      disabled: true,
    },
  ];

  const menuProps = {
    items,
    onClick: handleMenuClick,
  };

  return (
    <div className="header-container">
      <div className="logo-search">
        <img src={Logo} alt="" />
        <Search
          placeholder="input search text"
          onSearch={onSearch}
          enterButton
          style={{ width: 304 }}
        />
      </div>
      <div className="search-profile">
        <a href="https://github.com/peluboy">Docs</a>
        <IoNotificationsOutline size={24} />
        <Avatar size={40} icon={<UserOutlined />} />
        <Dropdown menu={menuProps}>
          <Space>
            <div className="profile-dropdown">
              Adedeji
              <MdArrowDropDown size={20} />
            </div>
          </Space>
        </Dropdown>
      </div>
    </div>
  );
};

export default DashboardHeader;
