<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UpdateCategoryRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, mixed>
     */
    public function rules()
    {
        return [
            'name' => 'required|string|max:150',
            'parent_id' => 'required|int',
            'parent_tree' => '',
            'slug' => 'required|string|unique:categories,slug,'.$this->id,
            'image' => '',
            'featured' => '',
            'top' => '',
            'status' => '',
            'attributes' => ''
        ];
    }
}
