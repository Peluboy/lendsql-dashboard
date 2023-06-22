import React, { useMemo, useState } from "react";
import "../styles/sidebar.css";

// import LogoIcon from "../assets/logo.svg";
import { IoBriefcase, IoHome, IoSettingsSharp } from "react-icons/io5";
import { HiUsers } from "react-icons/hi";
import {
  FaUsers,
  FaRegHandshake,
  FaPiggyBank,
  FaCreditCard,
  FaUserCheck,
  FaUserTimes,
  FaCoins,
} from "react-icons/fa";
import {
  TbMoneybag,
  TbReportAnalytics,
  TbDiscount2,
  TbLogout,
} from "react-icons/tb";
import { RiBankLine, RiFilePaper2Line } from "react-icons/ri";
import { BsSliders2 } from "react-icons/bs";
import { GrTransaction } from "react-icons/gr";
import { MdManageAccounts } from "react-icons/md";
import { GoGraph } from "react-icons/go";
import { BiMessageDetail } from "react-icons/bi";
import { motion } from "framer-motion";
import { useLocation, useNavigate } from "react-router-dom";
import { HomeOutlined } from "@ant-design/icons";

type MenuItem =
  | {
      icon: JSX.Element;
      heading?: string;
      link: string;
    }
  | {
      category?: string;
    };

const Sidebar: React.FC = () => {
  const [selected, setSelected] = useState<number>(() => {
    const storedIndex = localStorage.getItem("selectedIndex");
    return storedIndex ? Number(storedIndex) : 0;
  });

  const location = useLocation();
  console.log(location.pathname, "::: pathname");

  // const [collapsed, setCollapsed] = useState(false);

  const list: MenuItem[] = useMemo(
    () => [
      {
        icon: <HomeOutlined />,
        heading: "Dashboard",
        link: "/users",
      },
      {
        category: "CUSTOMERS",
      },
      {
        icon: <HiUsers />,
        heading: "Users",
        link: "/users",
      },
      {
        icon: <FaUsers />,
        heading: "Guarantors",
        link: "/guarantors",
      },
      {
        icon: <TbMoneybag />,
        heading: "Loans",
        link: "/loans",
      },
      {
        icon: <FaRegHandshake />,
        heading: "Decicion",
        link: "/decision",
      },
      {
        icon: <FaPiggyBank />,
        heading: "Savings",
        link: "/savings",
      },
      {
        icon: <FaCreditCard />,
        heading: "Loan Request",
        link: "/loan-request",
      },
      {
        icon: <FaUserCheck />,
        heading: "Whitelist",
        link: "/white-list",
      },
      {
        icon: <FaUserTimes />,
        heading: "Karma",
        link: "/karma",
      },
      {
        category: "BUSINESSES",
      },
      {
        icon: <IoBriefcase />,
        heading: "Organisation",
        link: "/organisation",
      },
      {
        icon: <FaCreditCard />,
        heading: "Loan Products",
        link: "/loan-products",
      },
      {
        icon: <RiBankLine />,
        heading: "Savings Products",
        link: "/savings-products",
      },
      {
        icon: <FaCoins />,
        heading: "Fees and Charges",
        link: "/fees-and-charges",
      },
      {
        icon: <GrTransaction />,
        heading: "Transaction",
        link: "/transaction",
      },
      {
        icon: <IoSettingsSharp />,
        heading: "Services",
        link: "/services",
      },
      {
        icon: <MdManageAccounts />,
        heading: "Service Account",
        link: "/service-account",
      },
      {
        icon: <RiFilePaper2Line />,
        heading: "Settlements",
        link: "/settlements",
      },
      {
        icon: <GoGraph />,
        heading: "Reports",
        link: "/reports",
      },
      {
        category: "SETTINGS",
      },
      {
        icon: <BsSliders2 />,
        heading: "Preferences",
        link: "/preferences",
      },
      {
        icon: <TbDiscount2 />,
        heading: "Fees and Pricing",
        link: "/fees-and-pricing",
      },
      {
        icon: <TbReportAnalytics />,
        heading: "Audit Logs",
        link: "/audit-logs",
      },
      {
        icon: <BiMessageDetail />,
        heading: "System Messages",
        link: "/system-messages",
      },
      {
        classname: "divider",
      },
      {
        icon: <TbLogout />,
        heading: "Log Out",
        link: "/log-out",
      },
    ],
    []
  );

  const navigate = useNavigate();
  return (
    <div className="sidebar">
      {list.map((item, index) => {
        if ("link" in item) {
          return (
            <motion.div
              key={index}
              className={`menu-item ${index === selected ? "active" : ""}`}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                setSelected(index);
                navigate(item.link);
              }}
            >
              {item.icon}
              <span>{item.heading}</span>
            </motion.div>
          );
        } else if ("category" in item) {
          return (
            <div key={index} className={`menu-category ${item.category}`}>
              <span>{item.category}</span>
            </div>
          );
        } else {
          return (
            <div key={index} className={`menu-divider`}>
              <hr />
            </div>
          );
        }
      })}
    </div>
  );
};

export default Sidebar;
