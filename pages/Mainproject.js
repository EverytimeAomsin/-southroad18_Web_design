import Link from 'next/link'

import { Breadcrumb, Layout, Modal, Card, Input, Button, Row, Col, Typography, Space ,notification } from 'antd';
import { DownloadOutlined, ShareAltOutlined, ArrowRightOutlined,BellOutlined } from '@ant-design/icons';
import React, { useState } from 'react';
const { Header, Content, Footer } = Layout;
const { Paragraph, Text } = Typography;

import MainFooter from '../component/footer/MainFooter'

function Mainproject() {
  const openNotification = () => {
    notification.open({
      message: 'การแจ้งเตือน',
      description:
        'ทำการคัดลอกข้อตวามเรียบร้อยแล้ว',
      icon: (
        <BellOutlined 
          style={{
            color: '#108ee9',
          }}
        />
      ),
    });
  };
  

  const [size, setSize] = useState('large');

  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (


    <Layout>
      <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>

      </Header>
      <Content className="site-layout" style={{ padding: '0 50px', marginTop: 64 }}>
        <Breadcrumb style={{ margin: '16px 0', fontSize: '200%' }}>
          <Breadcrumb.Item>หน้าหลัก</Breadcrumb.Item>
          <Breadcrumb.Item>โครงการต่างๆ</Breadcrumb.Item>
        </Breadcrumb>
        <div className="site-card-border-less-wrapper">
          <Card title="" bordered={false} >
            <Space direction="horizontal" style={{ width: '100%', justifyContent: 'center' }}>
              <Typography.Title
                level={1}
                style={{
                  margin: 0, marginTop: '20PX'
                }}
              >
                โครงการต่างๆ
              </Typography.Title>
            </Space>
            <Space direction="horizontal" style={{ width: '100%', justifyContent: 'center' }}>
              <Paragraph className='MP_SubTitle' style={{ marginTop: '5PX', justifyContent: 'center' }}>
                รวมข้อมูลรายละเอียดโครงการต่างๆของ สำนักงานทางหลวงที่ 18
              </Paragraph>
            </Space>

            <div>
              <Input size="large" splaceholder="Basic usage" />
            </div>
            <div style={{ height: '20px' }}>

            </div>


            <div style={{ marginTop: '15px' }}>
              <Row gutter={[16, 16]}>
                <Col xs={24} xl={10}>
                  <img src='https://cdn.discordapp.com/attachments/823174202156384286/1024734350274736159/hat-yai.png' style={{ width: "100%" }} />
                </Col>
                <Col xs={24} xl={12}>
                  <Row>
                    <Col xs={24} xl={8}>  <Typography.Title
                      level={2}
                      style={{
                        margin: 0, marginTop: '0px'
                      }}
                    >
                      เส้นรอบเมืองหาดใหญ่
                    </Typography.Title></Col>
                    <Col xs={24} xl={5} >
                      <Button type="primary" shape="round" className='MP_Mt10' icon={<DownloadOutlined />} size={size} block>
                        Download
                      </Button>
                    </Col>
                    <Col xs={24} xl={5}> <Button type="primary" className='MP_Mt10 MP_ST_Mt10' shape="round" onClick={showModal} size={size} block><ShareAltOutlined />แชร์</Button></Col>
                  </Row>

                  <Modal title="คัดลอกลิ้งหรือสแกน QR Code" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
                    <Input
                      addonBefore="https://"
                      placeholder="SouthRoad18"
                      allowClear
                      
                      style={{ width: 304 }}
                      disabled /> <Button type="primary" onClick={openNotification}>กดเพื่อคัดลอก</Button>
                   <img src="https://www.investopedia.com/thmb/KfGSwVyV8mOdTHFxL1T0aS3xpE8=/1148x1148/smart/filters:no_upscale()/qr-code-bc94057f452f4806af70fd34540f72ad.png" style={{width:'100%'}}/>
                  </Modal>


                  <Paragraph style={{ fontSize: "120%", marginTop: '10PX' }}>
                    A dog is a type of domesticated animal.
                    Known for its loyalty and faithfulness,
                    it can be found as a welcome guest in many households across the world.
                  </Paragraph>
                  <div style={{ fontSize: "150%" }}>
                    <Text strong>อัพเดตเมื่อ</Text><Text style={{ color: "blue" }} > 1 ตุลาคม 2565</Text>
                  </div>

                  <div style={{ marginTop: '20PX' }}>
                    <Row>
                      <Col xs={24} xl={10}> <Button type="primary" size={size} block>
                        <Link href="/Project">
                          <a> ดูเพิ่มเติม <ArrowRightOutlined /></a>
                        </Link>
                      </Button></Col>
                      <Col span={12}></Col>
                    </Row>



                  </div>
                </Col>
              </Row>
              <div style={{marginTop:'25px',marginBottom:'20px'}}><hr /></div>

            </div>

            <div style={{ marginTop: '15px' }}>
              <Row gutter={[16, 16]}>
                <Col xs={24} xl={10}>
                  <img src='https://cdn.discordapp.com/attachments/823174202156384286/1024734350274736159/hat-yai.png' style={{ width: "100%" }} />
                </Col>
                <Col xs={24} xl={12}>
                  <Row>
                    <Col xs={24} xl={8}>  <Typography.Title
                      level={2}
                      style={{
                        margin: 0, marginTop: '0px'
                      }}
                    >
                      เส้นรอบเมืองหาดใหญ่
                    </Typography.Title></Col>
                    <Col xs={24} xl={5} >
                      <Button type="primary" shape="round" className='MP_Mt10' icon={<DownloadOutlined />} size={size} block>
                        Download
                      </Button>
                    </Col>
                    <Col xs={24} xl={5}> <Button type="primary" className='MP_Mt10 MP_ST_Mt10' shape="round" onClick={showModal} size={size} block><ShareAltOutlined />แชร์</Button></Col>
                  </Row>

                  <Modal title="คัดลอกลิ้งหรือสแกน QR Code" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
                    <Input
                      addonBefore="https://"
                      placeholder="SouthRoad18"
                      allowClear
                      
                      style={{ width: 304 }}
                      disabled /> <Button type="primary" onClick={openNotification}>กดเพื่อคัดลอก</Button>
                   <img src="https://www.investopedia.com/thmb/KfGSwVyV8mOdTHFxL1T0aS3xpE8=/1148x1148/smart/filters:no_upscale()/qr-code-bc94057f452f4806af70fd34540f72ad.png" style={{width:'100%'}}/>
                  </Modal>


                  <Paragraph style={{ fontSize: "120%", marginTop: '10PX' }}>
                    A dog is a type of domesticated animal.
                    Known for its loyalty and faithfulness,
                    it can be found as a welcome guest in many households across the world.
                  </Paragraph>
                  <div style={{ fontSize: "150%" }}>
                    <Text strong>อัพเดตเมื่อ</Text><Text style={{ color: "blue" }} > 1 ตุลาคม 2565</Text>
                  </div>

                  <div style={{ marginTop: '20PX' }}>
                    <Row>
                      <Col xs={24} xl={10}> <Button type="primary" size={size} block>
                        <Link href="/Project">
                          <a> ดูเพิ่มเติม <ArrowRightOutlined /></a>
                        </Link>
                      </Button></Col>
                      <Col span={12}></Col>
                    </Row>



                  </div>
                </Col>
              </Row>
              <div style={{marginTop:'25px',marginBottom:'20px'}}><hr /></div>

            </div>

     
          </Card>
        </div>

      </Content>
    <MainFooter />
    </Layout>
  );
}

export default Mainproject;