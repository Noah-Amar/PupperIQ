import React from "react";
import {Link} from 'react-router-dom';
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
  Label,
  Form,
  FormGroup,
  Input,
  FormText
} from "reactstrap";


const TrueFalse = props => {
  return (
    <div>
      <Card>
        <CardBody>
          <CardTitle> I have other pets </CardTitle>
          <CardText>
            <Label check>
              <Input type="radio" name='pets' value='0' onClick={props.change} /> False
            </Label>

            <Label check>
              <Input type="radio" name='pets' value='1' onClick={props.change} /> True
            </Label>
          </CardText>
        </CardBody>
      </Card>

      <Card>
        <CardBody>
          <CardTitle> I don't mind if a dog sheds </CardTitle>
          <CardText>
            <Label check>
            <Input type="radio" name='sheds' value='0' onClick={props.change} /> False
            </Label>

            <Label check>
              <Input type="radio" name='sheds' value='1' onClick={props.change} /> True
            </Label>
          </CardText>
          </CardBody>
        </Card>
        <button onClick={props.submit}>Submit</button>
    </div>
  );
};

export default TrueFalse;
