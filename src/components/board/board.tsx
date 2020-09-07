import React from 'react';
import styles from './board.module.css';
import {
  DragDropContext,
  Droppable,
  DroppableProvided,
} from 'react-beautiful-dnd';
import { Channel } from '../channel/channel';
import { createElementWithClassName } from '../styled/styled';

type BoardProps = {
  // title: string;
};

const Container = createElementWithClassName('div', styles.root);

export function Board({}: BoardProps) {
  const onDragEnd = React.useCallback(console.log, []);
  const ordered = ['a', 'b'];
  const channels: Record<string, any> = {
    'a': {
      title: 'A list',
      items:[{ id: '1', title: 'Hellao' },{ id: '2', title: 'Heai' }]
    },
    'b': {
      title: 'B list',
      items:[{ id: '3', title: 'Hello' },{ id: '4', title: 'Hei' }]
    }
  }

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable droppableId="board" type="COLUMN" direction="horizontal">
        {(provided: DroppableProvided) => (
          <Container ref={provided.innerRef} {...provided.droppableProps}>
            {ordered.map((key: string, index: number) => (
              <Channel
                key={key}
                title={key}
                index={index}
                items={channels[key].items}
              />
            ))}
            {provided.placeholder}
          </Container>
        )}
      </Droppable>
    </DragDropContext>
  );
}
