import React from 'react';
import ReactDOM from 'react-dom';
import Movies from './Movies';

import 'antd/dist/antd.css';
import './index.css';
import { Layout, Menu, Breadcrumb } from 'antd';
import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons';
import logo from './logo.svg';
import { Route, Routes, Navigate ,BrowserRouter, useNavigate, Link} from "react-router-dom";
import MovieDetail from './movieDetail';

const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;


ReactDOM.render(
  <BrowserRouter>

  <Layout>
    <Header className="header">
      <div className="logo" >
        <img src={logo} className="App-logo" alt="logo" />
      </div>
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
        <Menu.Item key="1" ><Link to="/movies">Movies</Link> </Menu.Item>
        <Menu.Item key="2">Television</Menu.Item>
        <Menu.Item key="3">About</Menu.Item>
      </Menu>
    </Header>
    <Layout>
      <Sider width={200} className="site-layout-background">
        <Menu
          mode="inline"
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['sub1']}
          style={{ height: '100%', borderRight: 0 }}
        >
          <SubMenu key="sub1" icon={<UserOutlined />} title="Sort">
            <Menu.Item key="1">Release Date</Menu.Item>
            <Menu.Item key="2">Rating</Menu.Item>
            <Menu.Item key="3">Title</Menu.Item>
          </SubMenu>
          <SubMenu key="sub2" icon={<LaptopOutlined />} title="Filter">
            <Menu.Item key="5">Language</Menu.Item>
            <Menu.Item key="6">Genres</Menu.Item>
            <Menu.Item key="7">Release Date</Menu.Item>
          </SubMenu>
          <SubMenu key="sub3" icon={<NotificationOutlined />} title="Where to watch">
            <Menu.Item key="9">Hotstar</Menu.Item>
            <Menu.Item key="10">Netflix</Menu.Item>
            <Menu.Item key="11">Amazon</Menu.Item>
          </SubMenu>
        </Menu>
      </Sider>
      <Layout style={{ padding: '0 24px 24px' }}>
        <Breadcrumb style={{ margin: '16px 0' }}>
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>List</Breadcrumb.Item>
        </Breadcrumb>
        <Content
          className="site-layout-background"
          style={{
            padding: 24,
            margin: 0,
            minHeight: 280,
          }}
        >
          <Routes>

            <Route path="/movie/:movie_id" element={<MovieDetail movie_id={true}/>}></Route>
            <Route path="/movies" element={<Movies/>}></Route>
            <Route path="*" element={<Navigate replace to="/movies" />} />          </Routes>
        </Content>
      </Layout>
    </Layout>
  </Layout>
  </BrowserRouter>
  ,
  document.getElementById('container'),
);