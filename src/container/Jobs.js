import React, { Component } from 'react'
import {
  Menu,
  Container
} from 'semantic-ui-react';
import { Link } from 'react-router-dom';

export default class Jobs extends Component {

    render() {
        return (
            <div>
                <Menu fixed="top" size='large'>
                    <Container>
                        <Link to="/">
                            <Menu.Item>Home</Menu.Item>
                        </Link>
                        <Link to="/casestudies">
                            <Menu.Item>Case Studies</Menu.Item>
                        </Link>
                        <Link to="/jobs">
                            <Menu.Item active>Jobs</Menu.Item>
                        </Link>
                        <Link to="/customers">
                            <Menu.Item>Customers</Menu.Item>
                        </Link>
                        <Link to="/blog">
                            <Menu.Item>Blog</Menu.Item>
                        </Link>
                    </Container>
                </Menu>
            </div>
        )
    }
   
}