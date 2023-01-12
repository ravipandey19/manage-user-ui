import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Breadcrumb, Layout, Menu, theme } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import './App.css';
import AddUser from './components/AddUser';
import UserDetails from './components/UserDetials';

const { Header, Content, Footer } = Layout;

function App() {

  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <>
      <Layout className="layout">
        <Header>
          <div className="logo" />
          <Menu
            theme="dark"
            mode="horizontal"
            items={[{
              label: 'Manage User',
              key: 'user',
              icon: <UserOutlined />,
            }]}
          />
        </Header>
        <Content style={{ padding: '0 50px' }}>
          <Breadcrumb style={{ margin: '20px 0' }}>
          </Breadcrumb>
          <div className="site-layout-content" style={{ background: colorBgContainer }}>
            <BrowserRouter>
              <Routes>
                <Route path="/" element={<UserDetails />} />
                <Route path="/add-user" element={<AddUser />} />
              </Routes>
            </BrowserRouter>
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>Manage User ©2023</Footer>
      </Layout>
    </>
  );
}

export default App;