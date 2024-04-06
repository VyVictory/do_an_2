import React, { useState } from 'react';
import ImageInput from './imgxoaanh';

const ProductForm = () => {
  const [productData, setProductData] = useState({
    images: [],
    productName: '',
    category: '',
    description: '',
  });

  const [imagePreviews, setImagePreviews] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProductData({ ...productData, [name]: value });
  };

  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);
    const imageUrls = files.map(file => URL.createObjectURL(file));
    setProductData({ ...productData, images: files });
    setImagePreviews([...imagePreviews, ...imageUrls]);
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
    // setProductData({ images: [], productName: '', category: '', description: '' });
    // Reset image previews
    setImagePreviews([]);
  };

  return (
    <div className="container mt-5">
      <h2>Thêm Sản Phẩm</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="image" className="form-label">Hình Ảnh:</label>
          {imagePreviews.map((imageUrl, index) => (
            <ImageInput
              key={index}
              imagePreview={imageUrl}
              onChange={handleImageChange}
              onRemove={() => handleRemoveImage(index)}
            />
          ))}
          <input
            type="file"
            className="form-control"
            id="image"
            name="image"
            accept="image/*"
            multiple
            onChange={handleImageChange}
          />
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
