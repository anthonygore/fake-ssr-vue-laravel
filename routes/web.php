<?php

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

Route::get('/', function () {
    $initial_state = [
        'name' => 'Anthony',
        'birthday' => '25th October'
    ];
    $initial_state['initial_state'] = $initial_state;
    return view('rendered.index', $initial_state);
});
