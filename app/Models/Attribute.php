<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

use App\Models\AttributeValue;

class Attribute extends Model
{
    use HasFactory;
    protected $with = ['values'];
    protected $fillable = [
        'name'
    ];

    public function values()
    {
        return $this->hasMany(AttributeValue::class);
    }

}
