"use client"

import { trpc } from "../_trpc/client"

export const TodoList = () => {
  const getTodos = trpc.getTodos.useQuery()

  console.log(getTodos.data)
  return <></>
}
