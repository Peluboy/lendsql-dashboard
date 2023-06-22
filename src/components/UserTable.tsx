import React from "react";
import { useEffect, useState } from "react";
import Cards from "../components/Cards";
import { UserPageProps } from "../pages/Users";
import { BsFilter } from "react-icons/bs";
import "../styles/usertable.scss";
import { Pagination } from "./Pagination";

export type Filter = {
  orgName: string;
  userName: string;
  email: string;
  phoneNumber: string;
  "education.duration": string;
  employmentStatus: string;
};

export type User = {
  id: number;
  orgName: string;
  userName: string;
  email: string;
  phoneNumber: string;
  education: {
    duration: string;
  };
  employmentStatus: string;
  status: "Inactive" | "Active" | "Pending" | "Blacklisted";
};

export const UserPageComp = () => {
  return <div>UserPage</div>;
};

const UserTable = ({
  data,
  setRenderPage,
  setSelectedUser,
}: {
  data: User[];
  setRenderPage: React.Dispatch<
    React.SetStateAction<{ userTable: boolean; userPage: boolean }>
  >;
  setSelectedUser: React.Dispatch<React.SetStateAction<UserPageProps>>;
}) => {
  const [users, setUsers] = useState<User[]>([]);
  const [filter, setFilter] = useState<Filter>({
    orgName: "",
    userName: "",
    email: "",
    phoneNumber: "",
    "education.duration": "",
    employmentStatus: "",
  });

  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    setLoading(true);
    const res = await fetch(
      "https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users"
    );
    const data = await res.json();
    const updatedUsers = data.map((user: User) => {
      const randomNum = Math.random();
      let status: User["status"];
      if (randomNum < 0.25) {
        status = "Inactive";
      } else if (randomNum < 0.5) {
        status = "Pending";
      } else if (randomNum < 0.75) {
        status = "Active";
      } else {
        status = "Blacklisted";
      }
      return { ...user, status };
    });
    setUsers(updatedUsers);
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(10);

  //for number of users per pageCount
  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;
  const currentPosts = users.slice(firstPostIndex, lastPostIndex);

  const handleViewUser = async (id: number) => {
    const res = await fetch(
      `https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users/${id}`
    );
    const user = await res.json();
    setSelectedUser(user);
  };

  const handleFilterChange = (key: keyof Filter, value: string) => {
    if (key === "education.duration") {
      setFilter((prevFilter) => ({
        ...prevFilter,
        "education.duration": value,
      }));
    } else {
      setFilter((prevFilter) => ({
        ...prevFilter,
        [key]: value,
      }));
    }
  };

  const filteredUsers = currentPosts.filter((user) => {
    const filterKeys = Object.keys(filter) as (keyof Filter)[];
    return filterKeys.every((key) => {
      const filterValue = filter[key].toLowerCase();
      const userValue = String(
        key === "education.duration" ? user.education.duration : user[key]
      ).toLowerCase();
      return userValue.includes(filterValue);
    });
  });

  return (
    <div className="user-table">
      <h2>Users</h2>
      <Cards />
      <div className="search-form">
        <form>
          <label>
            Organization
            <input
              type="text"
              placeholder="Organization"
              value={filter.orgName}
              onChange={(e) => handleFilterChange("orgName", e.target.value)}
            />
          </label>
          <label>
            Username
            <input
              type="text"
              placeholder="Username"
              value={filter.userName}
              onChange={(e) => handleFilterChange("userName", e.target.value)}
            />
          </label>
          <label>
            Email
            <input
              type="text"
              placeholder="Email"
              value={filter.email}
              onChange={(e) => handleFilterChange("email", e.target.value)}
            />
          </label>
          <label>
            Phone
            <input
              type="text"
              placeholder="Phone"
              value={filter.phoneNumber}
              onChange={(e) =>
                handleFilterChange("phoneNumber", e.target.value)
              }
            />
          </label>
          <label>
            Date Joined
            <input
              type="text"
              placeholder="Date Joined"
              value={filter["education.duration"]}
              onChange={(e) =>
                handleFilterChange("education.duration", e.target.value)
              }
            />
          </label>

          <label>
            Status
            <input
              type="text"
              placeholder="Status"
              value={filter.employmentStatus}
              onChange={(e) =>
                handleFilterChange("employmentStatus", e.target.value)
              }
            />
          </label>
        </form>
      </div>

      <table className="data-table">
        <thead>
          <tr>
            <th>
              Organization
              <div>
                <BsFilter />
              </div>
            </th>
            <th>
              Username{" "}
              <div>
                <BsFilter />
              </div>
            </th>
            <th>
              Email{" "}
              <div>
                <BsFilter />
              </div>
            </th>
            <th>
              Phone Number{" "}
              <div>
                <BsFilter />
              </div>
            </th>
            <th>
              Date Joined{" "}
              <div>
                <BsFilter />
              </div>
            </th>
            <th>
              Status{" "}
              <div>
                <BsFilter />
              </div>
            </th>
          </tr>
        </thead>
        {loading && <div>Loading...</div>}
        <tbody>
          {filteredUsers.map((user) => (
            <tr
              key={user.id}
              onClick={() => {
                handleViewUser(user.id);
                setRenderPage({
                  userTable: false,
                  userPage: true,
                });
              }}
            >
              <td>{user.orgName}</td>
              <td>{user.userName}</td>
              <td>{user.email}</td>
              <td>{user.phoneNumber}</td>
              <td>{user.education.duration}</td>
              <td className={user.status}>{user.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <Pagination
        totalPosts={users.length}
        postsPerPage={postsPerPage}
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
      />
    </div>
  );
};

export default UserTable;
