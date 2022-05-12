/* tslint:disable */
/* eslint-disable */
import { Movie } from './movie';
export interface User {

  _id: string

  /**
   * User avatar
   */
  avatar?: string;

  /**
   * User date of birth
   */
  dateOfBirth?: string;

  /**
   * User email
   */
  email?: string;
  favorites?: Array<Movie>;
  following?: Array<User>;

  /**
   * User name
   */
  name?: string;
}
