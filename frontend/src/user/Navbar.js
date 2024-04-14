import React, { useState, useEffect } from 'react';
import styles from './css/Navber.module.css'; // Import CSS module
import FormL from './LoginForm';
import FormR from './RegistrationPage';

import logo from './imguser/bar/logo.png';
import img_search from './imguser/bar/magnifying-glass.png';
import img_local from './imguser/bar/place.png';
import img_car from './imguser/bar/shopping-cart.png';
import img_thongbao from './imguser/bar/thongbao.png';
import img_avt from './imguser/bar/user.png';
import img_home from './imguser/bar/home.png';

const NavigationBar = () => {
  const [showFormL, setShowFormL] = useState(false);
  const [showFormR, setShowFormR] = useState(false);
  const [isTokenExist, setIsTokenExist] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token && token !== '') {
      setIsTokenExist(true);
    } else {
      setIsTokenExist(false);
    }
  }, []); // useEffect này chạy chỉ một lần khi component mount

  const handleLogout = () => {
    localStorage.removeItem('token'); // Xóa token khỏi localStorage
    setIsTokenExist(false); // Cập nhật trạng thái token không tồn tại
  };

  const toggleFormL = () => {
    setShowFormL(!showFormL);
    if (showFormL === true) {
      setShowFormR(false);
    }
  };

  const toggleFormR = () => {
    setShowFormR(!showFormR);
    if (showFormR === true) {
      setShowFormL(false);
    }
  };

  function handleClick() {
    window.location.href = '/';
  }

  return (
    <div style={{ "marginLeft": "0", "marginRight": "0", "width": "99.236438799999999%" }}>
      <div className={`${styles.barcustom, styles.barcontainer} row shadow p-3  bg-body rounded`}>
        {/* left bar*/}
        <div className={`${styles.barcustom} col-sm-2 `}>
          <img src={logo} alt="Logo" className={`${styles.logo}`} />
        </div>
        {/* content bar*/}
        <div className={`${styles.barcustom}  col-sm-7  justify-content-center d-flex flex-column padding-0`}>
          <div>
            <input type="search" style={{ outline: "none","height": "35px", "width": "100%", "borderRadius": "7px", "paddingLeft": "10px","paddingRight":"40px","paddingBottom":"3px"}} className={`${styles.search} `} />
            <img type="submit" src={img_search} style={{ "height": "30px", "marginLeft": "-35px", "marginTop": "-5px" }} className='border-left-2'/>
          </div>
          <div style={{ "marginTop": "2px", "height": "30px", "marginBottom": "-10px" }} className={`w-100 mt-10 bg-dark d-none`}>
            bbbbbnb
          </div>
        </div>
        {/* right bar*/}
        <div style={{ "paddingRight": "0px" }} className={`${styles.barcustom} col-sm-3`}>
          <div style={{ "height": "60%", "padding": "4px", "marginTop": "0.2%" }} className={`d-flex justify-content-end align-items-center`}>
            <div className={`${styles.container} `}>
              <button onClick={handleClick} type='submit' className={`${styles.hover} ${styles.button} `} style={{ "height": "40px", "paddingLeft": "6px", "paddingRight": "6px", "marginLeft": "-20px" }}>
                <img src={img_home} style={{ "height": "30px" }} alt="Car Icon" />
              </button>
            </div>
            <button type='submit' className={`${styles.hover} ${styles.button}`} style={{ "height": "40px", "width": "40px", "marginRight": "4%", "marginLeft": "5%" }}>
              <img src={img_thongbao} style={{ "height": "30px" }} alt="Car Icon" />
            </button>
            {/* tk da dang nhap*/}
            {isTokenExist ? (
              <div className={`${styles.container}`}>
                <button type='submit' className={`${styles.hover} ${styles.button} `} style={{ "height": "40px", "paddingLeft": "12px", "paddingRight": "6px" }}>
                  <img src={img_avt} style={{ "height": "30px", "marginLeft": "-4px" }} alt="Car Icon" />
                  <span className='' style={{ "minWidth": "100px" }}>
                    Tài Khoản
                  </span>
                </button>
                <ul className={styles.list}>
                  <li><button className={`${styles.hover} ${styles.listaccount}`}>thông tin tài khoản</button></li>
                  <li><button className={`${styles.hover} ${styles.listaccount}`}>đơn hàng của tôi</button></li>
                  <li><button className={`${styles.hover} ${styles.listaccount}`} onClick={handleLogout}>Đăng Xuất</button></li>
                </ul>
              </div>
            ) : (
              <div className={`${styles.container}`}>
                <button type='submit' className={`${styles.hover} ${styles.button} `} style={{ "height": "40px", "paddingLeft": "12px", "paddingRight": "6px" }}>
                  <img src={img_avt} style={{ "height": "30px", "marginLeft": "-4px" }} alt="Car Icon" />
                  <span className='' style={{ "minWidth": "100px" }}>
                    Tài Khoản
                  </span>
                </button>
                <ul className={styles.list}>
                  <li><button className={`${styles.hover} ${styles.listaccount}`} onClick={toggleFormL}>Đăng Nhập</button></li>
                  <li><button className={`${styles.hover} ${styles.listaccount}`} onClick={toggleFormR}>Đăng Ký</button></li>
                </ul>
              </div>
            )}
            {/*000000000*/}
            <div style={{ "height": "20px", "display": "block", "width": "1px", "marginLeft": "20px" }} className='bg-secondary'></div>
            <button type='submit' className={`${styles.hover} ${styles.button} `} style={{ "height": "40px", "width": "40px", "marginRight": "10%", "marginLeft": "3%" }}>
              <img src={img_car} style={{ "height": "30px", "marginLeft": "-4px" }} alt="Car Icon" />
            </button>
          </div>
          <div style={{ "height": "40%" }} className={`justify-content-center  align-items-center d-flex`}>
            <button style={{ "height": "30px" }} type='submit' className={`${styles.hover} ${styles.button} border-0 d-flex align-items-center justify-content-center bg-transparent`}>
              <img src={img_local} style={{ "height": "60%" }} alt="Location Icon" />
              <div>
                Giao Đến:
              </div>
            </button>
          </div>
        </div>
      </div>
      {showFormL && <FormL onClose={toggleFormL} onR={toggleFormR} />}
      {showFormR && <FormR onClose={toggleFormR} onL={toggleFormL} />}
    </div>
  );
};

export default NavigationBar;


//bg-transparent