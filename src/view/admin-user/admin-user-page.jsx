import React from "react";
import "./admin-user.scss";

import { Space, Table, Tag } from 'antd';





const AdminUserPage = () => {


const columns = [
    {
      tittle:"Profile",
      dataIndex: "profile",
      key:"profile",
      width:50,
      render: (profile) => <span className="user_profile">{profile}</span>
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      width: 150,
      render: (name) => <span className="user_name">{name}</span>
    },
    {
      title: "Contact",
      dataIndex: "contact",
      key: "contact",
      width: 100,
      render: (contact) => <span className="user_contact">{contact}</span>
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
      width: 100,
      render: (contact) => <span className="user_contact">{contact}</span>
    },
    {
      title: "Country",
      dataIndex: "country",
      key: "country",
      width: 100,
      render: (country) => <span className="user_country">{country}</span>
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      width: 100,
      render: (status) => <span className="user_status">{status}</span>
    },
    {
      title: "Join Date",
      dataIndex: "join_date",
      key: "join_date",
      width: 100,
      render: (JoinDate) => <span className="user_join date">{JoinDate}</span>
    },
    {
      title: "Action",
      dataIndex: "action",
      key: "action",
      width: 100,
      render: (action) => <span className="user_action">{action}</span>
    },
    ]
    
    const data = [
      {
        key: "1",
        name: "Andy",
        contact: "0935341801",
        email:"thanh123@gmail.com",
        country: "da nang",
        status: "Active",
        join_date: "21 July",
        action: "Success"
      }
    ]

  return (
    <>
      <Table columns={columns} dataSource={data} />
    </>
  )
}
export default AdminUserPage;
