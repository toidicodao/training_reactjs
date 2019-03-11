import React, { Component } from 'react';
import { Layout, Breadcrumb } from 'antd';
import { Button, Radio, Icon } from 'antd';
import ListNote from './lists/ListNote'
const { Content } = Layout;

class ContentCus extends Component {

    constructor(props, context) {
        super(props, context);
        
        this.state = {
            count: 0
        }
    }
    

    onClick = () => {
        this.setState({
            count: this.state.count + 1
        })
    }
    
    render() {
        const size = this.state.size;
        return (
            <div>
                <Content style={{ padding: '0 50px' }}>
                    <Breadcrumb style={{ margin: '16px 0' }}>
                        <Breadcrumb.Item>Home</Breadcrumb.Item>
                        <Breadcrumb.Item>List</Breadcrumb.Item>
                        <Breadcrumb.Item>App</Breadcrumb.Item>
                    </Breadcrumb>
                    <div style={{ background: '#fff', padding: 24, minHeight: 280 }}>
                        <Button type="primary" size={size} onClick={this.onClick}>Primary</Button>
                        <label> {this.state.count} </label>
                        <ListNote />
                    </div>
                </Content>
            </div>
        );
    }
}

export default ContentCus;