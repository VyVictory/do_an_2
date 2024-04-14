import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Baruser from '../user/Navbar'
import Sellerbar from '../seller/sellerbar'
import Sellercenter from '../seller/sellercenter';
import App from '../App'
import Themsanpham from '../seller/themsanpham';
import Themanh from '../seller/yourcontainer'
import Home from '../user/Home'
function Routerr() {
    const [showNavbar, setShowNavbar] = useState(true);

    useEffect(() => {
        // Lấy đường dẫn hiện tại
        const currentPath = window.location.pathname;

        // Kiểm tra nếu đường dẫn là "/home" thì ẩn Navbar
        if(currentPath.startsWith('/kenhnguoiban')){
            setShowNavbar(false);
        } else {
            setShowNavbar(true);
        }
    }, []);
    return (
        <div>
            <Router>
      {/* Hiển thị Navbar nếu showNavbar là true */}
      {showNavbar ? <Baruser /> : <Sellerbar />}
      
      {/* Show Sellercenter component only when showNavbar is true */}
      {!showNavbar && <Sellercenter />}
               
                <div className="page-container">
                    <Routes>
                        <Route path="/" element={<Home />} />

                        <Route path="/kenhnguoiban/sanpham/themsanpham" element={<Themsanpham />} />
                        <Route path="/kenhnguoiban/sanpham/themanh" element={<Themanh />} />
                    </Routes>
                </div>
            </Router>
        </div>
    );
};

export default Routerr;