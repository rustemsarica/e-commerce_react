<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->group(function(){
    Route::get('/user', function (Request $request) {
        return $request->user();
    });
    Route::post('/logout', 'AuthController@logout');
});



Route::post('/signup', 'AuthController@signup')->middleware('guest');
Route::post('/login', 'AuthController@login')->middleware('guest')->name('login');

Route::middleware('auth:sanctum')->group(function(){
    Route::apiResource('/users', UserController::class);
    Route::apiResource('/categories', CategoryController::class);
    Route::apiResource('/attributes', AttributeController::class);

    Route::get('/categories/{id}/subcategories', 'CategoryController@getSubCategories');
    Route::get('/categories/form/attributes', 'AttributeController@attributes');
    Route::post('/attributes/value/add', 'AttributeController@valueStore');
    Route::delete('/attributes/value/{id}', 'AttributeController@valueDelete');
    Route::put('/attributes/value/{id}', 'AttributeController@valueUpdate');
});

