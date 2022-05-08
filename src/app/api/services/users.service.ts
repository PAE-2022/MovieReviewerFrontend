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
import { CreateUserDto } from '../models/create-user-dto';
import { FollowDto } from '../models/follow-dto';
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

}
