import React, { Component } from 'react';
import { Layout } from 'antd';
import MenuCus from '../Menu'

const {Header} = Layout;

class HeaderCus extends Component {
    render() {
        return (
            <div>
               <Header>
                    <div className="logo" />
                    <MenuCus />
                </Header>
            </div>
        );
    }
}

export default HeaderCus;