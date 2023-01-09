import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { Column } from './Column';
import React from 'react';
import { v4 as uuid } from 'uuid';
import { globalStyles } from './stitches.config';
import { TitleInput } from './TitleInput';
import { StyledColumn } from './Column.styles';

export type ItemsType = {
  id: string;
  title: string;
  column: number | string | null;
};

export type ColumnsType = {
  id: number | string | null;
  title: string;
};

function App() {
  globalStyles();

  const [columns, setColumns] = React.useState<ColumnsType[]>([]);
  const [items, setItems] = React.useState<ItemsType[]>([]);

  const onColumnChange = (id: string, columnId: number) => {
    setItems((prevItems) =>
      prevItems.map((item) => {
        if (item.id === id) {
          item.column = columnId;
        }
        return item;
      })
    );
  };

  return (
    <DndProvider backend={HTML5Backend}>
      <div className="App">
        <main
          style={{
            display: 'flex',
          }}
        >
          <Column
            onColumnChange={onColumnChange}
            items={items.filter((item) => item.column === null)}
            title={'No Assignment'}
            id={null}
            onNewItem={(title: string) => {
              setItems([...items, { id: uuid(), title, column: null }]);
            }}
          ></Column>
          {columns.map((column) => {
            return (
              <Column
                key={column.id}
                onColumnChange={onColumnChange}
                items={items.filter((item) => item.column === column.id)}
                title={column.title}
                id={column.id}
                onNewItem={(title: string) => {
                  setItems([
                    ...items,
                    { id: uuid(), title, column: column.id },
                  ]);
                }}
              ></Column>
            );
          })}
          <div className="input">
            <StyledColumn>
              <TitleInput
                placeholder="New Column"
                onSubmit={(title: string) =>
                  setColumns([...columns, { id: uuid(), title }])
                }
              />
            </StyledColumn>
          </div>
        </main>
      </div>
    </DndProvider>
  );
}

export default App;
