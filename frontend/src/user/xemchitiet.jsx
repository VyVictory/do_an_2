import { NavLink } from 'react-router-dom';
import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
function Xemchitiet() {
    const [sanphams, setSanphams] = useState([]); // Initialize sanpham as an empty array
    const [sanpham, setSanpham] = useState({
        _id:'',
        ten: '',
        gia: '',
        mota: '',
        soluong: '',
        hinh: '',
        loai: '',
        user:''
    },[])
    useEffect(() => {
        const urlParams = new URLSearchParams(window.location.search);
        const chitietproduct = urlParams.get('chitietproduct');
        if (chitietproduct) {
            // Xử lý logic với giá trị chitietproduct ở đây
            axios.get('http://localhost:3000/product/'+ chitietproduct)
            .then(response => {
                if (response.data) {
                    setSanpham(response.data);
                } else {
                    alert('No data found');
                }
            })
            .catch(err => console.log(err));

            console.log(chitietproduct);
        }
    }, []);

    useEffect(() => {
        axios.get('http://localhost:3000/product/')
            .then(response => {
                if (response.data) {
                    setSanphams(response.data);
                } else {
                    alert('No data found');
                }
            })
            .catch(err => console.log(err));
    }, []); // Empty dependency array to run once on component mount
    const webpage = (a, b, c) => {
        // Chuyển hướng ở đây
        window.location.href = '/xemchitiet?' + 'chitietproduct=' + a;
    };
    return (
        <div className="Xemchitiet">
            <div className="" >
                <div >
                    <div className='p-5' style={{ display: 'flex', height: '1000px' }}>
                        {/* Phần thẻ div thông thường */}
                        <div style={{ flex: 2 }}>
                            <div style={{ backgroundColor: 'lightgray' }} className="bg-light border p-2 shadow-sm rounded">
                                Nội dung{sanpham.ten}
                            </div>
                        </div>

                        <div className='container' style={{ flex: 3 }}>
                            {/* Phần thẻ div có thể cuộn */}
                            <div style={{ backgroundColor: 'lightblue', height: '120px' }} className="bg-light border p-2 shadow-sm rounded  overflow-auto   ">
                                {/* Nội dung dài để tạo ra thanh cuộn */}
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed id magna ultricies, lacinia ligula non, laoreet ex. Phasellus sed quam in purus suscipit lacinia. Integer fermentum sagittis libero, a suscipit odio sollicitudin ac. Ut nec justo sed libero suscipit pharetra sed vel lorem. Sed condimentum volutpat massa vel rhoncus. Mauris vestibulum dolor sed libero gravida, et condimentum justo malesuada. Ut varius est ut massa efficitur, sed tempor arcu scelerisque. Vivamus nec ipsum lacinia, varius ligula vel, faucibus ipsum. Sed tincidunt, sapien vitae ullamcorper facilisis, felis sapien posuere libero, eu gravida velit nisl sed mauris. Sed hendrerit varius eros, nec ultricies ex aliquet ac. In et aliquam elit.</p>
                                <p>Integer at libero at urna rutrum vestibulum. In fermentum, libero at convallis hendrerit, lorem augue suscipit sapien, vel dictum purus ipsum eget libero. Morbi ut ante volutpat, posuere quam eu, placerat mauris. Sed tincidunt lacinia risus, nec consectetur velit. Nulla at dignissim purus. Sed facilisis pharetra tellus, a suscipit enim feugiat vitae. In rhoncus, purus id gravida consequat, lorem mi dictum nisi, a vulputate ligula ipsum a justo. Donec at eros ipsum. Pellentesque condimentum sodales ante ut dignissim. Aliquam ac dictum felis, in mollis arcu. Donec vel sapien tincidunt, viverra libero nec, egestas metus. Pellentesque vehicula tellus at nulla euismod bibendum. Curabitur ac libero nec odio lacinia hendrerit. Aenean efficitur arcu eu elit finibus rutrum. Fusce vel nunc nisi.</p>
                            </div>
                        </div>
                        <div style={{ flex: 1.5 }}>
                            <div style={{ backgroundColor: 'lightgray' }} className="bg-light border p-2 shadow-sm rounded">
                                Nội dung
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div >
    );
}

export default Xemchitiet;
