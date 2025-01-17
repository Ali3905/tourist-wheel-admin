import React, { useEffect, useState } from 'react';
import { Card } from '../components/card';
import { Form, Input, Select, Col, Row, Upload, Image, Button, Space } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import { useOutletContext, useParams } from 'react-router-dom';
// import { dataForVehicles as vehicles, dataForDrivers as drivers, dataForCleaners as cleaners, activeDailyRoute } from "../jsonData/tableData"
import { useDispatch, useSelector } from 'react-redux';
import { getTechniciansAsync } from '../redux/technicianSlice';

// import Maps from "../../components/maps"
const { Option } = Select;


const labels = [
    { name: 'name', label: 'Full Name', type: 'text', rules: [{ required: true, message: 'Please enter your name' }] },


    { name: 'mobileNumber', label: 'Mobile Number', type: 'text', rules: [{ required: true, message: 'Please enter your phone number', min: 10, max: 12 }] },
    { name: 'alternateNumber', label: 'Alternate Number', type: 'text', rules: [{ required: true, message: 'Please enter your alternate phone number', min: 10, max: 12 }] },
    { name: 'technicianType', label: 'Technician Type', type: 'select', options: ["MECHANIC", "ELECTRICIAN", "SPAREPARTSHOP", "SPRINGWORK", "BATTERYSERVICES", "VEHICLEBODYREPAIR"], rules: [{ required: true, message: 'Please enter the technician type' }] },
    { name: 'vehicleType', label: 'Vehicle Type', type: 'select', options: ["ALL", "CAR", "BUS", "TRUCK", "TAMPO"], rules: [{ required: true, message: 'Please enter the vehicle type' }] },



];

function UpdateTechnician() {
    const { handleFileChange } = useOutletContext()
    const data = useSelector(state => state.technicians.data)
    const { technicianId } = useParams()

    const [technician, setTechnician] = useState(null)
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
        dispatch(getTechniciansAsync())
    }, [technicianId])

    useEffect(() => {
        const active = data.filter(route => route._id === technicianId)[0]
        setTechnician(active)
    }, [technicianId, data])





    return (
        <Col span={24}>
            <Card>
                <div {...formItemLayout}>
                    <Row gutter={24}>
                        {labels.map((field, index) => (
                            technician && <Col span={12} key={index}>
                            <Form.Item
                                label={field.label}
                                name={field.name}
                                rules={field.rules} 
                                dependencies={field.dependencies}
                                initialValue={technician?.[field.name]}
                            >
                                {field.type === 'select' ? (technician ? <Select
                                    placeholder="None"
                                >
                                    {field.options.map((option) => (
                                        <Option key={option} value={option}>
                                            {option==="TAMPO"? "TAMPO-TRAVELLER": option}
                                        </Option>
                                    ))}
                                </Select> : "loading..."
                                ) : (field.type === 'file' ? <Form.Item
                                    // label={field.label}
                                    name={field.name}
                                    valuePropName="file"
                                    // getValueFromEvent={e => e.target.files[0]}
                                    onChange={e => handleFileChange(e, field.name)}
                                >
                                    <Upload name={field.name} listType='picture' beforeUpload={e => false}>
                                        <Button icon={<UploadOutlined />}>Click to upload</Button>
                                    </Upload>
                                </Form.Item> : (
                                    technician ? <Input disabled={field.disabled} /> : "loading..."
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

export default UpdateTechnician;
