import React, { useEffect, useState } from "react";
import { Table, Input, Pagination } from "antd";
import axios from "axios";
import { userColumns } from "./columns";
import { useTableSearch } from "./useTableSearch";
import "antd/dist/antd.css";
import "./styling.css";

const { Search } = Input;

const fetchUsers = async () => {
  const { data } = await axios.get(
    "https://vast-shore-74260.herokuapp.com/banks?city=MUMBAI"
  );
  return { data };
};

export default function App() {
  const [searchVal, setSearchVal] = useState(null);
  const [keys, setKeys] = useState([]);

  // eslint-disable-next-line
  useEffect(() => {
    const getKeys = JSON.parse(localStorage.getItem("selection") || "0");
    if (getKeys !== 0) {
      setKeys(getKeys);
    }
  }, []);

  const { filteredData, loading } = useTableSearch({
    searchVal,
    retrieve: fetchUsers,
  });

  // console.log("keys", keys);
  const rowSelection = {
    onChange: (selectedRowKeys, selectedRows) => {
      setKeys([...selectedRowKeys]);
      localStorage.setItem("selection", JSON.stringify(selectedRowKeys));
    },
    selectedRowKeys: keys,
  };
  return (
    <>
      <div className="container">
        <div className="container2">
          <Search
            onChange={(e) => setSearchVal(e.target.value)}
            placeholder="Search"
          />
        </div>
        <br /> <br />
        <Table
          rowSelection={rowSelection}
          rowKey="ifsc"
          dataSource={filteredData}
          columns={userColumns}
          loading={loading}
          pagination={
            <Pagination
              size="small"
              showSizeChanger
              // var dataSource2 = this.storage;
            />
          }
        />
      </div>
    </>
  );
}
