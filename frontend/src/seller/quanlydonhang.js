
import React, { useState } from 'react';
import styles from './css/seller.module.css'; // Import CSS modu
import stylecenter from './css/sellercenter.module.css';

import img_search from "../user/imguser/bar/magnifying-glass.png"

import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import { Container, Row, Col, Table } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const Qldonhang = () => {

    const [list, setList] = useState([]);
    if (list == '') {
        setList('tatca')
    }
    const handleSetList = (value) => {
        setList(value);
    };
    const cellStyle = {
        maxWidth: '200px',
        wordWrap: 'break-word',
    };
    return (
        <div className="shadow p-3 mb-5 bg-body rounded" style={{ marginTop: "20px", marginLeft: "10px", marginRight: "10px" }}>
            <Container fluid className='border'>
                {/* Header */}
                
                <Row className="text-white d-flex" style={{ height: "40px", paddingTop: "4px", borderBottom: "gray 1px solid", height: "100%" }}>
                    <Col className={`${list === 'tatca' ? styles.gachchanactive : styles.gachchan} text-center align-content-center text-uppercase small fw-bold`}>
                        <NavLink onClick={() => handleSetList("tatca")} className={`${list === 'tatca' ? styles.navlinkactive : styles.navlink}`}><div className={`${styles.hovertext} `}>Tất Cả</div></NavLink>
                    </Col>
                    <Col className={`${list === 'choxacnhan' ? styles.gachchanactive : styles.gachchan} text-center align-content-center text-uppercase small fw-bold`}>
                        <NavLink onClick={() => handleSetList("choxacnhan")} className={`${list === 'choxacnhan' ? styles.navlinkactive : styles.navlink}`}><div className={`${styles.hovertext} `}>Chờ Xác Nhận</div></NavLink>
                    </Col>

                    <Col className={`${list === 'cholayhang' ? styles.gachchanactive : styles.gachchan} text-center align-content-center text-uppercase small fw-bold`}>
                        <NavLink onClick={() => handleSetList("cholayhang")} className={`${list === 'cholayhang' ? styles.navlinkactive : styles.navlink}`}><div className={`${styles.hovertext} `}>Chờ Lấy Hàng</div></NavLink>
                    </Col>
                    <Col className={`${list === 'danggiao' ? styles.gachchanactive : styles.gachchan} text-center align-content-center text-uppercase small fw-bold`}>
                        <NavLink onClick={() => handleSetList("danggiao")} className={`${list === 'danggiao' ? styles.navlinkactive : styles.navlink}`}><div className={`${styles.hovertext} `}>Đang Giao</div></NavLink>
                    </Col>
                    <Col className={`${list === 'dagiao' ? styles.gachchanactive : styles.gachchan} text-center align-content-center text-uppercase small fw-bold`}>
                        <NavLink onClick={() => handleSetList("dagiao")} className={`${list === 'dagiao' ? styles.navlinkactive : styles.navlink}`}><div className={`${styles.hovertext} `}>Đã Giao</div></NavLink>
                    </Col>
                    <Col className={`${list === 'dahuy' ? styles.gachchanactive : styles.gachchan} text-center align-content-center text-uppercase small fw-bold`}>
                        <NavLink onClick={() => handleSetList("dahuy")} className={`${list === 'dahuy' ? styles.navlinkactive : styles.navlink}`}><div className={`${styles.hovertext} `}>Đã Hủy</div></NavLink>
                    </Col>
                    <Col className={`${list === 'trahang' ? styles.gachchanactive : styles.gachchan} text-center align-content-center text-uppercase  small fw-bold`}>
                        <NavLink onClick={() => handleSetList("trahang")} className={`${list === 'trahang' ? styles.navlinkactive : styles.navlink}`}><div className={`${styles.hovertext} `}>Trả Hàng/Hoàn Tiền</div></NavLink>
                    </Col>
                    <Col className={`${list === 'giaokhongthanhcong' ? styles.gachchanactive : styles.gachchan} text-center align-content-center text-uppercase  small fw-bold`}>
                        <NavLink onClick={() => handleSetList("giaokhongthanhcong")} className={`${list === 'giaokhongthanhcong' ? styles.navlinkactive : styles.navlink}`}><div className={`${styles.hovertext} `}>Giao Không Thành Công</div></NavLink>
                    </Col>
                </Row>

                {/* Body */}
                <Row>
                    <nav className="navbar navbar-expand-lg mt-3">

                    <div className="navbar-collapse">
                        <select id="cars" name="cars" style={{ "height": "35px", "width": "10%", "borderTopLeftRadius": "7px", borderBottomLeftRadius:"7px",marginLeft:"24px"}}>
                            <option value="volvo">Volvo</option>
                            <option value="saab">Saab</option>
                            <option value="fiat">Fiat</option>
                            <option value="audi">Audi</option>
                        </select>
                        <div className="  mb-lg-0" style={{  width: "100%", marginRight: "24px" }}>
                            <div className={`${styles.barcustom} justify-content-center d-flex flex-column padding-0`}>
                                <div>
                                    <input type='search' style={{outline: "none", height: "35px", width: "100%", borderTopRightRadius: "7px", borderBottomRightRadius:"7px", paddingLeft: "5px",paddingBottom:"2px", paddingRight:"40px"}} className={`${styles.search} `}>
                                    </input>
                                    <img type="submit" src={img_search} style={{ height: "30px", "margin-left": "-35px", "margin-top": "-2px" }} className='border-left-2' />
                                </div>
                                <div style={{ "margin-top": "2px", "height": "30px", "marginBottom": "-10px" }} className={` w-100 mt-10 bg-dark d-none`}>
                                    bbbbbnb
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
                </Row>
                <Row className='pt-3'>

                    <Col>


                        {/* Nội dung của Body */}
                        <Container fluid >
                            <Row>
                                <Col>
                                    <Table responsive striped bordered hover style={{ whiteSpace: 'normal' }}>
                                        <thead>
                                            <tr className='text-center'>
                                                <th>Sản Phẩm</th>
                                                <th>Tổng Đơn Hàng</th>
                                                <th>Trạng Thái</th>
                                                <th>Thao Tác</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td style={cellStyle}>1</td>
                                                <td style={cellStyle}>aa</td>
                                                <td style={cellStyle}>Otto</td>
                                                <td style={cellStyle}>@mdo</td>
                                            </tr>
                                            <tr>
                                                <td style={cellStyle}>2</td>
                                                <td style={cellStyle}>Jacob</td>
                                                <td style={cellStyle}>Thornton</td>
                                                <td style={cellStyle}>@fat</td>
                                            </tr>
                                            <tr>
                                                <td style={cellStyle}>3</td>
                                                <td style={cellStyle}>Larry</td>
                                                <td style={cellStyle}>the Bird</td>
                                                <td style={cellStyle}>@twitter</td>
                                            </tr>
                                        </tbody>
                                    </Table>
                                </Col>
                            </Row>
                        </Container>

                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Qldonhang;
