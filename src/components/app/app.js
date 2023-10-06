// базовые компоненты
import { Component } from 'react';

// компоненты
import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form';

// стили, картинки
import './app.css';

class App extends Component{

  constructor(props){
    super(props);
    this.state = {
      // данные "приходящие" с сервера
      data: [
        {name: 'John C.', salary: 800, increase: false, id: 1},
        {name: 'Alex M.', salary: 3000, increase: true, id: 2},
        {name: 'Carl W.', salary: 5000, increase: false, id: 3},
      ]
    }
    this.maxId = 4; // id для создания нового сотрудника, кот-й будем увеличивать на 1
  }

  deleteItem = (id) => {
    this.setState(({data}) => {
      // данные в state мы не должны изменять (мутировать) - иммутабельность
      // объект наз-ся иммутабельным - когда он не может быть изменен после своего создания

      // чтобы внести изменения, можем создать копию этого объекта с уже внесенными нововведениями
      // плюсы: сравнивая старый и новый объект мы легко увидим отличия
      // минус: расходуется чуть больше памяти
      // например, метод splice() не подойдет
      
      // Вариант 1. с помощью slice()
      // // findIndex() - если true, то возвращен номер эл-та, на кот-м сработала ф-я
      //const index = data.findIndex(elem => elem.id === id) 
      // const before = data.slice(0, index) // берем массив с самого первого эл-та до того, который нашли
      // const after = data.slice(index + 1); // эл-та, который нашли пропускаем и после него копируем кусочек массива до конца
      // const newArr = [...before, ...after]; // создазим новый массив из двух массивов
      // return {
      //   data: newArr
      // }

      // Вариант 2. помощью filter()
      return {
        data: data.filter(item => item.id !== id)
      }
    })
  }

  addItem = (name, salary) => {
    const newItem = {
      name,
      salary,
      increase: false,
      id: this.maxId++
    }

    this.setState(({data}) => {
      const newArr = [...data, newItem];
      return {
        data: newArr
      }
    });
  }

  render(){
    return (
      <div className="app">
        <AppInfo></AppInfo>
  
        <div className="search-panel">
          <SearchPanel/>
          <AppFilter/>
        </div>
  
        <EmployeesList 
          data={this.state.data}
          onDelete={this.deleteItem}/> {/* обозначили ф-ю onDelete и передали ниже в EmployeesList, а там получили и передали еще ниже в компонент EmployeesListItem, вызвав с id */}
  
        <EmployeesAddForm onAdd={this.addItem}/>
  
      </div>
    );
  }
}

export default App;
