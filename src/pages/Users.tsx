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
  education: {
    duration: string;
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
    education: {
      duration: "",
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
