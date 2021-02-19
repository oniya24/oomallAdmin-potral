import { useEffect, useState } from 'react';
import { Layout, Menu, Button, Space } from 'antd';
import { menuRouter } from '@/consts/router';
import { NavLink } from 'umi';
import { useSessionStorageState } from 'ahooks';
import store from '../../microConfig/redux';
import { getUserReq } from '@/service/User';
const { Header, Sider, Content } = Layout;
const { SubMenu } = Menu;

const Logged = (props) => {
  const [adminInfo, setAdminInfo] = useSessionStorageState(
    'adminInfo',
    sessionStorage.getItem('adminInfo'),
  );
  // if (adminInfo == 'undefined' || adminInfo == null) {
  //   getUserReq().then(val => {
  //     const { data } = val;
  //     // sessionStorage.setItem("adminInfo",JSON.stringify(data));
  //     setAdminInfo(data);
  //   }).catch((err) => {
  //     console.error("请求失败")
  //   });
  // }
  sessionStorage.setItem(
    'adminInfo',
    JSON.stringify({
      depart_id: 1,
      mobile: 16679797979,
      userName: 'liuxx',
      username: 'safaasf',
    }),
  );
  const handleClickLogout = () => {
    logoutUserReq();
    history.push('/login');
  };
  return (
    <Layout style={{ height: '100vh' }}>
      <Header style={{ height: '10vh' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <h1 style={{ color: 'white' }}>OOAD - priviledge</h1>
          <div>
            <Button onClick={handleClickLogout} type="primary">
              登出
            </Button>
          </div>
        </div>
      </Header>
      <Content>
        <Layout style={{ height: '90vh' }}>
          <Sider>
            <Menu
              // style={{ width: 256, height: '100%' }}
              defaultOpenKeys={['setting']}
              mode="inline"
              theme="dark"
            >
              {menuRouter.map((item) => {
                const { routes } = item;
                return (
                  <SubMenu key={item.key} title={item.title}>
                    {routes.map((subItem) => {
                      return (
                        <Menu.Item key={subItem.title} title={subItem.title}>
                          <NavLink to={subItem.path}>{subItem.title}</NavLink>
                        </Menu.Item>
                      );
                    })}
                  </SubMenu>
                );
              })}
            </Menu>
          </Sider>
          <Content>{props.children}</Content>
        </Layout>
      </Content>
    </Layout>
  );
};

export default Logged;
