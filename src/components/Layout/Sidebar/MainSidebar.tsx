import { Menu } from 'antd';
import { AppstoreOutlined, ShopOutlined, TeamOutlined, AreaChartOutlined, ProfileOutlined, PieChartOutlined, DollarCircleOutlined, FileTextOutlined, UserOutlined } from '@ant-design/icons';
import { NavLink, useLocation } from 'react-router-dom';

const MainSidebar = () => {
  const location = useLocation();

  const getSelectedKey = () => {
    switch (location.pathname) {
      case '/dashboard':
        return '1';
      case '/businesses':
        return '2';
      case '/support-agents':
        return '3';
      case '/sales-agents':
        return '4';
      case '/reporting':
        return '5';
      case '/plans-and-offers':
        return '6';
      case '/leads':
        return '7';
      case '/clients':
        return '8';
      default:
        return '1'; // Default to Dashboard
    }
  };
  return (
    <>
      <div className='logo'>Dangal</div>
      <Menu theme="dark" mode="inline" defaultSelectedKeys={[getSelectedKey()]}>
        <Menu.Item key="1" icon={<AppstoreOutlined />}>
          <NavLink to="/dashboard">Dashboard</NavLink>
        </Menu.Item>
        <Menu.Item key="2" icon={<ShopOutlined />}>
          <NavLink to="/businesses">Businesses</NavLink>
        </Menu.Item>
        <Menu.Item key="3" icon={<TeamOutlined />}>
          <NavLink to="/support-agents">Support Agents</NavLink>
        </Menu.Item>
        <Menu.Item key="4" icon={<TeamOutlined />}>
          <NavLink to="/sales-agents">Sales Agents</NavLink>
        </Menu.Item>
        <Menu.Item key="5" icon={<AreaChartOutlined />}>
          <NavLink to="/reporting">Reporting</NavLink>
        </Menu.Item>
        <Menu.Item key="6" icon={<ProfileOutlined />}>
          <NavLink to="/plans-and-offers">Plans and Offers</NavLink>
        </Menu.Item>
        <Menu.Item key="7" icon={<PieChartOutlined />}>
          <NavLink to="/leads">Leads</NavLink>
        </Menu.Item>
        <Menu.Item key="8" icon={<DollarCircleOutlined />}>
          <NavLink to="/clients">Clients</NavLink>
        </Menu.Item>
      </Menu>
    </>
  );
};

export default MainSidebar;
