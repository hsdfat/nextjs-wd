import Link from 'next/link';

const Header = () => {
  return (
    <header id="header" className="site-header header-style-1 d-none"><meta name="format-detection" content="telephone=no"/>
        <nav className="navbar bg-white shadow-sm py-1">
          <div className="container-fluid">
            <div className="w-100 d-flex align-items-center justify-content-between">
              <a className="section-title navbar-brand" href="#">KVH & KTBN</a>
              <button
                className="navbar-toggler rounded-0 border-0 p-0"
                type="button"
                data-bs-toggle="offcanvas"
                data-bs-target="#offcanvasNavbar"
                aria-controls="offcanvasNavbar"
              >
                <i className="bi bi-list fs-3 text-black"></i>
              </button>
            </div>
          </div>
        </nav>
      </header>
  );
};

export default Header;