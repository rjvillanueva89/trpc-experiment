import { z } from "zod"
import { publicProcedure, router } from "../trpc"

export const todosRouter = router({
  getAll: publicProcedure.query(async () => {
    return [10, 20, 30]
  }),
  getById: publicProcedure
    .input(z.object({ id: z.string().optional() }))
    .query(async ({ input }) => {
      return input.id
    }),
})
