<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\CarController;
use \App\Http\Controllers\HomeController;
/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/
Route::get('/',[HomeController::class,'home'] )->name('home');
Route::get('/car',[HomeController::class,'car'] )->name('car');
Route::get('/car_equipment',[HomeController::class,'carEquipment'] )->name('carEquipment');
