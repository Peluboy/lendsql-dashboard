import React, { useState } from "react";
import { Pagination } from "antd";
import type { User } from "./UserTable";

type CustomPaginationProps = {
  filteredUsers: User[];
  pageSize?: number;
  onChange: (page: number, pageSize: number | undefined) => void;
  current: number;
  total: number;
};

const CustomPagination = ({
  filteredUsers,
  pageSize = 10,
}: {
  filteredUsers: User[];
  pageSize?: number;
}) => {
  const [currentPage, setCurrentPage] = useState(1);

  const onPageChange = (page: number, pageSize: number | undefined) => {
    setCurrentPage(page);
  };

  const total = filteredUsers.length;
  const pageCount = Math.ceil(total / pageSize);

  const start = (currentPage - 1) * pageSize;
  const end = currentPage * pageSize;

  return (
    <div style={{ display: "flex", justifyContent: "center", marginTop: 24 }}>
      <Pagination
        current={currentPage}
        pageSize={pageSize}
        total={total}
        onChange={onPageChange}
      />
      <div style={{ marginLeft: 24, display: "flex", alignItems: "center" }}>
        {`Showing ${start + 1}-${Math.min(end, total)} of ${total} results`}
      </div>
    </div>
  );
};

export default CustomPagination;
