import { useRef } from "react";
import { useState, useEffect } from "react";
import { Link, Navigate, useParams } from "react-router-dom";

import axiosClient from "../../../axios-client";
import Loading from "../../inc/Loading";
import i18next from '../../../i18n'

export default function Attributes(){

    const tableRef = useRef(null);
    const nameRef = useRef();

    const [loading, setLoading] = useState(false);

    const [attributes, setAttributes] = useState([]);
    const [newAttribute, setNewAttribute] = useState({
        id:null,
        name:''
    });


    useEffect(()=>{
        getAttributes();
    },[])

    const getAttributes = () => {
        setLoading(true);
        axiosClient.get('/attributes')
        .then(({data}) => {
            setLoading(false);
            setAttributes(data.data);
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
            getAttributes();
        })
        .catch(() => {
            setLoading(false);
        })
    }


    return (
        <div className="container-fluid py-4">
  <div className="d-sm-flex justify-content-between">
    <div>
        <Link to="/categories/new" className="btn btn-icon bg-gradient-primary">{i18next.t('new_attribute')}</Link>
    </div>
  </div>
  <div className="row">
    <div className="col-md-9">
      <div className="card">
        <div className="card-header">
          <h5 className="mb-0">{i18next.t('attributes_ucfirst')}</h5>
        </div>
        <div className="card">
            <div className="table-responsive">
                <table ref={tableRef} className="table align-items-center mb-0">
                    <thead>
                        <tr>
                            <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">{i18next.t('attributes_ucfirst')}</th>
                            <th className="text-secondary opacity-7"></th>
                        </tr>
                    </thead>
                    <tbody>
                        {loading &&
                            <tr>
                                <td colSpan={3} className="text-center"><Loading/></td>
                            </tr>
                        }
                        {!loading && attributes.map( c => (
                            <tr key={c.id}>
                                <td className="align-middle" style={{whiteSpace:"unset"}}>
                                    <div className="d-flex px-2 py-1">
                                        <div className="d-flex px-2 py-1 justify-content-between w-100">
                                            <p className="text-xs font-weight-bold mb-0">{c.name}</p>
                                        </div>
                                    </div>
                                    <div>
                                        {c.values.map(a =>(
                                            <span key={a.id} className="badge badge-sm badge-secondary ml-2" style={{textTransform:"none"}}>{a.value}</span>
                                        ))}
                                    </div>
                                </td>
                                <td className="align-middle text-center">
                                    <Link to={"/attributes/"+c.id} key="categoryUpdate" className="btn btn-sm btn-outline-primary mr-2" >{i18next.t('edit_uppercase')}</Link>

                                    <Link onClick={ev => deleteAttribute(c)} className="btn btn-sm text-danger btn-outline-danger mr-2">{i18next.t('delete_uppercase')}</Link>
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
          <h5 className="mb-0">{i18next.t('new_attribute')}</h5>
        </div>
        <div className="card px-3 pb-2">
            <form action="">
                <div className="mb-3">
                    <label>{i18next.t('name_ucfirst')}:</label>
                    <input
                    onChange={ev => setNewAttribute({...newAttribute, name:ev.target.value }) }
                    ref={nameRef}
                    className="form-control mb-2" type="text"
                    placeholder="Name"
                    autoComplete="off" />
                </div>
                <button className="btn btn-primary my-2 w-100">{i18next.t('save_uppercase')}</button>
            </form>
        </div>
      </div>
    </div>
  </div>
</div>

    )
}
