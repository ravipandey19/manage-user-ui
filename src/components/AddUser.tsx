import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Form, Input, FloatButton } from 'antd';
import { useAppDispatch, useAppSelector } from "../hooks/redux-hooks";
import { addUserData } from '../store/user-actions';
import type { FormInstance } from 'antd/es/form';
import { HomeOutlined } from '@ant-design/icons';
import './UserDetails.css';

const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 8 },
};

const tailLayout = {
    wrapperCol: { offset: 8, span: 8 },
};

const AddUser = () => {

    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const formRef = React.useRef<FormInstance>(null);

    const onFinish = (values: any) => {
        dispatch(addUserData(values));
    };

    const onReset = () => {
        formRef.current?.resetFields();
    };

    const validation = (e: any) => {
        e.target.value = e.target.value.replace(/\d/g, "");
        formRef.current?.setFieldValue(e.target.id, e.target.value)
    };

    return (
        <>
            <Form {...layout} data-testid="add-user-form" ref={formRef} name="control-ref" onFinish={onFinish} >
                <Form.Item label="First Name" name="first_name" rules={[{ required: true }]}>
                    <Input placeholder="First name" id={'first_name'} autoComplete='off' maxLength={100}
                        showCount
                        onKeyUp={(e: any) => validation(e)}
                        onPaste={(e: any) => validation(e)}
                        
                    />
                </Form.Item>
                <Form.Item label="Last Name" name="last_name" rules={[{ required: true }]}>
                    <Input placeholder="Last Name" id={'last_name'} autoComplete='off' maxLength={100} showCount
                        onKeyUp={(e: any) => validation(e)}
                        onPaste={(e: any) => validation(e)}
                    />
                </Form.Item>
                <Form.Item label="Email Id" name="emailid" rules={[{ required: true }]}>
                    <Input type="email" placeholder="User email id" autoComplete='off' />
                </Form.Item>
                <Form.Item {...tailLayout}>
                    <Button type="primary" htmlType="submit">
                        Submit
                    </Button>
                    <Button htmlType="button" onClick={onReset}>
                        Reset
                    </Button>
                </Form.Item>
            </Form>
            {/* <FloatButton  /> */}
            <FloatButton
                icon={<HomeOutlined />}
                // description="HOME"
                shape="square"
                onClick={() => navigate('/')}
                style={{ right: 30, }}
            />
        </>
    );
}
export default AddUser;