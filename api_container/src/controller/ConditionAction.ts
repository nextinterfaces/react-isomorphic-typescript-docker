import { Context } from "koa"
import { getManager } from "typeorm"
import { Condition } from "../entity/Condition"

const axios = require('axios');

export const trycatch = async (context: Context, onSuccess) => {
    try {
        await onSuccess(context)
    } catch (e) {
        console.error(e)
        context.status = 400
        context.body = e
    }
}

export const conditionWikiAction = async (context: Context) => {
    const _data = async () => {
        const response = await
            axios.get('https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro=&explaintext=&titles=' + encodeURIComponent(context.params.id))

        const wikiData = response.data.query.pages

        if (!(response.status == 200 || response.status == 201)) {
            context.status = 404
            return
        }

        // return loaded data
        context.body = wikiData[Object.keys(wikiData)[0]].extract
    }

    await trycatch(context, _data)
}

/**
 * Loads all objects from the database.
 */
export const conditionGetAllAction = async (context: Context) => {

    // get a post repository to perform operations with object
    const repository = getManager().getRepository(Condition)

    // load all results
    const data = await repository.find()

    // return loaded results
    context.body = data
}

/**
 * Loads Condition by a given id.
 */
export const conditionGetByIdAction = async (context: Context) => {

    // get a post repository to perform operations with Condition
    const repo = getManager().getRepository(Condition)

    // load a post by a given id
    const data = await repo.findOne((context as any).params.id)

    // if post was not found return 404 to the client
    if (!data) {
        context.status = 404
        return
    }

    // return loaded data
    context.body = data
}

export const conditionSaveAction = async (context: Context) => {

    const repo = getManager().getRepository(Condition)
    const newData = repo.create(context.request.body)
    await repo.save(newData)

    // return saved post back
    context.body = newData
}