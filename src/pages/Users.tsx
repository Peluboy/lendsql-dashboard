import { useState, useEffect } from "react";
import UserTable, { User } from "../components/UserTable";
import "../styles/users.scss";
import UserPage from "../components/UserPage";

export type UserPageProps = {
  id: number;
  orgName: string;
  userName: string;
  email: string;
  phoneNumber: string;
  profile: {
    firstName: string;
    lastName: string;
    gender: string;
    bvn: string;
    avatar: string;
    address: string;
  };
  accountBalance: string;
  accountNumber: string;
  guarantor: {
    firstName: string;
    lastName: string;
    gender: string;
    address: string;
  };
  education: {
    duration: string;
    level: string;
    officeEmail: string;
    employmentStatus: string;
    sector: string;
    monthlyIncome: string;
    loanRepayment: string;
  };
  socials: {
    facebook: string;
    twitter: string;
    instagram: string;
  };
  employmentStatus: string;
};

const Users = () => {
  const [users, setUsers] = useState<User[]>([]);

  const fetchData = async () => {
    const res = await fetch(
      "https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users"
    );
    const data = await res.json();
    setUsers(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const [selectedUser, setSelectedUser] = useState<UserPageProps>({
    id: 0,
    orgName: "",
    userName: "",
    email: "",
    phoneNumber: "",
    profile: {
      firstName: "",
      lastName: "",
      gender: "",
      bvn: "",
      avatar: "",
      address: "",
    },
    guarantor: {
      firstName: "",
      lastName: "",
      gender: "",
      address: "",
    },
    education: {
      duration: "",
      level: "",
      officeEmail: "",
      employmentStatus: "",
      sector: "",
      monthlyIncome: "",
      loanRepayment: "",
    },
    accountBalance: "",
    accountNumber: "",
    socials: {
      facebook: "",
      twitter: "",
      instagram: "",
    },
    employmentStatus: "",
  });

  // const handleViewUser = async (id: number) => {
  //   const res = await fetch(
  //     `https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users/${id}`
  //   );
  //   const user = await res.json();
  //   setSelectedUser(user);
  // };

  const [renderPage, setRenderPage] = useState({
    userTable: true,
    userPage: false,
  });

  return (
    <div className="user-container">
      {renderPage.userTable && (
        <UserTable
          data={users}
          setRenderPage={setRenderPage}
          setSelectedUser={setSelectedUser}
        />
      )}
      {renderPage.userPage && (
        <UserPage selectedUser={selectedUser} setRenderPage={setRenderPage} />
      )}
    </div>
  );
};

export default Users;
