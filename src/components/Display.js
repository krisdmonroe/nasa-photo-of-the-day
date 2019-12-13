import React from "react";
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle
  } from 'reactstrap';
  import styled from 'styled-components';

  const Anchor = styled.a`
    margin-left:2%
    text-decoration: none
    color:purple
    font-size: 1.5em
  `;
  const Div = styled.div`
    display:flex
    flex-direction: column
    margin:4%
`;
  const Button = styled.button`
    border: none
    border-radius: 3px
    color: white
    background-color:black
   
    ${props => (props.type === 'primary' ? `background: #black;` : null)}
    ${props => (props.type === 'success' ? `background: grey;` : null)}
`;
const DataCard = props => {
return (
    <Div className="astro-list" key={props.id}>
<nav className="nav-bar">
              <h1 className="picture">Picture Of the Day</h1>
              <Anchor className="sublinks" href="">Picture</Anchor>
              <Anchor href="">Info</Anchor>
              <Anchor href="">Faq</Anchor>
              <Anchor href="">Help</Anchor>
</nav>
      <Card>
        <CardImg className="img-Uni" src={props.imgUrl} alt="Card image cap" />
        <CardBody>
          <CardTitle>{props.title}</CardTitle>
          <CardSubtitle>Date: {props.date}</CardSubtitle>
          <CardText type="primary">{props.explanation}</CardText>
          <Button type="primary">New Picture</Button>
        </CardBody>
      </Card>
    </Div >
  );
};
export default DataCard;
