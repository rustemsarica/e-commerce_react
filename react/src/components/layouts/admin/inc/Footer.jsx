import { Helmet, HelmetProvider } from 'react-helmet-async';

export default function AdminFooter(){


    return (

        <footer className="footer py-4  ">
        <div className="container-fluid">
          <div className="row align-items-center justify-content-lg-between">
            <div className="col-lg-12 mb-lg-0 mb-4">
              <div className="copyright text-center text-sm text-muted">
                © <script>
                  document.write(new Date().getFullYear())
                </script>,
                made with by
                <a href="https://www.linkedin.com/in/rustemsarica/" className="font-weight-bold" target="_blank"> RS </a>
                for a better web.
              </div>
            </div>
          </div>
        </div>
      </footer>
    )
}
