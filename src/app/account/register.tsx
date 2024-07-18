import { Space, Tabs } from "antd"
import dayjs from "dayjs"
import React, { useEffect, useState } from "react"

import "./register.css" // 引入CSS样式文件

// import { axiosClient } from "~lib/axios-client"
// import CountdownButton from "~component/CountDownBUtton"

interface LoginProps {
  onSubmit?: (formData: formData) => void
  onResult?: (result: any) => void
  onSuccess?: (result: any) => void
}

interface formData {
  username: string
  password: string
  phone: string
  code: string
  inviteCode: string
}

const RegisterForm: React.FC<LoginProps> = (props) => {
  const [formData, setFormData] = useState<formData>({
    username: "",
    password: "",
    phone: "",
    code: "",
    inviteCode: ""
  })
  const [formMessage, setFormMessage] = useState<string>("")

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value
    })
  }


  const onSendCode = async () => {
    // 在这里处理发送验证码逻辑，比如调用API发送短信验证码
    if (!formData.phone) {
      setFormMessage("请输入手机号")
      return
    }
    // const result = await axiosClient.post(
    //   "/app/haitun/user/getPhoneCode",
    //   { phone: formData.phone }
    // )
    // console.log(result.data)
    // setFormMessage(result.data.message)
    // if(result.data.code == "1000"){
    //   setFormMessage("发送成功")
    // }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if(props.onSubmit){
      props.onSubmit(formData)
    }
    // 在这里处理表单提交，比如调用API进行登录验证

    // const result = await axiosClient.post(
    //   "/app/haitun/user/registerByPhone",
    //   {
    //     ...formData,
    //     username: formData.phone
    //   }
    // )
    // if(props.onResult){
    //   props.onResult(result.data)
    // }
    // if (result.data.code == "1000") {
    //   localStorage.setItem("user", JSON.stringify(result.data.data))
    //   setFormData({
    //     ...formData,
    //     password: ""
    //   })
    //   setFormMessage("注册成功")
    //   props.onSuccess(result.data.data)
    // } else {
    //   setFormMessage(result.data.message)
    // }
  }

  return (
    <div className="login-container" style={{ width: "100%" }}>
      <form className="login-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="phone">手机号</label>
          <input
            type="text"
            id="phone"
            name="phone"
            value={formData.phone}
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
        <div className="form-group">
          <label htmlFor="code">验证码</label>
          <Space direction="horizontal" style={{display:"flex"}}>
            <input
              type="text"
              id="code"
              name="code"
              value={formData.code}
              onChange={handleChange}
              className="form-control"
              style={{display:"flex"}}
              required
            />
            <button type="button" className="btn btn-primary" onClick={onSendCode} style={{marginLeft:"20px"}}>
              发送验证码
            </button>
            {/* <CountdownButton type="primary" className="btn btn-primary" onClick={onSendCode} style={{marginLeft:"20px"}}>
              发送验证码
            </CountdownButton> */}
          </Space>
        </div>
        <div className="form-group">
          <label htmlFor="inviteCode">邀请码</label>
          <input
            type="text"
            id="inviteCode"
            name="inviteCode"
            value={formData.inviteCode}
            onChange={handleChange}
            className="form-control"
          />
        </div>
        <button type="submit" className="btn btn-primary">
          注册
        </button>
        <Space direction="horizontal" className="status" style={{marginLeft:"20px"}}>
          <span className="lbl-status">{formMessage}</span>
        </Space>
      </form>
    </div>
  )
}

export default RegisterForm
