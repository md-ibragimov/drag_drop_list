import styles from './ListTodo.module.scss';
import todo from '../../store/ToDo';
import TodoItem from '../TodoItem/TodoItem';
import { observer } from 'mobx-react-lite';
import { Select } from 'antd';
import { useState } from 'react';
const { Option } = Select;

const ListTodo = observer(() => {
  const [filter, setFilter] = useState('all');
  const handleChange = (value: string) => {
    setFilter(value)
  };
  return (
    <div className={styles.container}>
      <Select
        defaultValue="All"
        style={{ width: 120 }}
        onChange={handleChange}
        className={styles.select}
      >
        <Option value="all">All</Option>
        <Option value="completed">Сompleted</Option>
        <Option value="uncompleted">Uncompleted</Option>
      </Select>
      {todo.todoList.map((todo) => {
        return (
          filter === 'all' ?
            <TodoItem
              key={todo.id}
              todoItem={todo}
            /> : filter === 'completed' && todo.status ?
              <TodoItem
                key={todo.id}
                todoItem={todo}
              /> : filter === 'uncompleted' && !todo.status ?
                <TodoItem
                  key={todo.id}
                  todoItem={todo}
                /> : null
        )
      })}
    </div>
  );
})

export default ListTodo;