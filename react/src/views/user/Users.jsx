import { useRef } from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axiosClient from "../../axios-client";
import { downloadExcel, useDownloadExcel } from "react-export-table-to-excel";
import Pagination from "../inc/Pagination";
import Loading from "../inc/Loading";

import i18next from '../../i18n'

export default function Users(){

    const tableRef = useRef(null);

    var page = 1;
    const [users, setUsers] = useState([]);
    const [metas, setMetas] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        getUsers();
    },[]);

    const paginate = (pageNumber) => {
        page = pageNumber;
        getUsers();
    }

    const getUsers = () => {
        setLoading(true);
        axiosClient.get('/users?page='+page)
        .then(({data}) => {
            setLoading(false);
            setUsers(data.data);
            setMetas(data.meta);
        })
        .catch(() => {
            setLoading(false);
        })
    }

    const deleteUser = (u) => {
        if(!window.confirm("Are you sure you want to delete user?")){
            return;
        }
        setLoading(true);
        axiosClient.delete('/users/'+u.id)
        .then(() => {
            setLoading(false);
            getUsers();
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

    return (
        <div className="container-fluid py-4">
  <div className="d-sm-flex justify-content-between">
    <div>
        <Link to="/users/new" className="btn btn-icon bg-gradient-primary">{i18next.t('new_user')}</Link>
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
          <h5 className="mb-0">{i18next.t('users_ucfirst')}</h5>
        </div>
        <div className="card">
            <div className="table-responsive">
                <table ref={tableRef} className="table align-items-center mb-0">
                    <thead>
                        <tr>
                            <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">{i18next.t('user_ucfirst')}</th>
                            <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">Function</th>
                            <th className="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Technology</th>
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
                        {!loading && users.map( u => (
                            <tr key={u.id}>
                                <td>
                                    <div className="d-flex px-2 py-1">
                                        <div className="avatar avatar-xs me-2 bg-gradient-dark">
                                            <span>{u.name.charAt(0)}</span>
                                        </div>
                                        <div className="d-flex flex-column justify-content-center">
                                            <h6 className="mb-0 text-xs">{u.name}</h6>
                                            <p className="text-xs text-secondary mb-0">{u.email}</p>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <p className="text-xs font-weight-bold mb-0">Manager</p>
                                    <p className="text-xs text-secondary mb-0">Organization</p>
                                </td>
                                <td className="align-middle text-center text-xs">
                                    <span className="badge badge-sm badge-success">Online</span>
                                </td>
                                <td className="align-middle text-center">
                                    <span className="text-secondary text-xs font-weight-normal">{u.created_at}</span>
                                </td>
                                <td className="align-middle">
                                    <Link to={"/users/"+u.id} key="userUpdate" className="btn btn-sm btn-info font-weight-normal text-xs mb-0">{i18next.t('edit_uppercase')}</Link>

                                    <Link onClick={ev => deleteUser(u)} className="btn btn-sm btn-danger font-weight-normal text-xs mb-0">{i18next.t('delete_uppercase')}</Link>
                                </td>
                            </tr>
                        ))}

                    </tbody>
                </table>
            </div>
            <Pagination data={metas} paginate={paginate} />
        </div>
      </div>
    </div>
  </div>
</div>

    )
}
