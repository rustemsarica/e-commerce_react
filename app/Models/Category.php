<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

use App\Models\Attribute;

class Category extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'parent_id',
        'parent_tree',
        'slug',
        'image',
        'featured',
        'top',
        'status',
        'attributes'
    ];

    public function childrenCategories()
    {
        return $this->hasMany(Category::class, 'parent_id');
    }

    public function parentCategory()
    {
        return $this->belongsTo(Category::class, 'parent_id');
    }

    public function attributesDetail()
    {
        return Attribute::whereIn('id', explode(',', $this->attributes));
    }

    public function delete_category($id)
    {
        $category = Category::where('id', $id)->first();
        if (!is_null($category)) {
            $this->move_children_to_parent($category->id);
            $category->delete();
        }

    }

    public function move_children_to_parent($id)
    {
        $children_ids = $this->subCategoriesIds($id);

        $category = Category::where('id', $id)->first();

        Category::whereIn('id', $children_ids)->update(['parent_id' => $category->parent_id]);

    }


    public function subCategoriesIds($id, $container = array())
    {
        $children = DB::table('categories')->select('id')->where('parent_id',$id)->get();

        if (!empty($children)) {
            foreach ($children as $child) {
                $container[] = $child->id;
                $container = $this->subCategoriesIds($child->id, $container);
            }
        }

        return $container;
    }

    public function subCategories($id)
    {
        $children = $this->where('parent_id',$id)->get();

        return $children;
    }
}
