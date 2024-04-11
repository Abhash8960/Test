import { FC } from 'react';
import { MenuFoldOutlined, MenuUnfoldOutlined, BellOutlined, UserOutlined, LogoutOutlined } from '@ant-design/icons';
import { Badge, Avatar, Dropdown, Menu } from 'antd';

interface MainHeaderProps {
  collapsed: boolean;
  setCollapsed: (collapsed: boolean) => void;
  notificationCount: number;
}

const MainHeader: FC<MainHeaderProps> = ({ collapsed, setCollapsed, notificationCount }) => {

  const menu = (
    <Menu>
      <Menu.Item key="profile">
        <UserOutlined /> Profile
      </Menu.Item>
      <Menu.Item key="logout">
        <LogoutOutlined /> Logout
      </Menu.Item>
    </Menu>
  );

  return (
    <div className="d-flex justify-content-between">
      <div>
        {collapsed ? (
          <MenuUnfoldOutlined onClick={() => setCollapsed(!collapsed)} className='mx-3' />
        ) : (
          <MenuFoldOutlined onClick={() => setCollapsed(!collapsed)} className='mx-3' />
        )}
        
      </div>
      <div>
      <Badge count={1} size='small'>
          <BellOutlined className="mx-3" />
        </Badge>
        <Dropdown overlay={menu} trigger={['click']}>
          <Avatar className="me-3" size="small" icon={<UserOutlined />} />
        </Dropdown>
      </div>
    </div>
  );
};

export default MainHeader;
