import { NextFunction, Request, Response } from 'express'

export const isAuth = (req: Request, res: Response, next: NextFunction): Response | void => {
  if (!req.session.userId) {
    return res.status(401).send('No token provided.')
  }
  return next()
}
