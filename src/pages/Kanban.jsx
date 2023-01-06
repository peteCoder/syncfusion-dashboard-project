import React from 'react';
import {
  KanbanComponent, 
  ColumnsDirective, 
  ColumnDirective
} from '@syncfusion/ej2-react-kanban';

import { kanbanData, kanbanGrid } from "../data/dummy";
import { Header } from "../components";

// Continue Developing Kanban
const Kanban = () => {
  return (
    <div className='mt-16 md:mt-0 p-2 md:p-10 bg-white rounded-3xl'>
      <Header
        title="App"
        category="Kanban"
      />
      <KanbanComponent
        id="kanban"
        dataSource={kanbanData}
        cardSettings={{
          contentField: "Summary",
          headerField: "Id"
        }}
        keyField="Status"

      >
        <ColumnsDirective>
          {kanbanGrid.map((item, index) => (
            <ColumnDirective key={index} {...item} />
          ))}
        </ColumnsDirective>
      </KanbanComponent>
    </div>
  )
}

export default Kanban