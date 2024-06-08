const car = "uberCar";
const sub = "uberSUV";
const black = "uberBlack";

function timKiemGiaTienKmDauTien(loaiXe) {
  switch (loaiXe) {
    case car:
      return 8000;
    case sub:
      return 9000;
    case black:
      return 10000;
  }
}

function timKiemGiaTienTu1Den19(loaiXe) {
  switch (loaiXe) {
    case car:
      return 7500;
    case sub:
      return 8500;
    case black:
      return 9500;
  }
}

function timKiemGiaTienTu19TroLen(loaiXe) {
  switch (loaiXe) {
    case car:
      return 7000;
    case sub:
      return 8000;
    case black:
      return 9000;
  }
}

function timKiemGiaTienThoiGianCho(loaiXe) {
  switch (loaiXe) {
    case car:
      return 2000;
    case sub:
      return 3000;
    case black:
      return 3500;
  }
}

document.getElementById("btnTinhTien").onclick = function () {
  let soKm = document.getElementById("txt-km").value * 1;
  let thoiGianCho = document.getElementById("txt-thoiGianCho").value * 1;
  let loaiXe = document.querySelector("input[type='radio']:checked").value;

  let tienKmDauTien = timKiemGiaTienKmDauTien(loaiXe);
  let tienKmTu1Den19 = timKiemGiaTienTu1Den19(loaiXe);
  let tienKmTu19TroLen = timKiemGiaTienTu19TroLen(loaiXe);
  let tienThoiGianCho = timKiemGiaTienThoiGianCho(loaiXe);

  let tongTien = 0;
  let tienKmDauTienThanhTien = 0;
  let tienKmTu1Den19ThanhTien = 0;
  let tienKmTu19TroLenThanhTien = 0;

  if (soKm <= 1) {
    tienKmDauTienThanhTien = soKm * tienKmDauTien;
    tongTien = tienKmDauTienThanhTien;
  } else if (soKm > 1 && soKm <= 19) {
    tienKmDauTienThanhTien = tienKmDauTien;
    tienKmTu1Den19ThanhTien = (soKm - 1) * tienKmTu1Den19;
    tongTien = tienKmDauTienThanhTien + tienKmTu1Den19ThanhTien;
  } else {
    tienKmDauTienThanhTien = tienKmDauTien;
    tienKmTu1Den19ThanhTien = 18 * tienKmTu1Den19;
    tienKmTu19TroLenThanhTien = (soKm - 19) * tienKmTu19TroLen;
    tongTien =
      tienKmDauTienThanhTien +
      tienKmTu1Den19ThanhTien +
      tienKmTu19TroLenThanhTien;
  }

  let tongTienThoiGianCho = Math.floor((thoiGianCho - 3) / 3) * tienThoiGianCho;
  tongTien += tongTienThoiGianCho;

  document.getElementById("divThanhTien").style.display = "block";
  document.getElementById("xuatTien").innerHTML = tongTien.toLocaleString(
    "vi",
    {
      currency: "VND",
      style: "currency",
    }
  );
};

document.getElementById("btnInHoaDon").onclick = function () {
  let soKm = document.getElementById("txt-km").value * 1;
  let thoiGianCho = document.getElementById("txt-thoiGianCho").value * 1;
  let loaiXe = document.querySelector("input[type='radio']:checked").value;

  let tienKmDauTien = timKiemGiaTienKmDauTien(loaiXe);
  let tienKmTu1Den19 = timKiemGiaTienTu1Den19(loaiXe);
  let tienKmTu19TroLen = timKiemGiaTienTu19TroLen(loaiXe);
  let tienThoiGianCho = timKiemGiaTienThoiGianCho(loaiXe);

  let tongTien = 0;
  let tienKmDauTienThanhTien = 0;
  let tienKmTu1Den19ThanhTien = 0;
  let tienKmTu19TroLenThanhTien = 0;

  if (soKm <= 1) {
    tienKmDauTienThanhTien = soKm * tienKmDauTien;
    tongTien = tienKmDauTienThanhTien;
  } else if (soKm > 1 && soKm <= 19) {
    tienKmDauTienThanhTien = tienKmDauTien;
    tienKmTu1Den19ThanhTien = (soKm - 1) * tienKmTu1Den19;
    tongTien = tienKmDauTienThanhTien + tienKmTu1Den19ThanhTien;
  } else {
    tienKmDauTienThanhTien = tienKmDauTien;
    tienKmTu1Den19ThanhTien = 18 * tienKmTu1Den19;
    tienKmTu19TroLenThanhTien = (soKm - 19) * tienKmTu19TroLen;
    tongTien =
      tienKmDauTienThanhTien +
      tienKmTu1Den19ThanhTien +
      tienKmTu19TroLenThanhTien;
  }

  let tongTienThoiGianCho = Math.floor((thoiGianCho - 3) / 3) * tienThoiGianCho;
  tongTien += tongTienThoiGianCho;

  let modalContent = `
    <div class="modal-body" style="font-family: 'Roboto', sans-serif;">
      <div class="table-responsive">
        <table class="table table-bordered" style="border-collapse: collapse;">
          <thead>
            <tr>
              <th colspan="4" style="text-align:center; background-color: #949494; color: #fff;">
                CHI TIẾT HÓA ĐƠN
              </th>
            </tr>
            <tr>
              <th colspan="4" style="font-size: 20px; text-align: left;">LOẠI XE: <span style="font-weight:bold;">${loaiXe}</span></th>
            </tr>
            <tr>
              <th style="width: 25%;">CHI TIẾT</th>
              <th style="width: 25%; text-align:center;">SỬ DỤNG</th>
              <th style="width: 20%; text-align:center;">ĐƠN GIÁ</th>
              <th style="width: 30%; text-align:center;">THÀNH TIỀN</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>KM đầu tiên</td>
              <td style="text-align:center;">1</td>
              <td style="text-align:right;">${tienKmDauTien.toLocaleString(
                "vi",
                { currency: "VND", style: "currency" }
              )}</td>
              <td style="text-align:right;">${tienKmDauTienThanhTien.toLocaleString(
                "vi",
                { currency: "VND", style: "currency" }
              )}</td>
            </tr>
            <tr>
              <td>Từ 1 đến 19km</td>
              <td style="text-align:center;">${soKm > 1 ? soKm - 1 : 0}</td>
              <td style="text-align:right;">${tienKmTu1Den19.toLocaleString(
                "vi",
                { currency: "VND", style: "currency" }
              )}</td>
              <td style="text-align:right;">${tienKmTu1Den19ThanhTien.toLocaleString(
                "vi",
                { currency: "VND", style: "currency" }
              )}</td>
            </tr>
            <tr>
              <td>Từ 19km trở lên</td>
              <td style="text-align:center;">${soKm > 19 ? soKm - 19 : 0}</td>
              <td style="text-align:right;">${tienKmTu19TroLen.toLocaleString(
                "vi",
                { currency: "VND", style: "currency" }
              )}</td>
              <td style="text-align:right;">${tienKmTu19TroLenThanhTien.toLocaleString(
                "vi",
                { currency: "VND", style: "currency" }
              )}</td>
            </tr>
            <tr>
              <td>Thời gian chờ trên 3 phút</td>
              <td style="text-align:center;">${Math.floor(
                (thoiGianCho - 3) / 3
              )}</td>
              <td style="text-align:right;">${tienThoiGianCho.toLocaleString(
                "vi",
                { currency: "VND", style: "currency" }
              )}</td>
              <td style="text-align:right;">${tongTienThoiGianCho.toLocaleString(
                "vi",
                { currency: "VND", style: "currency" }
              )}</td>
            </tr>
            <tr style="background-color: #f5f5f5; font-weight: bold;">
              <td colspan="3" style="font-size: 20px; text-align: left; ">Tổng tiền</td>
              <td style="font-size: 20px; text-align: center; color: red">${tongTien.toLocaleString(
                "vi",
                { currency: "VND", style: "currency" }
              )}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>`;

  document.getElementById("modal-body").innerHTML = modalContent;

  $("#exampleModal").modal("show");
};
