import styles from './css/seller.module.css'; // Import CSS modu
import stylecenter from './css/sellercenter.module.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import { Container, Row, Col, Table } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import trash_0 from './imgseller/recycle-bin.png'

const Qlsp = () => {

    const [list, setList] = useState('tatca'); // Initialize list as 'tatca'

    const handleSetList = (value) => {
        setList(value);
    };

    const cellStyle = {
        maxWidth: '200px',
        wordWrap: 'break-word',
    };
    const [sanpham, setSanpham] = useState([]); // Initialize sanpham as an empty array
    useEffect(() => {
        axios.get('http://localhost:3000/product')
            .then(response => {
                if (response.data) {
                    const sortedSanpham = response.data.sort((a, b) => {
                        const nameA = a.ten.toUpperCase(); // Chuyển tên sản phẩm thành chữ hoa để so sánh không phân biệt hoa thường
                        const nameB = b.ten.toUpperCase();
                        if (nameA < nameB) {
                            return -1;
                        }
                        if (nameA > nameB) {
                            return 1;
                        }
                        return a.gia - b.gia; // Tên bằng nhau
                    });
                    setSanpham(sortedSanpham);
                } else {
                    alert('No data found');
                }
            })
            .catch(err => console.log(err));
    }, []); // Empty dependency array to run once on component mount

    return (
        <div className="shadow p-3 mb-5 bg-body rounded" style={{ marginTop: "20px", marginLeft: "10px", marginRight: "10px" }}>
            <Container fluid className='border'>
                {/* Header */}
                <Row className="text-white d-flex" style={{ height: "40px", paddingTop: "10px", borderBottom: "gray 1px solid", height: "100%" }}>
                    <Col className={`${list === 'tatca' ? styles.gachchanactive : styles.gachchan} text-center align-content-center text-uppercase mx-3`}>
                        <NavLink onClick={() => handleSetList("tatca")} className={`${list === 'tatca' ? styles.navlinkactive : styles.navlink}`}><h6 className={`${styles.hovertext} `}>Tất Cả</h6></NavLink>
                    </Col>
                    <Col className={`${list === 'danghoatdong' ? styles.gachchanactive : styles.gachchan} text-center align-content-center text-uppercase mx-3`}>
                        <NavLink onClick={() => handleSetList("danghoatdong")} className={`${list === 'danghoatdong' ? styles.navlinkactive : styles.navlink}`}><h6 className={`${styles.hovertext} `}>Đang Hoạt Động</h6></NavLink>
                    </Col>

                    <Col className={`${list === 'hethang' ? styles.gachchanactive : styles.gachchan} text-center align-content-center text-uppercase mx-3`}>
                        <NavLink onClick={() => handleSetList("hethang")} className={`${list === 'hethang' ? styles.navlinkactive : styles.navlink}`}><h6 className={`${styles.hovertext} `}>hết hàng</h6></NavLink>
                    </Col>
                    <Col className={`${list === 'choduyet' ? styles.gachchanactive : styles.gachchan} text-center align-content-center text-uppercase mx-3`}>
                        <NavLink onClick={() => handleSetList("choduyet")} className={`${list === 'choduyet' ? styles.navlinkactive : styles.navlink}`}><h6 className={`${styles.hovertext} `}>chờ duyệt</h6></NavLink>
                    </Col>
                    <Col className={`${list === 'vipham' ? styles.gachchanactive : styles.gachchan} text-center align-content-center text-uppercase mx-3`}>
                        <NavLink onClick={() => handleSetList("vipham")} className={`${list === 'vipham' ? styles.navlinkactive : styles.navlink}`}><h6 className={`${styles.hovertext} `}>vi phạm</h6></NavLink>
                    </Col>
                    <Col className={`${list === 'daan' ? styles.gachchanactive : styles.gachchan} text-center align-content-center text-uppercase mx-3`}>
                        <NavLink onClick={() => handleSetList("daan")} className={`${list === 'daan' ? styles.navlinkactive : styles.navlink}`}><h6 className={`${styles.hovertext} `}>đã ẩn</h6></NavLink>
                    </Col>
                </Row>

                {/* Body */}
                <Row>
                    <nav className="navbar navbar-expand-lg mt-2">
                        <div className="navbar-collapse">
                            <div className="navbar-nav me-auto mb-2 mb-lg-0" style={{ marginLeft: "24px" }}>
                                HOME
                            </div>
                            <button type="submit" className={`${styles.hover} btn btn-outline-success`} style={{ height: "40px", marginRight: "24px" }}>
                                <span>
                                    <NavLink to="/kenhnguoiban/sanpham/themsanpham" className={`${styles.navlink}`}><h6 class="mb-0">Thêm Sản Phẩm</h6></NavLink>
                                </span>
                            </button>
                        </div>
                    </nav>
                </Row>

                <Row className='pt-3'>
                    <Col>
                        {/* Nội dung của Body */}
                        <Container fluid>
                            <Row>
                                <Col>
                                    <Table responsive striped bordered hover style={{ whiteSpace: 'normal' }}>
                                        <thead>
                                            <tr className='text-center'>
                                                <th>Tên Sản Phẩm</th>
                                                <th>Phân Loại Hàng</th>
                                                <th>Giá</th>
                                                <th>Kho</th>
                                                <th>Doanh Số</th>
                                                <th>Thao Tác</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {
                                                sanpham.map(e => (
                                                    <tr key={e.id} style={{ fontSize: '12px' }}>
                                                        <td style={cellStyle}>{e.ten}<div style={{ fontSize: '10px', color:'gray'}}>{e.mota}</div></td>
                                                        <td style={cellStyle}>objectid:{e.loai}</td>
                                                        <td style={cellStyle}>{e.gia.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}<span style={{ verticalAlign: "super" }}>đ</span></td>
                                                        <td style={cellStyle}>{e.soluong}</td>
                                                        <td style={cellStyle}>chưa cộng</td>
                                                        <td style={cellStyle}>
                                                            <img type="submit" src={trash_0} style={{ height: "30px" }} className='border-left-2 float-end' >
                                                            </img>
                                                        </td>
                                                    </tr>
                                                ))
                                            }
                                        </tbody>
                                    </Table>
                                </Col>
                            </Row>
                        </Container>
                    </Col>
                </Row>
            </Container>
        </div >
    );
}

export default Qlsp;
