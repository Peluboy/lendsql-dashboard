// import React, { useState } from "react";
import "../styles/dashboard.css";
import Routers from "../routes/Routers";
import { Header, Content } from "antd/es/layout/layout";
import Sider from "antd/es/layout/Sider";
import { Layout } from "antd";
import Sidebar from "../components/Sidebar";
import DashboardHeader from "../components/DashboardHeader";
// import { RxHamburgerMenu } from "react-icons/rx";

const DashboardLayout = () => {
  // const [collapsed, setCollapsed] = useState(false);
  return (
    <div>
      <Layout className="container">
        <Header
          style={{
            backgroundColor: "white",
            boxShadow: "3px 5px 20px rgba(0, 0, 0, 0.04)",
            margin: 0,
            padding: 0,
          }}
        >
          {" "}
          {/* <RxHamburgerMenu onClick={() => setCollapsed(!collapsed)} /> */}
          <DashboardHeader />
        </Header>
        <Layout>
          <Sider
            // collapsed={collapsed}
            style={{
              backgroundColor: "white",
              boxShadow:
                "rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px",
              overflowY: "hidden",
            }}
          >
            <Sidebar />
          </Sider>
          <Content
            style={{
              backgroundColor: "#FBFBFB",
              padding: "58px",
              overflow: "scroll",
              height: "90vh",
              overflowX: "hidden",
            }}
          >
            <Routers />
          </Content>
        </Layout>
      </Layout>
    </div>
  );
};

export default DashboardLayout;
