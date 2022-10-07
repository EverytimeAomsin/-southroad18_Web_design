import Link from 'next/link'


import { Breadcrumb, Layout, Menu, Card, Input, Button, Row, Col, Typography, Space } from 'antd';
import { DownloadOutlined, ShareAltOutlined } from '@ant-design/icons';
import React, { useState } from 'react';
const { Header, Content, Footer } = Layout;
const { Paragraph, Text } = Typography;


function Home() {
  const [size, setSize] = useState('large');
  return (


    <Layout>
      <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>

      </Header>
      <Content className="site-layout" style={{ padding: '0 50px', marginTop: 64 }}>
     
      </Content>
      <Footer style={{ textAlign: 'center' }}>ติดต่อ ออมสิน</Footer>
    </Layout>
  );
}

export default Home;