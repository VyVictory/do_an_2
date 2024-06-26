import React, { useState, useEffect } from 'react';
import ImageInput from './imgthemanh';
import axios from 'axios';

const ProductForm = () => {
  const [productData, setProductData] = useState({
    coverImage: null,
    images: [],
  });
  const [ten, setTen] = useState('');
  const [gia, setGia] = useState('');
  const [mota, setMota] = useState('');
  const [soluong, setSoluong] = useState('');
  const [loai, setLoai] = useState('661b85a4f0a27cb78fa93a5d');
  const [coverImagePreview, setCoverImagePreview] = useState('');
  const [imagePreviews, setImagePreviews] = useState([]);

  const [savedImagePath, setSavedImagePath] = useState('');
  const [img, setImg] = useState(null);

  const handleCoverImageChange = (e) => {
    const file = e.target.files[0];
    setImg(file);
    // Tạo chuỗi thời gian hiện tại
    const currentDate = new Date();
    const timestamp = currentDate.getTime(); // Lấy timestamp để đảm bảo tên file là duy nhất
    // Tạo tên file mới với timestamp
    const newFileName = `cover_${timestamp}_${file.name}`;
    const imageUrl = URL.createObjectURL(file);
    setProductData({ ...productData, coverImage: file });
    setCoverImagePreview(imageUrl);
    // Lưu đường dẫn vào state
    setSavedImagePath(newFileName); // Giả sử bạn có useState('') là savedImagePath
  };
  const handleRemoveCoverImage = () => {
    setProductData({ ...productData, coverImage: null });
    setCoverImagePreview('');
    setSavedImagePath(''); // Đặt lại savedImagePath khi xóa ảnh
  };



  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);
    const remainingSlots = 6 - imagePreviews.length;
    const selectedImages = files.slice(0, remainingSlots);
    const imageUrls = selectedImages.map((file) => URL.createObjectURL(file));
    setImagePreviews([...imagePreviews, ...imageUrls]);
    setProductData({ ...productData, images: [...productData.images, ...selectedImages] });
  };
  const handleRemoveImage = (index) => {
    const updatedImages = [...productData.images];
    const updatedPreviews = [...imagePreviews];
    updatedImages.splice(index, 1);
    updatedPreviews.splice(index, 1);
    setProductData({ ...productData, images: updatedImages });
    setImagePreviews(updatedPreviews);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const token = localStorage.getItem('token');
      const response = await axios.post('http://localhost:3000/product', {
        ten: ten,
        gia: +gia,
        mota: mota,
        soluong: +soluong,
        hinh: savedImagePath,
        loai: loai,
      }, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      if (!response.ok) {
        alert('Thêm sản phẩm thành công');
      } else {
        alert('Thêm sản phẩm thất bại');
      }
      if (img) {
        const formData = new FormData();
        formData.append('file', img, savedImagePath);

        const response = await fetch('http://localhost:3000/upload', {
          method: 'POST',
          body: formData,
          headers: {
            'Authorization': `Bearer ${token}`
          }
        })

        if (!response.ok) {
          throw new Error('Cover image upload failed');
        }

        const responseData = await response.json();
        setSavedImagePath(responseData.filePath);
      }
      // Handle response if needed
      console.log('Product created:', response.data);

    } catch (error) {
      // Handle errors
      if (error.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        console.error('Server responded with an error:', error.response.data);
        console.error('Status code:', error.response.status);
      } else if (error.request) {
        // The request was made but no response was received
        console.error('No response received from server:', error.request);
      } else {
        // Something happened in setting up the request that triggered an Error
        console.error('Error setting up the request:', error.message);
      }
    }

    // Reset form after submit
    setTen('');
    setGia('');
    setMota('');
    setSoluong('');
    setLoai('661b85a4f0a27cb78fa93a5d');
    setProductData({ coverImage: null, images: [] });
    setCoverImagePreview('');
    setImagePreviews([]);
  };
  return (
    <div className="container mt-5">
      <h2>Thêm Sản Phẩm</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="coverImage" className="form-label">Ảnh Bìa:</label>
          {coverImagePreview && (
            <div className="mb-3">
              <img src={coverImagePreview} alt="Cover Preview" style={{ maxWidth: '200px', marginBottom: '10px' }} />
              <button type="button" className="btn btn-danger m-1" onClick={handleRemoveCoverImage}>Xóa Ảnh Bìa</button>
            </div>
          )}
          {!coverImagePreview && (
            <ImageInput
              onChange={handleCoverImageChange}
              multiple={false}
            />
          )}
        </div>
        <div className="mb-3">
          <label htmlFor="images" className="form-label">Hình Ảnh Khác:</label>
          <div className='d-flex flex-wrap'>
            {imagePreviews.map((imageUrl, index) => (
              <div key={index} className="mb-3 d-flex justify-content-center align-items-center flex-column mx-1">
                <img src={imageUrl} alt={`Product Image ${index}`} className="img-fluid" style={{ maxWidth: '200px', minHeight: '100px', maxHeight: "100px", marginBottom: '10px' }} />
                <button type="button" className="btn  btn-danger btn-sm" onClick={() => handleRemoveImage(index)}>Xóa Ảnh</button>
              </div>
            ))}
            {imagePreviews.length < 6 && (
              <div className='d-flex justify-content-center align-items-center'>
                <ImageInput
                  onChange={handleImageChange}
                  multiple={true}
                />
              </div>
            )}
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="productName" className="form-label">Tên Sản Phẩm:</label>
          <input
            type="text"
            className="form-control"
            placeholder="Tên Sản Phẩm"
            value={ten}
            onChange={(e) => setTen(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="gia" className="form-label">Giá:</label>
          <input
            type="number"
            className="form-control"
            value={gia}
            onChange={(e) => setGia(e.target.value)}
            placeholder="Giá Sản Phẩm"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="soluong" className="form-label">Số lượng:</label>
          <input
            type="number"
            className="form-control"
            value={soluong}
            onChange={(e) => setSoluong(e.target.value)}
            placeholder="Số Lượng Sản Phẩm"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="category" className="form-label">Ngành Hàng:</label>
          <select
            className="form-select"
            id="category"
            name="category"
            value={loai}
            onChange={(e) => setLoai(e.target.value)}
          >
            <option value="661b85a4f0a27cb78fa93a5d">Điện Tử</option>
            <option value="clothing">Thời Trang</option>
            <option value="books">Sách</option>
          </select>
        </div>
        <div className="mb-3">
          <label htmlFor="description" className="form-label">Mô Tả Sản Phẩm:</label>
          <textarea
            className="form-control"
            value={mota}
            onChange={(e) => setMota(e.target.value)}
            placeholder="Mô Tả Sản Phẩm"
          />
        </div>
        <button type="submit" className="btn btn-primary">Thêm Sản Phẩm</button>
      </form>
    </div>
  );
};

export default ProductForm;
