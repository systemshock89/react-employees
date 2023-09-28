import EmployeesListItem from "../employees-list-item/employees-list-item";

import './employees-list.css';

const EmployeesList = ({data}) => {

    // переберем массив data и возвратим новый
    const elements = data.map(item => {
        return (
            // упрощенный код, где развернем с помощью object spread operator
            <EmployeesListItem {...item}/>
            
            // код, где непосредственно выводятся name, salary
            // <EmployeesListItem name={item.name} salary={item.salary}/>
        )
    })

    return (
        <ul className="app-list list-group">
            {elements}
        </ul>
    )
}

export default EmployeesList;