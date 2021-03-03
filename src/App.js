import './App.css';
import React, {Component} from 'react';
import {SortableContainer, SortableElement} from 'react-sortable-hoc';
import arrayMove from 'array-move';
import 'bulma/css/bulma.css';

const SortableItem = SortableElement(({value}) => <li className="box">{value}</li>);

const SortableList = SortableContainer(({items}) => {
  return (
    <ul>
      {items.map((value, index) => (
        <SortableItem key={`item-${value}`} index={index} value={value} />
      ))}
    </ul>
  );
});

class App extends Component {
  state = {
    items: ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5', 'Item 6'],
  };

  onSortEnd = ({oldIndex, newIndex}) => {
    this.setState(({items}) => ({
      items: arrayMove(items, oldIndex, newIndex),
    }));
  };

  render() {
    return (
      <div className="container">
        <h1 className="title">
          Hello World
        </h1>
        <SortableList items={this.state.items} onSortEnd={this.onSortEnd} />
      </div>
    );
  }
}

export default App;
