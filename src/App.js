import React, { Component } from 'react';
import 'antd/dist/antd.css'; 
import { Button } from 'antd';
import LayoutCus from './components/LayoutCus'


class App extends React.Component {
    render() {
        return (
            <div>
                <LayoutCus />
            </div>
        );
    }
}

export default App;