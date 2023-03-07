<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Http\Requests\UpdateAttributeRequest;
use App\Http\Resources\AttributeResource;

use App\Models\Attribute;
use App\Models\AttributeValue;

class AttributeController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return AttributeResource::collection(Attribute::with('values')->get());
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $attiribute = Attribute::create($request);
        return response(new AttributeResource($attiribute), 201);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Attribute  $attribute
     * @return \Illuminate\Http\Response
     */
    public function show(Attribute $attribute)
    {
        return response(new AttributeResource($attribute), 200);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Attribute  $attribute
     * @return \Illuminate\Http\Response
     */
    public function update(UpdateAttributeRequest $request, Attribute $attribute)
    {
        $data = $request->validated();
        $attribute->update($data);
        return response(new AttributeResource($attribute), 200);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Attribute  $attribute
     * @return \Illuminate\Http\Response
     */
    public function destroy(Attribute $attribute)
    {
        AttributeValue::where('attribute_id',$attribute->id)->delete();
        $attribute->delete();
        return response("", 204);
    }

    public function attributes()
    {
        return response()->json(['data'=>Attribute::selectRaw('id as value, name as label')->get()], 200);
    }

    public function valueStore(Request $request)
    {
        AttributeValue::create($request->all());
        return response($request, 201);
    }

    public function valueUpdate(Request $request, $id)
    {
        AttributeValue::where('id',$id)->update($request->all());
        return response($request, 200);
    }

    public function valueDelete($id)
    {
        AttributeValue::where('id',$id)->delete();
        return response("", 204);
    }
}
