import { Context } from "koa"
import { getManager } from "typeorm"
import { Category } from "../entity/Category";


export const categoryGetAllAction = async (context: Context) => {
    const repo = getManager().getRepository(Category)
    const data = await repo.find()
    context.body = data
}


export const categoryGetByIdAction = async (context: Context) => {
    const repo = getManager().getRepository(Category)
    const data = await repo.findOne((context as any).params.id)
    // if post was not found return 404 to the client
    if (!data) {
        context.status = 404
        return
    }
    // return loaded data
    context.body = data
}


export const categorySaveAction = async (context: Context) => {
    const repo = getManager().getRepository(Category)
    const newData = repo.create(context.request.body)
    await repo.save(newData)
    context.body = newData
}