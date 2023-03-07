
export default function Pagination(props){
    const links = props.data.links;

    return(
            <div className="dataTable-bottom px-4 py-3 d-flex justify-content-between">
              <div className="dataTable-info my-auto">Showing {props.data.from} to {props.data.to} of {props.data.total} entries</div>
                {props.data.last_page > 1 &&
                <nav className="dataTable-pagination">
                    <ul className="pagination my-auto">
                        {links.map( (l, index) => (
                            l.url!=null &&
                            <li key={index} className={ l.active ? "cursor-pointer page-item active" : "cursor-pointer page-item"} >
                                <a onClick={() => props.paginate(l.url.split('=')[1])} className="page-link"
                                data-page={ l.url.split('=')[1] } >
                                    {index==0 && <span className="material-icons">keyboard_arrow_left</span>}
                                    {index==links.length-1 && <span className="material-icons">keyboard_arrow_right</span>}
                                    {index!=0 && index!=links.length-1 && l.label}
                                </a>
                            </li>

                        ))}
                    </ul>
                </nav>
                }
            </div>
    )
}
