
let getHomePage = (req, res) => {
    return res.render('index.ejs')
}
let getAdminProfile = (req, res) => {
    return res.render('adminProfile.ejs')
}
let getQuanLyDonDatHang = (req, res) => {
    return res.render('QuanLyDonDatHang.ejs')
}
let getQuanLyNguoiDung = (req, res) => {
    return res.render('QuanLyNguoiDung.ejs')
}
let getQuanLyNoiSanXuat = (req, res) => {
    return res.render('QuanLyNoiSanXuat.ejs')
}
let getQuanLySanPham = (req, res) => {
    return res.render('QuanLySanPham.ejs')
}
let getQuanLyTheLoai = (req, res) => {
    return res.render('QuanLyTheLoai.ejs')
}

module.exports = {
    getHomePage,
    getAdminProfile,
    getQuanLyDonDatHang,
    getQuanLyNguoiDung,
    getQuanLyNoiSanXuat,
    getQuanLySanPham,
    getQuanLyTheLoai
}