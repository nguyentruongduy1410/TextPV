<?php

namespace Database\Seeders;

use DB;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('users')->insert([
            [
                'name' => 'Duyyyy',
                'email' => 'nguyentruongduy@gmail.com',
                'password' => 'nguyentruongduy@gmail.com',
                'phone' => '12345678990',
                'role' => 'admin',
            ],
            [
                'name' => 'Duyyyy2',
                'email' => 'nguyentruongduy2@gmail.com',
                'password' => 'nguyentruongduy2@gmail.com',
                'phone' => '1234567899',
                'role' => 'user',
            ]
        ]);
    }
}
