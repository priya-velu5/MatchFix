import React from 'react'
import {Jumbotron, Container,Figure} from 'react-bootstrap'
import foot from "./img/foot.jpg"
import "./styles.css"
const Football = () => {
    return (
        <Jumbotron fluid className="jumbo_bb">
        <Container>
            <h1>Football</h1>
            <Figure>
            <Figure.Image
                width={500}
                height={500}
                alt="400x300"
                src={foot}
            />
            <Figure.Caption className="caption_img">
                Nulla vitae elit libero, a pharetra augue mollis interdum.
            </Figure.Caption>
            </Figure>
        </Container>
        </Jumbotron>
    )
}

export default Football
