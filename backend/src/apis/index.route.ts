import { Router } from 'express'
import { indexController } from './index.controller'

const basePath = '/apis'

const router = Router()

router.route('/ssss')
  .get(indexController)

export const indexRoute = { basePath, router }