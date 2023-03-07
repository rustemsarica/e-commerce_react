import React, { useState } from "react"
import { useEffect } from "react"
import { useRef } from "react"
import { useNavigate, useParams } from "react-router-dom"
import axiosClient from "../../../axios-client"
import Loading from "../../inc/Loading"

import Select from 'react-select';
import Modal from 'react-bootstrap/Modal';
import slugify from 'react-slugify';

export default function CategoryForm(){

    const nameRef = useRef();
    const imageRef = useRef();
    const slugRef = useRef();
    const orderRef = useRef();

    const [errors, setErrors] = useState(null);
    const [show, setShow] = useState(false);

    const {id} = useParams();
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);

    const [parentCategoryTree, setParentCategoryTree] = useState([]);
    const [parentIdTree, setParentIdTree] = useState([]);
    const [subCategories, setSubCategories] = useState([]);
    const [attributes, setAttributes] = useState([]);
    const [options, setOptions] = useState([]);
    const [file, setFile] = useState({
        file: null,
        base64URL: ""
    });

    const [category, setCategory] = useState({
        id: null,
        parent_id: 0,
        parent_tree: '',
        name: '',
        image: '',
        slug: '',
        attributes: null,
        top:0,
        featured:0,
        status:1
    });

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    if(id){
        useEffect(()=> {
            setLoading(true);
            axiosClient.get('/categories/'+id)
            .then( ({data})=>{
                setLoading(false);
                setCategory(data);
                setParentCategoryTree(data.parent_categories)
                setParentIdTree(data.parent_tree.split(',').map( Number ))
                getSubCategories(data.parent_id);
            })
            .catch(()=>{
                setLoading(false);
            })

            getAttributes();

        },[])
    }else{
        useEffect(()=>{

            axiosClient.get('/categories/0/subcategories')
            .then(({data})=>{
                if(data.data){
                    setSubCategories(data.data);
                    setParentCategoryTree([]);
                    setParentIdTree([]);
                }
            })

            getAttributes();

        },[])
    }

    const getBase64 = file => {
        return new Promise(resolve => {
            let baseURL = "";
            let reader = new FileReader();

            reader.readAsDataURL(file);

            reader.onload = () => {

            baseURL = reader.result;
            resolve(baseURL);
          };
        });
    };

    const handleFileInputChange = e => {
        let file = e.target.files[0];

        getBase64(file)
          .then(result => {
            file["base64"] = result;
            setFile({
              base64URL: result,
              file
            });

        setCategory({...category, image:result})
          })
          .catch(err => {
            console.log(err);
          });

        setFile({
          file: e.target.files[0]
        });

        setCategory({...category, image:file.base64URL})
    };

    const onClick = (c) => {

        if(!show){
            setShow(true);
            if(c.id === parentIdTree[parentIdTree.length-1]){
                return
            }
            if(c.parent_id===0){
                setParentCategoryTree([]);
                setParentIdTree([]);
                getSubCategories(0);
                return
            }
        }

        if(parentIdTree.indexOf(c.parent_id) > -1 || c.parent_id==0){
            var index = parentIdTree.indexOf(c.parent_id)+1;
            while(parentCategoryTree.length>index){
                parentCategoryTree.pop();
                parentIdTree.pop();
            }
            parentCategoryTree.slice(0, index);
            parentIdTree.slice(0, index);

            parentCategoryTree.push(c)
            parentIdTree.push(c.id)

        }else{
            parentCategoryTree.push(c)
            parentIdTree.push(c.id)
            setParentCategoryTree(parentCategoryTree)
            setParentIdTree(parentIdTree)
        }


        axiosClient.get('/categories/'+c.id+'/subcategories')
        .then(({data})=>{
            if(data.data && data.data.length>0){
                setSubCategories(data.data);
            }else{
                setShow(false)
            }
        })
        .catch( () => {

        })

        setCategory({...category, parent_id:parentIdTree[parentIdTree.length-1],parent_tree:parentIdTree.join(',')})
    }

    const getSubCategories = (parentId) => {

        axiosClient.get('/categories/'+parentId+'/subcategories')
        .then(({data})=>{
            if(data.data){
                setSubCategories(data.data);
            }
        })
        .catch( () => {

        })
    }


    if(category.attributes && attributes.length>0){

        category.attributes.split(',').forEach((ca)=>{
        options.push(attributes[attributes.findIndex((a)=>{return a.value==ca})])
        })
    }


    const getAttributes = () => {
        axiosClient.get('/categories/form/attributes')
        .then(({data})=>{
            if(data.data){
                setAttributes(data.data);
            }
        })

    }

    const onSubmit = (ev)=> {
        ev.preventDefault()
        const data = {
            id: category.id,
            name: category.name,
            parent_id: category.parent_id,
            parent_tree: category.parent_tree,
            slug: category.slug,
            image: category.image,
            featured:category.featured,
            top:category.top,
            status:category.status,
            attributes: category.attributes,
        }

        if(category.id){
            axiosClient.put('/categories/'+category.id, data)
            .then((res)=>{
                navigate('/categories')
            })
            .catch(err => {
                const response = err.response;
                if(response && response.status==422){
                    setErrors(response.data.errors);
                }
            })
        }else{
            axiosClient.post('/categories', data)
            .then(()=>{
                navigate('/categories')
            })
            .catch(err => {
                const response = err.response;
                if(response && response.status==422){
                    setErrors(response.data.errors);
                }
            })
        }
    }

    const setAttribute = (val) => {
        var arr = [];
        val.forEach(element => {
            arr.push(element.value)
        });
        setCategory({...category, attributes: arr.length>0 ? arr.join(',') : null})
    };

    return (
        <div className="container-fluid py-4">
            <div className="row">
                <div className="col-md-6 m-auto">
                    {loading &&
                        <Loading/>
                    }
                    {!loading &&
                        <div className="card my-4">
                            <div className="card-header p-0 position-relative mt-n4 mx-3 z-index-2">
                                <div className="bg-gradient-primary shadow-primary border-radius-lg pt-4 pb-3">
                                    <h6 className="text-white text-capitalize ps-3 text-center">{id && category.name }{!id && "New Category" }</h6>
                                </div>
                            </div>
                            <div className="card-body px-3 pb-2">
                                <form onSubmit={onSubmit}>
                                    { errors &&
                                        <div className="alert alert-danger">
                                            {Object.keys(errors).map(key => (
                                                <div key={key}>{errors[key][0]}</div>
                                            ))}
                                        </div>
                                    }

                                    <div className="mb-3">
                                        <label>Name:</label>
                                        <input
                                        value={category.name}
                                        onChange={ev => setCategory({...category, name:ev.target.value, slug:slugify(ev.target.value)}) }
                                        ref={nameRef}
                                        className="form-control mb-2" type="text"
                                        placeholder="Name"
                                        autoComplete="off" />
                                    </div>

                                    <label>Parent Category:</label>
                                    { parentCategoryTree.length>0 &&
                                        <div>
                                            <ul className="list-inline mb-0">
                                            { parentCategoryTree.map( p =>
                                                (
                                                    <li className="list-inline-item" key={p.id}>
                                                    <span key={p.id} onClick={ev => onClick(p)} className="btn btn-sm btn-outline-secondary" style={{textTransform:"none"}}>{p.name}</span>
                                                    {(parentIdTree.indexOf(p.id)+1) < parentIdTree.length &&
                                                    <i className="material-icons-round ms-2">keyboard_double_arrow_right</i> }
                                                    </li>
                                                )
                                            )
                                            }
                                            </ul>
                                        </div>
                                    }

                                    <button type="button" className="btn btn-outline-primary d-block" onClick={handleShow} style={{textTransform:"none"}}>
                                        Select Parent Category
                                    </button>

                                    <div className="mb-3">
                                        <label>Image:</label>
                                        <input ref={imageRef} className="form-control mb-2" type="file" placeholder="Image" onChange={handleFileInputChange} accept="image/*" />
                                        {file && file.base64URL!="" &&
                                        <img src={file.base64URL} alt="" style={{width:"100px"}} />
                                        }
                                    </div>

                                    <div className="mb-3">

                                        <label>Atributes:</label>
                                        <Select
                                            name="attributes[]"
                                            isMulti
                                            defaultValue={options}
                                            options={attributes}
                                            onChange={setAttribute}
                                        />
                                    </div>

                                    <div className="mb-3">
                                        <label>Slug:</label>
                                        <input value={category.slug} onChange={ev => setCategory({...category, slug:ev.target.value})} ref={slugRef} className="form-control mb-2" type="text" placeholder="Slug" autoComplete="off" />
                                    </div>

                                    <div className="mb-3">
                                        <label>Order:</label>
                                        <input value={category.top} onChange={ev => setCategory({...category, top:ev.target.value})} ref={orderRef} className="form-control mb-2" type="number" placeholder="Order" autoComplete="off" />
                                    </div>

                                    <div className="form-check form-switch mb-3">
                                        <input className="form-check-input" type="checkbox" onChange={ev => setCategory({...category, status:ev.target.checked ? 1 : 0})} checked={category.status==1 ? true : false} />
                                        <label className="form-check-label">Status</label>
                                    </div>

                                    <div className="form-check form-switch mb-3">
                                        <input className="form-check-input" type="checkbox" onChange={ev => setCategory({...category, featured:ev.target.checked ? 1 : 0})} checked={category.featured==1 ? true : false} />
                                        <label className="form-check-label">Fearured</label>
                                    </div>

                                    <button className="btn btn-primary my-2 w-100">Save</button>
                                </form>
                            </div>
                        </div>
                    }
                </div>
            </div>

            <Modal show={show} onHide={handleClose} >
                <Modal.Header>
                    <Modal.Title>Parent Category</Modal.Title>
                    <div onClick={handleClose} className="cursor-pointer" style={{fontSize:"30px"}}>&times;</div>
                </Modal.Header>
                <Modal.Body>
                    <ul className="list-unstyled px-4">
                        {subCategories.map( c => (
                            <li className="link-dark cursor-pointer" key={c.id} onClick={ev => onClick(c)} >{c.name}</li>
                        ))}
                    </ul>
                </Modal.Body>
            </Modal>
        </div>
    )
}
