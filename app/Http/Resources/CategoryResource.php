<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class CategoryResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public function toArray($request)
    {
        return [
            'id' => $this->id,
            'parent_id' => $this->parent_id,
            'parent_tree' => $this->parent_tree,
            'parent_categories' => $this->parent_categories,
            'name' => $this->name,
            'attributes' => $this->attributes,
            'status' => $this->status,
            'featured' => $this->featured,
            'image' => $this->image,
            'slug' => $this->slug,
            'top' => $this->top,
            'created_at' => $this->created_at->format('d/m/Y'),
          ];
    }
}
