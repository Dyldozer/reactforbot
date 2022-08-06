import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { GridComponent, Inject, ColumnsDirective, ColumnDirective, Search, Page, Toolbar } from '@syncfusion/ej2-react-grids';
import { Header } from '../components';
import { UsersGrid } from './dummy';

function DataFetching() {
    const [post, setPosts] = useState([]);
    const data = []
useEffect(() => {
    axios.get('http://78.108.218.94:25837/api/members')
    .then( res => {
        console.log(res)
        setPosts(res.data)
        })
        .catch( err => {
            console.log(err)
        })
}, []);
const toolbarOptions = ['Search'];

  const editing = { allowDeleting: false, allowEditing: true };

  const searchOptions = {
    fields: ['osrsname', 'discordname', 'discordid'],
    ignoreCase: true,
    key: '',
    operator: 'contains',
  };
  return (
    <div>
        <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white dark:bg-comp-slate rounded-3xl">
        <Header category="Database" title="ProdUsers" />
        <GridComponent
          dataSource={post}
          width="auto"
          allowPaging
          allowSorting
          pageSettings={{ pageCount: 5 }}
          editSettings={editing}
          toolbar={toolbarOptions}
          searchSettings={searchOptions}
        >
          <ColumnsDirective>
            {UsersGrid.map((item, index) => <ColumnDirective key={index} {...item} />)}
          </ColumnsDirective>
          <Inject services={[Search, Page, Toolbar]} />
        </GridComponent>
      </div>
    </div>
  )
}

export default DataFetching