import React from 'react';

import FlexBoxAPI from './components/FlexBoxAPIComponent';
import ScrollViewDemo from './components/ScrollViewDemoComponent';
import FlatListDemo from './components/FlatListDemoComponent';
import SectionListDemo from './components/SectionListDemoComponent';
import ToDoApp from './components/ToDoAppComponent';
import AsyncStorageDemo from './components/AsyncStorageDemoComponent'
import FetchAPIDemo from './components/FetchAPIDemoComponent'

import MinimalRedux from './redux/components/MinimalReduxComponent';
import Main from './redux/components/MainReduxComponent';

import MainComponent from './reactRedux/components/MainComponent'


export default class App extends React.Component {
  render() {
    return (
      <FetchAPIDemo />
    );
  }
}

