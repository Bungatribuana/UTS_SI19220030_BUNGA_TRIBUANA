import React from "react";
import Tombol from './atoms/tombol';

export default function Hero({ title, desc, src }) {
    return (
        <div className="row py-5 px-4 bg-light">
            <div className="col-6">
                <h2 className="mb-5">{title}</h2>
                <p>{desc}</p>
                <div className="mt-5 py-3">
                    <Tombol className="btn btn-primary me-2">Produk Kami</Tombol>
                    <Tombol className="btn btn-outline-primary">Pesan Sekarang</Tombol>
                </div>
            </div>
            <div className="col-6">
                <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img src="https://1.bp.blogspot.com/-B_KROwO51Bg/Th_Qttau8fI/AAAAAAAAAAM/fShHnBT679U/s1600/gambar_taman_bunga_tulip.jpg" className="img-thumbnail d-block w-100" alt="..." />
                        </div>
                        <div className="carousel-item">
                            <img src="https://i.misteraladin.com/blog/2018/05/21120122/kebun-bunga-sakura.jpg" className="img-thumbnail d-block w-100" alt=".../" />
                        </div>
                        <div className="carousel-item">
                            <img src="https://th.bing.com/th/id/OIP.sd9PKrvUMR6BIZRuCTlHEQAAAA?rs=1&pid=ImgDetMain" className="img-thumbnail d-block w-100" alt="..." />
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
        </div>
    );
}