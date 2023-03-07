import { useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import adminLogo from "../../../../assets/admin/img/logo-ct.png";
import i18next from '../../../../i18n'

export default function AdminAside() {

    return (
        <aside
            className="sidenav navbar navbar-vertical navbar-expand-xs border-0 border-radius-xl my-3 fixed-start ms-3 bg-gradient-dark overflow-y-hidden"
            id="sidenav-main"
        >
            <div className="sidenav-header">
                <i
                    className="fas fa-times p-3 cursor-pointer text-white opacity-5 position-absolute end-0 top-0 d-none d-xl-none"
                    aria-hidden="true"
                    id="iconSidenav"
                ></i>
                <a
                    className="navbar-brand m-0"
                    href=" https://demos.creative-tim.com/material-dashboard-pro/pages/dashboards/analytics.html "
                    target="_blank"
                >
                    <img
                        src={adminLogo}
                        className="navbar-brand-img h-100"
                        alt="main_logo"
                    />
                    <span className="ms-1 font-weight-bold text-white">
                        Material Dashboard 2 PRO
                    </span>
                </a>
            </div>
            <hr className="horizontal light mt-0 mb-2" />
            <div
                className="collapse navbar-collapse w-auto pb-3"
                id="sidenav-collapse-main"
            >
                <ul className="navbar-nav" id="sidenav-collapse-main-list">
                    <li className="nav-item mb-2 mt-0">
                        <a
                            data-bs-toggle="collapse"
                            href="#ProfileNav"
                            className="nav-link text-white"
                            aria-controls="ProfileNav"
                            role="button"
                            aria-expanded="false"
                        >

                            <span className="nav-link-text ms-2">
                                Brooklyn Alice
                            </span>
                        </a>
                        <div className="collapse" id="ProfileNav">
                            <ul className="nav">
                                <li className="nav-item">
                                    <a
                                        className="nav-link text-white"
                                        href="../../pages/pages/profile/overview.html"
                                    >
                                        <span className="sidenav-mini-icon">

                                            MP
                                        </span>
                                        <span className="sidenav-normal ms-3">

                                            My Profile
                                        </span>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a
                                        className="nav-link text-white"
                                        href="../../pages/pages/account/settings.html"
                                    >
                                        <span className="sidenav-mini-icon">

                                            S
                                        </span>
                                        <span className="sidenav-normal ms-3">

                                            Settings
                                        </span>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a
                                        className="nav-link text-white"
                                        href="../../pages/authentication/signin/basic.html"
                                    >
                                        <span className="sidenav-mini-icon">

                                            L
                                        </span>
                                        <span className="sidenav-normal ms-3">

                                            Logout
                                        </span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </li>
                    <hr className="horizontal light mt-0" />
                    <li className="nav-item">
                        <NavLink to="/dashboard" className="nav-link">
                            <i className="material-icons-round opacity-10">
                                dashboard
                            </i>
                            <span className="nav-link-text ms-2">
                                Dashboards
                            </span>
                        </NavLink>
                    </li>
                    <li className="nav-item mt-3">
                        <h6 className="ps-4 ms-2 text-uppercase text-xs font-weight-bolder text-white">
                            Products
                        </h6>
                    </li>
                    <li className="nav-item">
                        <a
                            data-bs-toggle="collapse"
                            href="#productsCollapse"
                            className="nav-link text-white"
                            aria-controls="productsCollapse"
                            role="button"
                            aria-expanded="false"
                        >
                            <i className="material-icons-round opacity-10">
                            shopping_basket
                            </i>
                            <span className="nav-link-text ms-2">
                                Products
                            </span>
                        </a>
                        <div className="collapse" id="productsCollapse">
                            <ul className="nav pl-2">
                                <li className="nav-item">
                                    <NavLink to="/categories" className="nav-link">
                                        <i className="material-icons-round opacity-10">
                                            dashboard
                                        </i>
                                        <span className="nav-link-text ms-2">
                                            Category List
                                        </span>
                                    </NavLink>
                                </li>
                                <li className="nav-item">
                                    <a
                                        className="nav-link text-white"
                                        href="../../pages/dashboards/discover.html"
                                    >
                                        <span className="sidenav-mini-icon">

                                            D
                                        </span>
                                        <span className="sidenav-normal ms-2">

                                            Discover
                                        </span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/categories" className="nav-link">
                            <i className="material-icons-round opacity-10">
                                dashboard
                            </i>
                            <span className="nav-link-text ms-2">
                                {i18next.t('categories_ucfirst')}
                            </span>
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/attributes" className="nav-link">
                            <i className="material-icons-round opacity-10">
                                apps
                            </i>
                            <span className="nav-link-text ms-2">
                            {i18next.t('attributes_ucfirst')}
                            </span>
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/users" className="nav-link">
                            <i className="material-icons-round opacity-10">
                                group
                            </i>
                            <span className="nav-link-text ms-2">
                            {i18next.t('users_ucfirst')}
                            </span>
                        </NavLink>
                    </li>

                    <li className="nav-item mt-3">
                        <h6 className="ps-4 ms-2 text-uppercase text-xs font-weight-bolder text-white">
                            PAGES
                        </h6>
                    </li>
                    <li className="nav-item">
                        <a
                            data-bs-toggle="collapse"
                            href="#pagesExamples"
                            className="nav-link text-white"
                            aria-controls="pagesExamples"
                            role="button"
                            aria-expanded="false"
                        >
                            <i className="material-icons-round {% if page.brand == 'RTL' %}ms-2{% else %} me-2{% endif %}">
                                image
                            </i>
                            <span className="nav-link-text ms-2">
                                Pages
                            </span>
                        </a>
                        <div className="collapse" id="pagesExamples">
                            <ul className="nav">
                                <li className="nav-item">
                                    <a
                                        className="nav-link text-white"
                                        data-bs-toggle="collapse"
                                        aria-expanded="false"
                                        href="#profileExample"
                                    >
                                        <span className="sidenav-mini-icon">

                                            P
                                        </span>
                                        <span className="sidenav-normal ms-2">
                                            Profile <b className="caret"></b>
                                        </span>
                                    </a>
                                    <div
                                        className="collapse"
                                        id="profileExample"
                                    >
                                        <ul className="nav nav-sm flex-column">
                                            <li className="nav-item">
                                                <a
                                                    className="nav-link text-white"
                                                    href="../../pages/pages/profile/overview.html"
                                                >
                                                    <span className="sidenav-mini-icon">

                                                        P
                                                    </span>
                                                    <span className="sidenav-normal ms-2">
                                                        Profile Overview
                                                    </span>
                                                </a>
                                            </li>
                                            <li className="nav-item">
                                                <a
                                                    className="nav-link text-white"
                                                    href="../../pages/pages/profile/projects.html"
                                                >
                                                    <span className="sidenav-mini-icon">

                                                        A
                                                    </span>
                                                    <span className="sidenav-normal ms-2">
                                                        All Projects
                                                    </span>
                                                </a>
                                            </li>
                                            <li className="nav-item">
                                                <a
                                                    className="nav-link text-white"
                                                    href="../../pages/pages/profile/messages.html"
                                                >
                                                    <span className="sidenav-mini-icon">

                                                        M
                                                    </span>
                                                    <span className="sidenav-normal ms-2">

                                                        Messages
                                                    </span>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </li>
                                <li className="nav-item">
                                    <a
                                        className="nav-link text-white"
                                        data-bs-toggle="collapse"
                                        aria-expanded="false"
                                        href="#usersExample"
                                    >
                                        <span className="sidenav-mini-icon">

                                            U
                                        </span>
                                        <span className="sidenav-normal ms-2">
                                            Users <b className="caret"></b>
                                        </span>
                                    </a>
                                    <div className="collapse" id="usersExample">
                                        <ul className="nav nav-sm flex-column">
                                            <li className="nav-item">
                                                <a
                                                    className="nav-link text-white"
                                                    href="../../pages/pages/users/reports.html"
                                                >
                                                    <span className="sidenav-mini-icon">

                                                        R
                                                    </span>
                                                    <span className="sidenav-normal ms-2">

                                                        Reports
                                                    </span>
                                                </a>
                                            </li>
                                            <li className="nav-item">
                                                <a
                                                    className="nav-link text-white"
                                                    href="../../pages/pages/users/new-user.html"
                                                >
                                                    <span className="sidenav-mini-icon">

                                                        N
                                                    </span>
                                                    <span className="sidenav-normal ms-2">

                                                        New User
                                                    </span>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </li>
                                <li className="nav-item">
                                    <a
                                        className="nav-link text-white"
                                        data-bs-toggle="collapse"
                                        aria-expanded="false"
                                        href="#accountExample"
                                    >
                                        <span className="sidenav-mini-icon">

                                            A
                                        </span>
                                        <span className="sidenav-normal ms-2">
                                            Account <b className="caret"></b>
                                        </span>
                                    </a>
                                    <div
                                        className="collapse"
                                        id="accountExample"
                                    >
                                        <ul className="nav nav-sm flex-column">
                                            <li className="nav-item">
                                                <a
                                                    className="nav-link text-white"
                                                    href="../../pages/pages/account/settings.html"
                                                >
                                                    <span className="sidenav-mini-icon">

                                                        S
                                                    </span>
                                                    <span className="sidenav-normal ms-2">

                                                        Settings
                                                    </span>
                                                </a>
                                            </li>
                                            <li className="nav-item">
                                                <a
                                                    className="nav-link text-white"
                                                    href="../../pages/pages/account/billing.html"
                                                >
                                                    <span className="sidenav-mini-icon">

                                                        B
                                                    </span>
                                                    <span className="sidenav-normal ms-2">

                                                        Billing
                                                    </span>
                                                </a>
                                            </li>
                                            <li className="nav-item">
                                                <a
                                                    className="nav-link text-white"
                                                    href="../../pages/pages/account/invoice.html"
                                                >
                                                    <span className="sidenav-mini-icon">

                                                        I
                                                    </span>
                                                    <span className="sidenav-normal ms-2">

                                                        Invoice
                                                    </span>
                                                </a>
                                            </li>
                                            <li className="nav-item">
                                                <a
                                                    className="nav-link text-white"
                                                    href="../../pages/pages/account/security.html"
                                                >
                                                    <span className="sidenav-mini-icon">

                                                        S
                                                    </span>
                                                    <span className="sidenav-normal ms-2">

                                                        Security
                                                    </span>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </li>
                                <li className="nav-item">
                                    <a
                                        className="nav-link text-white"
                                        data-bs-toggle="collapse"
                                        aria-expanded="false"
                                        href="#projectsExample"
                                    >
                                        <span className="sidenav-mini-icon">

                                            P
                                        </span>
                                        <span className="sidenav-normal ms-2">
                                            Projects <b className="caret"></b>
                                        </span>
                                    </a>
                                    <div
                                        className="collapse"
                                        id="projectsExample"
                                    >
                                        <ul className="nav nav-sm flex-column">
                                            <li className="nav-item">
                                                <a
                                                    className="nav-link text-white"
                                                    href="../../pages/pages/projects/general.html"
                                                >
                                                    <span className="sidenav-mini-icon">

                                                        G
                                                    </span>
                                                    <span className="sidenav-normal ms-2">

                                                        General
                                                    </span>
                                                </a>
                                            </li>
                                            <li className="nav-item">
                                                <a
                                                    className="nav-link text-white"
                                                    href="../../pages/pages/projects/timeline.html"
                                                >
                                                    <span className="sidenav-mini-icon">

                                                        T
                                                    </span>
                                                    <span className="sidenav-normal ms-2">

                                                        Timeline
                                                    </span>
                                                </a>
                                            </li>
                                            <li className="nav-item">
                                                <a
                                                    className="nav-link text-white"
                                                    href="../../pages/pages/projects/new-project.html"
                                                >
                                                    <span className="sidenav-mini-icon">

                                                        N
                                                    </span>
                                                    <span className="sidenav-normal ms-2">
                                                        New Project
                                                    </span>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </li>
                                <li className="nav-item">
                                    <a
                                        className="nav-link text-white"
                                        data-bs-toggle="collapse"
                                        aria-expanded="false"
                                        href="#vrExamples"
                                    >
                                        <span className="sidenav-mini-icon">

                                            V
                                        </span>
                                        <span className="sidenav-normal ms-2">
                                            Virtual Reality
                                            <b className="caret"></b>
                                        </span>
                                    </a>
                                    <div className="collapse" id="vrExamples">
                                        <ul className="nav nav-sm flex-column">
                                            <li className="nav-item">
                                                <a
                                                    className="nav-link text-white"
                                                    href="../../pages/pages/vr/vr-default.html"
                                                >
                                                    <span className="sidenav-mini-icon">

                                                        V
                                                    </span>
                                                    <span className="sidenav-normal ms-2">

                                                        VR Default
                                                    </span>
                                                </a>
                                            </li>
                                            <li className="nav-item">
                                                <a
                                                    className="nav-link text-white"
                                                    href="../../pages/pages/vr/vr-info.html"
                                                >
                                                    <span className="sidenav-mini-icon">

                                                        V
                                                    </span>
                                                    <span className="sidenav-normal ms-2">

                                                        VR Info
                                                    </span>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </li>
                                <li className="nav-item">
                                    <a
                                        className="nav-link text-white"
                                        href="../../pages/pages/pricing-page.html"
                                    >
                                        <span className="sidenav-mini-icon">

                                            P
                                        </span>
                                        <span className="sidenav-normal ms-2">

                                            Pricing Page
                                        </span>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a
                                        className="nav-link text-white"
                                        href="../../pages/pages/rtl-page.html"
                                    >
                                        <span className="sidenav-mini-icon">

                                            R
                                        </span>
                                        <span className="sidenav-normal ms-2">

                                            RTL
                                        </span>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a
                                        className="nav-link text-white"
                                        href="../../pages/pages/widgets.html"
                                    >
                                        <span className="sidenav-mini-icon">

                                            W
                                        </span>
                                        <span className="sidenav-normal ms-2">

                                            Widgets
                                        </span>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a
                                        className="nav-link text-white"
                                        href="../../pages/pages/charts.html"
                                    >
                                        <span className="sidenav-mini-icon">

                                            C
                                        </span>
                                        <span className="sidenav-normal ms-2">

                                            Charts
                                        </span>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a
                                        className="nav-link text-white"
                                        href="../../pages/pages/sweet-alerts.html"
                                    >
                                        <span className="sidenav-mini-icon">

                                            S
                                        </span>
                                        <span className="sidenav-normal ms-2">

                                            Sweet Alerts
                                        </span>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a
                                        className="nav-link text-white"
                                        href="../../pages/pages/notifications.html"
                                    >
                                        <span className="sidenav-mini-icon">

                                            N
                                        </span>
                                        <span className="sidenav-normal ms-2">

                                            Notifications
                                        </span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </li>
                    <li className="nav-item">
                        <a
                            data-bs-toggle="collapse"
                            href="#applicationsExamples"
                            className="nav-link text-white"
                            aria-controls="applicationsExamples"
                            role="button"
                            aria-expanded="false"
                        >
                            <i className="material-icons-round {% if page.brand == 'RTL' %}ms-2{% else %} me-2{% endif %}">
                                apps
                            </i>
                            <span className="nav-link-text ms-2">
                                Applications
                            </span>
                        </a>
                        <div className="collapse" id="applicationsExamples">
                            <ul className="nav">
                                <li className="nav-item">
                                    <a
                                        className="nav-link text-white"
                                        href="../../pages/applications/crm.html"
                                    >
                                        <span className="sidenav-mini-icon">

                                            C
                                        </span>
                                        <span className="sidenav-normal ms-2">

                                            CRM
                                        </span>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a
                                        className="nav-link text-white"
                                        href="../../pages/applications/kanban.html"
                                    >
                                        <span className="sidenav-mini-icon">

                                            K
                                        </span>
                                        <span className="sidenav-normal ms-2">

                                            Kanban
                                        </span>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a
                                        className="nav-link text-white"
                                        href="../../pages/applications/wizard.html"
                                    >
                                        <span className="sidenav-mini-icon">

                                            W
                                        </span>
                                        <span className="sidenav-normal ms-2">

                                            Wizard
                                        </span>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a
                                        className="nav-link text-white"
                                        href="../../pages/applications/datatables.html"
                                    >
                                        <span className="sidenav-mini-icon">

                                            D
                                        </span>
                                        <span className="sidenav-normal ms-2">

                                            DataTables
                                        </span>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a
                                        className="nav-link text-white"
                                        href="../../pages/applications/calendar.html"
                                    >
                                        <span className="sidenav-mini-icon">

                                            C
                                        </span>
                                        <span className="sidenav-normal ms-2">

                                            Calendar
                                        </span>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a
                                        className="nav-link text-white"
                                        href="../../pages/applications/stats.html"
                                    >
                                        <span className="sidenav-mini-icon">

                                            S
                                        </span>
                                        <span className="sidenav-normal ms-2">

                                            Stats
                                        </span>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a
                                        className="nav-link text-white"
                                        href="../../pages/applications/validation.html"
                                    >
                                        <span className="sidenav-mini-icon">

                                            V
                                        </span>
                                        <span className="sidenav-normal ms-2">

                                            Validation
                                        </span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </li>
                    <li className="nav-item">
                        <a
                            data-bs-toggle="collapse"
                            href="#ecommerceExamples"
                            className="nav-link text-white"
                            aria-controls="ecommerceExamples"
                            role="button"
                            aria-expanded="false"
                        >
                            <i className="material-icons-round {% if page.brand == 'RTL' %}ms-2{% else %} me-2{% endif %}">
                                shopping_basket
                            </i>
                            <span className="nav-link-text ms-2">
                                Ecommerce
                            </span>
                        </a>
                        <div className="collapse" id="ecommerceExamples">
                            <ul className="nav">
                                <li className="nav-item">
                                    <a
                                        className="nav-link text-white"
                                        data-bs-toggle="collapse"
                                        aria-expanded="false"
                                        href="#productsExample"
                                    >
                                        <span className="sidenav-mini-icon">

                                            P
                                        </span>
                                        <span className="sidenav-normal ms-2">
                                            Products <b className="caret"></b>
                                        </span>
                                    </a>
                                    <div
                                        className="collapse"
                                        id="productsExample"
                                    >
                                        <ul className="nav nav-sm flex-column">
                                            <li className="nav-item">
                                                <a
                                                    className="nav-link text-white"
                                                    href="../../pages/ecommerce/products/new-product.html"
                                                >
                                                    <span className="sidenav-mini-icon">

                                                        N
                                                    </span>
                                                    <span className="sidenav-normal ms-2">
                                                        New Product
                                                    </span>
                                                </a>
                                            </li>
                                            <li className="nav-item">
                                                <a
                                                    className="nav-link text-white"
                                                    href="../../pages/ecommerce/products/edit-product.html"
                                                >
                                                    <span className="sidenav-mini-icon">

                                                        E
                                                    </span>
                                                    <span className="sidenav-normal ms-2">
                                                        Edit Product
                                                    </span>
                                                </a>
                                            </li>
                                            <li className="nav-item">
                                                <a
                                                    className="nav-link text-white"
                                                    href="../../pages/ecommerce/products/product-page.html"
                                                >
                                                    <span className="sidenav-mini-icon">

                                                        P
                                                    </span>
                                                    <span className="sidenav-normal ms-2">
                                                        Product Page
                                                    </span>
                                                </a>
                                            </li>
                                            <li className="nav-item">
                                                <a
                                                    className="nav-link text-white"
                                                    href="../../pages/ecommerce/products/products-list.html"
                                                >
                                                    <span className="sidenav-mini-icon">

                                                        P
                                                    </span>
                                                    <span className="sidenav-normal ms-2">
                                                        Products List
                                                    </span>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </li>
                                <li className="nav-item">
                                    <a
                                        className="nav-link text-white"
                                        data-bs-toggle="collapse"
                                        aria-expanded="false"
                                        href="#ordersExample"
                                    >
                                        <span className="sidenav-mini-icon">

                                            O
                                        </span>
                                        <span className="sidenav-normal ms-2">
                                            Orders <b className="caret"></b>
                                        </span>
                                    </a>
                                    <div
                                        className="collapse"
                                        id="ordersExample"
                                    >
                                        <ul className="nav nav-sm flex-column">
                                            <li className="nav-item">
                                                <a
                                                    className="nav-link text-white"
                                                    href="../../pages/ecommerce/orders/list.html"
                                                >
                                                    <span className="sidenav-mini-icon">

                                                        O
                                                    </span>
                                                    <span className="sidenav-normal ms-2">

                                                        Order List
                                                    </span>
                                                </a>
                                            </li>
                                            <li className="nav-item">
                                                <a
                                                    className="nav-link text-white"
                                                    href="../../pages/ecommerce/orders/details.html"
                                                >
                                                    <span className="sidenav-mini-icon">

                                                        O
                                                    </span>
                                                    <span className="sidenav-normal ms-2">
                                                        Order Details
                                                    </span>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </li>
                                <li className="nav-item">
                                    <a
                                        className="nav-link text-white"
                                        href="../../pages/ecommerce/referral.html"
                                    >
                                        <span className="sidenav-mini-icon">

                                            R
                                        </span>
                                        <span className="sidenav-normal ms-2">

                                            Referral
                                        </span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </li>
                    <li className="nav-item">
                        <a
                            data-bs-toggle="collapse"
                            href="#authExamples"
                            className="nav-link text-white"
                            aria-controls="authExamples"
                            role="button"
                            aria-expanded="false"
                        >
                            <i className="material-icons-round {% if page.brand == 'RTL' %}ms-2{% else %} me-2{% endif %}">
                                content_paste
                            </i>
                            <span className="nav-link-text ms-2">
                                Authentication
                            </span>
                        </a>
                        <div className="collapse" id="authExamples">
                            <ul className="nav">
                                <li className="nav-item">
                                    <a
                                        className="nav-link text-white"
                                        data-bs-toggle="collapse"
                                        aria-expanded="false"
                                        href="#signinExample"
                                    >
                                        <span className="sidenav-mini-icon">

                                            S
                                        </span>
                                        <span className="sidenav-normal ms-2">
                                            Sign In <b className="caret"></b>
                                        </span>
                                    </a>
                                    <div
                                        className="collapse"
                                        id="signinExample"
                                    >
                                        <ul className="nav nav-sm flex-column">
                                            <li className="nav-item">
                                                <a
                                                    className="nav-link text-white"
                                                    href="../../pages/authentication/signin/basic.html"
                                                >
                                                    <span className="sidenav-mini-icon">

                                                        B
                                                    </span>
                                                    <span className="sidenav-normal ms-2">

                                                        Basic
                                                    </span>
                                                </a>
                                            </li>
                                            <li className="nav-item">
                                                <a
                                                    className="nav-link text-white"
                                                    href="../../pages/authentication/signin/cover.html"
                                                >
                                                    <span className="sidenav-mini-icon">

                                                        C
                                                    </span>
                                                    <span className="sidenav-normal ms-2">

                                                        Cover
                                                    </span>
                                                </a>
                                            </li>
                                            <li className="nav-item">
                                                <a
                                                    className="nav-link text-white"
                                                    href="../../pages/authentication/signin/illustration.html"
                                                >
                                                    <span className="sidenav-mini-icon">

                                                        I
                                                    </span>
                                                    <span className="sidenav-normal ms-2">
                                                        Illustration
                                                    </span>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </li>
                                <li className="nav-item">
                                    <a
                                        className="nav-link text-white"
                                        data-bs-toggle="collapse"
                                        aria-expanded="false"
                                        href="#signupExample"
                                    >
                                        <span className="sidenav-mini-icon">

                                            S
                                        </span>
                                        <span className="sidenav-normal ms-2">
                                            Sign Up <b className="caret"></b>
                                        </span>
                                    </a>
                                    <div
                                        className="collapse"
                                        id="signupExample"
                                    >
                                        <ul className="nav nav-sm flex-column">
                                            <li className="nav-item">
                                                <a
                                                    className="nav-link text-white"
                                                    href="../../pages/authentication/signup/basic.html"
                                                >
                                                    <span className="sidenav-mini-icon">

                                                        B
                                                    </span>
                                                    <span className="sidenav-normal ms-2">

                                                        Basic
                                                    </span>
                                                </a>
                                            </li>
                                            <li className="nav-item">
                                                <a
                                                    className="nav-link text-white"
                                                    href="../../pages/authentication/signup/cover.html"
                                                >
                                                    <span className="sidenav-mini-icon">

                                                        C
                                                    </span>
                                                    <span className="sidenav-normal ms-2">

                                                        Cover
                                                    </span>
                                                </a>
                                            </li>
                                            <li className="nav-item">
                                                <a
                                                    className="nav-link text-white"
                                                    href="../../pages/authentication/signup/illustration.html"
                                                >
                                                    <span className="sidenav-mini-icon">

                                                        I
                                                    </span>
                                                    <span className="sidenav-normal ms-2">
                                                        Illustration
                                                    </span>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </li>
                                <li className="nav-item">
                                    <a
                                        className="nav-link text-white"
                                        data-bs-toggle="collapse"
                                        aria-expanded="false"
                                        href="#resetExample"
                                    >
                                        <span className="sidenav-mini-icon">

                                            R
                                        </span>
                                        <span className="sidenav-normal ms-2">
                                            Reset Password
                                            <b className="caret"></b>
                                        </span>
                                    </a>
                                    <div className="collapse" id="resetExample">
                                        <ul className="nav nav-sm flex-column">
                                            <li className="nav-item">
                                                <a
                                                    className="nav-link text-white"
                                                    href="../../pages/authentication/reset/basic.html"
                                                >
                                                    <span className="sidenav-mini-icon">

                                                        B
                                                    </span>
                                                    <span className="sidenav-normal ms-2">

                                                        Basic
                                                    </span>
                                                </a>
                                            </li>
                                            <li className="nav-item">
                                                <a
                                                    className="nav-link text-white"
                                                    href="../../pages/authentication/reset/cover.html"
                                                >
                                                    <span className="sidenav-mini-icon">

                                                        C
                                                    </span>
                                                    <span className="sidenav-normal ms-2">

                                                        Cover
                                                    </span>
                                                </a>
                                            </li>
                                            <li className="nav-item">
                                                <a
                                                    className="nav-link text-white"
                                                    href="../../pages/authentication/reset/illustration.html"
                                                >
                                                    <span className="sidenav-mini-icon">

                                                        I
                                                    </span>
                                                    <span className="sidenav-normal ms-2">
                                                        Illustration
                                                    </span>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </li>
                                <li className="nav-item">
                                    <a
                                        className="nav-link text-white"
                                        data-bs-toggle="collapse"
                                        aria-expanded="false"
                                        href="#lockExample"
                                    >
                                        <span className="sidenav-mini-icon">

                                            L
                                        </span>
                                        <span className="sidenav-normal ms-2">
                                            Lock <b className="caret"></b>
                                        </span>
                                    </a>
                                    <div className="collapse" id="lockExample">
                                        <ul className="nav nav-sm flex-column">
                                            <li className="nav-item">
                                                <a
                                                    className="nav-link text-white"
                                                    href="../../pages/authentication/lock/basic.html"
                                                >
                                                    <span className="sidenav-mini-icon">

                                                        B
                                                    </span>
                                                    <span className="sidenav-normal ms-2">

                                                        Basic
                                                    </span>
                                                </a>
                                            </li>
                                            <li className="nav-item">
                                                <a
                                                    className="nav-link text-white"
                                                    href="../../pages/authentication/lock/cover.html"
                                                >
                                                    <span className="sidenav-mini-icon">

                                                        C
                                                    </span>
                                                    <span className="sidenav-normal ms-2">

                                                        Cover
                                                    </span>
                                                </a>
                                            </li>
                                            <li className="nav-item">
                                                <a
                                                    className="nav-link text-white"
                                                    href="../../pages/authentication/lock/illustration.html"
                                                >
                                                    <span className="sidenav-mini-icon">

                                                        I
                                                    </span>
                                                    <span className="sidenav-normal ms-2">
                                                        Illustration
                                                    </span>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </li>
                                <li className="nav-item">
                                    <a
                                        className="nav-link text-white"
                                        data-bs-toggle="collapse"
                                        aria-expanded="false"
                                        href="#StepExample"
                                    >
                                        <span className="sidenav-mini-icon">

                                            2
                                        </span>
                                        <span className="sidenav-normal ms-2">
                                            2-Step Verification
                                            <b className="caret"></b>
                                        </span>
                                    </a>
                                    <div className="collapse" id="StepExample">
                                        <ul className="nav nav-sm flex-column">
                                            <li className="nav-item">
                                                <a
                                                    className="nav-link text-white"
                                                    href="../../pages/authentication/verification/basic.html"
                                                >
                                                    <span className="sidenav-mini-icon">

                                                        B
                                                    </span>
                                                    <span className="sidenav-normal ms-2">

                                                        Basic
                                                    </span>
                                                </a>
                                            </li>
                                            <li className="nav-item">
                                                <a
                                                    className="nav-link text-white"
                                                    href="../../pages/authentication/verification/cover.html"
                                                >
                                                    <span className="sidenav-mini-icon">

                                                        C
                                                    </span>
                                                    <span className="sidenav-normal ms-2">

                                                        Cover
                                                    </span>
                                                </a>
                                            </li>
                                            <li className="nav-item">
                                                <a
                                                    className="nav-link text-white"
                                                    href="../../pages/authentication/verification/illustration.html"
                                                >
                                                    <span className="sidenav-mini-icon">

                                                        I
                                                    </span>
                                                    <span className="sidenav-normal ms-2">
                                                        Illustration
                                                    </span>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </li>
                                <li className="nav-item">
                                    <a
                                        className="nav-link text-white"
                                        data-bs-toggle="collapse"
                                        aria-expanded="false"
                                        href="#errorExample"
                                    >
                                        <span className="sidenav-mini-icon">

                                            E
                                        </span>
                                        <span className="sidenav-normal ms-2">
                                            Error <b className="caret"></b>
                                        </span>
                                    </a>
                                    <div className="collapse" id="errorExample">
                                        <ul className="nav nav-sm flex-column">
                                            <li className="nav-item">
                                                <a
                                                    className="nav-link text-white"
                                                    href="../../pages/authentication/error/404.html"
                                                >
                                                    <span className="sidenav-mini-icon">

                                                        E
                                                    </span>
                                                    <span className="sidenav-normal ms-2">

                                                        Error 404
                                                    </span>
                                                </a>
                                            </li>
                                            <li className="nav-item">
                                                <a
                                                    className="nav-link text-white"
                                                    href="../../pages/authentication/error/500.html"
                                                >
                                                    <span className="sidenav-mini-icon">

                                                        E
                                                    </span>
                                                    <span className="sidenav-normal ms-2">

                                                        Error 500
                                                    </span>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </li>
                    <li className="nav-item">
                        <hr className="horizontal light" />
                        <h6 className="ps-4 ms-2 text-uppercase text-xs font-weight-bolder text-white">
                            DOCS
                        </h6>
                    </li>
                    <li className="nav-item">
                        <a
                            data-bs-toggle="collapse"
                            href="#basicExamples"
                            className="nav-link text-white"
                            aria-controls="basicExamples"
                            role="button"
                            aria-expanded="false"
                        >
                            <i className="material-icons-round {% if page.brand == 'RTL' %}ms-2{% else %} me-2{% endif %}">
                                upcoming
                            </i>
                            <span className="nav-link-text ms-2">
                                Basic
                            </span>
                        </a>
                        <div className="collapse" id="basicExamples">
                            <ul className="nav">
                                <li className="nav-item">
                                    <a
                                        className="nav-link text-white"
                                        data-bs-toggle="collapse"
                                        aria-expanded="false"
                                        href="#gettingStartedExample"
                                    >
                                        <span className="sidenav-mini-icon">

                                            G
                                        </span>
                                        <span className="sidenav-normal ms-2">
                                            Getting Started
                                            <b className="caret"></b>
                                        </span>
                                    </a>
                                    <div
                                        className="collapse"
                                        id="gettingStartedExample"
                                    >
                                        <ul className="nav nav-sm flex-column">
                                            <li className="nav-item">
                                                <a
                                                    className="nav-link text-white"
                                                    href="https://www.creative-tim.com/learning-lab/bootstrap/quick-start/material-dashboard"
                                                    target="_blank"
                                                >
                                                    <span className="sidenav-mini-icon">

                                                        Q
                                                    </span>
                                                    <span className="sidenav-normal ms-2">
                                                        Quick Start
                                                    </span>
                                                </a>
                                            </li>
                                            <li className="nav-item">
                                                <a
                                                    className="nav-link text-white"
                                                    href="https://www.creative-tim.com/learning-lab/bootstrap/license/material-dashboard"
                                                    target="_blank"
                                                >
                                                    <span className="sidenav-mini-icon">

                                                        L
                                                    </span>
                                                    <span className="sidenav-normal ms-2">

                                                        License
                                                    </span>
                                                </a>
                                            </li>
                                            <li className="nav-item">
                                                <a
                                                    className="nav-link text-white"
                                                    href="https://www.creative-tim.com/learning-lab/bootstrap/overview/material-dashboard"
                                                    target="_blank"
                                                >
                                                    <span className="sidenav-mini-icon">

                                                        C
                                                    </span>
                                                    <span className="sidenav-normal ms-2">

                                                        Contents
                                                    </span>
                                                </a>
                                            </li>
                                            <li className="nav-item">
                                                <a
                                                    className="nav-link text-white"
                                                    href="https://www.creative-tim.com/learning-lab/bootstrap/build-tools/material-dashboard"
                                                    target="_blank"
                                                >
                                                    <span className="sidenav-mini-icon">

                                                        B
                                                    </span>
                                                    <span className="sidenav-normal ms-2">
                                                        Build Tools
                                                    </span>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </li>
                                <li className="nav-item">
                                    <a
                                        className="nav-link text-white"
                                        data-bs-toggle="collapse"
                                        aria-expanded="false"
                                        href="#foundationExample"
                                    >
                                        <span className="sidenav-mini-icon">

                                            F
                                        </span>
                                        <span className="sidenav-normal ms-2">
                                            Foundation <b className="caret"></b>
                                        </span>
                                    </a>
                                    <div
                                        className="collapse"
                                        id="foundationExample"
                                    >
                                        <ul className="nav nav-sm flex-column">
                                            <li className="nav-item">
                                                <a
                                                    className="nav-link text-white"
                                                    href="https://www.creative-tim.com/learning-lab/bootstrap/colors/material-dashboard"
                                                    target="_blank"
                                                >
                                                    <span className="sidenav-mini-icon">

                                                        C
                                                    </span>
                                                    <span className="sidenav-normal ms-2">

                                                        Colors
                                                    </span>
                                                </a>
                                            </li>
                                            <li className="nav-item">
                                                <a
                                                    className="nav-link text-white"
                                                    href="https://www.creative-tim.com/learning-lab/bootstrap/grid/material-dashboard"
                                                    target="_blank"
                                                >
                                                    <span className="sidenav-mini-icon">

                                                        G
                                                    </span>
                                                    <span className="sidenav-normal ms-2">

                                                        Grid
                                                    </span>
                                                </a>
                                            </li>
                                            <li className="nav-item">
                                                <a
                                                    className="nav-link text-white"
                                                    href="https://www.creative-tim.com/learning-lab/bootstrap/typography/material-dashboard"
                                                    target="_blank"
                                                >
                                                    <span className="sidenav-mini-icon">

                                                        T
                                                    </span>
                                                    <span className="sidenav-normal ms-2">

                                                        Typography
                                                    </span>
                                                </a>
                                            </li>
                                            <li className="nav-item">
                                                <a
                                                    className="nav-link text-white"
                                                    href="https://www.creative-tim.com/learning-lab/bootstrap/icons/material-dashboard"
                                                    target="_blank"
                                                >
                                                    <span className="sidenav-mini-icon">

                                                        I
                                                    </span>
                                                    <span className="sidenav-normal ms-2">

                                                        Icons
                                                    </span>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </li>
                    <li className="nav-item">
                        <a
                            data-bs-toggle="collapse"
                            href="#componentsExamples"
                            className="nav-link text-white"
                            aria-controls="componentsExamples"
                            role="button"
                            aria-expanded="false"
                        >
                            <i className="material-icons-round {% if page.brand == 'RTL' %}ms-2{% else %} me-2{% endif %}">
                                view_in_ar
                            </i>
                            <span className="nav-link-text ms-2">
                                Components
                            </span>
                        </a>
                        <div className="collapse" id="componentsExamples">
                            <ul className="nav">
                                <li className="nav-item">
                                    <a
                                        className="nav-link text-white"
                                        href="https://www.creative-tim.com/learning-lab/bootstrap/alerts/material-dashboard"
                                        target="_blank"
                                    >
                                        <span className="sidenav-mini-icon">

                                            A
                                        </span>
                                        <span className="sidenav-normal ms-2">

                                            Alerts
                                        </span>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a
                                        className="nav-link text-white"
                                        href="https://www.creative-tim.com/learning-lab/bootstrap/badge/material-dashboard"
                                        target="_blank"
                                    >
                                        <span className="sidenav-mini-icon">

                                            B
                                        </span>
                                        <span className="sidenav-normal ms-2">

                                            Badge
                                        </span>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a
                                        className="nav-link text-white"
                                        href="https://www.creative-tim.com/learning-lab/bootstrap/buttons/material-dashboard"
                                        target="_blank"
                                    >
                                        <span className="sidenav-mini-icon">

                                            B
                                        </span>
                                        <span className="sidenav-normal ms-2">

                                            Buttons
                                        </span>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a
                                        className="nav-link text-white"
                                        href="https://www.creative-tim.com/learning-lab/bootstrap/cards/material-dashboard"
                                        target="_blank"
                                    >
                                        <span className="sidenav-mini-icon">

                                            C
                                        </span>
                                        <span className="sidenav-normal ms-2">

                                            Card
                                        </span>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a
                                        className="nav-link text-white"
                                        href="https://www.creative-tim.com/learning-lab/bootstrap/carousel/material-dashboard"
                                        target="_blank"
                                    >
                                        <span className="sidenav-mini-icon">

                                            C
                                        </span>
                                        <span className="sidenav-normal ms-2">

                                            Carousel
                                        </span>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a
                                        className="nav-link text-white"
                                        href="https://www.creative-tim.com/learning-lab/bootstrap/collapse/material-dashboard"
                                        target="_blank"
                                    >
                                        <span className="sidenav-mini-icon">

                                            C
                                        </span>
                                        <span className="sidenav-normal ms-2">

                                            Collapse
                                        </span>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a
                                        className="nav-link text-white"
                                        href="https://www.creative-tim.com/learning-lab/bootstrap/dropdowns/material-dashboard"
                                        target="_blank"
                                    >
                                        <span className="sidenav-mini-icon">

                                            D
                                        </span>
                                        <span className="sidenav-normal ms-2">

                                            Dropdowns
                                        </span>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a
                                        className="nav-link text-white"
                                        href="https://www.creative-tim.com/learning-lab/bootstrap/forms/material-dashboard"
                                        target="_blank"
                                    >
                                        <span className="sidenav-mini-icon">

                                            F
                                        </span>
                                        <span className="sidenav-normal ms-2">

                                            Forms
                                        </span>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a
                                        className="nav-link text-white"
                                        href="https://www.creative-tim.com/learning-lab/bootstrap/modal/material-dashboard"
                                        target="_blank"
                                    >
                                        <span className="sidenav-mini-icon">

                                            M
                                        </span>
                                        <span className="sidenav-normal ms-2">

                                            Modal
                                        </span>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a
                                        className="nav-link text-white"
                                        href="https://www.creative-tim.com/learning-lab/bootstrap/navs/material-dashboard"
                                        target="_blank"
                                    >
                                        <span className="sidenav-mini-icon">

                                            N
                                        </span>
                                        <span className="sidenav-normal ms-2">

                                            Navs
                                        </span>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a
                                        className="nav-link text-white"
                                        href="https://www.creative-tim.com/learning-lab/bootstrap/navbar/material-dashboard"
                                        target="_blank"
                                    >
                                        <span className="sidenav-mini-icon">

                                            N
                                        </span>
                                        <span className="sidenav-normal ms-2">

                                            Navbar
                                        </span>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a
                                        className="nav-link text-white"
                                        href="https://www.creative-tim.com/learning-lab/bootstrap/pagination/material-dashboard"
                                        target="_blank"
                                    >
                                        <span className="sidenav-mini-icon">

                                            P
                                        </span>
                                        <span className="sidenav-normal ms-2">

                                            Pagination
                                        </span>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a
                                        className="nav-link text-white"
                                        href="https://www.creative-tim.com/learning-lab/bootstrap/popovers/material-dashboard"
                                        target="_blank"
                                    >
                                        <span className="sidenav-mini-icon">

                                            P
                                        </span>
                                        <span className="sidenav-normal ms-2">

                                            Popovers
                                        </span>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a
                                        className="nav-link text-white"
                                        href="https://www.creative-tim.com/learning-lab/bootstrap/progress/material-dashboard"
                                        target="_blank"
                                    >
                                        <span className="sidenav-mini-icon">

                                            P
                                        </span>
                                        <span className="sidenav-normal ms-2">

                                            Progress
                                        </span>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a
                                        className="nav-link text-white"
                                        href="https://www.creative-tim.com/learning-lab/bootstrap/spinners/material-dashboard"
                                        target="_blank"
                                    >
                                        <span className="sidenav-mini-icon">

                                            S
                                        </span>
                                        <span className="sidenav-normal ms-2">

                                            Spinners
                                        </span>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a
                                        className="nav-link text-white"
                                        href="https://www.creative-tim.com/learning-lab/bootstrap/tables/material-dashboard"
                                        target="_blank"
                                    >
                                        <span className="sidenav-mini-icon">

                                            T
                                        </span>
                                        <span className="sidenav-normal ms-2">

                                            Tables
                                        </span>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a
                                        className="nav-link text-white"
                                        href="https://www.creative-tim.com/learning-lab/bootstrap/tooltips/material-dashboard"
                                        target="_blank"
                                    >
                                        <span className="sidenav-mini-icon">

                                            T
                                        </span>
                                        <span className="sidenav-normal ms-2">

                                            Tooltips
                                        </span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </li>
                    <li className="nav-item">
                        <a
                            className="nav-link"
                            href="https://github.com/creativetimofficial/ct-material-dashboard-pro/blob/master/CHANGELOG.md"
                            target="_blank"
                        >
                            <i className="material-icons-round {% if page.brand == 'RTL' %}ms-2{% else %} me-2{% endif %}">
                                receipt_long
                            </i>
                            <span className="nav-link-text ms-2">
                                Changelog
                            </span>
                        </a>
                    </li>
                </ul>
                <div className="ps__rail-x">
                    <div className="ps__thumb-x" tabIndex="0"></div>
                </div>
                <div className="ps__rail-y">
                    <div className="ps__thumb-y" tabIndex="0"></div>
                </div>
            </div>
            <div className="d-flex justify-content-around">
                <a href="#" className="nav-link text-body m-auto ">
                    <i className="fa fa-cog fixed-plugin-button-nav cursor-pointer"></i>
                </a>
                <div className="m-auto">
                    <i className="fas fa-sign-out-alt me-sm-1"></i>
                </div>
            </div>
        </aside>
    );
}
