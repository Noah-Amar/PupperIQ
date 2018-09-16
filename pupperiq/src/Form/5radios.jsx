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

const questions = [
  {
    topic: "play",
    question: "I love to play fetch, tug of war, and other games with puppers"
  },

  {
    topic: "activity",
    question:
      "I am very active, I spend a lot of time outdoors, and I want a companion to join me"
  },

  {
    topic: "affection",
    question:
      "I'm looking for less of a roommate and more of a companion to spend lots of time together"
  },

  {
    topic: "trainability",
    question:
      "I'm not laid back about training-I plan to do lots of training with my dog"
  },

  {
    topic: "size",
    question:
      "My preferred dog size, 1 being very small and 5 being extra large"
  },

  {
    topic: "maintenence",
    question:
      "I don't mind a maintenence routine with my dog, including brushing and bathing often"
  },

  {
    topic: "climate",
    question: '"My climate is..." 1 is very cold, 5 is tropical'
  }
    {
        topic: 'shedding',
        question: 'I don\'t mind if a dog sheds'
    },

    {
        topic: 'play',
        question: 'I love to play fetch, tug of war, and other games with puppers'
    },

    {
        topic: 'activity',
        question: 'I am very active, I spend a lot of time outdoors, and I want a companion to join me'
    },

    {
        topic: 'affection',
        question: 'I\'m looking for less of a roommate and more of a companion to spend lots of time together'
    },

    {
        topic: 'trainability',
        question: 'I\'m not laid back about training-I plan to do lots of training with my dog'
    },

    {
        topic: 'size',
        question: 'My preferred dog size, 1 being very small and 5 being extra large'
    },

    {
        topic: 'other pets',
        question: 'I have other pets'
    },

    {
        topic: 'maintenence',
        question: 'I don\'t mind a maintenence routine with my dog, including brushing and bathing often'
    },

    {
        topic: 'climate',
        question: '\"My climate is...\" 1 is very cold, 5 is tropical'
    }
];

const FirstFive = props => {
  return (
    <div>
      {questions.map(question => {
        return (
          <Card>
            <CardBody>
              <CardTitle> {question.question} </CardTitle>
              <CardText>
                <Label check>
                  <Input type="radio" name={question.topic} value="1" /> 1
                </Label>

                <Label check>
                  <Input type="radio" name={question.topic} value="2" /> 2
                </Label>

                <Label check>
                  <Input type="radio" name={question.topic} value="3" /> 3
                </Label>

                <Label check>
                  <Input type="radio" name={question.topic} value="4" /> 4
                </Label>

                <Label check>
                  <Input type="radio" name={question.topic} value="5" /> 5
                </Label>
              </CardText>
            </CardBody>
          </Card>
        );
      })}
      <Card>
        <CardBody>
          <CardTitle><legend> 1 for lowest, 5 for highest! </legend> </CardTitle>
          <CardSubtitle>Select One</CardSubtitle>
          <CardText>
            <Label check>
              <Input type="radio" name="radio1" /> 1
            </Label>

            <Label check>
              <Input type="radio" name="radio1" /> 2
            </Label>

            <Label check>
              <Input type="radio" name="radio1" /> 3
            </Label>

            <Label check>
              <Input type="radio" name="radio1" /> 4
            </Label>

            <Label check>
              <Input type="radio" name="radio1" /> 5
            </Label>
          </CardText>
        </CardBody>
      </Card>
    </div>
  );
};

export default FirstFive;
