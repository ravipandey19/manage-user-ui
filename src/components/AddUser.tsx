import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Form, Input, FloatButton } from 'antd';
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
    const formRef = React.useRef<FormInstance>(null);

    const onFinish = (values: any) => {
        console.log(values);
    };

    const onReset = () => {
        formRef.current?.resetFields();
    };

    const onFill = () => {
        formRef.current?.setFieldsValue({ note: 'Hello world!', gender: 'male' });
    };

    return (
        <>
            <Form {...layout} ref={formRef} name="control-ref" onFinish={onFinish} >
                <Form.Item label="First Name" name="first_name" rules={[{ required: true }]}>
                    <Input placeholder="First name" autoComplete='off' />
                </Form.Item>
                <Form.Item label="Last Name" name="last_name" rules={[{ required: true }]}>
                    <Input placeholder="Last Name" autoComplete='off' />
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