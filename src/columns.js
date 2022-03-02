import React from "react";
export const userColumns = [
  {
    title: "IFSC",
    dataIndex: "ifsc",
    key: "ifsc",
  },
  {
    title: "Bank ID",
    dataIndex: "bank_id",
    key: "bank_id",
  },
  {
    title: "Branch",
    dataIndex: "branch",
    key: "branch",
  },
  {
    title: "Address",
    dataIndex: "address",
    key: "address",
  },
  {
    title: "City",
    dataIndex: "city",
    key: "city",
  },
  {
    title: "District",
    dataIndex: "district",
    key: "district",
  },
  {
    title: "State",
    dataIndex: "state",
    key: "state",
  },
  {
    title: "Bank Name",
    dataIndex: "bank_name",
    key: "bank_name",
    render: (text, record) => (
      <a href={record.branch + "/" + record.bank_id}>{text}</a>
    ),
  },
];
