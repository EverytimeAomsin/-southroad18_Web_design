import Link from 'next/link'
import React, { useState } from 'react'
import { Breadcrumb, Layout, Image, Card, Modal, Button, Row, Col, Typography, Space, Collapse } from 'antd';
import { DownloadOutlined, ShareAltOutlined } from '@ant-design/icons';
const { Header, Content } = Layout;
const { Paragraph, Text } = Typography;
const { Panel } = Collapse;

import MainFooter from '../component/footer/MainFooter'

function Project() {

  const info = () => {
    Modal.info({
      title: 'เลือกไฟล์ที่ต้องการโหลด',
      content: (
        <div>
          <Button type="primary" block className='p_Mb10' size='large'>
            Primary
          </Button>
          <Button type="dashed" block size='large'>
            Dashed
          </Button>
        </div>
      ),

      onOk() { },
    });
  };



  const [random, setRandom] = useState();

  const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;
  return (
    <Layout>
      <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>

      </Header>
      <Content className="site-layout" style={{ padding: '0 10px', marginTop: 64 }}>
        <Breadcrumb style={{ margin: '16px 0', fontSize: '200%' }}>
          <Breadcrumb.Item>
           <Link href="/">
            <a> หน้าหลัก </a>
          </Link></Breadcrumb.Item>
          <Breadcrumb.Item>  <a href="/Mainproject">โครงการต่างๆ</a></Breadcrumb.Item>
          <Breadcrumb.Item>โครงการเส้นรอบเมืองหาดใหญ่</Breadcrumb.Item>
        </Breadcrumb>
        <div className="site-card-border-less-wrapper">
          <Card title="" bordered={false} >

            <Row>
              <Col xs={24} xl={12}>
                <Image

                  src={`https://cdn.discordapp.com/attachments/823174202156384286/1024734350274736159/hat-yai.png?${random}`}
                  placeholder={
                    <Image
                      preview={false}
                      src="https://cdn.discordapp.com/attachments/823174202156384286/1024734350274736159/hat-yai.png?x-oss-process=image/blur,r_50,s_50/quality,q_1/resize,m_mfit,h_200,w_200"

                    />
                  }
                />
                <div style={{ marginTop: '10px' }}>
                  <Row>
                    <Col xs={24} xl={6}>   <Button className='MP_Mt10' type="primary" size="large" onClick={info}><DownloadOutlined /> ดาวน์โหลดรูปภาพนี้ (.PNG)</Button></Col>
                    <Col xs={24} xl={6}> <Button className='MP_Mt10 MP_ST_Mt10 p_Mb10' type="primary" size="large" ><DownloadOutlined /> ดาวน์โหลดไฟล์แก้ไข Clip studio (.clip)</Button></Col>
                  </Row>
                </div>
              </Col>

              <Col xs={24} xl={12}>
                <Collapse accordion>
                  <Panel header="โครงการก่อสร้างทางเลี่ยงเมืองหาดใหญ่ (ทิศตะวันตก)" key="1">
                    <p>วัตถุประสงค์ของโครงการ
                      เพื่อเตรียมความพร้อมด้านโครงข่ายเส้นทางคมนาคม รองรับการขยายตัวทางด้านเศรษฐกิจ-สังคม ในอนาคตของพื้นที่เมืองหาดใหญ่ ให้เกิดเป็นโครงข่ายถนนวงแหวนรอบเขตเมืองหาดใหญ่ เพิ่มความสะดวกรวดเร็วในการเดินทางและขนส่งสินค้า มีความปลอดภัย และช่วยลดปัญหาการจราจรติดขัดในเขตตัวเมืองหาดใหญ่
                      รายละเอียดโครงการ
                      ก่อสร้างทางเลี่ยงเมืองแนวใหม่
                      จุดเริ่มต้น บริเวณจุดตัด ทล.4135 ที่ กม.8+850 เขตพื้นที่บ้านควน บริเวณใกล้เคียงสนามบินหาดใหญ่ต่อกับแนวทางเลี่ยงเมืองหาดใหญ่ ทิศตะวันออก ตัดผ่านไปด้านทิศตะวันตกเฉียงเหนืองของอำเภอหาดใหญ่ ตัดผ่าน ทล.4287, ทล.4 และเข้าบรรจบจุดเริ่มต้นของโครงการ ทางเลี่ยงเมืองหาดใหญ่ด้านตะวันออก บริเวณจุดตัด ทล.414 ที่ กม.11+635 เขตพื้นที่บ้านหนองทราย เป็นวงแหวนตัวเมืองหาดใหญ่
                      มาตรฐานทางชั้นพิเศษ 4 ช่องจราจร ผิวทางคอนกรีต เขตทาง 60 ม.
                      ระยะทาง 35.300 กม.
                      ความคืบหน้าโครงการ
                      ศึกษาความเหมาะสมฯ แล้วเสร็จ และเสนอสำนักงานนโยบายและแผนทรัพยากรและสิ่งแวดล้อม (สผ.) ให้ความเห็นชอบ
                      ดำเนินการจ้างสำรวจและออกแบบรายละเอียดและเสนอของงบประมาณก่อสร้างต่อไปตามลำดับ
                    </p>
                  </Panel>
                  <Panel header="โครงการก่อสร้างทางเลี่ยงเมืองหาดใหญ่ (ทิศตะวันออก)" key="2">
                    <p>{text}</p>
                  </Panel>
                  <Panel header="โครงการก่อสร้างทางเลี่ยงเมืองหาดใหญ่ (ทิศตะวันออก)" key="3">
                    <p>{text}</p>
                  </Panel>
                </Collapse>
              </Col>


            </Row>

          </Card>


        </div>


      </Content>
      <Content className="site-layout" style={{ padding: '0 35px', marginTop: 15 }}>

        <div className="map-responsive">
          <iframe src="https://www.google.com/maps/d/embed?mid=1Ad-O4n-2gYNhrFUpTgxZH9rCrGpQ42s&ehbc=2E312F" width={350} height={480} />
        </div>

      </Content>
      <Content className="site-layout" style={{ padding: '0 10px', marginTop: 10 }}>
        <div style={{ marginTop: '10px' }}>
          <div className="site-card-wrapper">
            <Row gutter={16}>

              <Col xs={12} xl={6}>
                <Card title="กม.31+331 แยกสนามบิน" className='p_pd0' bordered={false} style={{ marginTop: '0px' }}>
                  <Button type="primary" size='large' block><Link href="https://www.google.com/maps/@6.9873397,100.428677,3a,75y,182.8h,88.87t/data=!3m6!1e1!3m4!1sXlTPKdMYHz59OQYay2PV-w!2e0!7i16384!8i8192">
                    <a>ดู Street vie</a>
                  </Link></Button>
                </Card>
              </Col>


            </Row>
          </div>
        </div>
      </Content>

      <MainFooter />
    </Layout>
  )
}

export default Project