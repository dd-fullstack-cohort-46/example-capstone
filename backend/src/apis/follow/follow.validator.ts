import { z } from 'zod'

/**
 * The shape of a follow object in the database and the API
 * @property followProfileId {string} foreign key of the profile that is doing the following
 * @property followFollowingId {string} foreign key of the profile that is being followed
 */
export const FollowSchema = z.object({
    followProfileId: z.string({required_error: 'please provide a valid followProfileId'}).uuid({message: 'please provide a valid uuid for followProfileId'}),
    followFollowingProfileId: z.string({required_error: 'please provide a valid followFollowingId'}).uuid({message: 'please provide a valid uuid for followFollowingId'})
})