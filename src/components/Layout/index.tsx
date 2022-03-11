import { Layout } from "antd";

const { Content } = Layout;

export const MainLayout = ({ children }) => {
  return (
    <Layout>
      <Content>{children}</Content>
    </Layout>
  );
};
