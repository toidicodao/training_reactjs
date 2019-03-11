import React, { Component } from 'react';
import { Layout, Breadcrumb } from 'antd';
import HeaderCus from './header/Header'
import ContentCus from './Content'
const { Content, Footer } = Layout;
class LayoutCus extends Component {
    render() {
        return (
            <div>
                  <Layout className="layout">
                    <HeaderCus />
                    <ContentCus />
                    <Footer style={{ textAlign: 'center' }}>
                        Ant Design ©2018 Created by Ant UED
                    </Footer>
                </Layout>,
            </div>
        );
    }
}

export default LayoutCus;