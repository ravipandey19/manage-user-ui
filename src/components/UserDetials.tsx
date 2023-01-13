import { Button, List, Space, Avatar, Card, Empty } from 'antd';
import { UserOutlined, UserAddOutlined } from '@ant-design/icons';
import { useAppDispatch, useAppSelector } from "../hooks/redux-hooks";
import { fetchUserData } from '../store/user-actions';
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import './UserDetails.css';

const UserDetails = () => {

    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const [active, setActive] = useState('list');
    const [page_no, setPage_No] = useState(1);
    const [initLoading, setInitLoading] = useState(true);
    const { all_user_list } = useAppSelector(state => state.user);

    useEffect(() => {
        dispatch(fetchUserData())
    }, [dispatch]);

    useEffect(() => {
        if (all_user_list.length > 0) setInitLoading(false);
    }, [all_user_list]);

    const listView = () => {
        return (
            <List
                itemLayout="vertical"
                loading={initLoading}
                size="large"
                pagination={{
                    onChange: (page) => {
                        setPage_No(page);
                    },
                    pageSize: 3,
                }}
                dataSource={all_user_list}
                footer={
                    <div>
                        Page <b>{page_no}</b> of Total  <b>{Math.ceil(all_user_list.length / 3)}</b>
                    </div>
                }
                renderItem={(item) => (
                    <List.Item>
                        <List.Item.Meta
                            avatar={<Avatar style={{ backgroundColor: '#87d068' }} icon={<UserOutlined />} />}
                            title={`${item.first_name} ${item.last_name}`}
                            description={item.emailid}
                        />
                    </List.Item>
                )}
            />
        );
    }

    const gridView = () => {
        return (
            <List
                grid={{ gutter: 16, column: 4 }}
                dataSource={all_user_list}
                renderItem={(item) => (
                    <List.Item>
                        <Card title={`${item.first_name} ${item.last_name}`}>{item.emailid}</Card>
                    </List.Item>
                )}
            />
        );
    }


    return (
        <>
            <div className='mb-50'>
                <Space wrap className='float-end'>
                    <Button type={active === 'list' ? 'primary' : 'default'} onClick={() => setActive('list')}>List View</Button>
                    <Button type={active === 'grid' ? 'primary' : 'default'} onClick={() => setActive('grid')}>Grid View</Button>
                    <Button type={'default'} onClick={() => navigate('/add-user')}><UserAddOutlined /> Add User</Button>
                </Space>
            </div>
            {all_user_list.length > 0 ?
                active === 'list' ? listView() : gridView()
                : <Empty description={false} />}
        </>
    );
}
export default UserDetails;