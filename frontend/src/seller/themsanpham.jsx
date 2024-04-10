import React, { useState } from 'react';
import ImageInput from './imgthemanh';

const ProductForm = () => {
  const [productData, setProductData] = useState({
    coverImage: null,
    images: [],
    productName: '',
    category: '',
    description: '',
  });

  const [coverImagePreview, setCoverImagePreview] = useState('');
  const [imagePreviews, setImagePreviews] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProductData({ ...productData, [name]: value });
  };

  const handleCoverImageChange = (e) => {
    const file = e.target.files[0];
    const imageUrl = URL.createObjectURL(file);
    setProductData({ ...productData, coverImage: file });
    setCoverImagePreview(imageUrl);
  };

  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);
    const remainingSlots = 6 - imagePreviews.length;
    const selectedImages = files.slice(0, remainingSlots);
    const imageUrls = selectedImages.map(file => URL.createObjectURL(file));
    setImagePreviews([...imagePreviews, ...imageUrls]);
    setProductData({ ...productData, images: [...productData.images, ...selectedImages] });
  };

  const handleRemoveCoverImage = () => {
    setProductData({ ...productData, coverImage: null });
    setCoverImagePreview('');
  };

  const handleRemoveImage = (index) => {
    const updatedImages = [...productData.images];
    const updatedPreviews = [...imagePreviews];
    updatedImages.splice(index, 1);
    updatedPreviews.splice(index, 1);
    setProductData({ ...productData, images: updatedImages });
    setImagePreviews(updatedPreviews);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(productData);
    // Reset form after submit
    setProductData({ coverImage: null, images: [], productName: '', category: '', description: '' });
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
            id="productName"
            name="productName"
            value={productData.productName}
            onChange={handleChange}
            placeholder="Tên Sản Phẩm"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="category" className="form-label">Ngành Hàng:</label>
          <select
            className="form-select"
            id="category"
            name="category"
            value={productData.category}
            onChange={handleChange}
          >
            <option value="">Chọn Ngành Hàng</option>
            <option value="electronics">Điện Tử</option>
            <option value="clothing">Thời Trang</option>
            <option value="books">Sách</option>
          </select>
        </div>
        <div className="mb-3">
          <label htmlFor="description" className="form-label">Mô Tả Sản Phẩm:</label>
          <textarea
            className="form-control"
            id="description"
            name="description"
            value={productData.description}
            onChange={handleChange}
            placeholder="Mô Tả Sản Phẩm"
          />
        </div>
        <button type="submit" className="btn btn-primary">Thêm Sản Phẩm</button>
      </form>
    </div>
  );
};

export default ProductForm;
