import React from 'react';
import { Layout, PageHeader, Card } from 'antd';
import styles from './index.less';
import waveSVG from '@/svg/wave.svg';
const { Header } = Layout;

const layout = (props) => {
  return (
    <Layout style={{ height: '100vh' }}>
      <div style={{ height: '10vh', backgroundColor: 'none' }}>
        <PageHeader title="Ooad" subTitle="privilege service" />
      </div>
      <Layout
        style={{ background: `url("${waveSVG}")`, backgroundSize: 'cover' }}
      >
        <Card
          className={styles.cardContain}
          bordered
          bodyStyle={{ height: '100%', width: '100%', padding: 0 }}
        >
          {props.children}
        </Card>
      </Layout>
    </Layout>
  );
};

export default layout;
