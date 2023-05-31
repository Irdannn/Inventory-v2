<?php

use App\Http\Controllers\AlurbarangController;
use App\Http\Controllers\PictureInvController;
use App\Http\Controllers\SopController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\ImageController;
use App\Http\Controllers\InventoryController;
use App\Http\Controllers\LaporanController;


/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::group(['middleware' => 'api', 'prefix'=> 'auth'], function($router){
    Route::post('/register', [AuthController::class, 'register']);
    Route::post('/login', [AuthController::class, 'login']);
    Route::get('/profile', [AuthController::class, 'profile']);
    Route::get('/logout', [AuthController::class, 'logout']);
    Route::post('/refresh', [AuthController::class, 'refresh']);
});

Route::group(['middleware' => 'api', 'prefix'=> 'inventory'], function($router){
    Route::get('/index', [InventoryController::class, 'index']);
    Route::post('/store', [InventoryController::class, 'store']);
    Route::get('/show/{id}', [InventoryController::class, 'show']);
    Route::get('/showpict/{id}/picture', [InventoryController::class, 'showpict']);
    Route::get('/tempat/{tempat}', [InventoryController::class, 'tempat']);
    Route::put('/update/{id}', [InventoryController::class, 'update']);
    Route::delete('/destroy/{id}', [InventoryController::class, 'destroy']);
});

// Route::group(['middleware' => 'api', 'prefix'=> 'inv'], function($router){
//     Route::get('/index', [InventoryController::class, 'index']);
//     Route::post('/upload', [ImageController::class, 'upload']);
// });

Route::group(['middleware' => 'api', 'prefix'=> 'picture'], function($router){
    Route::get('/index', [PictureInvController::class, 'index']);
    Route::post('/store', [PictureInvController::class, 'store']);
    Route::get('/show/{id}/picture', [PictureInvController::class, 'show']);
    // Route::put('/update', [PictureInvController::class, 'update']);
    // Route::put('/update/{id}', [PictureInvController::class, 'update']);
    // Route::patch('/update/{id}', [PictureInvController::class, 'update']);
    // Route::delete('/destroy/{id}', [PictureInvController::class, 'destroy']);
});

Route::group(['middleware' => 'api', 'prefix'=> 'alur'], function($router){
    Route::get('/index', [AlurbarangController::class, 'index']);
    Route::post('/store', [AlurbarangController::class, 'store']);
    Route::get('/show/{id}', [AlurbarangController::class, 'show']);
    Route::put('/update', [AlurbarangController::class, 'update']);
    Route::put('/update/{id}', [AlurbarangController::class, 'update']);
    Route::patch('/update/{id}', [AlurbarangController::class, 'update']);
    Route::delete('/destroy/{id}', [AlurbarangController::class, 'destroy']);
});

Route::group(['middleware' => 'api', 'prefix'=> 'laporan'], function($router){
    Route::get('/index', [LaporanController::class, 'index']);
    Route::post('/store', [LaporanController::class, 'store']);
    Route::get('/show/{id}', [LaporanController::class, 'show']);
    Route::put('/update', [LaporanController::class, 'update']);
    Route::put('/update/{id}', [LaporanController::class, 'update']);
    Route::patch('/update/{id}', [LaporanController::class, 'update']);
    Route::delete('/destroy/{id}', [LaporanController::class, 'destroy']);
});

Route::group(['middleware' => 'api', 'prefix'=> 'sop'], function($router){
    Route::get('/index', [SopController::class, 'index']);
    Route::post('/store', [SopController::class, 'store']);
    Route::get('/show/{id}', [SopController::class, 'show']);
    Route::put('/update', [SopController::class, 'update']);
    Route::put('/update/{id}', [SopController::class, 'update']);
    Route::patch('/update/{id}', [SopController::class, 'update']);
    Route::delete('/destroy/{id}', [SopController::class, 'destroy']);
});