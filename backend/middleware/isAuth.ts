import { NextFunction, Request, Response } from 'express'
import { isValidObjectId } from 'mongoose'
export const isAuth = (req: Request<void>, res: Response, next: NextFunction): Response | void => {
  if (!req.session.userId) {
    return res.status(401).send('No token provided.')
  }

  if (!isValidObjectId(req.session.userId)) {
    return res.status(400).send('Invalid ObjectId')
  }

  return next()
}
