import React from 'react';
import {
  HtmlEditor,
  Image,
  Inject,
  Link,
  QuickToolbar,
  RichTextEditorComponent,
  Toolbar
} from '@syncfusion/ej2-react-richtexteditor';
import { kanbanData, kanbanGrid } from "../data/dummy";
import { Header } from "../components";


// Continue from here

const Editor = () => {
  return (
    <div className='mt-16 md:mt-0 p-2 md:p-10 bg-white rounded-3xl'>
      <Header
        title="App"
        category="Editor"
      />

      <RichTextEditorComponent>
        <Inject services={[
          HtmlEditor,
          Image,
          Link,
          QuickToolbar,
          Toolbar
        ]} />
      </RichTextEditorComponent>
    </div>
  )
}

export default Editor;