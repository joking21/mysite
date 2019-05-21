import {decorate,observable,action,computed} from 'mobx';
class Store {
    // 被观察者
    @observable  
    todos = [{
      title: 'hahha',
      done: true,
    }];
    tt = 1;

    @action 
    changeTodoTitle({index,title}){
        this.todos[index].title = title;
        this.tt = this.tt+1;
        console.log(this.tt);
      };

    @computed 
    get unfinishedTodos () {
    return  this.todos.filter((todo) => todo.done)
    }
  };
  class store1{
      @observable
      title = '哈哈';
  }
  const storeTest = new Store();
  const storeTest1 = new store1()
  export {storeTest, storeTest1} ;
// class todoList{
//     todos = [{
//             title: 'hahha',
//             done: true,
//         }];
//     tt = 1;
//     get unfinishedTodos () {
//          return  this.todos.filter((todo) => todo.done)
//     }
//     changeTodoTitle({index,title}){
//         this.todos[index].title = title;
//         this.tt = this.tt+1;
//         console.log(this.tt);
//     };
// }
// decorate(todoList, {
//     todos: observable,
//     tt:observable,
//     unfinishedTodos: computed,
//     changeTodoTitle: action.bound
// })
//   const storeTest = new todoList();
//   export default storeTest;