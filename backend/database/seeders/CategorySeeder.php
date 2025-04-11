<?php

namespace Database\Seeders;

use DB;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class CategorySeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('categories')->insert([
            [
                'name' => 'tháng 8/2024',
            ],
            [
                'name' => 'tháng 9/2024',

            ],
            [
                'name' => 'tháng 10/2024',

            ],
            [
                'name' => 'tháng 11/2024',

            ]
        ]);
    }
}
