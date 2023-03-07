import { useEffect } from "react";
import { Link, Navigate, Outlet } from "react-router-dom";
import axiosClient from "../../../axios-client";
import { useStateContext } from "../../contexts/ContextProvider";

import '../../../assets/css/bootstrap.min.css';
import '../../../assets/admin/css/nucleo-icons.css';
import '../../../assets/admin/css/nucleo-svg.css';
import '../../../assets/admin/css/material-dashboard.css';
import '../../../index.css';


import AdminHeader from "./inc/Header";
import AdminAside from "./inc/Aside";
import AdminFooter from "./inc/Footer";

export default function AdminLayout(){
    const { user, token, setUser, setToken } = useStateContext()

    if(!token){
        return <Navigate to="/login" />
    }

    const onLogout = (ev) => {
        ev.preventDefault()

        axiosClient.post('/logout')
        .then(() => {
            setUser({})
            setToken(null)
        })
        .catch(err => {
            const response = err.response;
            if(response && response.status==422){
                setErrors(response.data.errors);
            }
        })
    }

    const sidebarColor = (ev) => {
        var parent = document.querySelector(".nav-link.active");
        var color = ev.currentTarget.getAttribute("data-color");

        if (parent.classList.contains('bg-gradient-primary')) {
            parent.classList.remove('bg-gradient-primary');
        }
        if (parent.classList.contains('bg-gradient-dark')) {
            parent.classList.remove('bg-gradient-dark');
        }
        if (parent.classList.contains('bg-gradient-info')) {
            parent.classList.remove('bg-gradient-info');
        }
        if (parent.classList.contains('bg-gradient-success')) {
            parent.classList.remove('bg-gradient-success');
        }
        if (parent.classList.contains('bg-gradient-warning')) {
            parent.classList.remove('bg-gradient-warning');
        }
        if (parent.classList.contains('bg-gradient-danger')) {
            parent.classList.remove('bg-gradient-danger');
        }
        parent.classList.add('bg-gradient-' + color);
    }

    const sidebarType = (ev) => {
        var a = ev.currentTarget;
        var parent = a.parentElement.children;
        var color = a.getAttribute("data-class");
        var body = document.querySelector("body");
        var bodyWhite = document.querySelector("body:not(.dark-version)");
        var bodyDark = body.classList.contains('dark-version');

        var colors = [];

        for (var i = 0; i < parent.length; i++) {
          parent[i].classList.remove('active');
          colors.push(parent[i].getAttribute('data-class'));
        }

        if (!a.classList.contains('active')) {
          a.classList.add('active');
        } else {
          a.classList.remove('active');
        }

        var sidebar = document.querySelector('.sidenav');

        for (var i = 0; i < colors.length; i++) {
          sidebar.classList.remove(colors[i]);
        }

        sidebar.classList.add(color);


        // Remove text-white/text-dark classes
        if (color == 'bg-transparent' || color == 'bg-white') {
          var textWhites = document.querySelectorAll('.sidenav .text-white');
          for (let i = 0; i < textWhites.length; i++) {
            textWhites[i].classList.remove('text-white');
            textWhites[i].classList.add('text-dark');
          }
        } else {
          var textDarks = document.querySelectorAll('.sidenav .text-dark');
          for (let i = 0; i < textDarks.length; i++) {
            textDarks[i].classList.add('text-white');
            textDarks[i].classList.remove('text-dark');
          }
        }

        if (color == 'bg-transparent' && bodyDark) {
          var textDarks = document.querySelectorAll('.navbar-brand .text-dark');
          for (let i = 0; i < textDarks.length; i++) {
            textDarks[i].classList.add('text-white');
            textDarks[i].classList.remove('text-dark');
          }
        }

        // Remove logo-white/logo-dark

        if ((color == 'bg-transparent' || color == 'bg-white') && bodyWhite) {
          var navbarBrand = document.querySelector('.navbar-brand-img');
          var navbarBrandImg = navbarBrand.src;

          if (navbarBrandImg.includes('logo-ct.png')) {
            var navbarBrandImgNew = navbarBrandImg.replace("logo-ct", "logo-ct-dark");
            navbarBrand.src = navbarBrandImgNew;
          }
        } else {
          var navbarBrand = document.querySelector('.navbar-brand-img');
          var navbarBrandImg = navbarBrand.src;
          if (navbarBrandImg.includes('logo-ct-dark.png')) {
            var navbarBrandImgNew = navbarBrandImg.replace("logo-ct-dark", "logo-ct");
            navbarBrand.src = navbarBrandImgNew;
          }
        }

        if (color == 'bg-white' && bodyDark) {
          var navbarBrand = document.querySelector('.navbar-brand-img');
          var navbarBrandImg = navbarBrand.src;

          if (navbarBrandImg.includes('logo-ct.png')) {
            var navbarBrandImgNew = navbarBrandImg.replace("logo-ct", "logo-ct-dark");
            navbarBrand.src = navbarBrandImgNew;
          }
        }
    }

    const navbarFixed = (ev) => {

        let classes = ['position-sticky', 'blur', 'shadow-blur', 'left-auto', 'top-3', 'z-index-sticky'];
        const navbar = document.getElementById('navbarBlur');

        if (!ev.currentTarget.getAttribute("checked")) {
          navbar.classList.add(...classes);
          navbar.setAttribute('data-scroll', 'true');
          navbarBlurOnScroll('navbarBlur');
          ev.currentTarget.setAttribute("checked", "true");
        } else {
          navbar.classList.remove(...classes);
          navbar.setAttribute('data-scroll', 'false');
          navbarBlurOnScroll('navbarBlur');
          ev.currentTarget.removeAttribute("checked");
        }
    }

    const darkMode = (ev) => {
        var el = ev.currentTarget;
        const body = document.getElementsByTagName('body')[0];
        const hr = document.querySelectorAll('div:not(.sidenav) > hr');
        const hr_card = document.querySelectorAll('div:not(.bg-gradient-dark) hr');
        const text_btn = document.querySelectorAll('button:not(.btn) > .text-dark');
        const text_span = document.querySelectorAll('span.text-dark, .breadcrumb .text-dark');
        const text_span_white = document.querySelectorAll('span.text-white, .breadcrumb .text-white');
        const text_strong = document.querySelectorAll('strong.text-dark');
        const text_strong_white = document.querySelectorAll('strong.text-white');
        const text_nav_link = document.querySelectorAll('a.nav-link.text-dark');
        const text_nav_link_white = document.querySelectorAll('a.nav-link.text-white');
        const secondary = document.querySelectorAll('.text-secondary');
        const bg_gray_100 = document.querySelectorAll('.bg-gray-100');
        const bg_gray_600 = document.querySelectorAll('.bg-gray-600');
        const btn_text_dark = document.querySelectorAll('.btn.btn-link.text-dark, .material-icons.text-dark');
        const btn_text_white = document.querySelectorAll('.btn.btn-link.text-white, .material-icons.text-white');
        const card_border = document.querySelectorAll('.card.border');
        const card_border_dark = document.querySelectorAll('.card.border.border-dark');

        const svg = document.querySelectorAll('g');

        if (!el.getAttribute("checked")) {
          body.classList.add('dark-version');
          for (var i = 0; i < hr.length; i++) {
            if (hr[i].classList.contains('dark')) {
              hr[i].classList.remove('dark');
              hr[i].classList.add('light');
            }
          }

          for (var i = 0; i < hr_card.length; i++) {
            if (hr_card[i].classList.contains('dark')) {
              hr_card[i].classList.remove('dark');
              hr_card[i].classList.add('light');
            }
          }
          for (var i = 0; i < text_btn.length; i++) {
            if (text_btn[i].classList.contains('text-dark')) {
              text_btn[i].classList.remove('text-dark');
              text_btn[i].classList.add('text-white');
            }
          }
          for (var i = 0; i < text_span.length; i++) {
            if (text_span[i].classList.contains('text-dark')) {
              text_span[i].classList.remove('text-dark');
              text_span[i].classList.add('text-white');
            }
          }
          for (var i = 0; i < text_strong.length; i++) {
            if (text_strong[i].classList.contains('text-dark')) {
              text_strong[i].classList.remove('text-dark');
              text_strong[i].classList.add('text-white');
            }
          }
          for (var i = 0; i < text_nav_link.length; i++) {
            if (text_nav_link[i].classList.contains('text-dark')) {
              text_nav_link[i].classList.remove('text-dark');
              text_nav_link[i].classList.add('text-white');
            }
          }
          for (var i = 0; i < secondary.length; i++) {
            if (secondary[i].classList.contains('text-secondary')) {
              secondary[i].classList.remove('text-secondary');
              secondary[i].classList.add('text-white');
              secondary[i].classList.add('opacity-8');
            }
          }
          for (var i = 0; i < bg_gray_100.length; i++) {
            if (bg_gray_100[i].classList.contains('bg-gray-100')) {
              bg_gray_100[i].classList.remove('bg-gray-100');
              bg_gray_100[i].classList.add('bg-gray-600');
            }
          }
          for (var i = 0; i < btn_text_dark.length; i++) {
            btn_text_dark[i].classList.remove('text-dark');
            btn_text_dark[i].classList.add('text-white');
          }
          for (var i = 0; i < svg.length; i++) {
            if (svg[i].hasAttribute('fill')) {
              svg[i].setAttribute('fill', '#fff');
            }
          }
          for (var i = 0; i < card_border.length; i++) {
            card_border[i].classList.add('border-dark');
          }
          el.setAttribute("checked", "true");
        } else {
          body.classList.remove('dark-version');
          for (var i = 0; i < hr.length; i++) {
            if (hr[i].classList.contains('light')) {
              hr[i].classList.add('dark');
              hr[i].classList.remove('light');
            }
          }
          for (var i = 0; i < hr_card.length; i++) {
            if (hr_card[i].classList.contains('light')) {
              hr_card[i].classList.add('dark');
              hr_card[i].classList.remove('light');
            }
          }
          for (var i = 0; i < text_btn.length; i++) {
            if (text_btn[i].classList.contains('text-white')) {
              text_btn[i].classList.remove('text-white');
              text_btn[i].classList.add('text-dark');
            }
          }
          for (var i = 0; i < text_span_white.length; i++) {
            if (text_span_white[i].classList.contains('text-white') && !text_span_white[i].closest('.sidenav') && !text_span_white[i].closest('.card.bg-gradient-dark')) {
              text_span_white[i].classList.remove('text-white');
              text_span_white[i].classList.add('text-dark');
            }
          }
          for (var i = 0; i < text_strong_white.length; i++) {
            if (text_strong_white[i].classList.contains('text-white')) {
              text_strong_white[i].classList.remove('text-white');
              text_strong_white[i].classList.add('text-dark');
            }
          }
          for (var i = 0; i < text_nav_link_white.length; i++) {
            if (text_nav_link_white[i].classList.contains('text-white') && !text_nav_link_white[i].closest('.sidenav')) {
              text_nav_link_white[i].classList.remove('text-white');
              text_nav_link_white[i].classList.add('text-dark');
            }
          }
          for (var i = 0; i < secondary.length; i++) {
            if (secondary[i].classList.contains('text-white')) {
              secondary[i].classList.remove('text-white');
              secondary[i].classList.remove('opacity-8');
              secondary[i].classList.add('text-dark');
            }
          }
          for (var i = 0; i < bg_gray_600.length; i++) {
            if (bg_gray_600[i].classList.contains('bg-gray-600')) {
              bg_gray_600[i].classList.remove('bg-gray-600');
              bg_gray_600[i].classList.add('bg-gray-100');
            }
          }
          for (var i = 0; i < svg.length; i++) {
            if (svg[i].hasAttribute('fill')) {
              svg[i].setAttribute('fill', '#252f40');
            }
          }
          for (var i = 0; i < btn_text_white.length; i++) {
            if (!btn_text_white[i].closest('.card.bg-gradient-dark')) {
              btn_text_white[i].classList.remove('text-white');
              btn_text_white[i].classList.add('text-dark');
            }
          }
          for (var i = 0; i < card_border_dark.length; i++) {
            card_border_dark[i].classList.remove('border-dark');
          }
          el.removeAttribute("checked");
        }
    }

    const loadScript = function(src) {
        var tag = document.createElement('script');
        tag.async = false;
        tag.src = src;
        document.getElementsByTagName('body')[0].appendChild(tag);
    }

    useEffect(() => {

        loadScript(location.protocol + '//' + location.host +'/src/assets/admin/js/core/jquery.min.js')
        loadScript(location.protocol + '//' + location.host +'/src/assets/admin/js/core/popper.min.js')
        loadScript(location.protocol + '//' + location.host +'/src/assets/admin/js/core/bootstrap.min.js')
        loadScript(location.protocol + '//' + location.host +'/src/assets/admin/js/material-dashboard.js')
        loadScript('https://cdn.jsdelivr.net/npm/select2@4.1.0-rc.0/dist/js/select2.min.js')

        var win = navigator.platform.indexOf('Win') > -1;
        if (win && document.querySelector('#sidenav-scrollbar')) {
            var options = {
                damping: '0.5'
            }
            Scrollbar.init(document.querySelector('#sidenav-scrollbar'), options);
        }

        axiosClient.get('/user')
        .then(({data}) => {
            setUser(data)
        })
    },[])

    return (
        <div id="AdminLayout">

            <AdminAside></AdminAside>
            <main className="main-content position-relative max-height-vh-100 h-100 border-radius-lg ">
                <AdminHeader></AdminHeader>
                <Outlet/>
                <AdminFooter></AdminFooter>

            </main>
            <div className="fixed-plugin">

                <a className="fixed-plugin-button text-dark position-fixed px-3 py-2">
                    <i className="material-icons py-2">settings</i>
                </a>

                <div className="card shadow-lg">
                    <div className="card-header pb-0 pt-3">
                        <div className="float-start">
                            <h5 className="mt-3 mb-0">Material UI Configurator</h5>
                                <p>See our dashboard options.</p>
                        </div>
                        <div className="float-end mt-4">
                            <button className="btn btn-link text-dark p-0 fixed-plugin-close-button">
                                    <i className="material-icons">clear</i>
                            </button>
                        </div>

                    </div>
                    <hr className="horizontal dark my-1"/>

                    <div className="card-body pt-sm-3 pt-0">

                        <div>
                            <h6 className="mb-0">Sidebar Colors</h6>
                        </div>

                        <a href="#" className="switch-trigger background-color">
                            <div className="badge-colors my-2 text-start">
                                <span className="badge filter bg-gradient-primary active" data-color="primary" onClick={sidebarColor}></span>
                                <span className="badge filter bg-gradient-dark" data-color="dark" onClick={sidebarColor}></span>
                                <span className="badge filter bg-gradient-info" data-color="info" onClick={sidebarColor}></span>
                                <span className="badge filter bg-gradient-success" data-color="success" onClick={sidebarColor}></span>
                                <span className="badge filter bg-gradient-warning" data-color="warning" onClick={sidebarColor}></span>
                                <span className="badge filter bg-gradient-danger" data-color="danger" onClick={sidebarColor}></span>
                            </div>
                        </a>

                        <div className="mt-3">
                            <h6 className="mb-0">Sidenav Type</h6>
                            <p className="text-sm">Choose between 2 different sidenav types.</p>
                        </div>

                        <div className="d-flex">
                            <button className="btn bg-gradient-dark px-3 mb-2 active" data-class="bg-gradient-dark" onClick={sidebarType}>Dark</button>
                            <button className="btn bg-gradient-dark px-3 mb-2 ms-2" data-class="bg-transparent" onClick={sidebarType}>Transparent</button>
                            <button className="btn bg-gradient-dark px-3 mb-2 ms-2" data-class="bg-white" onClick={sidebarType}>White</button>
                        </div>

                        <p className="text-sm d-xl-none d-block mt-2">You can change the sidenav type just on desktop view.</p>

                        <div className="mt-3 d-flex">
                            <h6 className="mb-0">Navbar Fixed</h6>
                            <div className="form-check form-switch ps-0 ms-auto my-auto">
                                <input className="form-check-input mt-1 ms-auto" type="checkbox" id="navbarFixed" onClick={navbarFixed} />
                            </div>
                        </div>

                        <hr className="horizontal dark my-3"/>

                        <div className="mt-2 d-flex">

                            <h6 className="mb-0">Light / Dark</h6>

                            <div className="form-check form-switch ps-0 ms-auto my-auto">
                                <input className="form-check-input mt-1 ms-auto" type="checkbox" id="dark-version" onClick={darkMode}/>
                            </div>

                        </div>

                        <hr className="horizontal dark my-sm-4"/>
                        <a className="btn btn-outline-dark w-100" href="">View documentation</a>

                    </div>

                </div>

            </div>
        </div>

    )
}
