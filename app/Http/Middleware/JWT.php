<?php

namespace App\Http\Middleware;

use Closure;

class JWT
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle($request, Closure $next)
    {
        try {
            $user = auth()->userOrFail();
        }catch(\Tymon\JWTAuth\Exceptions\TokenExpiredException $e) {
            return response()->json(['status' => 'Token is Invalid'], 401);
        } catch (\Tymon\JWTAuth\Exceptions\TokenInvalidException $e) {
            return response()->json(['status' => 'Token is Expired'], 401);
        }catch(\Tymon\JWTAuth\Exceptions\JWTException $e){
            return response()->json(['status' => 'Authorization Token not found'], 401);
        }
        return $next($request);
    }
}
