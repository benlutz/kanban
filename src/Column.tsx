import React from 'react';
import { useDrop } from 'react-dnd';
import { Card } from './Card';
import { StyledColumn, StyledColumnTitle } from './Column.styles';
import { TitleInput } from './TitleInput';

type ColumnProps = {
  id: string | number | null;
  title: string;
  items: any[];
  onColumnChange: Function;
  onNewItem?: Function;
};

export const Column = (props: ColumnProps) => {
  const { id, title, items, onColumnChange, onNewItem } = props;

  const [{ canDrop, isOver }, drop] = useDrop(() => ({
    accept: 'card',
    drop: (item: any, monitor) => {
      onColumnChange(item.id, id);
    },
    collect: (monitor: any) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
    }),
  }));

  return (
    <StyledColumn
      ref={drop}
      layout={{
        '@initial': 'sm',
        '@xs': 'sm',
      }}
    >
      <StyledColumnTitle>
        {title} ({items.length})
      </StyledColumnTitle>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        {items.map((item) => (
          <Card item={item} key={item.id} />
        ))}
      </div>
      {canDrop && `Drop it ${isOver ? 'here!' : ''}!`}
      <div>
        <TitleInput onSubmit={(title: string) => onNewItem?.(title)} />
      </div>
    </StyledColumn>
  );
};
