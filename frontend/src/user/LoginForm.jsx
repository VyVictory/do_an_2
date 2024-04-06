import React from 'react';
import styles from './css/LoginForm.module.css'; // Import CSS module
function LoginForm({ onClose,onR }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Xử lý đăng nhập tại đây
    // Sau khi xử lý xong, có thể đóng form
    onClose();
  };

  return (
    <div className={styles.modal}>
      <div className={styles.modalContent}><div type='submit' onClick={onClose} style={{display:"block",float:"right" , width:"25px", height:"25px", paddingLeft:"1px", paddingBottom:"10px", backgroundColor:"red", borderRadius:"5px", marginRight:"-15px", marginTop:"-15px"}}>X</div>
        <div className='' style={{ margin: "10px" }}>
          <h2 >Đăng Nhập</h2>
          <form onSubmit={handleSubmit} className='p-1 '>
            <div className='pd d-flex flex-column align-items-start'>
              {/* Các trường nhập liệu và nút đăng nhập */}
              <label style={{}} className=''>UserName:</label>
              <input type="text" className="form-control" placeholder="Tên đăng nhập" />
              <label style={{}} className='mt-1'>Password:</label>
              <input type="password" className="form-control" placeholder="Mật khẩu" />
            </div>
            <div className='p-2 d-flex flex-column'>
              <button type="submit" className="btn btn-primary btn-block">Đăng Nhập</button>
              Hoặc 
              <a href='#' onClick={onR}>Đăng Ký Mới</a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default LoginForm;
