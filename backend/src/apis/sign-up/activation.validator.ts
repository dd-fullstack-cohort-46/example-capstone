import { z } from 'zod'

/**
 * The shape of the data that comes from the client when activating a profile
 * @property profileActivationToken {string} the profile's activation token
 */

export const activationProfileSchema = z.object({ activation: z.string().length(32, { message: 'please provide a valid profileActivationToken' }) })
