# Ngôn ngữ chung - Công cụ và kỹ thuật quản lý

Cập nhật: 2026-08-05. Thư mục: `pages/reading-studying/management-tools-and-techniques/`.
Trạng thái: rà từ trang tổng quan, bài 5S và bài Biểu Đồ Gantt. Chưa rà: 17 bài còn lại trong thư mục hiện đều là file rỗng, chưa có nội dung để rà.

## Thuật ngữ

| Thuật ngữ | Trong bản tiếng Việt | Chốt nghĩa | Không được nói | Nguồn |
|---|---|---|---|---|
| 5S | Giữ nguyên "5S" | Phương pháp tổ chức nơi làm việc năm bước, cơ chế là làm cho trạng thái bất thường trở nên nhìn thấy được | Không gọi 5S là "phương pháp giữ vệ sinh nơi làm việc". Sạch sẽ là sản phẩm phụ, không phải mục tiêu | Hirano (1995), *5 Pillars of the Visual Workplace* |
| seiri / seiton / seiso / seiketsu / shitsuke | sàng lọc / sắp xếp / sạch sẽ / săn sóc / sẵn sàng | Năm bước của 5S, giữ đúng thứ tự này vì mỗi bước dựa trên bước trước | Không đảo thứ tự. Không dịch shitsuke thành "kỷ luật" hay "duy trì" mà không nói rõ đang theo bản nào, vì Osada và Hirano dịch khác nhau | Osada (1991); Hirano (1995) |
| Shitsuke (chữ S thứ năm) | sẵn sàng | Việc gắn kiểm tra vào nhịp làm việc hằng ngày | Không mô tả nó như một phẩm chất cá nhân của nhân viên. Không nói nó có từ đầu ở Toyota | Smalley, *Four S*, Art of Lean |
| FOD | mảnh vật thể lạ | Vật rời trên khu bay có thể gây hư hại tàu bay; quản lý bằng chương trình bốn phần: phòng ngừa, phát hiện, thu dọn, đánh giá | Không gọi chương trình FOD là "5S trong hàng không". Hai thứ độc lập, chỉ trùng nhau ở ba bước đầu | FAA AC 150/5210-24A (2024) |
| Gantt chart | biểu đồ Gantt (giữ tên riêng Gantt, dịch phần chung) | Cơ chế là **đưa thời gian lên tiền cảnh và đẩy mọi thứ khác xuống hậu cảnh**. Bản thân thanh ngang chỉ mã hoá hai điểm và một độ dài; khung hình quanh nó vẽ thêm được quan hệ phụ thuộc, mốc, người phụ trách, phần trăm hoàn thành, nhưng đều là tuỳ chọn phải chủ động đưa vào | Không nói Henry Gantt phát minh ra biểu đồ thanh, cũng không nói ông là người khai sinh quản lý dự án. **Không nói biểu đồ Gantt "chỉ mã hoá ba thứ" hay "không chứa được" quan hệ phụ thuộc và phần trăm hoàn thành**: lấy giới hạn của thanh ngang tối giản làm giới hạn của cả công cụ là một lỗi đã mắc và đã phải sửa | Weaver (2012), *PM World Journal* I(V); Geraldi & Lechter (2012); tài liệu Microsoft Project |
| Tên gọi "Gantt chart" | (không dịch riêng) | Ba mệnh đề tách bạch: (1) Gantt không phát minh ra biểu đồ thanh; (2) ông có dựng một hệ thống biểu đồ quản trị sản xuất riêng, được Clark đặt theo tên ông; (3) biểu đồ thanh theo trục thời gian hôm nay khác khá xa hệ thống đó, và mãi tới thập niên 1930 mới bị gọi bằng tên ấy | **Không viết "cái tên gắn nhầm người"**. Quá mạnh so với nguồn: chính Weaver ghi nhận Gantt có giới thiệu biểu đồ mà Clark sau đó đặt tên. Chỉ mệnh đề (3) mới là chỗ cái tên lạc địa chỉ | Weaver (2012), tr. 10 và phần kết luận |
| harmonogram | giữ nguyên "harmonogram" | Sơ đồ do Karol Adamiecki dựng năm 1896, mỗi việc là một dải giấy có tỷ lệ, phần tiêu đề ghi danh sách việc phải làm trước nó | Không gọi harmonogram là "biểu đồ Gantt của người Ba Lan". Không viết rằng Gantt lấy cảm hứng từ nó: không nguồn nào trong hai nguồn của series chứng minh được liên hệ đó | Weaver (2012), dẫn Morris (1994) tr. 7 |
| Gantt chart bản Clark | (không dịch riêng) | Bản mô tả trong sách của Wallace Clark đầu thập niên 1920, có thêm cột ghi lý do mỗi lần lệch kế hoạch (W chờ máy, M thiếu vật tư, H thiếu người) | Không mô tả bản hiện đại như thể vẫn còn cột lý do. Đây là chỗ bản hiện đại nghèo hơn bản gốc | Clark, Polakov & Trabold (1922/1923); Geraldi & Lechter (2012) |

## Tuyên bố series đã cam kết

| Tuyên bố | Bài chốt nó | Nguồn |
|---|---|---|
| Toyota thực hành bốn chữ S; chữ thứ năm được thêm vào khi phương pháp lan ra ngoài Toyota | 5S | Smalley, *Four S*, Art of Lean |
| Tổng quan hệ thống 2024 về 5S trong y tế chỉ tìm được sáu nghiên cứu đạt tiêu chuẩn, không đủ đồng nhất để làm phân tích tổng hợp | 5S | Kanabar và cộng sự (2024), *Cureus* 16(7):e64634 |
| Điểm không phù hợp của một phòng xét nghiệm giảm 69,7% sau khi triển khai 5S (kết quả của Dogan và cộng sự, dẫn lại qua tổng quan) | 5S | Kanabar và cộng sự (2024) |
| Tai nạn Concorde AFR 4590 ngày 25/7/2000 làm 113 người thiệt mạng: 9 tổ bay, 100 hành khách, 4 người dưới mặt đất | 5S | BEA, báo cáo điều tra F-BTSC |
| Tên gọi "Gantt chart" xuất hiện lần đầu trong sách của Wallace Clark, xuất bản đầu thập niên 1920 sau khi Gantt đã mất (1919) | Biểu Đồ Gantt | Weaver (2012); Geraldi & Lechter (2012) |
| Phải tới thập niên 1930 người ta mới bắt đầu gọi bất kỳ hình nào có thanh và có trục thời gian là biểu đồ Gantt | Biểu Đồ Gantt | Weaver (2012), phần kết luận |
| Biểu đồ Gantt trong phần mềm hiện nay vẽ được thêm quan hệ phụ thuộc, mốc, người phụ trách, phần trăm hoàn thành (kiểm 05/08/2026) | Biểu Đồ Gantt | Tài liệu Microsoft Project |
| Nhà hát Opera Sydney: chi phí cuối cùng bằng khoảng 14,6 lần dự toán (102 so với 7 triệu). Viết "bằng khoảng mười bốn lần rưỡi dự toán", **không viết "vượt dự toán mười bốn lần"** vì câu đó đọc được thành phần vượt thêm | Biểu Đồ Gantt | Trang chính thức Sydney Opera House |
| Đình công Watertown tháng 8/1911; Taylor điều trần trước uỷ ban đặc biệt Hạ viện ngày 25/01/1912; năm 1915 Quốc hội Mỹ cấm đồng hồ bấm giây và chế độ thưởng theo định mức trong cơ sở chính phủ liên bang | Trang tổng quan | Aitken, *Scientific Management in Action*, Princeton UP |
| *Reengineering the Corporation* của Hammer và Champy ra năm 1993; năm 1996 *WSJ* gọi tái lập quy trình là ngành 4,7 tỷ đô và đăng lời thú nhận của Hammer về việc bỏ quên con người | Trang tổng quan | Davenport, Prusak & Wilson (2003), *Computerworld* |
| 3M: McNerney được công bố làm CEO ngày 05/12/2000, cắt 8.000 nhân sự (~11%); biên lợi nhuận hoạt động 17% (2001) lên 23% (2005); doanh thu từ sản phẩm 5 năm gần nhất tụt từ 1/3 xuống 1/4; xếp hạng BCG 1 (2004) → 2 (2005) → 3 (2006) → 7 (2007) | Trang tổng quan | Hindo (2007), *BusinessWeek* 11/6/2007 |
| Benner & Tushman (2002): theo dõi 20 năm sáng chế và chứng nhận ISO 9000 ở ngành sơn và nhiếp ảnh; quản lý theo quy trình làm tăng cả số lượng lẫn tỷ trọng sáng chế dựa trên tri thức đã có | Trang tổng quan | *ASQ* 47(4), 676-706 |
| **3M không phải một thí nghiệm tự nhiên.** Cùng giai đoạn đó công ty đổi CEO, cắt 8.000 người, hạ chi tiêu vốn 22% (980 → 763 → đáy 677 triệu năm 2003), và giữ ngân sách R&D gần như không tăng 2001-2005. **Không được viết rằng ví dụ này cô lập được tác động của Six Sigma**; nó chỉ nêu một cơ chế cần bằng chứng rộng hơn để kiểm | Trang tổng quan | Hindo (2007) |
| Biên lợi nhuận 17% → 23% là **cấp toàn công ty**, không phải riêng khối sản xuất. Không viết "nâng biên lợi nhuận ở xưởng" | Trang tổng quan | Hindo (2007) |
| Staw & Epstein (2000): công ty gắn với TQM, làm việc nhóm và trao quyền **không** có kết quả kinh doanh tốt hơn, nhưng được ngưỡng mộ hơn, bị chấm là sáng tạo hơn, quản trị tốt hơn, và CEO được trả cao hơn. Đây là bản dịch sát nguyên văn tóm tắt (*"did not have higher economic performance"*), nên **giữ nguyên cách nói này**, đừng đổi thành "không tìm thấy ảnh hưởng đáng kể" cho có vẻ chặt hơn tác giả | Trang tổng quan | *ASQ* 45(3), 523-556 |
| Nghiên cứu Staw & Epstein là **quan sát**, nên chỉ có liên hệ. **Không được viết rằng phần thưởng "rơi vào" danh tiếng và túi CEO** như một cơ chế phân phối; đó là suy diễn của bài và phải ghi rõ là suy diễn. Tóm tắt cũng không tách lương ngắn hạn với dài hạn, nên đừng thêm chữ "ngắn hạn" | Trang tổng quan | *ASQ* 45(3), 523-556 |
| Phạm vi bằng chứng của trang tổng quan chỉ phủ Taylorism, tái lập quy trình, Six Sigma và TQM, **không phủ cả 30 công cụ**. Bài sau dẫn lại ba nghiên cứu này phải giữ nguyên giới hạn đó | Trang tổng quan | Chính bài |
| Biểu đồ thanh có trước Gantt cả trăm năm: Priestley (1765), harmonogram của Adamiecki (1896), biểu đồ thi công cầu đường sắt Bavaria năm 1912 | Biểu Đồ Gantt | Weaver (2012) |
| Lần đầu biểu đồ Gantt được ghi nhận dùng trong bối cảnh dự án là thập niên 1940 | Biểu Đồ Gantt | Geraldi & Lechter (2012) |
| Khảo sát Besner và Hobbs (2008) trên 750 nhà quản lý dự án: biểu đồ Gantt đứng thứ tư trong 70 công cụ về mức độ được dùng | Biểu Đồ Gantt | Besner & Hobbs (2008), dẫn lại qua Geraldi & Lechter (2012) |
| Thí nghiệm MacNeice (1951): 300 sinh viên quản trị, 1% giải được bằng trực giác, toàn bộ đưa ra được lời giải trong 15 phút khi có biểu đồ. Dẫn lại hai lần, qua Wilson (2003) rồi Geraldi & Lechter | Biểu Đồ Gantt | Geraldi & Lechter (2012) |
| Nhà hát Opera Sydney: dự toán 7 triệu đô la và 4 năm, thực tế 102 triệu và 14 năm; khởi công 2/3/1959 khi hình học bộ mái chưa có lời giải; khánh thành 20/10/1973 | Biểu Đồ Gantt | Trang chính thức Sydney Opera House |

## Quy ước của series

| Quy ước | Chốt |
|---|---|
| Tiêu đề section 4 | `Cách Áp Dụng`. Đây là series về công cụ cần dùng đúng, không phải lỗi cần giảm, nên không dùng `Chiến Lược Giảm Thiểu`. Không thêm mệnh đề phụ vào tiêu đề: tiêu đề là nhãn chức năng, luận điểm của bài nằm ở câu chữ bên trong |
| Nội dung section 4 | Bốn nguyên tắc suy ra từ cơ chế, theo `catalog-series.md` mục 3.5. Đã cân nhắc và bác phương án thay bằng quy trình triển khai nhiều bước, ngày 04/08/2026 |
| Độ dài | **Series này không có trần và không có sàn số từ.** Tác giả bỏ ràng buộc số từ ngày 05/08/2026; `catalog-series.md` mục 2 nay kiểm bằng bốn phép chạy trên từng đoạn. **Không lượt `refine` nào được cắt một đoạn vì lý do độ dài** khi bốn phép đó không chỉ ra được nó thừa. Ghi chú cũ về 3457 từ của bài 5S và 4000 từ của bài Gantt không còn là vấn đề |
| Hình minh hoạ | Bài nào có tên là tên một hình thì phải có hình, theo `catalog-series.md` mục 3.1. Style nằm ở `pages/diagram-styles.css`, bài chỉ thêm `<link rel="stylesheet" href="../../diagram-styles.css">`. **Không chép khối `<style>` vào bài.** Cần một hình thù chưa có class thì thêm class vào file css dùng chung. Bản mẫu: `12-gantt-charts-vn.html` |
| Video ở trang tổng quan | **Không có, và đây là quyết định chứ không phải chỗ còn thiếu.** `catalog-series.md` mục 4 yêu cầu section 1 kết bằng một video; tác giả chốt bỏ video cho riêng trang này ngày 05/08/2026, vì không có video nào vừa đúng chủ đề "công cụ quản lý nói chung" vừa kiểm được. Lượt `refine` sau không được coi đây là lỗi thiếu |
| Mục lục trang tổng quan | Liệt kê **đủ cả 30 công cụ**, xếp theo nhóm việc chứ không theo alphabet. Bài đã viết thì kèm câu móc trùng `page-subtitle`; bài chưa viết thì chỉ có tên cộng nhãn `(đang viết)` trong `span.helper-text`. **Không bịa câu móc cho bài chưa viết**, vì câu móc phải khớp `page-subtitle` mà trang đó chưa có. Viết xong bài nào thì thay nhãn bằng câu móc thật và sửa lại số bài đã viết trong `intro-text` |
| File rỗng làm chỗ giữ chỗ | Mỗi công cụ có sẵn cặp `ten-cong-cu.html` và `ten-cong-cu-vn.html`, đều 0 byte cho tới khi được viết. Tạo ngày 05/08/2026 để link trong mục lục không gãy. **Trang rỗng render ra trang trắng**, đó là trạng thái đã biết và tác giả chấp nhận |
| Tên file trong series | Không đánh số tiền tố. Bản tiếng Việt `ten-bai-vn.html`, bản tiếng Anh `ten-bai.html`. Các file rỗng tạo tháng 12/2025 mang tên bản tiếng Anh; khi viết bản tiếng Việt thì tạo file `-vn.html` mới và giữ nguyên file rỗng kia làm chỗ cho bản EN |

## Quy ước bản tiếng Anh

Chốt từ bài 5S, bài Gantt theo đúng. Bản dịch sau **không được tự chọn lại**, vì lệch một chữ là hai bài đọc như hai series.

| Chỗ | Tiếng Việt | Tiếng Anh |
|---|---|---|
| Section 1 | `Định Nghĩa` | `Definition` |
| Section 2 | `Ví Dụ` | `Examples` |
| Section 3 | `Một Vài Nghiên Cứu Về <Tên Mục>` | `Some Research on <Item Name>` |
| Section 4 | `Cách Áp Dụng` | `How to Apply It` |
| Section 5 | `Tóm Tắt` | `Summary` |
| Section 6 | `Tài Liệu Tham Khảo` | `References` |
| Nhãn đoạn nghiên cứu | `Nghiên cứu:` | `The study:` |
| | `Kết quả:` | `Findings:` |
| | `Kết luận:` | `What it shows:` |
| | `Phản biện:` | `The counter-case:` |
| | `Vì sao điều này hữu ích:` | `Why this is useful:` |
| Mở `summary-box` | `Điểm Chính:` | `Key Point:` |
| Nhãn ngày | `Đăng ngày:` / `Cập nhật:` | `Published:` / `Updated:` |
| Định dạng ngày | `5 Tháng 8, 2026` | `August 5, 2026` |
| Nhãn hình | `Hình 1.` | `Figure 1.` |

Chính tả tiếng Anh theo lối Anh: `organising`, `standardise`, `summarise`. Bài 5S đã dùng lối này.

## Chưa chốt

- **Bản tiếng Anh của trang tổng quan chưa có.** `01-management-tools-and-techniques.html` vẫn là file rỗng. Bản VN viết ngày 05/08/2026. Series **đánh số tiền tố hai chữ số** theo thứ tự mục lục: `01-` cho trang tổng quan, `02-` tới `31-` cho ba mươi bài mục. Đổi tên ngày 05/08/2026.
- **Trùng hash có sẵn ngoài series này.** `#/8-2-strategic-frameworks` xuất hiện hai lần trong cả `main-menu.js` lẫn `main-menu-vn.js`, cùng trỏ về một route. Không phải lỗi của series này, nhưng đã phát hiện khi đăng ký menu ngày 05/08/2026, ghi lại để khỏi mất.
- **Mục lục trang tổng quan mới có 2 dòng.** Chỉ liệt kê bài đã có nội dung, không liệt kê 17 file rỗng. **Mỗi lần viết xong một bài mục, phải thêm một dòng vào mục lục, sửa câu "hiện có hai công cụ" trong `intro-text` cho khớp số, và đổi `page-meta` của trang tổng quan.** Câu móc mỗi dòng phải trùng đúng `page-subtitle` của bài đó.
- **Hai nguồn của bài Biểu Đồ Gantt mâu thuẫn về vai trò của Henry Gantt.** Weaver (2012) nói Gantt không dính dáng gì tới biểu đồ thanh; Geraldi & Lechter (2012) dựng một mạch liên tục hơn từ công việc điều phối quân nhu năm 1914. Bài hiện nêu cả hai và không chọn bên. Bài sau chạm tới lịch sử công cụ này phải giữ nguyên cách xử lý đó, đừng lặng lẽ chọn một phía.
- **Chồng lấn với series Scrum.** File rỗng `agile-scrum-kanban.html` trùng chủ đề với `pages/information-technology/agile-software-development/scrum-agile-and-more/`. Khi viết bài đó phải đối chiếu từ điển của series kia, chưa làm.
