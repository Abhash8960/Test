import { FC } from "react";
import { Button, Table } from "antd";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";

interface BusinessTableProps {}

const BusinessTable: FC<BusinessTableProps> = () => {
  const dataSource = [
    {
      key: "1",
      id: "1",
      businessName: "ABC Company",
      email: "abc@example.com",
      phoneNo: "1234567890",
      address: "10 Downing Street",
      city: "London",
      state: "XYZ",
      country: "UK",
      postCode: "12345",
      status: "Active",
      lastModified: "2022-04-12",
    },
    {
      key: "2",
      id: "2",
      businessName: "XYZ Corporation",
      email: "xyz@example.com",
      phoneNo: "9876543210",
      address: "123 Elm Street",
      city: "New York",
      state: "ABC",
      country: "USA",
      postCode: "54321",
      status: "Inactive",
      lastModified: "2022-04-11",
    },
  ];

  const columns = [
    {
      title: "ID",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "Business Name",
      dataIndex: "businessName",
      key: "businessName",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Pnone No.",
      dataIndex: "phoneNo",
      key: "phoneNo",
    },
    {
      title: "Adderss",
      dataIndex: "address",
      key: "address",
    },
    {
      title: "City",
      dataIndex: "city",
      key: "city",
    },
    {
      title: "State",
      dataIndex: "state",
      key: "state",
    },
    {
      title: "Country",
      dataIndex: "country",
      key: "country",
    },
    {
      title: "Post Code",
      dataIndex: "postCode",
      key: "PostCode",
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
    },
    {
      title: "Last Modified",
      dataIndex: "lastModified",
      key: "lastModified",
    },
    {
      title: "Actions",
      dataIndex: "actions",
      key: "Actions",
      render: (text: string, record: any) => (
        <span>
          <EditOutlined onClick={() => handleEdit(record.key)} className="mx-3"/>
          <DeleteOutlined onClick={() => handleDelete(record.key)} />
        </span>
      ),
    },
  ];

  const handleEdit = (key: string) => {
    console.log("Edit", key);
  };

  const handleDelete = (key: string) => {
    console.log("Delete", key);
  };

  return (
    <>
      <Table dataSource={dataSource} columns={columns} />
    </>
  );
};

export default BusinessTable;
