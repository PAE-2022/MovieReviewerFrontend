/* tslint:disable */
/* eslint-disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { RequestBuilder } from '../request-builder';
import { Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';

import { Comment } from '../models/comment';
import { CreateCommentDto } from '../models/create-comment-dto';
import { Movie } from '../models/movie';
import { RateMovieDto } from '../models/rate-movie-dto';

@Injectable({
  providedIn: 'root',
})
export class MoviesService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation apiMoviesGet
   */
  static readonly ApiMoviesGetPath = '/api/movies';

  /**
   * Get all movies
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiMoviesGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiMoviesGet$Response(params?: {
  }): Observable<StrictHttpResponse<Array<Movie>>> {

    const rb = new RequestBuilder(this.rootUrl, MoviesService.ApiMoviesGetPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<Movie>>;
      })
    );
  }

  /**
   * Get all movies
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiMoviesGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiMoviesGet(params?: {
  }): Observable<Array<Movie>> {

    return this.apiMoviesGet$Response(params).pipe(
      map((r: StrictHttpResponse<Array<Movie>>) => r.body as Array<Movie>)
    );
  }

  /**
   * Path part for operation apiMoviesIdGet
   */
  static readonly ApiMoviesIdGetPath = '/api/movies/{id}';

  /**
   * Get all movies
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiMoviesIdGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiMoviesIdGet$Response(params: {

    /**
     * Movie id
     */
    id: string;
  }): Observable<StrictHttpResponse<Movie>> {

    const rb = new RequestBuilder(this.rootUrl, MoviesService.ApiMoviesIdGetPath, 'get');
    if (params) {
      rb.path('id', params.id, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Movie>;
      })
    );
  }

  /**
   * Get all movies
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiMoviesIdGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiMoviesIdGet(params: {

    /**
     * Movie id
     */
    id: string;
  }): Observable<Movie> {

    return this.apiMoviesIdGet$Response(params).pipe(
      map((r: StrictHttpResponse<Movie>) => r.body as Movie)
    );
  }

  /**
   * Path part for operation apiMoviesIdCommentPost
   */
  static readonly ApiMoviesIdCommentPostPath = '/api/movies/{id}/comment';

  /**
   * Get all movies
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiMoviesIdCommentPost()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  apiMoviesIdCommentPost$Response(params: {

    /**
     * Movie id
     */
    id: string;

    /**
     * Comment content
     */
    body: CreateCommentDto
  }): Observable<StrictHttpResponse<Comment>> {

    const rb = new RequestBuilder(this.rootUrl, MoviesService.ApiMoviesIdCommentPostPath, 'post');
    if (params) {
      rb.path('id', params.id, {});
      rb.body(params.body, 'application/json');
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Comment>;
      })
    );
  }

  /**
   * Get all movies
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiMoviesIdCommentPost$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  apiMoviesIdCommentPost(params: {

    /**
     * Movie id
     */
    id: string;

    /**
     * Comment content
     */
    body: CreateCommentDto
  }): Observable<Comment> {

    return this.apiMoviesIdCommentPost$Response(params).pipe(
      map((r: StrictHttpResponse<Comment>) => r.body as Comment)
    );
  }

  /**
   * Path part for operation apiMoviesIdRatePost
   */
  static readonly ApiMoviesIdRatePostPath = '/api/movies/{id}/rate';

  /**
   * Rate a movie
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiMoviesIdRatePost()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  apiMoviesIdRatePost$Response(params: {

    /**
     * Movie id
     */
    id: string;

    /**
     * Rate content
     */
    body: RateMovieDto
  }): Observable<StrictHttpResponse<Movie>> {

    const rb = new RequestBuilder(this.rootUrl, MoviesService.ApiMoviesIdRatePostPath, 'post');
    if (params) {
      rb.path('id', params.id, {});
      rb.body(params.body, 'application/json');
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Movie>;
      })
    );
  }

  /**
   * Rate a movie
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiMoviesIdRatePost$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  apiMoviesIdRatePost(params: {

    /**
     * Movie id
     */
    id: string;

    /**
     * Rate content
     */
    body: RateMovieDto
  }): Observable<Movie> {

    return this.apiMoviesIdRatePost$Response(params).pipe(
      map((r: StrictHttpResponse<Movie>) => r.body as Movie)
    );
  }

}
