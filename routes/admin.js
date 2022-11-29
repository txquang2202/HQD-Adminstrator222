import express from "express";
import adminControllers from '../controllers/adminControllers';
let router = express.Router();

const initWebRoute = (app) => {
    router.get('/', adminControllers.getHomePage);
    router.get('/adminProfile', adminControllers.getAdminProfile);
    router.get('/QuanLyDonDatHang', adminControllers.getQuanLyDonDatHang);
    router.get('/QuanLyNguoiDung', adminControllers.getQuanLyNguoiDung);
    router.get('/QuanLyNoiSanXuat', adminControllers.getQuanLyNoiSanXuat);
    router.get('/QuanLySanPham', adminControllers.getQuanLySanPham);
    router.get('/QuanLyTheLoai', adminControllers.getQuanLyTheLoai);

    return app.use('/', router)
}

export default initWebRoute;