import { useRef } from "react";
import { useState, useEffect } from "react";
import { Link, Navigate, useParams } from "react-router-dom";
import { downloadExcel, useDownloadExcel } from "react-export-table-to-excel";

import axiosClient from "../../../axios-client";
import Loading from "../../inc/Loading";
import i18next from '../../../i18n'

export default function Categories(){

    const {id} = useParams();

    const tableRef = useRef(null);
    const [categories, setCategories] = useState([]);
    const [loading, setLoading] = useState(false);


    useEffect(()=>{
        if(id){
            getCategories(id);
        }else{
            getCategories(0);
        }

    },[id])

    const getCategories = (id) => {
        setLoading(true);
        axiosClient.get('/categories/'+id+'/subcategories')
        .then(({data}) => {
            setLoading(false);
            setCategories(data.data);
        })
        .catch(() => {
            setLoading(false);
        })
    }

    const deleteCategory = (c) => {
        if(!window.confirm("Are you sure you want to delete category?")){
            return;
        }
        setLoading(true);
        axiosClient.delete('/categories/'+c.id)
        .then(() => {
            setLoading(false);
            getCategories();
        })
        .catch(() => {
            setLoading(false);
        })
    }

    function handleDownloadExcel() {
        if(users.length>0){
            const header = Object.keys(users[0]);
            downloadExcel({
            fileName: "users",
            sheet: "users",
            tablePayload: {
                header,
                // accept two different data structures
                body: users
            }
            });
        }

    }

    const updateStatus = (category,e) =>{

        if(e.currentTarget.checked){
            category.status=1;
        }else{
            category.status=0;
        }

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

        axiosClient.put('/categories/'+category.id, data)
        .then((res)=>{
            if(id){
                getCategories(id);
            }else{
                getCategories(0);
            }
        })
        .catch(err => {
            const response = err.response;
            if(response && response.status==422){

            }
        })
    }

    const updateFeatured = (category,e) =>{

        if(e.currentTarget.checked){
            category.featured=1;
        }else{
            category.featured=0;
        }

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

        axiosClient.put('/categories/'+category.id, data)
        .then((res)=>{
            if(id){
                getCategories(id);
            }else{
                getCategories(0);
            }
        })
        .catch(err => {
            const response = err.response;
            if(response && response.status==422){

            }
        })
    }

    return (
        <div className="container-fluid py-4">
  <div className="d-sm-flex justify-content-between">
    <div>
        <Link to="/categories/new" className="btn btn-icon bg-gradient-primary">{i18next.t('new_category')}</Link>
        {id && categories[0] && categories[0].parent_category &&
            <Link to={ categories[0].parent_category.parent_id==0 ? "/categories" : "/categories/"+categories[0].parent_category.parent_id } key={ categories[0].parent_category.parent_id==0 ? "mainCategories" : "subCategories"} className="btn btn-icon bg-gradient-primary ml-2">{i18next.t('parent_category')}</Link>
        }
    </div>
    <div className="d-flex">
      <div className="dropdown d-inline">
        <a
          href="#"
          className="btn btn-outline-dark dropdown-toggle"
          data-bs-toggle="dropdown"
          id="navbarDropdownMenuLink2"
        >
          Filters
        </a>
        <ul
          className="dropdown-menu dropdown-menu-lg-start px-2 py-3"
          aria-labelledby="navbarDropdownMenuLink2"
          data-popper-placement="left-start"
        >
          <li>
            <a className="dropdown-item border-radius-md" href="#"
              >Status: Paid</a
            >
          </li>
          <li>
            <a className="dropdown-item border-radius-md" href="#"
              >Status: Refunded</a
            >
          </li>
          <li>
            <a className="dropdown-item border-radius-md" href="#"
              >Status: Canceled</a
            >
          </li>
          <li>
            <hr className="horizontal dark my-2" />
          </li>
          <li>
            <a
              className="dropdown-item border-radius-md text-danger"
              href="#"
              >Remove Filter</a
            >
          </li>
        </ul>
      </div>
      <button
        className="btn btn-icon btn-outline-dark ms-2 export"
        data-type="csv"
        type="button"
        onClick={handleDownloadExcel}
      >
        <i className="material-icons text-xs position-relative">archive</i>
        Export to Excel
      </button>
    </div>
  </div>
  <div className="row">
    <div className="col-12">
      <div className="card">
        <div className="card-header">
          <h5 className="mb-0">{i18next.t('categories_ucfirst')}</h5>
        </div>
        <div className="card">
            <div className="table-responsive">
                <table ref={tableRef} className="table align-items-center mb-0">
                    <thead>
                        <tr>
                            <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">{i18next.t('category_uppercase')}</th>
                            <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">{i18next.t('attributes_uppercase')}</th>
                            <th className="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">{i18next.t('status_uppercase')}</th>
                            <th className="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">{i18next.t('featured_uppercase')}</th>
                            <th className="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">{i18next.t('date_uppercase')}</th>
                            <th className="text-secondary opacity-7"></th>
                        </tr>
                    </thead>
                    <tbody>
                        {loading &&
                            <tr>
                                <td colSpan={5} className="text-center"><Loading/></td>
                            </tr>
                        }
                        {!loading && categories.map( c => (
                            <tr key={c.id}>
                                <td>
                                    <div className="d-flex px-2 py-1">
                                        {c.image!=null &&
                                            <div>
                                                <img src="c.image" class="avatar avatar-sm me-3" />
                                            </div>
                                        }
                                        {c.image==null &&
                                            <div className="avatar avatar-xs me-2 bg-gradient-dark">
                                                <span>{c.name.charAt(0)}</span>
                                            </div>
                                        }

                                        <div className="d-flex px-2 py-1 justify-content-between w-100">

                                            <p className="text-xs font-weight-bold mb-0">{c.name}</p>
                                            {c.children_categories_count>0 &&
                                                <Link to={"/categories/"+c.id} key="subCategories" className="link-primary text-xs font-weight-bold mb-0" > Subs</Link>
                                            }


                                        </div>
                                    </div>
                                </td>
                                <td className="align-middle text-center">
                                        {c.attributes.map(a =>(
                                            <span key={a.id}  className="badge badge-sm badge-secondary ml-2" style={{textTransform:"none"}}>{a.name}</span>
                                        ))}



                                </td>
                                <td className="align-middle text-center">
                                    <div className="form-check form-switch m-auto d-inline-block">
                                        <input className="form-check-input" type="checkbox" defaultChecked={c.status} onChange={(e)=>updateStatus(c,e)} />
                                    </div>
                                </td>
                                <td className="align-middle text-center">
                                    <div className="form-check form-switch m-auto d-inline-block">
                                        <input className="form-check-input" type="checkbox" defaultChecked={c.featured} onChange={(e)=>updateFeatured(c,e)} />
                                    </div>
                                </td>
                                <td className="align-middle text-center">
                                    <span className="text-secondary text-xs font-weight-normal">{c.created_at}</span>
                                </td>
                                <td className="align-middle text-center">
                                    <Link to={"/categories/"+c.id+"/edit"} key="categoryUpdate" className="btn btn-sm btn-outline-primary mr-2" >{i18next.t('edit_uppercase')}</Link>

                                    <Link onClick={ev => deleteCategory(c)} className="btn btn-sm text-danger btn-outline-danger mr-2">{i18next.t('delete_uppercase')}</Link>
                                </td>
                            </tr>
                        ))}

                    </tbody>
                </table>
            </div>
        </div>
      </div>
    </div>
  </div>
</div>

    )
}
