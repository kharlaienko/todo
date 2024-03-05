import { createSlice } from '@reduxjs/toolkit'

const TODO_KEY = 'todos';

const getValueFromLocalStorage = () => {
   try {
      return JSON.parse(localStorage.getItem(TODO_KEY))
   } catch {
      return null
   }
}


const initialState = {
   list: getValueFromLocalStorage() || [],
}

export const todoSlice = createSlice({
   name: 'todo',
   initialState,
   reducers: {
      addTodo: (state, { payload }) => {
         state.list.unshift({ name: payload, checked: false, id: Math.ceil(Math.random() * 100000) })

         localStorage.setItem(TODO_KEY, JSON.stringify(state.list))
      },
      toggleChecked: (state, { payload }) => {
         const indexOfElemToChange = state.list.findIndex(el => el.id === payload.id)
         if (indexOfElemToChange === -1) return;
         state.list[indexOfElemToChange] = { ...state.list[indexOfElemToChange], checked: payload.checked }

         localStorage.setItem(TODO_KEY, JSON.stringify(state.list))
      },
      deleteTodo: (state, { payload }) => {
         const indexOfElemToChange = state.list.findIndex(el => el.id === payload.id)
         if (indexOfElemToChange === -1) return;
         state.list.splice(indexOfElemToChange, 1)

         localStorage.setItem(TODO_KEY, JSON.stringify(state.list))
      }
   },
})

export const { addTodo, toggleChecked, deleteTodo } = todoSlice.actions

export default todoSlice.reducer