import {z} from 'zod'

/**
 * the shape of a tag object in the database and the API
 * @property tagkeywordId {string} foreign key of the keyword that is being tagged
 * @property tagThreadId {string} foreign key of the thread that is being tagged
 **/

export const TagSchema = z.object({
    tagKeywordId: z.string({
        required_error: 'please provide a valid tagKeywordId',
        invalid_type_error: 'tagKeywordId is not the correct type'
    })
        .uuid({message: 'please provide a valid uuid for tagKeywordId'}),
    tagThreadId: z.string({
        required_error: "please provide a valid tagThreadId",
        invalid_type_error: "tagThreadId is not the correct type"
    })
        .uuid({message: 'please provide a valid uuid for tagThreadId'})
})