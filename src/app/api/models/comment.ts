/* tslint:disable */
/* eslint-disable */
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
  createdBy?: string;
}
