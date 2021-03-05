import './App.css';
import React, {Component} from 'react';
import {SortableContainer, SortableElement} from 'react-sortable-hoc';
import arrayMove from 'array-move';
import 'bulma/css/bulma.css';
import Input from './components/Input';

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
  constructor() {
    super();
    this.state = {
      items: ['Item 1', 'Item 2', 'Item 3'],
      form: [ 
        { label:'Name', placeholder: 'First Name', icon: 'fas fa-user', value: 1 },
        { label:'Phone Number', placeholder: 'Phone number', icon: 'fas fa-phone-alt', value: 0 },
        { label:'Email', placeholder: 'Email', icon: 'fas fa-envelope', value: 1 },
      ]
    };
    this.numRows = 0;
  }

  onSortEnd = ({oldIndex, newIndex}) => {
    this.setState(({items}) => ({
      items: arrayMove(items, oldIndex, newIndex),
    }));
  };

  render() {
    const leng = this.state.form.filter(len => len.value);
    const numRows = leng.length;
    return (
      <div className="container">
        <h1 className="title pt-5">Hello World</h1>
        <SortableList items={this.state.items} onSortEnd={this.onSortEnd} />
        {/* <div className="box">{numRows}</div> */}
        <div className="columns mt-6">
          {
            this.state.form.map((index, v) => {
              return (
                <Input
                  key={ v }
                  label={ index.label }
                  isSuccess={ this.state.isSuccess }
                  placeholder={ index.placeholder }
                  icon={ index.icon }
                  value={ this.setState.value }
                />
              )
            })
          }
        </div>
        <progress className="progress is-success" value={
          //this.state.form.map((index) => {
            // if(index.value == 1) {
            //   alert(index.value);
            // }
            //const e2 = index.value;
            //alert(e2);
          //})
          // return 100 / numRows;
          13
        } max="100" />
      </div>
    );
  }
}

export default App;
