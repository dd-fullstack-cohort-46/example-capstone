import {z} from 'zod'
import {ThreadSchema} from "./thread.validator";
import {sql} from "../../utils/database.utils";

/**
 * The shape of a thread in the thread table in the database
 * @property threadId {string} the primary key
 * @property threadProfileId {string} the foreign key to the profile table
 * @property threadReplyThreadId {string} the foreign key to the thread table
 * @property threadContent {string} the thread's content
 * @property threadDatetime {string} the thread's datetime
 * @property threadImageUrl {string} the thread's image url
 */
export type Thread = z.infer<typeof ThreadSchema>

/**
 * posts a thread in the thread table in the database and returns a message that says 'Thread successfully posted'
 * @param thread
 * @returns 'Thread successfully posted'
 */
export async function insertThread(thread: Thread): Promise<string> {

    // deconstruct the thread object
    const {threadProfileId, threadReplyThreadId, threadContent, threadImageUrl} = thread

    // insert the thread into the thread table
    await sql`INSERT INTO thread (thread_id, thread_profile_id, thread_reply_thread_id, thread_content, thread_datetime,
                                  thread_image_url)
              VALUES (gen_random_uuid(), ${threadProfileId}, ${threadReplyThreadId}, ${threadContent}, now(),
                      ${threadImageUrl})`

    // return a message that says 'Thread successfully posted'
    return 'Thread successfully posted'
}

/**
 * gets all threads from the thread table in the database and returns them to the user in the response
 * @returns {Promise<Thread[]>}
 * @throws {Error} an error if the query fails for some reason or if there are no threads in the database
 */
export async function selectAllThreads(): Promise<Thread[]> {
    // get all threads from the thread table in the database and return them
    const rowList = <Thread[]>await sql`SELECT thread_id,
                                      thread_profile_id,
                                      thread_reply_thread_id,
                                      thread_content,
                                      thread_datetime,
                                      thread_image_url
                               FROM thread
                               ORDER BY thread_datetime DESC`

    // parse the threads from the database into an array of Thread objects
    return ThreadSchema.array().parse(rowList)
}

/**
 * gets all threads from the thread table in the database by profileName and returns them
 * @param profileName {string} the thread's profile name to search for in the thread table
 * @returns <Thread[]> the threads that have the profileName
 */
export async function selectThreadsByProfileName(profileName: string): Promise<Thread[]> {
    // get all threads from the thread table in the database by profileName and return them
    const rowList = <Thread[]>await sql`SELECT thread_id,
                                      thread_profile_id,
                                      thread_reply_thread_id,
                                      thread_content,
                                      thread_datetime,
                                      thread_image_url
                               FROM thread JOIN profile ON thread.thread_profile_id = profile.profile_id
                               WHERE profile.profile_name = ${profileName}
                               AND thread_reply_thread_id IS NULL`

    // parse the threads from the database into an array of Thread objects
    return ThreadSchema.array().parse(rowList)
}

export async function selectThreadsByThreadProfileId(threadProfileId: string): Promise<Thread[]> {
    // get all threads from the thread table in the database by threadProfileId and return them
    const rowList = <Thread[]>await sql`SELECT thread_id,
                                      thread_profile_id,
                                      thread_reply_thread_id,
                                      thread_content,
                                      thread_datetime,
                                      thread_image_url
                               FROM thread
                               WHERE thread_profile_id = ${threadProfileId}
                               AND thread_reply_thread_id IS NULL`

    // parse the threads from the database into an array of Thread objects
    return ThreadSchema.array().parse(rowList)
}

/**
 * get the thread from the thread table in the database by threadId and return it
 * @param threadId {string} the thread's id to search for in the thread table
 * @returns <Thread|null> the thread that has the threadId or null if no thread is found
 */
export async function selectThreadByThreadId(threadId: string): Promise<Thread | null> {
    // get the thread from the thread table in the database by threadId
    const rowList = <Thread[]>await sql`SELECT thread_id,
                                              thread_profile_id,
                                              thread_reply_thread_id,
                                              thread_content,
                                              thread_datetime,
                                              thread_image_url
                                       FROM thread
                                       WHERE thread_id = ${threadId}`

    // parse the thread from the database into a Thread object
    const result = ThreadSchema.array().max(1).parse(rowList)


    // return the thread or null if no thread is found
    return result.length === 0 ? null : result[0]
}

/**
 * selects all replies associated with a thread by threadId
 * @param threadId
 * @returns <Thread[]> an array of threads that are replies to the thread with the threadId
 */
export async function selectAllReplyThreadsByThreadId(threadId: string): Promise<Thread[]> {

    // select all thread replies associated with a thread by threadId
    const rowList = <Thread[]>await sql`
        WITH RECURSIVE thread_tree
                           AS (SELECT thread_id,
                                      thread_profile_id,
                                      thread_reply_thread_id,
                                      thread_content,
                                      thread_datetime,
                                      thread_image_url
                               FROM thread
                               WHERE thread_id = ${threadId}
                               UNION
                               SELECT t.thread_id,
                                      t.thread_profile_id,
                                      t.thread_reply_thread_id,
                                      t.thread_content,
                                      t.thread_datetime,
                                      t.thread_image_url
                               FROM thread t
                                        INNER JOIN thread_tree tt
                                                   ON tt.thread_id = t.thread_reply_thread_id)
        SELECT *
        FROM thread_tree;`

    // parse the threads from the database into an array of Thread objects
    return ThreadSchema.array().parse(rowList)
}

/**
 * selects the next page of threads from the thread table in the database and returns them to the user in the response
 * @param page {number} the page number to get the next page of threads
 * @returns <Thread[]> the next page of threads
 */
export async function selectPageOfThreads(page: number): Promise<Thread[]> {
    // get all threads from the thread table in the database and return them
    const rowList = <Thread[]>await sql`SELECT thread_id,
                                      thread_profile_id,
                                      thread_reply_thread_id,
                                      thread_content,
                                      thread_datetime,
                                      thread_image_url
                               FROM thread
                               WHERE thread_reply_thread_id IS NULL
                               ORDER BY thread_datetime DESC
                               LIMIT 10 OFFSET ${(page - 1) * 10}`
    return ThreadSchema.array().parse(rowList)
}

/**
 * deletes the thread from the thread table in the database by threadId and returns a message that says 'Thread successfully deleted'
 * @param threadId
 * @returns 'Thread successfully deleted'
 */
export async function deleteThreadByThreadId(threadId: string): Promise<string> {
    // delete the thread from the thread table in the database by threadId
    await sql`DELETE
              FROM thread
              WHERE thread_id = ${threadId}`

    // return a message that says 'Thread successfully deleted'
    return 'Thread successfully deleted'
}