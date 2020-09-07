import React from 'react';
import styles from './channel.module.css';
import { Card } from '../card/card';
import {
  Draggable,
  DraggableProvided,
  DraggableStateSnapshot,
  Droppable,
  DroppableProvided,
  DroppableStateSnapshot,
} from 'react-beautiful-dnd';
import { createElementWithClassName } from '../styled/styled';

const Container = createElementWithClassName('div', styles.root);
const Header = createElementWithClassName('div', styles.header);
const Title = createElementWithClassName('h4', styles.title);

const ListWrapper = createElementWithClassName('div', styles.list);
const ScrollContainer = createElementWithClassName(
  'div',
  styles.scrollContainer
);
const DropZone = createElementWithClassName('div', styles.dropZone);

type Item = {
  id: string;
  title: string;
};

function InnerList({ items }: { items: Item[] }) {
  return (
    <>
      {items.map((item, index) => (
        <Draggable key={item.id} draggableId={item.id} index={index}>
          {(
            dragProvided: DraggableProvided,
            dragSnapshot: DraggableStateSnapshot
          ) => (
            <Card title={item.title} provided={dragProvided} />
          )}
        </Draggable>
      ))}
    </>
  );
}

type ListProps = {
  listId: string;
  listType: string;
  items: Item[];
};

function List({ listId, listType, items }: ListProps) {
  return (
    <Droppable droppableId={listId} type={listType}>
      {(
        dropProvided: DroppableProvided,
        dropSnapshot: DroppableStateSnapshot
      ) => (
        <ListWrapper
          ref={dropProvided.innerRef}
          {...dropProvided.droppableProps}
        >
          <ScrollContainer>
            <DropZone>
              <InnerList items={items} />
              {dropProvided.placeholder}
            </DropZone>
          </ScrollContainer>
        </ListWrapper>
      )}
    </Droppable>
  );
}

type ChannelProps = {
  index: number;
  title: string;
  items: Item[];
};

export function Channel({ title, index, items }: ChannelProps) {
  return (
    <Draggable draggableId={title} index={index}>
      {(provided: DraggableProvided, snapshot: DraggableStateSnapshot) => (
        <Container ref={provided.innerRef} {...provided.draggableProps}>
          <Header {...provided.dragHandleProps}>
            <Title>{title}</Title>
          </Header>
          <List listId={title} listType={'BLOCK'} items={items} />
        </Container>
      )}
    </Draggable>
  );
}
