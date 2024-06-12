import { NextFunction, Request, Response } from 'express';
import httpStatus from 'http-status';
import config from '../config';
import catchAsynce from '../utils/catchAsynce';
import { AppError } from '../Errors/AppError';
import { TUserRole } from '../modules/user/user.interface';
import { JwtPayload } from 'jsonwebtoken';
import jwt from 'jsonwebtoken';
import { User } from '../modules/user/user.model';

// Declare the 'user' property on the Express.Request interface
declare global {
  namespace Express {
    interface Request {
      user?: JwtPayload;
    }
  }
}
const auth = (...requiredRoles: TUserRole[]) => {
  return catchAsynce(
    async (req: Request, res: Response, next: NextFunction) => {
      const token = req.headers.authorization;

      if (!token) {
        throw new AppError(httpStatus.UNAUTHORIZED, 'You are not authorized!');
      }

      const decoded = jwt.verify(
        token,
        config.jwt_access_secret as string,
      ) as JwtPayload;
      const { role, userId, iat } = decoded;

      const user = await User.isUserExistsByCustomId(userId);

      if (!user) {
        throw new AppError(httpStatus.NOT_FOUND, 'This user is not found!');
      }

      if (user.isDeleted) {
        throw new AppError(httpStatus.NOT_FOUND, 'This user is Deleted');
      }

      if (user.status === 'blocked') {
        throw new AppError(httpStatus.NOT_FOUND, 'This user is blocked');
      }

      if (
        user.passwordChangedAt &&
        User.isJWTIssuedBeforePasswordChanged(
          user.passwordChangedAt,
          iat as number,
        )
      ) {
        throw new AppError(httpStatus.UNAUTHORIZED, 'You are not authorized!');
      }
      if (requiredRoles && !requiredRoles.includes(role)) {
        throw new AppError(
          httpStatus.UNAUTHORIZED,
          'You are not authorized  hi!',
        );
      }
      req.user = decoded as JwtPayload;
      console.log(decoded);
      next();
    },
  );
};

export default auth;
