import React from "react";
import { Col, Card, CardHeader, CardBody, CardText } from "reactstrap";
import "./StarWars.css";

const StarWarsCard = props => {
    // console.log(props);

    return (
        <Col md="6" lg="4" xl="3">
            <Card>
                <CardHeader>{props.names.name}</CardHeader>
                <CardBody>
                    <CardText>Gender: {props.names.gender}</CardText>
                    <CardText>Height: {props.names.height}cm</CardText>
                    <CardText>Weight: {props.names.mass}kg</CardText>
                    <CardText>Birth year: {props.names.birth_year}</CardText>
                </CardBody>
            </Card>
        </Col>
    );
};

export default StarWarsCard;
