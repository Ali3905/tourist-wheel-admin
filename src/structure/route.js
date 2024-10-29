import React, { useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { RoutingConfig } from '../config/routingConfig';
import { SubpageRoutingConfig } from '../config/subpageRoutingConfig';
import Layout from './layout';
import FormBuilder from "../pages/builders/formBuilder";
import Login from '../pages/login';
import Agencies from '../pages/Agencies';
import Technicians from '../pages/Technicians';
import { useSelector } from 'react-redux';
import Employees from '../pages/staff/Employees';

const RouteContainer = () => {
    const { user } = useSelector(state => state.auth)

    return (
        <Routes>
            <Route element={
                <div style={{ display: "flex", alignItems: "center", justifyContent: "center", minHeight: "100vh" }}>
                    <FormBuilder />
                </div>
            }>
                <Route path='/login' element={<Login />} />
            </Route>
            <Route element={<Layout />} >
                <Route path='/' element={user?.type === "ADMIN" ? <Technicians /> : user?.employeeType === "BPO" ? <Technicians /> : user?.employeeType === "HR" ? <Employees /> : <Agencies />} />
            </Route>
            <Route element={<Layout />}>
                {RoutingConfig.map((data, key) => (
                    <Route
                        key={key}
                        path={data.path}
                        element={data.component}
                    />
                ))}

                <Route element={<FormBuilder />}>
                    {SubpageRoutingConfig.map((data, key) => (
                        <Route
                            key={key}
                            path={data.path}
                            element={data.component}
                        />
                    ))}
                </Route>
            </Route>
            <Route />
        </Routes>
    )
};

export default RouteContainer;
