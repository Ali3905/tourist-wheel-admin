import React, { useEffect, useState } from 'react';
import { Form } from '../GlobalImports';
import { Card } from '../components/card';
import { Input, Select, Col, Row, Upload, Image, Button } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import { useNavigate, useOutletContext } from 'react-router-dom';
import { getUserAsync, loginUserAsync } from '../redux/authSlice';
import { useDispatch, useSelector } from 'react-redux';
import * as Styled from '../components/formButton';
// import Maps from "../../components/maps"
const { Option } = Select;


function Login() {
  const { isSignedIn, user } = useSelector(state => state.auth)
  const navigate = useNavigate()
  const [userType, setUserType] = useState("admin")

  const labels = [
    userType === "admin"?
    { name: 'userName', label: 'User Name', type: 'text', rules: [{ required: true, message: 'Please enter user name' }] } :
    { name: 'mobileNumber', label: 'Mobile Number', type: 'text', rules: [{ required: true, message: 'Please enter Mobile Number' }] }
    ,

    { name: 'password', label: 'Password', type: 'password', rules: [{ required: true, message: 'Please enter your password' }] },
    // { name: 'confirmPassword', label: 'Confirm Password', type: 'text', dependencies: ['password'], rules: [{ required: true, message: 'Please confirm your password' }, ({ getFieldValue }) => ({ validator(_, value) { if (!value || getFieldValue('password') === value) { return Promise.resolve(); } return Promise.reject(new Error('The two passwords do not match')); }, })] },
  ];

  useEffect(() => {

    getUserAsync()
    if (user && isSignedIn && (user.type === "ADMIN" || user.employeeType === "ADMINISTRATOR")) {
      return navigate("/")
    }

  }, [isSignedIn, user])

  const formItemLayout = {
    labelCol: { span: 12 },
    wrapperCol: { span: 16 },
  };

  const previewAreaStyle = {
    border: '1px solid #d9d9d9',
    padding: '8px',
    borderRadius: '4px',
    height: '150px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: "hidden"
  };


  return (
    // <Form form={form} layout="vertical" onFinish={onFinish} >
    <Col span={24} >
      <div className='flex justify-center gap-[20px]'>
        <label htmlFor="admin" className='flex items-center gap-1'>
          <input type="radio" name='userType' id='admin' onChange={() => setUserType("admin")} checked={userType==="admin"} />
          Admin
        </label>
        <label htmlFor="employee" className='flex items-center gap-1'>
          <input type="radio" name='userType' id='employee' onChange={() => setUserType("employee")} />
          Employee
        </label>
      </div>
      <Card>
        <div {...formItemLayout}>
          <Row gutter={24}>
            {labels.map((field, index) => (
              <Col span={24} key={index}>
                <Form.Item
                  label={field.label}
                  name={field.name}
                  rules={field.rules}
                  dependencies={field.dependencies}
                >
                  {(
                    field.type === 'password' ? (
                      <Input.Password />
                    ) : (
                      <Input />
                    )
                  )}
                </Form.Item>
              </Col>

            ))}
          </Row>
        </div>
      </Card>
    </Col>
    // </Form>
  );
}

export default Login;
