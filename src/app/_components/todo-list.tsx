"use client"

import { trpc } from "../_trpc/client"

export const TodoList = () => {
  const getTodos = trpc.todos.getAll.useQuery()
  const todo = trpc.todos.getById.useQuery({ id: "someId" })

  console.log(getTodos.data)
  console.log(todo.data)
  return <></>
}
