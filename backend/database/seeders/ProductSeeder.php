<?php

namespace Database\Seeders;

use DB;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class ProductSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('products')->insert([
            [
                "name" => "tên1",
                "image" => "anh1.jpg",
                "slug" => "234324234242wafwafawsanh1",
                "price" => "4000000",
                "sale_price" => "15000000",
                "description" => "day la game 1",
                "quantity" => "133",
                "rating" => "3",
                "category_id" => "1",
            ],
            [
                "name" => "tên2",
                "image" => "anh2.jpg",
                "slug" => "234324234242wafwafawsanh2",
                "price" => "5000000",
                "sale_price" => "15000000",
                "description" => "day la game 2",
                "quantity" => "133",
                "rating" => "3",
                "category_id" => "1",
            ],
            [
                "name" => "tên3",
                "image" => "anh3.jpg",
                "slug" => "234324234242wafwafawsanh3",
                "price" => "2000000",
                "sale_price" => "15000000",
                "description" => "day la game 2",
                "quantity" => "133",
                "rating" => "3",
                "category_id" => "1",
            ],
            [
                "name" => "tên4",
                "image" => "anh4.jpg",
                "slug" => "234324234242wafwafawsanh4",
                "price" => "9000000",
                "sale_price" => "15000000",
                "description" => "day la game 4",
                "quantity" => "133",
                "rating" => "3",
                "category_id" => "1",
            ],
            [
                "name" => "tên5",
                "image" => "anh5.jpg",
                "slug" => "234324234242wafwafawsanh33",
                "price" => "8000000",
                "sale_price" => "15000000",
                "description" => "day la game 5",
                "quantity" => "133",
                "rating" => "3",
                "category_id" => "1",
            ],
            [
                "name" => "tên6",
                "image" => "anh6.jpg",
                "slug" => "234324234242wafwafawsanh3336",
                "price" => "1000000",
                "sale_price" => "15000000",
                "description" => "day la game 5",
                "quantity" => "133",
                "rating" => "3",
                "category_id" => "1",
            ],
            [
                "name" => "tên5",
                "image" => "anh5.jpg",
                "slug" => "234324234242wafwafawssđfnh5",
                "price" => "8000000",
                "sale_price" => "15000000",
                "description" => "day la game 5",
                "quantity" => "133",
                "rating" => "3",
                "category_id" => "1",
            ],
            [
                "name" => "tên5",
                "image" => "anh5.jpg",
                "slug" => "234324234242wasádfwafawsanh5",
                "price" => "8000000",
                "sale_price" => "15000000",
                "description" => "day la game 5",
                "quantity" => "133",
                "rating" => "3",
                "category_id" => "1",
            ],
            [
                "name" => "tên5",
                "image" => "anh5.jpg",
                "slug" => "234324234242wafwafawsanh5",
                "price" => "8000000",
                "sale_price" => "15000000",
                "description" => "day la game 5",
                "quantity" => "133",
                "rating" => "3",
                "category_id" => "2",
            ],
            [
                "name" => "tên6",
                "image" => "anh6.jpg",
                "slug" => "234324234242wafwafawsanh6",
                "price" => "7000000",
                "sale_price" => "15000000",
                "description" => "day la game 6",
                "quantity" => "133",
                "rating" => "3",
                "category_id" => "2",
            ],
            [
                "name" => "tên7",
                "image" => "anh7.jpg",
                "slug" => "234324234242wafwafawsanh7",
                "price" => "6000000",
                "sale_price" => "15000000",
                "description" => "day la game 7",
                "quantity" => "133",
                "rating" => "3",
                "category_id" => "2",
            ],
            [
                "name" => "tên7",
                "image" => "anh7.jpg",
                "slug" => "234324234242wafwafawsanh8",
                "price" => "9000000",
                "sale_price" => "15000000",
                "description" => "day la game 7",
                "quantity" => "133",
                "rating" => "3",
                "category_id" => "2",
            ]
        ]);
    }
}
