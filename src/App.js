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
      items: ['drag & drop 1', 'drag & drop 2', 'drag & drop 3'],
      form: [ 
        { id: 0, label:'Name', placeholder: 'First Name', icon: 'fas fa-user', value: 0 },
        { id: 1, label:'Phone Number', placeholder: 'Phone number', icon: 'fas fa-phone-alt', value: 0 },
        { id: 2, label:'Email', placeholder: 'Email', icon: 'fas fa-envelope', value: 0 },
      ],
      isSuccess: false
    };
    this.numRows = 0;
  }

  onSortEnd = ({oldIndex, newIndex}) => {
    this.setState(({items}) => ({
      items: arrayMove(items, oldIndex, newIndex),
    }));
  };

  getValueHandler = () => {
    // this.setState({value: 1});
    alert(this.state.form.value);
    //     if(e.target.value !== '' && e.target.value !== ' ') {
    //         setIsSuccess(true);
    //         alert('true');
    //     }
    //     else {
    //         setIsSuccess(false);
    //         alert('false');
    //     }
  }

  render() {
    const leng = this.state.form.filter(len => len.value);
    const numRows = leng.length;
    return (
      <div className="container">
        <h1 className="title pt-5">Hello World</h1>
        <SortableList items={this.state.items} onSortEnd={this.onSortEnd} />
        <div className="box mt-5 has-background-info has-text-info-light is-size-5">{numRows}</div>
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
                  getValue={ this.getValueHandler }
                />
              )
            })
          }
        </div>
        <progress className="progress is-warning" value={
          this.state.form.map((index) => {
            // alert("fu 1");
            if(index.value == 1) {
              alert("fu 2");
            }
            const e2 = index.value;
              // return e2
          })
          // return 100 / numRows;
          // 15
        } max="100" />
      </div>
    );
  }
}

export default App;
