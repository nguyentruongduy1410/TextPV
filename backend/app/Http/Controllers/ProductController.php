<?php

namespace App\Http\Controllers;

use App\Models\Product;
use Illuminate\Http\Request;

class ProductController extends Controller
{
    public function index(Request $request)
    {
        $query = Product::query()->with('category');

        if ($request->has('category_id')) {
            $query->where('category_id', $request->category_id);
        }
        $products = $query->orderBy('price', 'desc')->paginate(5);
        return response()->json($products);
    }

    public function users($id){
        $user = Product::find($id);
        if (!$user) {
            return response()->json(['error' => 'Không có user'], 404);
        }
        return response()->json($user);
    }
}
