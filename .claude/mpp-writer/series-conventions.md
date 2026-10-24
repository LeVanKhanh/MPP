# Quy ước riêng của từng series

Quyết định của tác giả và quy ước viết chỉ đúng cho một series, **không thuộc về ngôn ngữ**: cảnh ví dụ đã dùng, tên file, menu, hình, phạm vi bài. Thuật ngữ, cách gọi và cách diễn đạt nằm ở `domain-ubiquitous-language.md` của thư mục series (xem `ubiquitous-language.md`).

Đọc phần của series đang viết khi mode là `draft`, `refine`, `feedback` hoặc `translate`. Mỗi mục ghi trạng thái hiện tại, không ghi lịch sử.

---

## Công cụ và kỹ thuật quản lý

Thư mục: `pages/reading-studying/management-tools-and-techniques/`. Khung trang theo `catalog-series.md` (danh mục công cụ).

### Viết

| Quy ước | Chốt |
|---|---|
| Section 4 | Tiêu đề `Cách Áp Dụng` (series về công cụ cần dùng đúng, không phải lỗi cần giảm), không thêm mệnh đề phụ vào tiêu đề. Nội dung là bốn nguyên tắc suy ra từ cơ chế (`catalog-series.md` mục 3.5), không phải quy trình triển khai nhiều bước |
| Độ dài | Không có trần và không có sàn số từ. Không lượt `refine` nào được cắt một đoạn vì lý do độ dài khi bốn phép chạy của `catalog-series.md` mục 2 không chỉ ra được nó thừa |
| Số minh hoạ trong Tình Huống Áp Dụng | Chọn sao cho tình huống đạt mục tiêu đã đặt |
| Hình | Bài có tên là tên một hình thì phải có hình (`catalog-series.md` mục 3.1). Style ở `pages/diagram-styles.css`, bài chỉ thêm `<link rel="stylesheet" href="../../diagram-styles.css">`; không chép khối `<style>` vào bài; cần hình thù chưa có class thì thêm class vào file css dùng chung. Bản mẫu: `12-gantt-charts-vn.html`. FMEA (một bảng) và SOP (một văn bản) không có hình |

### Cảnh đã dùng, không dùng lại cho bài khác

| Bài | Cảnh |
|---|---|
| 5S | tuần lễ 5S ở kho phụ tùng; phòng kế toán đi tìm chứng từ; bốn mươi phút sửa máy |
| PDCA | bếp ăn cân cơm thừa; đội hỗ trợ khách hàng chạy đủ bốn bước; hai phòng khám; nhóm kế toán thanh toán và đề nghị thanh toán công tác phí bị trả lại |
| A3 | tờ A3 về kho giao trễ; ba mươi trang slide; quản đốc điền bảy ô; nhân viên mới ngày đầu chưa có máy |
| Sơ Đồ Xương Cá | cuộc họp về hoá đơn |
| Biểu Đồ Gantt | giao ban "phần này xong trước ngày 28"; mười lăm việc của bốn bộ phận; thanh Kiểm thử; công ty 40 người dọn văn phòng |
| Phân Tích Pareto | xưởng in bao bì; tổ bảo trì chung cư; khách sạn 30 phòng |
| FMEA | chuỗi siêu thị giao hàng hai giờ; hội nghị khách hàng 400 người; trung tâm ngoại ngữ thu học phí bằng mã QR |
| SOP | nồi hấp tiệt trùng ở phòng thí nghiệm; chuỗi cà phê 12 cửa hàng; tiệm bánh hai lò |
| Lưu Đồ Quy Trình | cửa hàng trực tuyến hoàn tiền hàng đổi trả; phòng đào tạo cấp bảng điểm; cửa hàng sửa điện thoại |
| Sơ Đồ SIPOC | phòng khám nha khoa làm răng sứ; cửa hàng nội thất giao hàng; báo cáo quản trị tháng |
| Sơ Đồ Chuỗi Giá Trị | xưởng may áo sơ mi đồng phục cho trường học; chi nhánh ngân hàng giải ngân khoản vay mua nhà; tiệm giặt sấy giao nhận tận nhà |
| Cấu Trúc Phân Rã Công Việc (WBS) | trường mầm non mở cơ sở thứ hai (Hình 1); công ty bảo hiểm ra mắt ứng dụng nộp hồ sơ bồi thường; gia đình cải tạo căn hộ cũ 70 m² |

### Trang tổng quan, menu, file

| Quy ước | Chốt |
|---|---|
| Video ở trang tổng quan | Không có, và đây là quyết định: không video nào vừa đúng chủ đề "công cụ quản lý nói chung" vừa kiểm được. Không coi là lỗi thiếu |
| Mục lục trang tổng quan | Liệt kê đủ 30 công cụ, xếp theo nhóm việc. Bài đã viết kèm câu móc trùng `page-subtitle`; bài chưa viết chỉ có tên cộng nhãn `(đang viết)` trong `span.helper-text`; không bịa câu móc. Viết xong một bài: thay nhãn bằng câu móc, sửa số bài đã viết trong `intro-text`, đổi `page-meta` trang tổng quan, và sửa bản EN cùng lượt khi bài đã có bản EN |
| Menu | Nhóm cha là node thư mục không mang `route`; entry trang tổng quan đặt đầu nhóm, tên `Tổng Quan <Tên Series>` / `<Series Name> Overview`, `hash: "#/management-tools-and-techniques"` giống hệt ở hai file menu. Bài mục chèn sau entry tổng quan, theo thứ tự đọc của mục lục |
| Tên file | `NN-ten-bai-vn.html` / `NN-ten-bai.html`, tiền tố hai chữ số, cùng NN cho hai bản |
| File giữ chỗ | Mỗi công cụ chưa viết có sẵn cặp file 0 byte để link trong mục lục không gãy; trang rỗng render ra trang trắng là trạng thái đã biết |

---

## Scrum, Agile and More

Thư mục: `pages/information-technology/agile-software-development/scrum-agile-and-more/`.

| Quy ước | Chốt |
|---|---|
| Bài 8 và các bài mở rộng cùng loại | Là **bài đọc nghiên cứu**, không phải playbook; cố ý không có ca thật. Khi review: không trừ điểm vì thiếu quan sát cá nhân (`voice-guide` mục 4.4 được đáp ứng qua "một cách đọc khác với cách đọc phổ biến"); không đề xuất cắt bớt phần giới hạn bằng chứng, vì mật độ dè dặt là đặc tính của loại bài này |
| Bài 9 | Ca "team trượt Sprint Goal ba Sprint liên tiếp" là ca dựng. Một ca thật về việc thương lượng lại quyền của Product Owner với cấp quản lý sẽ nâng bài rõ nhất, nếu tác giả có |

Chờ tác giả quyết:

- **Thứ tự section bài 8.** Mô hình trong nội dung thô là `Product boundary → Team boundary → Technical boundary → Coordination mechanism → Scaling framework`, nhưng bài đặt phần "Một Product hay nhiều Product" sau phần bốn cách xử lý.
- **"Case Mars" ở bài 7.** Đoạn chuỗi Testing Agent → Support Agent → Development Agent → Spec Agent đang viết ở dạng pattern chung, gắn `<!-- CẦN XÁC MINH -->`, chờ tác giả cung cấp chi tiết thật.
- **Liên kết bài 4 và bài 9.** Bài 9 đứng ở tầng điều kiện tổ chức; mục "manager accountability" của bài 4 (feedback quality, opportunity allocation, support plan, fair calibration) chưa có cross-link sang bài 9.
