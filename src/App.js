 import React ,{Component} from 'react';
 import TodoItems from './components/TodoItems/TodoItems';
 import AddItem from './components/AddItem/AddItem';

class App extends Component {
  state = {
    items : [
      {id:1,name:'Richard Miles',age:28},
      {id:2,name:'Richard Roe',age:26},
      {id:3,name:'Johnny Doe',age:12}
    ]
  }
  // delete Item with two ways
  deleteItem = (id) =>{
  //  let items = this.state.items;
  //  let i = items.findIndex(item => item.id === id)
  //  items.splice(i,1) // delete only one item
  //  this.setState({items})

  let items = this.state.items.filter( item => {
      return item.id !== id
  })
  this.setState({items})

  }

  addItem = (item) => {
    item.id = Math.random();
    let items = this.state.items;
    items.push(item);
    this.setState({items})
  }

  render() {

    return (
      <div className="App container">
         <h1>TodoList App</h1>
         <TodoItems items={this.state.items}  deleteItem={this.deleteItem} />
         <AddItem addItem = {this.addItem}/>
      </div>
     );
    }  
   
  } 

export default App;
