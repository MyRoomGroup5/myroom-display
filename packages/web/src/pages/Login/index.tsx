import React, { FC, useState } from 'react'
import { Form, Input, Button, Space, Toast, Selector } from 'antd-mobile'
import { useNavigate } from 'react-router-dom'
import style from './style.module.css'
import { reqUserReg, reqUserLogin } from '@/api'

interface Props {
  isLogin: boolean
}

const prompt = (msg: string) => {
  Toast.show({
    content: msg,
    duration: 1000,
  })
}

const LoginForm = () => {
  const [formLog] = Form.useForm()
  const navigate = useNavigate()
  const submitLog = async () => {
    try {
      const query = await formLog
        .validateFields()
        .then((value) => {
          return value
        })
        .catch((err) => {
          return err
        })
      reqUserLogin(query)
        .then((res) => {
          localStorage.setItem('token', res.data.token)
          navigate(`/RoomActivityPage`)
        })
        .catch((err) => {
          prompt(err.msg)
        })
    } catch {
      prompt('填入信息错误，请检查输入')
    }
  }

  return (
    <>
      <Form
        layout="horizontal"
        mode="card"
        form={formLog}
        onFinish={submitLog}
        onFinishFailed={() => prompt('填入信息错误，请重新输入')}
      >
        <Space
          direction="vertical"
          justify="center"
          className={style.loginSpace}
          style={{
            '--gap-vertical': '0.5rem',
          }}
        >
          <Form.Item
            label="用户名"
            name="username"
            rules={[{ required: true }, { type: 'string', min: 4, max: 12 }]}
          >
            <Input
              placeholder="请输入用户名"
              clearable
              style={{
                '--font-size': '0.5rem',
              }}
            />
          </Form.Item>
          <Form.Item
            label="密码"
            name="password"
            rules={[{ required: true }, { type: 'string', min: 6, max: 18 }]}
            validateTrigger="onBlur"
          >
            <Input placeholder="请输入密码" clearable type="password" />
          </Form.Item>
          <Button block type="submit" color="primary" size="large">
            点击登录
          </Button>
        </Space>
      </Form>
    </>
  )
}

const RegisterForm = () => {
  const [formReg] = Form.useForm()
  const [Username, setUsername] = useState('')
  const [Password, setPassword] = useState('')
  const [role, setRole] = useState('1')
  const options = [
    {
      label: '普通用户',
      value: '1',
    },
    {
      label: '经纪人',
      value: '2',
    },
  ]
  const submitReg = async () => {
    try {
      const query = await formReg
        .validateFields()
        .then((value) => {
          return value
        })
        .catch((err) => {
          throw new Error(err)
        })
      query.role = role
      reqUserReg(query).then((res: any) => {
        console.log(res)
        if (res.code === 200) {
          prompt('注册成功')
        } else {
          prompt(res.msg)
        }
      })
    } catch (err) {
      prompt(err as string)
    }
  }
  const checkConfirm = (_: any, value: string) => {
    if (!value || value === Password) {
      return Promise.resolve()
    }
    if (value.length > 0) {
      return Promise.reject('两次输入密码需一致')
    }
    return Promise.reject()
  }

  return (
    <>
      <Form
        layout="horizontal"
        mode="card"
        form={formReg}
        onFinish={submitReg}
        onFinishFailed={() => prompt('填入信息错误，请重新输入')}
      >
        <Space
          direction="vertical"
          justify="center"
          className={style.loginSpace}
          style={{
            '--gap-vertical': '0.5rem',
          }}
        >
          <Form.Item
            label="用户名"
            name="username"
            rules={[{ required: true }, { type: 'string', min: 4, max: 12 }]}
          >
            <Input
              placeholder="请输入用户名"
              clearable
              value={Username}
              onChange={setUsername}
              style={{
                '--font-size': '0.5rem',
              }}
            />
          </Form.Item>
          <Form.Item>
            <span>注册身份：</span>
            <Selector
              options={options}
              value={[role]}
              onChange={(v) => {
                if (v.length) {
                  setRole(v[0])
                }
              }}
              style={{
                '--border-radius': '1rem',
                '--border': 'solid transparent 1px',
                '--checked-border': 'solid var(--adm-color-primary) 1px',
                '--padding': '0.2rem 0.5rem',
              }}
            />
          </Form.Item>
          <Form.Item
            label="密码"
            name="password"
            rules={[{ required: true }, { type: 'string', min: 6, max: 18 }]}
            validateTrigger="onBlur"
          >
            <Input placeholder="请输入密码" clearable onChange={setPassword} type="password" />
          </Form.Item>
          <Form.Item
            label="确认密码"
            name="password_"
            rules={[{ required: true }, { validator: checkConfirm }]}
          >
            <Input placeholder="请再次输入密码" clearable type="password" />
          </Form.Item>
          <Button block type="submit" color="primary" size="large">
            点击注册
          </Button>
        </Space>
      </Form>
    </>
  )
}

const ChangeLabel: FC<Props> = ({ isLogin }) => {
  if (isLogin) {
    return <LoginForm />
  } else {
    return <RegisterForm />
  }
}

const Login = () => {
  const [isLogin, setIsLogin] = useState(true)
  const getClass = (isLogin: boolean) => {
    if (isLogin) {
      return style.loginTitleItem + ' ' + style.loginTitleItemActive
    }
    return style.loginTitleItem
  }

  return (
    <div className={style.loginContainer}>
      <div className={style.loginTitleContainer}>
        <div className={getClass(isLogin)} onClick={() => setIsLogin(true)}>
          登录
        </div>
        <div className={getClass(!isLogin)} onClick={() => setIsLogin(false)}>
          注册
        </div>
      </div>
      <div className={style.loginFormContainer}>
        <ChangeLabel isLogin={isLogin} />
      </div>
    </div>
  )
}

export default Login
