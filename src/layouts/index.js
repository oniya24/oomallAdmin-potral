import { Fragment } from 'react';
import { Layout, Menu, Breadcrumb } from 'antd';
import { useLocation } from 'umi';
import logged from './logged/index';
import nolog from './nolog/index';
import { nologRoutes } from '@/consts/router';

const layout = (props) => {
  // console.log(props)
  const { pathname } = useLocation();
  const Container = nologRoutes.includes(pathname) ? nolog : logged;
  return (
    <Fragment>
      <Container>
        <div
          id="app-qiankun"
          style={{ overflow: 'auto', width: '100%', height: '100%' }}
        >
          {props.children}
        </div>
      </Container>
    </Fragment>
  );
};

export default layout;
