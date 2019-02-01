import { Context } from "koa"
import { getManager } from "typeorm"
import { Protocol } from "../entity/Protocol"

export const protocolsGetAllAction = async (context: Context) => {
    const repository = getManager().getRepository(Protocol)
    context.body = await repository.find()
}

export const protocolGetByIdAction = async (context: Context) => {
    const repo = getManager().getRepository(Protocol)
    const data = await repo.findOne((context as any).params.id)
    if (!data) {
        context.status = 404
        return
    }
    context.body = data
}

export const protocolSaveAction = async (context: Context) => {
    const repo = getManager().getRepository(Protocol)
    const newData = repo.create(context.request.body)
    await repo.save(newData)
    context.body = newData
}