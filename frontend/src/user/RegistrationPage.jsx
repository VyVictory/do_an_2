import React from 'react';
import styles from './css/Register.module.css'
function RegistrationPage({ onClose, onL}) {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Xử lý đăng nhập tại đây
    // Sau khi xử lý xong, có thể đóng form
    onClose();
  };
  return (
    <div className={styles.modal}>
      <div className="container mt-3">
        <div style={{paddingBottom:"10px"}} className=''>
          <a href='#' onClick={onL} className='btn btn-primary ' style={{}}>Back</a>
          <div type='submit' onClick={onClose} style={{ display: "block", float: "right", width: "25px", height: "25px", paddingLeft: "8px", paddingBottom: "10px", backgroundColor: "red", borderRadius: "5px"}}>X</div>
        </div>
        <div className={`${styles.content}row justify-content-center`}>
          <div className={`${styles.content}col-md-6 `}>
            <div className="card">
              <div className="card-body">
                <h3 className="card-title text-center p-2">Đăng Ký</h3>
                <form>
                  <div className="form-group">
                    <label htmlFor="fullName">Họ và Tên</label>
                    <input type="text" className="form-control" id="fullName" placeholder="Nhập họ và tên" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input type="email" className="form-control" id="email" placeholder="Nhập email" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="password">Mật Khẩu</label>
                    <input type="password" className="form-control" id="password" placeholder="Nhập mật khẩu" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="confirmPassword">Xác Nhận Mật Khẩu</label>
                    <input type="password" className="form-control" id="confirmPassword" placeholder="Nhập lại mật khẩu" />
                  </div>
                  <div className='d-flex flex-column p-3'>
                    <button type="submit" className="btn btn-primary btn-block">Đăng Ký</button>
                  </div>

                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  );
}

export default RegistrationPage;
