import React from "react";
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
              <Input type="radio" name='pets' value='0' /> False
            </Label>

            <Label check>
              <Input type="radio" name='pets' value='1' /> True
            </Label>

            </CardText>
            </CardBody>
                </Card>

                <Card>
            <CardBody>
              <CardTitle> I don't mind if a dog sheds </CardTitle>
              <CardText>
              <Label check>
              <Input type="radio" name='shedding' value='0' /> False
            </Label>

            <Label check>
              <Input type="radio" name='shedding' value='1' /> True
            </Label>

            </CardText>
            </CardBody>
                </Card>
    </div>
  );
};

export default TrueFalse;