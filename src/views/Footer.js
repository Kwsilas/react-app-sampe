import React, { Component } from 'react';
import { Segment, Container, Image, Grid, Header, List, Divider } from 'semantic-ui-react';
import logo from '../assets/images/logos/ess-logo.png'

export default class Footer extends Component {
    render() {
        return (
            <div>
                <Segment
                inverted
                vertical
                style={{ margin: '5em 0em 0em', padding: '5em 0em' }}
                >
                    <Container textAlign='center'>
                        <Grid divided inverted stackable>
                        <Grid.Row>
                            <Grid.Column width={3}>
                            <Header inverted as='h4' content='Group 1' />
                            <List link inverted>
                                <List.Item>Link One</List.Item>
                                <List.Item>Link Two</List.Item>
                                <List.Item>Link Three</List.Item>
                                <List.Item>Link Four</List.Item>
                            </List>
                            </Grid.Column>
                            <Grid.Column width={3}>
                            <Header inverted as='h4' content='Group 2' />
                            <List link inverted>
                                <List.Item>Link One</List.Item>
                                <List.Item>Link Two</List.Item>
                                <List.Item>Link Three</List.Item>
                                <List.Item>Link Four</List.Item>
                            </List>
                            </Grid.Column>
                            <Grid.Column width={3}>
                            <Header inverted as='h4' content='Group 3' />
                            <List link inverted>
                                <List.Item>Link One</List.Item>
                                <List.Item>Link Two</List.Item>
                                <List.Item>Link Three</List.Item>
                                <List.Item>Link Four</List.Item>
                            </List>
                            </Grid.Column>
                            <Grid.Column width={3}>
                            <Header inverted as='h4' content='Footer Header' />
                            <p>Extra space for a call to action inside the footer that could help re-engage users.</p>
                            </Grid.Column>
                        </Grid.Row>
                        </Grid>

                        <Divider inverted section />
                        <Image
                        centered
                        size='small'
                        src={logo}
                        style={{marginBottom: 28}}
                        />
                        <List horizontal inverted divided link>
                            <List.Item href='#'>Site Map</List.Item>
                            <List.Item href='#'>Contact Us</List.Item>
                            <List.Item href='#'>Terms and Conditions</List.Item>
                            <List.Item href='#'>Privacy Policy</List.Item>
                        </List>
                    </Container>
                </Segment>
            </div>
        )
    }
}