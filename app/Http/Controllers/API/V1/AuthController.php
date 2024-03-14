<?php

namespace App\Http\Controllers\API\V1;

use App\Models\User;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Http\Requests\API\V1\RegisterRequest;
use App\Http\Requests\API\V1\Auth\LoginRequest;

class AuthController extends Controller
{
    public function register(RegisterRequest $request){
        
        try {
            User::create([
                'name' => $request->name,
                'email' => $request->email,
                'password'=> $request->password
            ]);

            return response()->json([
                'message' => 'User Registered Successful'
            ], 201);
        }
        catch(\Exception $ex) {
            return $ex;
            return response()-> json([
                'errors' => 'Unable to save the user record, please refresh webpage and try again' 
            ], 401);
        }
       
    }

    public function login(LoginRequest $request){
        
        return $request->all();
    }
}
