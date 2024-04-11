import { FC, useState, ReactNode } from "react";
import { Layout, theme } from "antd";
import MainHeader from "./Header/MainHeader";
import MainSidebar from "./Sidebar/MainSidebar";

const { Header, Content, Footer, Sider } = Layout;

interface MainLayoutProps {
  children: ReactNode;
}

const MainLayout: FC<MainLayoutProps> = ({ children }) => {
  const { token: { colorBgContainer} } = theme.useToken();
  const [collapsed, setCollapsed] = useState(false);

  return (
    <Layout hasSider>
      <Sider trigger={null} collapsible collapsed={collapsed} className="sider">
        <MainSidebar />
      </Sider>
      <Layout className="layout">
        <Header
          className="header" 
          style={{ background: colorBgContainer,borderBottom: "none"}}
        >
          <MainHeader setCollapsed={setCollapsed} collapsed={collapsed} />
        </Header>
        <Content className="content">
          <div className="content-inner">
            {children}
          </div>
        </Content>
        <Footer className="footer">
          Dangal ©{new Date().getFullYear()}
        </Footer>
      </Layout>
    </Layout>
  );
};

export default MainLayout;
