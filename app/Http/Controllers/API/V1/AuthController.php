<?php

namespace App\Http\Controllers\API\V1;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Http\Requests\API\V1\RegisterRequest;

class AuthController extends Controller
{
    public function register(RegisterRequest $request){
        return $request->all();
    }
}
