import React, { useEffect, useState } from 'react';
import { Form } from '../GlobalImports';
import { Card } from '../components/card';
import { Input, Select, Col, Row, Upload, Image, Button } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import { useNavigate, useOutletContext } from 'react-router-dom';
import { loginUserAsync } from '../redux/authSlice';
import { useDispatch, useSelector } from 'react-redux';
import * as Styled from '../components/formButton';
// import Maps from "../../components/maps"
const { Option } = Select;

const labels = [
  { name: 'userName', label: 'User Name', type: 'text', rules: [{ required: true, message: 'Please enter user name' }] },

  { name: 'password', label: 'Password', type: 'password', rules: [{ required: true, message: 'Please enter your password' }] },
  // { name: 'confirmPassword', label: 'Confirm Password', type: 'text', dependencies: ['password'], rules: [{ required: true, message: 'Please confirm your password' }, ({ getFieldValue }) => ({ validator(_, value) { if (!value || getFieldValue('password') === value) { return Promise.resolve(); } return Promise.reject(new Error('The two passwords do not match')); }, })] },

];

function Login() {

  const isSignedIn = useSelector(state => state.auth.isSignedIn)
  const navigate = useNavigate()

  useEffect(() => {
    if (isSignedIn) {
      navigate("/")
    }
  }, [isSignedIn])

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
