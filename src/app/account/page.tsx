'use client'
import { Space, Tabs,Flex } from "antd"
import dayjs from "dayjs"
import React, { useEffect, useState } from "react"

import "./index.css" // 引入CSS样式文件

import LoginForm from "./login"
import RegisterForm from "./register"

interface LoginProps {
  // 可以在这里定义任何传递给登录组件的属性
}

interface formData {
  username: string
  password: string
}

export default function Account() {
  const [formData, setFormData] = useState<formData>({
    username: "",
    password: ""
  })
  const [userStatus, setUserStatus] = useState<string>("")
  const [activeTabKey, setActiveTabKey] = useState<string>("login")
  const [formMessage, setFormMessage] = useState<string>("")
  const [logged, setLogged] = useState<boolean>(false)

  useEffect(() => {
    // 从localStorage获取用户数据
    let storedUser: any = localStorage.getItem("user")
    if (storedUser) {
      storedUser = JSON.parse(storedUser)
    }
    showUserData(storedUser)
  }, [])

  const showUserData = (userData: any) => {
    if (userData) {
      console.log(`userData ${JSON.stringify(userData)}`)
      setUserStatus(
        `${userData.username} 有效期至：${dayjs(userData.expiredTime).format("YYYY-MM-DD HH:mm:ss")}`
      )
      setLogged(true)
    } else {
      setLogged(false)
    }
  }

  const quitAccount = () => {
    localStorage.removeItem("user")
    setUserStatus("")
    setLogged(false)
    setFormMessage("")
  }

  return (
    <div className="account-container" style={{ width: "800px",margin: "80px auto",padding: "20px" }}>
      {!logged && (
        <Tabs
          activeKey={activeTabKey}
          onChange={(key) => {
            setActiveTabKey(key)
          }}
          style={{ width: "100%" }}
          items={[
            {
              key: "login",
              label: "登录",
              children: (
                <LoginForm
                  onSuccess={(userData) => {
                    console.log(`login onSuccess: ${JSON.stringify(userData)}`)
                    showUserData(userData)
                  }}
                />
              )
            },
            {
              key: "register",
              label: "注册",
              children: (
                <RegisterForm
                  onSuccess={(userData) => {
                    console.log(
                      `register onSuccess: ${JSON.stringify(userData)}`
                    )
                    setActiveTabKey("login")
                  }}
                />
              )
            }
            // {
            //   key: "forget",
            //   label: "Forgot Password",
            //   children: "Content of Tab Pane 3"
            // }
          ]}
        />
      )}
      {logged && (
        <Flex
          justify="space-between"
          align="center"
          className="loggedContainer"
          style={{ width: "100%" }}>
          {userStatus && <span className="lbl-status">{userStatus}</span>}
          <button
            type="submit"
            className="btn btn-primary"
            onClick={quitAccount}>
            退出账号
          </button>
        </Flex>
      )}
    </div>
  )
}

