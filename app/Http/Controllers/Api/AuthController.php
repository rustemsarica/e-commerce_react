<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;

use App\Http\Requests\LoginRequest;
use App\Http\Requests\SignupRequest;

use Illuminate\Http\Request;

use App\Models\User;

use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;

class AuthController extends Controller
{
    public function login(LoginRequest $request)
    {
        $credantials = $request->validated();

        if(!Auth::attempt($credantials)){
            return response([
                'message' => 'Provided email address or password is incorrect.'
            ],422);
        }

        $user = Auth::user();
        $token = $user->createToken('main')->plainTextToken;
        return response( compact('user', 'token') );
    }

    public function signup(SignupRequest $request)
    {

        $data = $request->validated();

        $user = User::create([
            'name' => $data['name'],
            'email' => $data['email'],
            'password' => bcrypt($data['password']),
        ]);

        $token = $user->createToken('main')->plainTextToken;

        return response()->json( compact('user', 'token') );
    }

    public function logout(Request $request)
    {
        $user = $request->user();
        $user->currentAccessToken()->delete();

        return response('', 204);
    }

}
