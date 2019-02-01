import {
    conditionGetAllAction,
    conditionGetByIdAction,
    conditionSaveAction,
    conditionWikiAction,
} from './controller/ConditionAction'
import { categoryGetAllAction, categoryGetByIdAction, categorySaveAction } from "./controller/CategoryAction";
import { protocolGetByIdAction, protocolSaveAction, protocolsGetAllAction } from "./controller/ProtocolAction";

/**
 * All application routes.
 */

const ROOT = '/api'
const POST = 'post'
const GET = 'get'
const DELETE = 'delete'
const PATCH = 'patch'

export const AppRoutes = [

    {
        path: ROOT + '/protocols',
        method: GET,
        action: protocolsGetAllAction
    },
    {
        path: ROOT + '/protocols/:id',
        method: GET,
        action: protocolGetByIdAction
    },
    {
        path: ROOT + '/protocols',
        method: POST,
        action: protocolSaveAction
    },


    // --- conditions ---
    {
        path: ROOT + '/conditions',
        method: GET,
        action: conditionGetAllAction
    },
    {
        path: ROOT + '/conditions/:id',
        method: GET,
        action: conditionGetByIdAction
    },
    {
        path: ROOT + '/conditions',
        method: POST,
        action: conditionSaveAction
    },
    {
        path: ROOT + '/conditions/wiki/:id',
        method: GET,
        action: conditionWikiAction
    },

    // --- categories ---
    {
        path: ROOT + '/categories',
        method: GET,
        action: categoryGetAllAction
    },
    {
        path: ROOT + '/categories/:id',
        method: GET,
        action: categoryGetByIdAction
    },
    {
        path: ROOT + '/categories',
        method: POST,
        action: categorySaveAction
    }
]