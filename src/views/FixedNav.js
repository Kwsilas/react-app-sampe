import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Menu, Container, Image } from 'semantic-ui-react';
import logo from '../assets/images/logos/ess-logo.png'


export default class FixedNav extends Component {
    state = {}
    
    handleItemClick = (e, { name }) => this.setState({ activeNav: name })

    render () {
        const { activeNav } = this.state

        return (
            <div>
                <Menu fixed="top" size='large' inverted>
                    <Container>
                        <Link to="/">
                            <Menu.Item header>
                                <Image src={logo} style={{marginRight: '1.5em', width: 45, height: 43.38}} 
                                />
                                Home
                            </Menu.Item>
                        </Link>
                        <Menu.Item 
                            active={activeNav === 'casestudies'} 
                            name='casestudies'
                            onClick={this.handleItemClick}
                        >
                            <Link to="/casestudies">
                                Case Studies
                            </Link>
                        </Menu.Item>
                        <Menu.Item 
                            active={activeNav === 'jobs'}
                            name='jobs'
                            onClick={this.handleItemClick}
                        >
                            <Link to="/jobs">
                                Jobs
                            </Link>
                        </Menu.Item>
                        <Menu.Item 
                            active={activeNav === 'customers'}
                            name='customers'
                            onClick={this.handleItemClick}
                        >
                            <Link to="/customers">
                                Customers
                            </Link>
                        </Menu.Item>
                        <Menu.Item 
                            active={activeNav === 'blog'}
                            name='blog'
                            onClick={this.handleItemClick}
                        >
                            <Link to="/blog">
                                Blog
                            </Link>
                        </Menu.Item>
                    </Container>
                </Menu>
            </div>
        )
    }
}