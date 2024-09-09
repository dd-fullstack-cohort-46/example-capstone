import {z} from 'zod'

/**
 * The shape of a keyword object in the database and the API
 * @property keywordId {string} primary key of the keyword object
 * @property keywordName {string} name of the keyword
 */

export const KeywordSchema = z.object({
    keywordId: z.string({
        required_error: 'please provide a valid keywordId',
        invalid_type_error: "keywordId is not the correct type"
    })
        .trim()
        .uuid({
            message: 'please provide a valid uuid for keywordId'
        })
        .nullable(),
    keywordName: z.string({
        required_error: 'please provide a valid keywordName',
        invalid_type_error: "keywordName is not the correct type"
    })
        .min(1, {
        message: 'keyword must be at least 1 character long'})
        .max(32, {message: 'keyword must be at most 32 characters long'})
        .trim()
})