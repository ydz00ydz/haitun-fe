"use client";
import React, { lazy, Suspense, useEffect, useState } from "react";
import "./index.css";
import { Button, Col, message, Modal, Row, Space, Table } from "antd";
import useSWR from "swr";
import { ColumnsType } from "antd/es/table";
import Input from "antd/es/input/Input";
import _ from "lodash";
import { useRouter } from "next/navigation";
import { ReloadOutlined } from "@ant-design/icons";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

interface User {
  id: number;
  createTime: Date;
  updateTime: Date;
  unionid: string | null;
  avatarUrl: string | null;
  username: string;
  nickName: string | null;
  phone: string;
  status: number;
  exportCount: number;
  expiredTime: Date;
  lastExportTime: Date;
  parentId: number | null;
  parentCommissionRate: number;
  inviteCode: string;
  loginType: number;
  password: string;
}

interface UserListResponse {
  code: number;
  message: string;
  data: User[];
}

const AdminPage: React.FC = (props) => {
  const [authenticating, setAuthenticating] = useState(false);
  const { data, isLoading, isValidating, error, mutate } = useSWR<UserListResponse>("https://haitun.kd99.xyz/api/app/haitun/user/personList", fetcher, {
    revalidateOnFocus: false, // Disable automatic revalidation on focus
    revalidateOnReconnect: false, // Disable automatic revalidation on reconnect
  });
  const [searchText, setSearchText] = useState("");
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedUser, setSelectedUser] = useState<User | null>(null);
  const router = useRouter();

  const debouncedHandleSearch = _.debounce((value: string) => {
    setSearchText(value);
  }, 300);

  const filteredData = data?.data.filter((user) => user.phone.includes(searchText)) || [];

  const showModal = (user: User) => {
    setSelectedUser(user);
    setModalVisible(true);
  };

  const handleOk = () => {
    setModalVisible(false);
  };

  const handleCancel = () => {
    setModalVisible(false);
  };

  const handleRefresh = () => {
    console.log("refresh");
    mutate();
  };

  const handleOperation = (subsDay: number) => {
    fetch("https://haitun.kd99.xyz/api/app/haitun/user/addSubstime", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        key: "pmCBHYGLmVyV",
        username: selectedUser?.username,
        days: subsDay,
      }),
    }).then(async (res) => {
      const resJson = await res.json();
      if (resJson.code === 1000) {
        message.success("操作成功");
        setModalVisible(false);
        mutate();
      } else {
        message.error(resJson.message);
      }
    });
  };

  const columns: ColumnsType<User> = [
    {
      title: "Username",
      dataIndex: "username",
      sorter: (a, b) => a.username.localeCompare(b.username),
      showSorterTooltip: false,
    },
    {
      title: "Last Export Time",
      dataIndex: "lastExportTime",
      sorter: (a, b) => new Date(a.updateTime).getTime() - new Date(b.updateTime).getTime(),
      render: (text) => text && new Date(text).toLocaleString(),
      showSorterTooltip: false,
    },
    {
      title: "Expired Time",
      dataIndex: "expiredTime",
      sorter: (a, b) => new Date(a.expiredTime).getTime() - new Date(b.expiredTime).getTime(),
      render: (text) => text && new Date(text).toLocaleString(),
      showSorterTooltip: false,
    },
    {
      title: "Create Time",
      dataIndex: "createTime",
      sorter: (a, b) => new Date(a.createTime).getTime() - new Date(b.createTime).getTime(),
      render: (text) => text && new Date(text).toLocaleString(),
      showSorterTooltip: false,
    },
    {
      title: "Operation",
      key: "operation",
      render: (text, record) => (
        <Button type="primary" onClick={() => showModal(record)}>
          Operation
        </Button>
      ),
    },
  ];

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const key = urlParams.get("key");
    if (key === "ydzadmin") {
      setAuthenticating(true);
    }
  }, []);

  return (
    <div className="ydz-container">
      {authenticating && (
        <>
          <Row gutter={16} justify="space-between" align="middle">
            <Col span={8}>
              <Input placeholder="Search phone" onChange={(e) => debouncedHandleSearch(e.target.value)} />
            </Col>
            <Col span={4} style={{ textAlign: "right" }}>
              <Button type="primary" icon={<ReloadOutlined />} onClick={handleRefresh} />
            </Col>
          </Row>
          <Table loading={isValidating} dataSource={filteredData} columns={columns} pagination={false} rowKey={(record) => record.id} />
        </>
      )}
      <Modal
        className="flex-row"
        open={modalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={[
          <div className="flex flex-row justify-around">
            <Button type={"primary"} danger={true} key="disable" onClick={() => handleOperation(-1)}>
              停用
            </Button>
            <Button type={"primary"} key="subscribe31" onClick={() => handleOperation(31)}>
              订阅31天
            </Button>
            <Button type={"primary"} key="subscribe92" onClick={() => handleOperation(92)}>
              订阅92天
            </Button>
            <Button type={"primary"} key="subscribe365" onClick={() => handleOperation(365)}>
              订阅365天
            </Button>
          </div>,
        ]}
      >
        <div className="text-center py-4 font-bold text-lg">Username: {selectedUser?.username}</div>
      </Modal>
    </div>
  );
};

export default AdminPage;
