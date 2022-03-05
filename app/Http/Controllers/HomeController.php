<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class HomeController extends Controller
{
    public function home()
    {
        return view('home.home');
    }

    public function car()
    {
        return view('home.car');
    }

    public function carEquipment()
    {
        return view('home.carEquipment');
    }
}
