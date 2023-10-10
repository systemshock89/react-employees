import { Component } from 'react';

//import './employees-add-form.css';
import './employees-add-form.scss';

class EmployeesAddForm extends Component {
    constructor(props){
        super(props);
        this.state = {
            name: '',
            salary: ''
        }
    }

    // при вводе текста в input меняем его значение
    onValueChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value // квадратные скобки используются в ES6 синтаксисе для названия составного св-ва
        })
    }

    onSubmit = (e) => {
        e.preventDefault();

        if(this.state.name.length < 3 || !this.state.salary) return; // не добавлять записи без зп и где имя меньше 3 символов

        this.props.onAdd(this.state.name, this.state.salary);
        this.setState({
            name: '',
            salary: ''
        })
    }

    render(){
        const {name, salary} = this.state;

        return (
            <div className="app-add-form">
                <h3>Добавьте нового сотрудника</h3>
                <form
                    className="add-form d-flex"
                    onSubmit = {this.onSubmit}
                    >

                    {/* в input запускается событие onChange, запускающее метод onValueChange(), в нем setState изменяет состояние
                    и записывает состояние в this.state.
                    Далее setState вызывает метод render(), чтобы перерендерить состояние компонениа
                    и в value записывается актуальное знач-е компонента.

                    Значение формы input'а в этом случае будет контролироваться реактом и сам элемент будет называться управляемым компонентом (элементом)
                     */}
                    <input type="text"
                        className="form-control new-post-label"
                        placeholder="Как его зовут?" 
                        name="name"
                        value={name} // нужен для создаения управляемого компонента
                        onChange={this.onValueChange}/>
                    <input type="number"
                        className="form-control new-post-label"
                        placeholder="З/П в $?" 
                        name="salary"
                        value={salary} 
                        onChange={this.onValueChange}/>
    
                    <button type="submit"
                            className="btn btn-outline-light">Добавить</button>
                </form>
            </div>
        )
    }
}

export default EmployeesAddForm;