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

import { AddToFavoritesDto } from '../models/add-to-favorites-dto';
import { CommentDto } from '../models/comment-dto';
import { CreateUserDto } from '../models/create-user-dto';
import { FollowDto } from '../models/follow-dto';
import { ModifyUserDto } from '../models/modify-user-dto';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root',
})
export class UsersService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation apiUsersSearchGet
   */
  static readonly ApiUsersSearchGetPath = '/api/users/search';

  /**
   * Get user by id
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiUsersSearchGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiUsersSearchGet$Response(params: {

    /**
     * query to search
     */
    query: string;
  }): Observable<StrictHttpResponse<Array<User>>> {

    const rb = new RequestBuilder(this.rootUrl, UsersService.ApiUsersSearchGetPath, 'get');
    if (params) {
      rb.query('query', params.query, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<User>>;
      })
    );
  }

  /**
   * Get user by id
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiUsersSearchGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiUsersSearchGet(params: {

    /**
     * query to search
     */
    query: string;
  }): Observable<Array<User>> {

    return this.apiUsersSearchGet$Response(params).pipe(
      map((r: StrictHttpResponse<Array<User>>) => r.body as Array<User>)
    );
  }

  /**
   * Path part for operation apiUsersIdGet
   */
  static readonly ApiUsersIdGetPath = '/api/users/{id}';

  /**
   * Get user by id
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiUsersIdGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiUsersIdGet$Response(params: {

    /**
     * user id
     */
    id: string;
  }): Observable<StrictHttpResponse<User>> {

    const rb = new RequestBuilder(this.rootUrl, UsersService.ApiUsersIdGetPath, 'get');
    if (params) {
      rb.path('id', params.id, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<User>;
      })
    );
  }

  /**
   * Get user by id
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiUsersIdGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiUsersIdGet(params: {

    /**
     * user id
     */
    id: string;
  }): Observable<User> {

    return this.apiUsersIdGet$Response(params).pipe(
      map((r: StrictHttpResponse<User>) => r.body as User)
    );
  }

  /**
   * Path part for operation apiUsersSignupPost
   */
  static readonly ApiUsersSignupPostPath = '/api/users/signup';

  /**
   * Signup user
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiUsersSignupPost()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  apiUsersSignupPost$Response(params: {

    /**
     * Create user dto
     */
    body: CreateUserDto
  }): Observable<StrictHttpResponse<{
'message'?: string;
}>> {

    const rb = new RequestBuilder(this.rootUrl, UsersService.ApiUsersSignupPostPath, 'post');
    if (params) {
      rb.body(params.body, 'application/json');
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<{
        'message'?: string;
        }>;
      })
    );
  }

  /**
   * Signup user
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiUsersSignupPost$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  apiUsersSignupPost(params: {

    /**
     * Create user dto
     */
    body: CreateUserDto
  }): Observable<{
'message'?: string;
}> {

    return this.apiUsersSignupPost$Response(params).pipe(
      map((r: StrictHttpResponse<{
'message'?: string;
}>) => r.body as {
'message'?: string;
})
    );
  }

  /**
   * Path part for operation apiUsersLoginPost
   */
  static readonly ApiUsersLoginPostPath = '/api/users/login';

  /**
   * login user
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiUsersLoginPost()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  apiUsersLoginPost$Response(params: {

    /**
     * Create user dto
     */
    body: {
'email'?: string;
'password'?: string;
}
  }): Observable<StrictHttpResponse<{
'token'?: string;
}>> {

    const rb = new RequestBuilder(this.rootUrl, UsersService.ApiUsersLoginPostPath, 'post');
    if (params) {
      rb.body(params.body, 'application/json');
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<{
        'token'?: string;
        }>;
      })
    );
  }

  /**
   * login user
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiUsersLoginPost$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  apiUsersLoginPost(params: {

    /**
     * Create user dto
     */
    body: {
'email'?: string;
'password'?: string;
}
  }): Observable<{
'token'?: string;
}> {

    return this.apiUsersLoginPost$Response(params).pipe(
      map((r: StrictHttpResponse<{
'token'?: string;
}>) => r.body as {
'token'?: string;
})
    );
  }

  /**
   * Path part for operation apiUsersFavoritesPost
   */
  static readonly ApiUsersFavoritesPostPath = '/api/users/favorites';

  /**
   * Add movie to favorites
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiUsersFavoritesPost()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  apiUsersFavoritesPost$Response(params: {

    /**
     * Add to favorites dto
     */
    body: AddToFavoritesDto
  }): Observable<StrictHttpResponse<{
'message'?: string;
}>> {

    const rb = new RequestBuilder(this.rootUrl, UsersService.ApiUsersFavoritesPostPath, 'post');
    if (params) {
      rb.body(params.body, 'application/json');
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<{
        'message'?: string;
        }>;
      })
    );
  }

  /**
   * Add movie to favorites
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiUsersFavoritesPost$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  apiUsersFavoritesPost(params: {

    /**
     * Add to favorites dto
     */
    body: AddToFavoritesDto
  }): Observable<{
'message'?: string;
}> {

    return this.apiUsersFavoritesPost$Response(params).pipe(
      map((r: StrictHttpResponse<{
'message'?: string;
}>) => r.body as {
'message'?: string;
})
    );
  }

  /**
   * Path part for operation apiUsersFavoritesIdDelete
   */
  static readonly ApiUsersFavoritesIdDeletePath = '/api/users/favorites/{id}';

  /**
   * Delete movie from favorites
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiUsersFavoritesIdDelete()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiUsersFavoritesIdDelete$Response(params: {

    /**
     * favorite movie id
     */
    id: string;
  }): Observable<StrictHttpResponse<{
'message'?: string;
}>> {

    const rb = new RequestBuilder(this.rootUrl, UsersService.ApiUsersFavoritesIdDeletePath, 'delete');
    if (params) {
      rb.path('id', params.id, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<{
        'message'?: string;
        }>;
      })
    );
  }

  /**
   * Delete movie from favorites
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiUsersFavoritesIdDelete$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiUsersFavoritesIdDelete(params: {

    /**
     * favorite movie id
     */
    id: string;
  }): Observable<{
'message'?: string;
}> {

    return this.apiUsersFavoritesIdDelete$Response(params).pipe(
      map((r: StrictHttpResponse<{
'message'?: string;
}>) => r.body as {
'message'?: string;
})
    );
  }

  /**
   * Path part for operation apiUsersFollowersPost
   */
  static readonly ApiUsersFollowersPostPath = '/api/users/followers';

  /**
   * Add user to followers
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiUsersFollowersPost()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  apiUsersFollowersPost$Response(params: {

    /**
     * Add to followers dto
     */
    body: FollowDto
  }): Observable<StrictHttpResponse<{
'message'?: string;
}>> {

    const rb = new RequestBuilder(this.rootUrl, UsersService.ApiUsersFollowersPostPath, 'post');
    if (params) {
      rb.body(params.body, 'application/json');
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<{
        'message'?: string;
        }>;
      })
    );
  }

  /**
   * Add user to followers
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiUsersFollowersPost$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  apiUsersFollowersPost(params: {

    /**
     * Add to followers dto
     */
    body: FollowDto
  }): Observable<{
'message'?: string;
}> {

    return this.apiUsersFollowersPost$Response(params).pipe(
      map((r: StrictHttpResponse<{
'message'?: string;
}>) => r.body as {
'message'?: string;
})
    );
  }

  /**
   * Path part for operation apiUsersPatch
   */
  static readonly ApiUsersPatchPath = '/api/users';

  /**
   * Modify user
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiUsersPatch()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  apiUsersPatch$Response(params: {

    /**
     * Modify user dto
     */
    body: ModifyUserDto
  }): Observable<StrictHttpResponse<{
'message'?: string;
}>> {

    const rb = new RequestBuilder(this.rootUrl, UsersService.ApiUsersPatchPath, 'patch');
    if (params) {
      rb.body(params.body, 'application/json');
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<{
        'message'?: string;
        }>;
      })
    );
  }

  /**
   * Modify user
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiUsersPatch$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  apiUsersPatch(params: {

    /**
     * Modify user dto
     */
    body: ModifyUserDto
  }): Observable<{
'message'?: string;
}> {

    return this.apiUsersPatch$Response(params).pipe(
      map((r: StrictHttpResponse<{
'message'?: string;
}>) => r.body as {
'message'?: string;
})
    );
  }

  /**
   * Path part for operation apiUsersUploadProfilePost
   */
  static readonly ApiUsersUploadProfilePostPath = '/api/users/upload-profile';

  /**
   * Upload profile picture
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiUsersUploadProfilePost()` instead.
   *
   * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
   */
  apiUsersUploadProfilePost$Response(params: {

    /**
     * Upload profile picture dto
     */
    body: {

/**
 * Profile picture
 */
'picture'?: Blob;
}
  }): Observable<StrictHttpResponse<{
'message'?: string;
}>> {

    const rb = new RequestBuilder(this.rootUrl, UsersService.ApiUsersUploadProfilePostPath, 'post');
    if (params) {
      rb.body(params.body, 'multipart/form-data');
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<{
        'message'?: string;
        }>;
      })
    );
  }

  /**
   * Upload profile picture
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiUsersUploadProfilePost$Response()` instead.
   *
   * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
   */
  apiUsersUploadProfilePost(params: {

    /**
     * Upload profile picture dto
     */
    body: {

/**
 * Profile picture
 */
'picture'?: Blob;
}
  }): Observable<{
'message'?: string;
}> {

    return this.apiUsersUploadProfilePost$Response(params).pipe(
      map((r: StrictHttpResponse<{
'message'?: string;
}>) => r.body as {
'message'?: string;
})
    );
  }

  /**
   * Path part for operation apiUsersIdCommentsGet
   */
  static readonly ApiUsersIdCommentsGetPath = '/api/users/{id}/comments';

  /**
   * Get logged in user comments
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiUsersIdCommentsGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiUsersIdCommentsGet$Response(params: {

    /**
     * favorite movie id
     */
    id: string;
  }): Observable<StrictHttpResponse<Array<CommentDto>>> {

    const rb = new RequestBuilder(this.rootUrl, UsersService.ApiUsersIdCommentsGetPath, 'get');
    if (params) {
      rb.path('id', params.id, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<CommentDto>>;
      })
    );
  }

  /**
   * Get logged in user comments
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiUsersIdCommentsGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiUsersIdCommentsGet(params: {

    /**
     * favorite movie id
     */
    id: string;
  }): Observable<Array<CommentDto>> {

    return this.apiUsersIdCommentsGet$Response(params).pipe(
      map((r: StrictHttpResponse<Array<CommentDto>>) => r.body as Array<CommentDto>)
    );
  }

}
