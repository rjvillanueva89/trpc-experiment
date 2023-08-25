import { publicProcedure, router } from "../trpc"

export const todosRouter = router({
  getAll: publicProcedure.query(async () => {
    return [10, 20, 30]
  }),
})
