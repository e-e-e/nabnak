import React from 'react';
import styles from './card.module.css';
import { createElementWithClassName } from '../styled/styled';
import { DraggableProvided } from 'react-beautiful-dnd';

const Container = createElementWithClassName('div', styles.root);

type CardProps = {
  title: string;
  provided: DraggableProvided;
};

export const Card = ({ title, provided }: CardProps) => {
  return (
    <Container
      ref={provided.innerRef}
      {...provided.draggableProps}
      {...provided.dragHandleProps}
    >
      <div>{title}</div>
      <div></div>
    </Container>
  );
};
