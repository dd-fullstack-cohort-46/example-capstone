import { z } from 'zod'
import {PrivateProfileSchema} from '../profile/profile.validator'

/**
 * The shape of the data that comes from the client when signing up
 * @property profilePasswordConfirm {string} the password confirmation
 * @property profilePassword {string} the password
 */
export const SignUpProfileSchema = PrivateProfileSchema
  .omit({ profileId: true, profileHash: true, profileActivationToken: true, profileImageUrl: true, profileAbout: true })

