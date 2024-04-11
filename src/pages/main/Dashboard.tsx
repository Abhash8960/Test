import { FC } from 'react';
import { Row, Col, Card } from 'antd';
import MainLayout from '@/Layout/MainLayout';

const Dashboard: FC = () => {
  return (
    <MainLayout>
      <Row gutter={[16, 16]}>
        <Col xs={24} sm={12} md={6} lg={6} xl={6}>
          <Card title="Dashboard">10</Card>
        </Col>
        <Col xs={24} sm={12} md={6} lg={6} xl={6}>
          <Card title="Businesses">11</Card>
        </Col>
        <Col xs={24} sm={12} md={6} lg={6} xl={6}>
          <Card title="Support Agents">12</Card>
        </Col>
        <Col xs={24} sm={12} md={6} lg={6} xl={6}>
          <Card title="Sales Agents">13</Card>
        </Col>
      </Row>
      <Row gutter={[16, 16]} className='mt-2'>
        <Col xs={24} sm={12} md={6} lg={6} xl={6}>
          <Card title="Reporting">14</Card>
        </Col>
        <Col xs={24} sm={12} md={6} lg={6} xl={6}>
          <Card title="Plans and Offers">15</Card>
        </Col>
        <Col xs={24} sm={12} md={6} lg={6} xl={6}>
          <Card title="Leads">16</Card>
        </Col>
        <Col xs={24} sm={12} md={6} lg={6} xl={6}>
          <Card title="Clients">13</Card>
        </Col>
      </Row>
    </MainLayout>
  );
};

export default Dashboard;
