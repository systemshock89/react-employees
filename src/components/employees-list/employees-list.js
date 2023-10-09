import EmployeesListItem from "../employees-list-item/employees-list-item";

import './employees-list.css';

const EmployeesList = ({data, onDelete, onToggleProp}) => {

    // переберем массив data и возвратим новый
    const elements = data.map((item, i) => {
    // const elements = data.map(item => { // если с бэка не приходит уникальный id эл-та, можно использовать i - индекс эл-та: {i} 

        const {id, ...itemProps} = item; // вытащим одну пер-ю id, а все остальные объединим в св-во itemProps
        // (деструктуризация по остаточному принципу)
        // (это предотвратит ошибку Warning: Each child in a list should have a unique "key" prop.)

        return (
            // упрощенный код, где развернем с помощью object spread operator
            <EmployeesListItem 
                key={id} 
                {...itemProps}
                onDelete={() => onDelete(id)}
                onToggleProp={(e) => onToggleProp(id, e.currentTarget.getAttribute('data-toggle'))}/> // получим data атрибут через объект события e
                // currentTarget вместо target, чтобы предотвратить всплытие событий
            
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