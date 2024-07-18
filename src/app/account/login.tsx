import { Space, Tabs,Flex } from "antd"
import dayjs from "dayjs"
import React, { useEffect, useState } from "react"

import "./login.css" // 引入CSS样式文件

// import { axiosClient } from "~lib/axios-client"

interface LoginProps {
  onSubmit?: (formData: formData) => void
  onResult?: (result: any) => void
  onSuccess?: (result: any) => void
}

interface formData {
  username: string
  password: string
}

const LoginForm: React.FC<LoginProps> = (props) => {
  const [formData, setFormData] = useState<formData>({
    username: "",
    password: ""
  })
  const [formMessage, setFormMessage] = useState<string>("")

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (props.onSubmit) {
      props.onSubmit(formData)
    }
    // 在这里处理表单提交，比如调用API进行登录验证

    // const result = await axiosClient.post(
    //   "/app/haitun/user/userPassword",
    //   formData
    // )
    // if (props.onResult) {
    //   props.onResult(result.data)
    // }
    // if (result.data.code == "1000") {
    //   localStorage.setItem("user", JSON.stringify(result.data.data))
    //   setFormData({
    //     ...formData,
    //     password: ""
    //   })
    //   props.onSuccess(result.data.data)
    // } else {
    //   setFormMessage(result.data.message)
    // }
  }

  return (
    <div className="login-container" style={{ width: "100%" }}>
      <form className="login-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="username">手机号</label>
          <input
            type="text"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">密码</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">
          登录
        </button>
        <Space
          direction="horizontal"
          className="status"
          style={{ marginLeft: "20px"}}>
          <span className="lbl-status">{formMessage}</span>
        </Space>
      </form>
    </div>
  )
}

export default LoginForm
