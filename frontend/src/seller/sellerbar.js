import React, { useState, useEffect } from 'react';
import { Collapse } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import img_avt from '../user/imguser/bar/user.png';
import img_thongbao from '../user/imguser/bar/thongbao.png';
import styles from '../user/css/Navber.module.css'; // Import CSS module
import logo from './imgseller/shops.png';
import stylesin from './css/sellerbar.module.css';
import { NavLink, useLocation } from 'react-router-dom';
import FormL from '../user/LoginForm';
import FormR from '../user/RegistrationPage';

const NavigationBar = () => {
  const [open, setOpen] = useState(false);
  const [pageName, setPageName] = useState('');
  const location = useLocation();
  useEffect(() => {
    const path = location.pathname;
    if (path === "/kenhnguoiban/quanlysanpham") {
      setPageName(' > SẢN PHẨM');
    }else if (path === "/kenhnguoiban/quanlydonhang") {
      setPageName(' > ĐƠN HÀNG');
    } else {
      setPageName('');
    }
  }, [location.pathname]); // Kích hoạt mỗi khi location.pathname thay đổi
  const [showFormL, setShowFormL] = useState(false);

  const toggleFormL = () => {
    setShowFormL(!showFormL);
    if (showFormL === true) {
      setShowFormR(false);
    }
  };
  const [showFormR, setShowFormR] = useState(false);

  const toggleFormR = () => {
    setShowFormR(!showFormR);
    if (showFormR === true) {
      setShowFormL(false);
    }
  };
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light shadow-sm  bg-body rounded" style={{ backgroundColor: "#FFB4B4" }}>
        <div className="container-fluid ">
          <NavLink to="/kenhnguoiban" className="navbar-brand " style={{ marginLeft: "40px" }}>
            <img src={logo} alt="Logo" className={`${styles.logo} ${stylesin.logo}`} />
          </NavLink>
          <button className="navbar-toggler" type="button" onClick={() => setOpen(!open)}>
            <span className="navbar-toggler-icon"></span>
          </button>
          <Collapse in={open}>
            <div className="navbar-collapse">
              <div className="navbar-nav me-auto mb-2 mb-lg-0">
                HOME{pageName}
              </div>
              <button type="button" className={`${styles.hover} ${styles.button}`} style={{ height: "40px", width: "40px", marginRight: "10px", marginLeft: "2px" }}>
                <img src={img_thongbao} style={{ height: "30px" }} alt="Notification Icon" />
              </button>

              <div className="d-flex" style={{ marginRight: "60px" }}>
                <div className={`${styles.container}`}>
                  <button type="submit" className={`${styles.hover} ${styles.button}`} aria-label="Search" style={{ height: "40px", marginLeft: "2px", paddingLeft: "12px", paddingRight: "20px" }}>
                    <img src={img_avt} style={{ height: "30px", marginLeft: "-4px" }} alt="User Avatar" />
                    <span className="" style={{ minWidth: "100px" }}>
                      Tài Khoản
                    </span>

                  </button>
                  <ul className={styles.list}>
                    <li><button className={`${styles.hover} ${styles.listaccount}`} onClick={toggleFormL}>Đăng Nhập</button></li>
                    <li><button className={`${styles.hover} ${styles.listaccount}`} onClick={toggleFormR}>Đăng Ký</button></li>
                  </ul>
                </div>
              </div>
            </div>
          </Collapse>

        </div>
      </nav>
      {showFormL && <FormL onClose={toggleFormL} onR={toggleFormR} />}
      {showFormR && <FormR onClose={toggleFormR} onL={toggleFormL} />}
    </div>
  );
};

export default NavigationBar;
