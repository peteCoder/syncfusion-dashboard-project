import React from 'react';
import {
  GridComponent,
  ColumnsDirective,
  ColumnDirective,
  Page,
  Search,
  Toolbar,
  Inject
} from "@syncfusion/ej2-react-grids";

import { employeesData, employeesGrid } from "../data/dummy";
import { Header } from "../components";

const Employees = () => {
  return (
    <div className='mt-16 md:mt-0 p-2 md:p-10 bg-white rounded-3xl'>
      <Header
        title="Employees"
        category="Page"
      />

      <GridComponent
        id="gridcomp"
        dataSource={employeesData}
        allowPaging
        allowSorting
        toolbar={['Search']}
        width='auto'
      >
        <ColumnsDirective>
          {employeesGrid.map((item, index) => (
            <ColumnDirective
              key={index}
              {...item}
            />
          ))}
        </ColumnsDirective>
        <Inject services={[
          Page, Search, Toolbar
        ]} />
      </GridComponent>
    </div>
  )
}

export default Employees;