/* tslint:disable */
/* eslint-disable */
import { User } from './user';

export interface Comment {

  /**
   * Comment id
   */
  '_id'?: string;

  /**
   * Movie id
   */
  belongsTo?: string;

  /**
   * Comment content
   */
  content?: string;

  /**
   * User id
   */
  createdBy?: User;
}
