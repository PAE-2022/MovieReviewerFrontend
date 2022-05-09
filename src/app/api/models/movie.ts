/* tslint:disable */
/* eslint-disable */
import { Comment } from './comment';
import { Platform } from './platform';
export interface Movie {
  '_id'?: string;

  /**
   * Movie cast
   */
  cast?: Array<string>;

  /**
   * Movie comments
   */
  comments?: Array<Comment>;

  /**
   * Movie cover
   */
  cover?: string;

  /**
   * Movie genres
   */
  genres?: Array<string>;

  /**
   * Movie title
   */
  name?: string;

  /**
   * Movie platforms
   */
  platforms?: Array<Platform>;

  /**
   * Movie release date
   */
  releaseDate?: string;

  /**
   * Movie score
   */
  score?: number;

  /**
   * Movie screen writers
   */
  screenwriters?: Array<string>;

  /**
   * Movie synopsis
   */
  synopsis?: string;

  /**
   * Movie trailer
   */
  trailer?: string;
}
