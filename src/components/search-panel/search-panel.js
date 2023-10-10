import { Component } from 'react';
import './search-panel.css';

class SearchPanel extends Component {
    constructor(props){
        super(props);
        this.state = {
            term: '' // поднимем до компонента App
        }
    }

    // это другой метод onUpdateSearch - локальный (не такой как в app.js)
    onUpdateSearch = (e) => {
        const term = e.target.value;
        this.setState({term}); // установка локального состояния term
        this.props.onUpdateSearch(term); // пробрасываем состояние term наверх в App 
        // а этот метод onUpdateSearch приходит из app.js
    }

    render(){
        return (
            <input type="text"
                    className="form-control search-input"
                    placeholder="Найти сотрудника"
                    value={this.state.term}
                    onChange={this.onUpdateSearch}/>
        )
    }

}

export default SearchPanel;