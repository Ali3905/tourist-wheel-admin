import React, { useState, useEffect } from 'react';
import { Card } from '../components/card';
import { Form, Input, Select, Col, Row, Upload, Image, Button } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import { useOutletContext, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getEmployeesAsync } from '../redux/employeesSlice';
// import Maps from "../../components/maps"
const { Option } = Select;

const labels = [
    { name: 'name', label: 'Full Name', type: 'text', rules: [{ required: true, message: 'Please enter your name' }] },

    { name: 'password', label: 'Password', type: 'password', rules: [{ required: true, message: 'Please enter your password' }] },
    // { name: 'confirmPassword', label: 'Confirm Password', type: 'text', dependencies: ['password'], rules: [{ required: true, message: 'Please confirm your password' }, ({ getFieldValue }) => ({ validator(_, value) { if (!value || getFieldValue('password') === value) { return Promise.resolve(); } return Promise.reject(new Error('The two passwords do not match')); }, })] },

    { name: 'mobileNumber', label: 'Mobile Number', type: 'text', rules: [{ required: true, message: 'Please enter phone number of employee', min: 10, max: 11 }] },
    { name: 'employeeType', label: 'Employee Type', type: 'select', options: ["ADMINISTRATOR", "HR", "BPO", "SALES-EXECUTIVE", "DIGITAL-MARKETER", "MARKETING-EXECUTIVE"], rules: [{ required: true, message: 'Please enter the city' }] },
    { name: 'state', label: 'State', type: 'text', rules: [{ required: true, message: 'Please enter the state' }] },
    { name: 'city', label: 'City', type: 'text', rules: [{ required: true, message: 'Please enter the city' }] },

    { name: 'photo', label: 'Employee Photo', type: 'file', rules: [{ required: true, message: 'Please provide the photo of Employee' }] },
    { name: 'aadharCard', label: 'Aadhar Card', type: 'file', rules: [{ required: true, message: 'Please provide the photo of aadhar Card' }] },


];

function UpdateEmployee() {
    const { handleFileChange } = useOutletContext();

    const data = useSelector(state => state.employees.data)
    const { employeeId } = useParams()

    const [employee, setEmployee] = useState(null)
    const dispatch = useDispatch()
    const formItemLayout = {
        labelCol: { span: 8 },
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

    useEffect(() => {
        dispatch(getEmployeesAsync())
    }, [employeeId])

    useEffect(() => {
        const active = data.filter(emp => emp._id === employeeId)[0]
        
        setEmployee(active)
    }, [employeeId, data])

    return (
        <Col span={24}>
            <Card>
                <div {...formItemLayout}>
                    <Row gutter={24}>
                        {labels.map((field, index) => (
                           employee &&  <Col span={12} key={index}>
                                {employee?.name}
                                <Form.Item
                                    label={field.label}
                                    name={field.name}
                                    rules={field.rules}
                                    dependencies={field.dependencies}
                                    initialValue={employee?.[field.name]}
                                >
                                    {field.type === 'select' ? (employee ?
                                        <Select
                                            placeholder="None"
                                        >
                                            {field.options.map((option) => (
                                                <Option key={option} value={option}>
                                                    {option}
                                                </Option>
                                            ))}
                                        </Select> : "Loading..."
                                    ) : (
                                        field.type === 'password' ? (employee ?
                                            <Input.Password /> : "Loading..."
                                        ) : field.type === 'file' ? (employee ? <Form.Item
                                            // label={field.label}
                                            name={field.name}
                                            valuePropName="file"
                                            // getValueFromEvent={e => e.target.files[0]}
                                            Change={e => handleFileChange(e, field.name)}
                                        >
                                            <Upload name={field.name} listType='picture' beforeUpload={e => false} defaultFileList={
                                                employee && employee[field.name]
                                                    ? [{ uid: '-1', name: `${field.label}`, url: employee[field.name], status: 'done' }]
                                                    : []
                                            }
                                            on>
                                                <Button icon={<UploadOutlined />}>Click to upload</Button>
                                            </Upload>
                                        </Form.Item> : "Loading..." )
                                            : (
                                                employee ? <Input disabled={field.disabled} /> : "loading..."
                                            )
                                    )}
                                </Form.Item>
                            </Col>

                        ))}


                    </Row>
                </div>
            </Card>
        </Col>
    );
}

export default UpdateEmployee;
