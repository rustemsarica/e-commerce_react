import { useRef } from "react";
import { useState, useEffect } from "react";
import { Link, Navigate, useParams } from "react-router-dom";

import axiosClient from "../../../axios-client";
import Loading from "../../inc/Loading";
import i18next from '../../../i18n'

export default function AttributeDetail(){

    const tableRef = useRef(null);
    const nameRef = useRef();
    const valueRef = useRef();

    const {id} = useParams();

    const [loading, setLoading] = useState(false);
    const [edit, setEdit] = useState(false);

    const [attribute, setAttribute] = useState({
        id:null,
        name:'',
        values:[]
    });

    const [newValue, setNewValue] = useState({
        id:null,
        value:''
    });


    useEffect(()=>{
        getAttribute(id);
    },[id])

    const getAttribute = (id) => {
        setLoading(true);
        axiosClient.get('/attributes/'+id)
        .then(({data}) => {
            setLoading(false);
            setAttribute(data);
        })
        .catch(() => {
            setLoading(false);
        })
    }

    const deleteAttribute = (attr) => {
        if(!window.confirm("Are you sure you want to delete attribute and values?")){
            return;
        }
        setLoading(true);
        axiosClient.delete('/attributes/'+attr.id)
        .then(() => {
            setLoading(false);
            getAttribute(id);
        })
        .catch(() => {
            setLoading(false);
        })
    }

    const deleteValue = (attr) => {
        if(!window.confirm("Are you sure you want to delete attribute and values?")){
            return;
        }
        setLoading(true);
        axiosClient.delete('/attributes/value/'+attr.id)
        .then(() => {
            setLoading(false);
            getAttribute(id);
        })
        .catch(() => {
            setLoading(false);
        })
    }

    const update = () => {

        axiosClient.put('/attributes/'+attribute.id, attribute)
        .then((res) => {
            setLoading(false);
            getAttribute(id);
            setEdit(false);
        })
        .catch((res) => {
            setLoading(false);
        })
    }

    const onSubmit = () => {

        if(newValue.id){
            var data = {
                "attribute_id": id,
                "value": newValue.value
            }
            axiosClient.put('/attributes/value/'+newValue.id, data)
            .then((res) => {
                setLoading(false);
                getAttribute(id);
            })
            .catch((res) => {
                setLoading(false);
            })

        }else{
            var data = {
                "attribute_id": id,
                "value": newValue.value
            }
            axiosClient.post('/attributes/value/add', data)
            .then((res) => {
                setLoading(false);
                getAttribute(id);
            })
            .catch((res) => {
                setLoading(false);
            })
        }

    }


    return (
        <div className="container-fluid py-4">
            <div className="row">
                <div className="col-md-9">
                    <div className="card">
                        <div className="card-header d-flex justify-content-between">
                            {edit ?
                                <div className="text-center d-flex">
                                    <input
                                    value={attribute.name}
                                    onChange={ev => setAttribute({...attribute, name:ev.target.value }) }
                                    ref={nameRef}
                                    className="form-control my-auto" type="text"
                                    placeholder="Name"
                                    autoComplete="off"
                                    style={{maxWidth:"300px"}}
                                    />
                                    <div className="d-flex">
                                    <button className="btn btn-icon btn-2 btn-primary mb-0" type="button" onClick={()=>update()}>
                                        <span className="btn-inner--icon"><i className="material-icons">save</i></span>
                                    </button>
                                    <button className="btn btn-icon btn-2 btn-dark mb-0" type="button" onClick={()=>setEdit(false)}>
                                        <span className="btn-inner--icon"><i className="material-icons">cancel</i></span>
                                    </button>
                                    </div>
                                </div>
                                :
                                <h5 className="mb-0">{attribute.name} <i onClick={()=>setEdit(true)} className="material-icons-round opacity-10 cursor-pointer">edit</i></h5>
                            }
                            <div>
                                <Link onClick={ev => deleteAttribute(attribute)} className="btn text-danger btn-outline-danger mb-0">{i18next.t('delete_uppercase')}</Link>
                            </div>

                        </div>
                        <div className="card">
                            <div className="table-responsive">
                                <table ref={tableRef} className="table align-items-center mb-0">
                                    <thead>
                                        <tr>
                                            <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">{i18next.t('values_uppercase')}</th>
                                            <th className="text-secondary opacity-7"></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {loading &&
                                            <tr>
                                                <td colSpan={3} className="text-center"><Loading/></td>
                                            </tr>
                                        }
                                        {!loading && attribute.values.length>0 &&
                                        attribute.values.map(attr => (
                                            <tr key={attr.id}>
                                                <td className="align-middle" style={{whiteSpace:"unset"}}>
                                                    <div className="d-flex px-2 py-1">
                                                        <div className="d-flex px-2 py-1 justify-content-between w-100">
                                                            <p className="text-xs font-weight-bold mb-0">{attr.value}</p>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className="align-middle text-center">
                                                    <Link onClick={ev => setNewValue({...attr, id:attr.id,value:attr.value})} className="btn btn-sm btn-outline-primary mr-2" >{i18next.t('edit_uppercase')}</Link>

                                                    <Link onClick={ev => deleteValue(attr)} className="btn btn-sm text-danger btn-outline-danger mr-2">{i18next.t('delete_uppercase')}</Link>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="card">
                        <div className="card-header">
                            <h5 className="mb-0">{newValue.id ? i18next.t('update_value') : i18next.t('new_value')}</h5>
                        </div>
                        <div className="card px-3 pb-2">
                            <form >
                                <div className="mb-3">
                                    <label>{i18next.t('name_ucfirst')}:</label>
                                    <input
                                    value={newValue.value}
                                    onChange={ev => setNewValue({...newValue, value:ev.target.value }) }
                                    ref={valueRef}
                                    className="form-control mb-2" type="text"
                                    placeholder={i18next.t('value_ucfirst')}
                                    autoComplete="off" />
                                </div>
                                <button type="button" className="btn btn-primary" onClick={onSubmit}>{newValue.id ? i18next.t('update_uppercase') : i18next.t('save_uppercase')}</button>
                                {newValue.id && <button type="button" onClick={ev => setNewValue({id:null,value:''})} className="btn btn-secondary ml-2">{i18next.t('clear_ucfirst')}</button> }
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}
