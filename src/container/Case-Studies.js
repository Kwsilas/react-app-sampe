import React, { Component } from 'react'
import { Container, Header, Image } from 'semantic-ui-react';
import mediaParagraph from '../assets/images/wireframe/media-paragraph.png';
import paragraph from '../assets/images/wireframe/paragraph.png';
import FixedNav from '../views/FixedNav.js';
import Footer from '../views/Footer.js';

export default class CaseStudies extends Component {

    render() {
        return (
            <div>
                <FixedNav />
                <Container text style={{ marginTop: '7em' }}>
                    <Header as='h1'>Semantic UI React Fixed Template</Header>
                    <p>This is a basic fixed menu template using fixed size containers.</p>
                    <p>A text container is used for the main container, which is useful for single column layouts.</p>
                    <Image src={mediaParagraph} style={{ marginTop: '2em' }} />
                    <Image src={paragraph} style={{ marginTop: '2em' }} />
                    <Image src={paragraph} style={{ marginTop: '2em' }} />
                    <Image src={paragraph} style={{ marginTop: '2em' }} />
                    <Image src={paragraph} style={{ marginTop: '2em' }} />
                    <Image src={paragraph} style={{ marginTop: '2em' }} />
                    <Image src={paragraph} style={{ marginTop: '2em' }} />
                </Container>
                <Footer />
            </div>
        )
    }
   
}