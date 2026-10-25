# Từ điển ngôn ngữ chung - Công cụ và kỹ thuật quản lý

Từ điển tra cứu để mọi bài trong series gọi cùng một khái niệm bằng cùng một tên, hiểu nó theo cùng một nghĩa, và tránh cùng những cách diễn đạt sai.

**Phạm vi:** trang tổng quan và mười sáu bài đã viết: 5S, Chu Trình PDCA, Giải Quyết Vấn Đề A3, Sơ Đồ Xương Cá Ishikawa, Phân Tích Pareto, FMEA, Quy Trình Thao Tác Chuẩn (SOP), Lưu Đồ Quy Trình, Sơ Đồ SIPOC, Sơ Đồ Chuỗi Giá Trị, Biểu Đồ Gantt, Cấu Trúc Phân Rã Công Việc (WBS), Phương Pháp Đường Găng (CPM), Quản Lý Giá Trị Thu Được (EVM), Khung Mục Tiêu SMART, Mục Tiêu Và Kết Quả Then Chốt (OKR). Thuật ngữ không có trong file này là **chưa được chốt**: grep các bài `.html` cùng thư mục trước khi dùng, rồi bổ sung vào đây.

**Khi file và nguồn nói khác nhau, nguồn thắng**; sửa mục trong file.

Mục lục:

1. [Thuật ngữ](#1-thuật-ngữ)
2. [Nguyên tắc diễn đạt chung](#2-nguyên-tắc-diễn-đạt-chung)
3. [Dữ kiện nền đã chốt](#3-dữ-kiện-nền-đã-chốt)
4. [Cách gọi các nguồn nghiên cứu](#4-cách-gọi-các-nguồn-nghiên-cứu)
5. [Bảng dịch Việt - Anh](#5-bảng-dịch-việt---anh)
6. [Tiêu đề và nhãn cố định](#6-tiêu-đề-và-nhãn-cố-định)
7. [Chưa chốt](#7-chưa-chốt)

---

## 1. Thuật ngữ

Cột **Gọi là** ghi cách gọi trong bản tiếng Việt, sau dấu `·` là bản tiếng Anh. Cột **Không viết** ghi cách diễn đạt sai dễ rơi vào, kèm cách viết đúng trong ngoặc khi cần.

### 5S

| Thuật ngữ | Gọi là | Nghĩa chốt | Không viết | Nguồn |
|---|---|---|---|---|
| 5S | "5S" · *5S* | Phương pháp tổ chức nơi làm việc năm bước. Cơ chế: làm cho trạng thái bất thường trở nên nhìn thấy được. Sạch sẽ là sản phẩm phụ, không phải mục tiêu | "phương pháp giữ vệ sinh nơi làm việc"; 5S "không đụng tới dòng chảy công việc" (nó rút được thời gian đi tìm, đi lại, chờ đồ; chỉ không sửa được nút thắt nằm ở trình tự công việc) | Hirano (1995) |
| seiri / seiton / seiso / seiketsu / shitsuke | sàng lọc / sắp xếp / sạch sẽ / săn sóc / sẵn sàng | Năm bước của 5S, giữ đúng thứ tự vì bước sau dựa trên bước trước. Phép kiểm của seiri là có tiêu chí giữ lại và giải thích được vì sao từng nhóm đồ còn ở lại | đảo thứ tự; lấy số món đã bỏ làm thước đo của seiri | Hirano (1995) |
| shitsuke | sẵn sàng | Việc gắn kiểm tra vào nhịp làm việc hằng ngày. Hỏng khi chỉ còn là lời kêu gọi ý thức | phẩm chất cá nhân của nhân viên; có từ đầu ở Toyota; dịch là "kỷ luật" hay "duy trì" mà không nói theo bản nào (Hirano 1995: *Discipline*; Hirano 1996: *Sustain*; LEI: *Sustain*, định nghĩa là *discipline*); suy từ việc đổi tên ra phép đối lập ý thức / hệ thống; "Osada gọi là kỷ luật, Hirano gọi là duy trì" | Hirano (1995, 1996); LEI, *Lean Lexicon*; Smalley, *Four S* |

### PDCA

| Thuật ngữ | Gọi là | Nghĩa chốt | Không viết | Nguồn |
|---|---|---|---|---|
| PDCA | "PDCA"; lần đầu giải thích Plan (lập kế hoạch), Do (làm), Check (kiểm tra), Act (hành động) · *PDCA*, bản EN **không** chú giải bốn chữ | Cơ chế: buộc một thay đổi phải mang hình dạng một dự đoán có thể sai. Plan ghi kết quả chờ đợi cùng lý do tin vào nó; bước thứ ba đặt kết quả thật cạnh dự đoán | chỉ là "cải tiến liên tục" hay "vòng lặp bốn bước" (bỏ phần dự đoán là bỏ cả cơ chế); Deming phát minh ra PDCA | Moen & Norman (2010) |
| PDSA | "PDSA" · *PDSA* | Bản của Deming, chốt năm 1993 trong *The New Economics*, tên đầy đủ là vòng Shewhart cho học tập và cải tiến. Study thay Check | PDCA và PDSA là hai tên của cùng một thứ; PDSA là bản đúng, PDCA là bản sai (nguồn chỉ nói hai vòng "có vẻ chỉ liên hệ với nhau qua phương pháp khoa học") | Moen & Norman (2010) |
| Check | kiểm tra · *Check* | Chữ Deming phản đối vì trong tiếng Anh nó mang nghĩa giữ lại, chặn lại; chữ này để ngỏ cách đọc bước ba thành nghiệm thu | dịch thành "đánh giá" hay "học"; bước Check trong các bản PDCA "vốn chỉ là nghiệm thu"; ở bản EN, giải thích thành chú thích từ vựng kiểu *"in English, check means..."* (trình bày như lập luận của Deming) | Moen & Norman (2010) |
| dự đoán | dự đoán · *prediction* | Kết quả chờ đợi kèm lý do. Có thể định tính hoặc có chiều (lỗi loại A giảm mà loại B không); thành con số khi đo được. Sinh ra hiểu biết theo cả hai chiều: lệch thì biết giả định nào cần xét, trùng thì lý thuyết sống thêm một lần thử | Plan bắt buộc phải có "con số mong đợi"; chỗ lệch là chỗ "duy nhất" học được; kết quả trùng "xác nhận" lý thuyết hay nhân quả; kết quả lệch "tự chứng minh" giả định sai (phải loại trước: làm chưa đủ, đo sai, bối cảnh đổi); thiếu dự đoán thì "không học được gì" | Taylor và cộng sự (2014); Moen & Norman (2010) |

### A3

| Thuật ngữ | Gọi là | Nghĩa chốt | Không viết | Nguồn |
|---|---|---|---|---|
| A3 | "A3"; tên bài `Giải Quyết Vấn Đề A3` · *A3 Problem Solving* | Cơ chế trục: phép nén cộng phần chất vấn. Một mặt giấy giúp chỗ thủng của lập luận dễ lộ ra hơn, khi có người đọc hỏi lại; sản phẩm thật là chuỗi lần sửa, không phải tờ giấy cuối. Đây là **một trong nhiều** cơ chế: A3 còn dựng trên PDCA (nửa trái lo Plan, nửa phải lo Do-Check-Act), đi qua *nemawashi* để gom đồng thuận, và là chỗ dựa cho đối thoại người kèm với người học | "một biểu mẫu bảy ô" hay "một khổ giấy"; A3 viết tắt cho một chữ nào (tên lấy thẳng từ khổ giấy); phép nén chắc chắn làm lộ lỗi (một mặt giấy vẫn chứa vừa một lập luận sai mà gọn); "gồm bảy ô" như cấu trúc chuẩn duy nhất (có bản bảy, bản mười bước); "A3 chỉ là coaching". Giữ cụm "trên một mặt giấy" | Smalley, *A3*; LEI/Yoshino; Bassuk & Washington (2013) |
| Kan-Pro | "Kan-Pro", kèm tên đầy đủ Kanri Nouryoku và nghĩa "Chương trình Năng lực Quản lý" | Chương trình đào tạo quản lý do Masao Nemoto lập ở Toyota năm 1978, chạy hai năm, khoảng 2.000 quản lý, hai kỳ trình bày mỗi năm (tháng 6, tháng 12), mỗi người trình bày bằng một tờ A3 | "chương trình cải tiến" hay "chương trình chất lượng" (Nemoto lập nó vì năng lực quản lý ở khối văn phòng đi xuống) | LEI/Yoshino |
| người kèm | người kèm | Người được cấp riêng cho mỗi người viết A3, giúp khoanh phạm vi, đi cùng xuống hiện trường, thu số liệu. Mua được bằng tiền (Seattle lấy từ nhóm tư vấn nội bộ) | phần kèm cặp "không mua theo hợp đồng được" | Bassuk & Washington (2013) |

### Sơ đồ xương cá

| Thuật ngữ | Gọi là | Nghĩa chốt | Không viết | Nguồn |
|---|---|---|---|---|
| cause-and-effect diagram / Ishikawa diagram / fishbone diagram | sơ đồ xương cá (cũng gọi sơ đồ nhân quả); tên bài `Sơ Đồ Xương Cá Ishikawa` · *Ishikawa Diagrams (Fishbone)* | Cơ chế hai vế, phải nêu cả hai: (1) phân phối sự chú ý theo một bộ nhánh chọn trước, nên nhánh vừa là móc gợi nhớ vừa là đường biên; (2) ký pháp mặc định vẽ mọi nhánh dày như nhau, không có quy ước cho bằng chứng, phần đóng góp hay quan hệ giữa hai nhánh. Người vẽ thêm được những thứ đó (nét liền / nét đứt, màu, độ dày) | "công cụ tìm nguyên nhân gốc" rồi dừng (sơ đồ nêu nguyên nhân *có thể*, không xác nhận nguyên nhân nào); sơ đồ "không thể" ghi bằng chứng hay "không nối được" hai nhánh | Art of Lean, *Ishikawa Diagram*; IfM Cambridge, *TQM Tools*; Gartlehner và cộng sự (2017) |
| ba kiểu dựng | phân tích độ phân tán / phân loại theo quy trình / liệt kê nguyên nhân | Ba kiểu trong *Guide to Quality Control*. Chỉ kiểu thứ nhất bắt đầu từ bộ nhánh chọn trước, và là kiểu duy nhất có thể đánh rơi nguyên nhân không khớp nhánh nào; kiểu hai đặt các bước quy trình lên xương sống; kiểu ba kê hết nguyên nhân rồi mới vẽ | "sơ đồ xương cá gồm 4M / 6M" như cấu trúc chuẩn duy nhất | Ishikawa, *Guide to Quality Control*, tr. 18-29, qua Reshef |
| điểm của nhánh | điểm của nhánh | Mức người trả lời cho là có liên quan; chỉ đủ để xếp thứ tự điều tra | mức đóng góp vào sự cố, "độ dày" thật của nhánh | Seong và cộng sự (2025) |

### Phân tích Pareto

| Thuật ngữ | Gọi là | Nghĩa chốt | Không viết | Nguồn |
|---|---|---|---|---|
| Pareto analysis / Pareto chart | phân tích Pareto / biểu đồ Pareto · *Pareto analysis / Pareto chart* | Phép xếp hạng các nhóm theo độ lớn của một thước đo đã chọn. Kết luận nằm sẵn trong hai lựa chọn có trước khi vẽ: đếm cái gì (số lần, chi phí, thời gian, mức nghiêm trọng) và chia nhóm thế nào. Biểu đồ hiện kết quả của hai lựa chọn, không hiện bản thân chúng | "80/20 là quy luật", hay đưa tỷ lệ 80/20 vào định nghĩa; biểu đồ Pareto "chỉ ra nguyên nhân gốc" (nó xếp hạng nguyên nhân đã đếm). Phân biệt với sơ đồ xương cá (liệt kê nguyên nhân có thể) và biểu đồ tần suất (trục ngang là khoảng giá trị liền nhau của một biến số) | Juran (1974/1975) |
| Pareto principle | nguyên lý Pareto | Tên Juran đặt khi soạn ấn bản đầu *Quality Control Handbook* (1951), mượn tên nhà kinh tế Vilfredo Pareto. Về sau Juran thừa nhận đã gắn nhầm tên: công trình của Pareto chỉ nằm trong kinh tế học, và đường cộng dồn lẽ ra mang tên Lorenz | Pareto phát hiện ra nguyên lý "số ít quan trọng" cho mọi lĩnh vực; giai thoại "80% đất ở Ý thuộc về 20% dân" hay chuyện vườn đậu | Juran, *The Non-Pareto Principle; Mea Culpa* |
| vital few / trivial many / useful many | số ít quan trọng / số đông vụn vặt / số đông hữu ích | Cách gọi của Juran; theo Juran Institute, về sau ông đổi "trivial many" thành "useful many" | "useful many" là nguyên văn bài 1974 | Juran Institute |
| sự tập trung / thứ hạng | sự tập trung / thứ hạng | Công thức của series: "với cùng một cách đếm, sự tập trung chắc hơn thứ hạng" | "hình dạng đáng tin hơn thứ hạng" (thiếu điều kiện cùng cách đếm) | Andersson & Runeson (2007); Galinac Grbac và cộng sự (2013) |

### FMEA

| Thuật ngữ | Gọi là | Nghĩa chốt | Không viết | Nguồn |
|---|---|---|---|---|
| FMEA | "FMEA"; tên đầy đủ Failure Mode and Effects Analysis, tạm dịch "phân tích dạng hỏng và tác động"; tên bài `FMEA` | Cơ chế hai vế, đáng tin ở hai mức khác nhau: (1) phép liệt kê có trật tự, hỏi "hỏng ở đâu" tại từng bước của quy trình trước khi nó chạy; giá trị nằm ở danh sách và các biện pháp đi kèm; (2) phép chấm điểm S, O, D rồi nhân thành RPN, biến ba phán đoán thứ bậc thành một con số trông như kết quả đo. Khác sơ đồ xương cá ở hướng nhìn (xương cá thường đi từ vấn đề đã xảy ra, FMEA đi từ quy trình chưa hỏng); khác ma trận rủi ro ở chỗ tự sinh danh sách từ các bước và có thêm trục phát hiện | FMEA "tìm ra mọi dạng hỏng" hay là bản kiểm kê rủi ro (bảng chỉ chứa những gì nhóm nghĩ ra); RPN "chỉ là cái cớ" hay danh sách thiếu là vô giá trị; NASA hay ngành ô tô phát minh ra FMEA | ASEMS Online; IHI (2017); Shebl và cộng sự (2009, 2012) |
| failure mode / effect | dạng hỏng / tác động · *failure mode / effect* | Dạng hỏng là một cách có thể hỏng, chưa xảy ra | gọi dạng hỏng là "lỗi" hay "sự cố" | IHI (2017) |
| S / O / D | mức nghiêm trọng (S) / khả năng xảy ra (O) / khả năng phát hiện (D) · *severity / occurrence / detection* | Ba thang 1 tới 10 theo bảng mẫu IHI. **D chấm ngược: 10 là rất khó phát hiện.** IHI mô tả thang S không nhất quán: phần hướng dẫn hỏi *khả năng* gây hại nặng, chú thích bảng mẫu ghi 10 là tác động nghiêm trọng nhất | "D cao là dễ phát hiện"; định nghĩa của IHI "giải thích được" điểm S 1 ở ví dụ mẫu | IHI (2017) |
| RPN | chỉ số ưu tiên rủi ro (RPN) · *risk priority number* | RPN = S × O × D, từ 1 tới 1.000 nhưng chỉ có 120 giá trị khác nhau; 12 tổ hợp cùng cho 100 điểm | RPN "đo" rủi ro; RPN 200 là "rủi ro gấp đôi" RPN 100; dẫn "Bowles 2003" (đúng: Bowles, *J IEST* 2004, qua Shebl 2012) | Shebl và cộng sự (2012) |
| Action Priority (AP) | mức ưu tiên hành động (AP) · *Action Priority* | Bảng tra trong sổ tay FMEA chung của AIAG và VDA (2019), xét cả ba điểm cùng lúc để xếp mỗi dạng hỏng vào mức ưu tiên cao, trung bình hoặc thấp, thay cho phép nhân RPN. Tổ chức được dùng giá trị riêng thay bảng gợi ý | AIAG-VDA "cấm" RPN; chi tiết trọng số bảng AP (series chưa đọc sổ tay gốc); sổ tay bỏ RPN "vì" lỗi toán học (nguồn không nêu lý do) | NC MEP (2019); Rowzee (2020) |

### SOP

| Thuật ngữ | Gọi là | Nghĩa chốt | Không viết | Nguồn |
|---|---|---|---|---|
| standard operating procedure (SOP) | quy trình thao tác chuẩn (SOP); tên bài `Quy Trình Thao Tác Chuẩn (SOP)` · *Standard Operating Procedure (SOP)* | Văn bản ghi một cách làm đã thống nhất cho một việc lặp lại. FAA: quy trình đã viết thành văn và đã được thử, áp dụng đồng đều và nhất quán trong toàn bộ hoạt động. Cơ chế: biến cách làm của từng người thành chuẩn chung, viết ra và nhìn thấy được, để mọi người làm giống nhau và chỗ lệch hiện ra; chỉ chạy khi văn bản còn khớp việc thật. Giới hạn chia ba loại: thiếu nội dung (sửa bằng thiết kế), thiếu cập nhật (cần quản lý thay đổi), giới hạn của văn bản (chữ ký không chứng minh việc đã làm) | đồng nhất SOP với công việc chuẩn hay danh sách kiểm; SOP "bảo đảm" làm đúng hay "giảm tử vong"; SOP "không ghi được" cách xử lý lúc bất thường, bàn giao ca, số người tối thiểu hay lý do của bước (đó là SOP viết thiếu); người làm khác quy trình là "vi phạm" mà chưa xét văn bản còn khớp thực tế không; ngược lại, mọi lần làm khác là lỗi của văn bản (phần lớn là sơ suất không cố ý; vi phạm cố ý ước 16% tới 34%) | FAA AC 120-71B (2017); FAA (2022) |
| standardized work | công việc chuẩn · *standardised work* (tên mục từ LEI giữ *Standardized Work*) | Theo LEI: quy trình chính xác cho công việc của từng người vận hành, dựng trên takt time, trình tự thao tác trong takt và lượng hàng dở dang chuẩn; dán tại trạm làm việc, là mốc cho kaizen. Kỹ sư và quản lý tuyến đầu dùng các biểu mẫu để thiết kế, người vận hành dùng chúng để cải tiến việc của mình | dịch là "quy trình chuẩn" hay "SOP"; LEI nói công việc chuẩn do người vận hành tự đặt | LEI, *Lean Lexicon* |
| checklist | danh sách kiểm · *checklist* | Công cụ giảm khả năng mắc lỗi khi cấu hình cho từng giai đoạn và khi có trục trặc. Trong SOP là một bước xác nhận nằm bên trong quy trình ("không phải SOP mà là một phần của SOP") | gọi danh sách kiểm là một SOP | FAA AC 120-71B, mục 1.4; EPA QA/G-6 |
| làm khác quy trình | làm khác · *deviation*, *departure* | Hành vi không làm đúng văn bản, chưa hàm ý đúng sai | *violation*, trừ khi nguồn dùng chữ đó | Chính bài SOP |
| vi phạm cần thiết | "vi phạm cần thiết" · *"necessary violations"* | Khái niệm của James Reason (qua Hopkins 2000) mà CSB dẫn: làm khác quy trình vì làm đúng thì không xong việc | — | CSB (2007) |
| mức tuân thủ / chất lượng thao tác / kết cục | mức tuân thủ / chất lượng thao tác / kết cục · *compliance / the quality of the task / outcome* | Ba tầng bằng chứng khác nhau: có làm theo SOP không / thao tác có tốt không / người bệnh ra sao | dùng chất lượng thao tác (ví dụ đặt ống thành công lần đầu) như mức tuân thủ; gộp ba tầng | Ljungqvist và cộng sự (2024); Kortgen và cộng sự (2006) |

### Lưu đồ quy trình

| Thuật ngữ | Gọi là | Nghĩa chốt | Không viết | Nguồn |
|---|---|---|---|---|
| process flowchart / process map / process mapping | lưu đồ quy trình (tên công cụ), là **một dạng** bản đồ quy trình; "vẽ lưu đồ quy trình" cho hoạt động process mapping; tên bài `Lưu Đồ Quy Trình` · *Process Flowchart*; *a common kind of process map* | Hình vẽ một quy trình thành chuỗi bước nối bằng mũi tên theo thứ tự công việc đi qua; ô chữ nhật cho bước, hình thoi cho câu hỏi có đủ các lối ra. Cơ chế: đặt mọi bước, mọi ngã rẽ và mọi lần chuyển tay lên cùng một mặt phẳng, để những người mỗi người chỉ thấy một đoạn cùng thấy cả đường đi, và chỗ việc nằm chờ giữa hai người hiện ra. Lưu đồ chỉ ra chỗ đáng nghi, có khi ngay từ cấu trúc (bước lặp, vòng làm lại, chuyển tay không ai nhận), nhưng không tự chứng minh nguyên nhân và không bảo đảm cách sửa hiệu quả. "Bản đồ quy trình" ở bài FMEA là cùng một thứ | lưu đồ và bản đồ quy trình là từ đồng nghĩa; lưu đồ "không thể" ghi thời gian, hay mẫu mặc định "không có" chỗ cho thời gian chờ (ASQ có ký hiệu *Delay or wait*; viết "một lưu đồ chỉ ghi thứ tự và logic thì không cho biết…" hoặc "phần tuỳ chọn, chỉ có khi người vẽ thêm vào"); "đừng nhét thời gian vào lưu đồ" (cần cả dòng vật liệu lẫn dòng thông tin thì nói sơ đồ chuỗi giá trị có sẵn khung cho việc đó); lưu đồ "mô tả chứ không chẩn đoán" | ASQ, *Flowchart*; Gilbreth & Gilbreth (1921) |
| process chart | biểu đồ quy trình | Tên của Gilbreth năm 1921: *"a device for visualizing a process as a means of improving it"* | "lưu đồ có từ năm 1921" hay "Gilbreth phát minh ra lưu đồ" (1921 là mốc trình bày trước ASME; hai tác giả nói đã dùng từ trước); nhắc bộ ký hiệu ASME 1947 (chưa đọc văn bản gốc) | Gilbreth & Gilbreth (1921) |
| swimlane / cross-functional process map | lưu đồ chia làn; mỗi người hoặc bộ phận một làn · *swimlane flowchart*; *lane* | Mỗi mũi tên băng qua vạch làn là một lần chuyển tay. Cách vẽ "thường được gắn với" Rummler & Brache (1990). "Khoảng trắng" (nhan đề sách) là khoảng giữa các ô phòng ban nơi công việc đi qua mà sơ đồ tổ chức không vẽ | Rummler và Brache "phát minh" ra lưu đồ chia làn; "khoảng trắng là nơi không ai chịu trách nhiệm" như lời của sách | Rummler & Brache (1990) |
| handoff | lần chuyển tay · *handoff* | Một lần công việc đổi người hoặc đổi bộ phận phụ trách | — | ASQ; chính bài |
| current state / future state | bản hiện trạng / bản mục tiêu (bài A3: "sơ đồ hiện trạng", "sơ đồ quy trình mục tiêu") · *current-state map / future-state map* | Bản vẽ quy trình như đang chạy / như sẽ chạy sau cải tiến | "bản lý tưởng" | Bài A3; bài Lưu Đồ Quy Trình |
| decision diamond | ô quyết định (hình thoi) · *decision diamond* | Câu hỏi phải có đủ các lối ra | — | ASQ |

### Sơ đồ SIPOC

| Thuật ngữ | Gọi là | Nghĩa chốt | Không viết | Nguồn |
|---|---|---|---|---|
| SIPOC (Suppliers, Inputs, Process, Outputs, Customers) | "SIPOC"; năm cột gọi là nhà cung cấp / đầu vào / quy trình / đầu ra / khách hàng, kèm chữ tiếng Anh ở lần đầu; tên bài `Sơ Đồ SIPOC` · *SIPOC Diagram*; năm cột giữ tên gốc, không chú giải | Bảng năm cột tóm một quy trình ở mức thô, dùng **trước** lưu đồ; cột quy trình là năm tới bảy hoạt động cốt lõi ("35,000-foot view"). Cơ chế: buộc nhóm chốt hai đầu của quy trình và gọi tên những bên đứng ngoài hai đầu ấy, người cấp đầu vào và người nhận đầu ra, trước khi đi vào chi tiết bên trong. Khác lưu đồ (nhìn vào bên trong: bước, ngã rẽ, chuyển tay) và sơ đồ chuỗi giá trị (dòng vật liệu, dòng thông tin, thời gian): SIPOC nhìn ra hai phía ngoài. Nhà cung cấp và khách hàng có thể ở trong hay ngoài tổ chức | SIPOC "không thể" ghi thời gian, yêu cầu hay thước đo (năm cột *mặc định* không có chỗ; biến thể thêm được); mẫu "không nối được" đầu vào với bước (viết "mẫu mặc định mà ASQ mô tả là năm khối, không nối…"); năm ra đời hay người đặt ra SIPOC; "SIPOC có từ TQM cuối thập niên 1980" như sự kiện; Deming đặt ra SIPOC; nhà cung cấp và khách hàng là "những người không ngồi trong phòng" như đặc tính chung; cột quy trình "cho biết ít điều mới nhất" như khái quát; ghi lại "SIPOC đã đổi gì" là bằng chứng phạm vi mới đúng hơn (đó là dấu vết; phạm vi mới phải kiểm bằng dữ kiện về sau) | ASQ, *SIPOC+CM Diagram* |
| process boundaries / scope | ranh giới (điểm bắt đầu, điểm kết thúc) / phạm vi · *boundaries (start point / end point) / scope* | Ranh giới là hai đầu của quy trình, đặt bằng **một sự kiện ai cũng nhận ra** ("khách đặt cọc"), không bằng tên một bộ phận. Phạm vi là phần dự án được phép đụng tới | dùng "ranh giới" và "phạm vi" như từ đồng nghĩa; ranh giới là "phạm vi trách nhiệm của bộ phận" | ASQ, *SIPOC+CM Diagram* |
| SIPOC+CM / SIPOC-R | giữ nguyên tên; +C = ràng buộc của hệ thống, +M = thước đo đang hoặc sẽ dùng, R = yêu cầu (cách gọi của Baughn) | Biến thể thêm cột, đều là phần tuỳ chọn. Cột R của Baughn thật ra chứa ràng buộc của dự án, gần +C hơn +M | +C, +M hay R là phần bắt buộc của SIPOC; +M và R là hai tên của cùng một thứ; nội dung cột R của Mayo là yêu cầu của khách hàng | ASQ; Baughn và cộng sự (2020) |
| yêu cầu / ràng buộc / thước đo | yêu cầu của khách hàng / ràng buộc của dự án / thước đo · *requirements / constraints / measures* | Ba thứ tách bạch. Không khối nào trong năm cột hay +CM giữ chỗ sẵn cho yêu cầu của khách hàng | gộp ba thứ làm một | Bài Sơ Đồ SIPOC |

### Sơ đồ chuỗi giá trị

| Thuật ngữ | Gọi là | Nghĩa chốt | Không viết | Nguồn |
|---|---|---|---|---|
| value stream map (VSM) / value-stream mapping | sơ đồ chuỗi giá trị; tên bài `Sơ Đồ Chuỗi Giá Trị` · *value stream map*; tên bài EN theo mục lục `Value Stream Mapping` | Bản vẽ trên một mặt giấy đường đi của **một họ sản phẩm** từ lúc nhận đơn tới lúc giao, gồm dòng vật liệu, dòng thông tin và đường thời gian. Cơ chế: đặt thời gian chờ cạnh thời gian làm trên cùng một đường và đặt dòng thông tin ngay trên dòng vật liệu, để chỗ hàng nằm chờ và quyết định đứng sau nó hiện ra trên cùng một tờ. Chỉ phủ hai trong ba dòng mà người Toyota học (không phủ dòng người và thao tác). Khác lưu đồ (bước, ngã rẽ, chuyển tay bên trong) và SIPOC (năm tới bảy ô, nhìn ra hai phía ngoài) ở chỗ ghi thời gian trong và giữa các khâu và vẽ cách mỗi khâu nhận lệnh làm | gộp với lưu đồ quy trình; bản đồ "đo" lead time (thời gian chờ được **ước** từ lượng tồn đếm được trong một lần đi, là một bức ảnh chụp); Rother và Shook "phát minh" ra công cụ (họ chuẩn hoá cách vẽ Toyota gọi là *Material and Information Flow Mapping*); "chuỗi giá trị" của công cụ là *value chain* của Porter (trong bài, "chuỗi giá trị" chỉ đường đi của một họ sản phẩm qua các khâu) | LEI, *Lean Lexicon*; Rother & Shook, *Learning to See*; Rother, *Avoiding Common Pitfalls* |
| current-state map / future-state map (trong VSM) | bản hiện trạng / bản mục tiêu · *current-state map / future-state map* | Theo Rother & Shook, bản mục tiêu là bản quan trọng nhất; bản hiện trạng không có bản mục tiêu đi kèm thì "không mấy hữu ích". Marin-Garcia gọi bản mục tiêu là *ideal state map* | "bản lý tưởng", "bản đồ tương lai"; coi bản hiện trạng là sản phẩm của công cụ | Rother & Shook, *Learning to See*, Phần I |
| lead time | "lead time" (giữ tiếng Anh), lần đầu giải thích là thời gian một món đi hết dòng chảy từ đầu tới cuối · *lead time* | Định nghĩa của LEI. Đặt cạnh **thời gian xử lý** (thời gian có người hay máy thật sự làm trên món hàng) trên đường thời gian dưới đáy bản đồ. Thời gian xử lý chưa hẳn là thời gian tạo giá trị (kiểm tra, làm lại cũng là có người làm). Lead time trên bản đồ là con số **ước** từ tồn kho một lần đếm | dịch là "thời gian sản xuất"; lẫn với *cycle time*; gọi thời gian xử lý là "thời gian tạo giá trị"; con số ước "đúng cho hôm đếm" như số đo | LEI, *Lean Lexicon* |
| Little's law | định luật Little (L = λW) | Lượng tồn trung bình = lưu lượng trung bình × thời gian chờ trung bình, trên cùng phạm vi và cùng đơn vị thời gian. Đổi hàng tồn ra thời gian chờ dựa vào nó | định luật đòi hàng nhả đều; chia một lần đếm cho lưu lượng tính theo giờ mở cửa rồi so với thời gian chờ tính theo giờ đồng hồ | Little (2011) |
| product family | họ sản phẩm · *product family* | Nhóm sản phẩm đi qua những bước gần giống nhau, xác định từ phía khách hàng; mỗi bản đồ một họ | vẽ mọi sản phẩm của nhà máy lên một bản | Rother & Shook, *Learning to See*, Phần I |
| information flow | dòng thông tin · *information flow* | Cách mỗi khâu biết phải làm gì tiếp: lịch, danh sách, lời báo, tín hiệu kéo. Rother & Shook coi nó quan trọng ngang dòng vật liệu | "dòng giấy tờ"; vẽ dòng vật liệu rồi coi là đủ | Rother & Shook, *Learning to See*, Phần I |
| door-to-door | từ cửa tới cửa · *door-to-door* | Phạm vi khởi đầu trong *Learning to See*: dòng chảy trong một nhà máy, gồm cả giao cho khách và nhận vật tư; mở rộng dần ra ngoài | — | Rother & Shook, *Learning to See*, Phần I |

### Biểu đồ Gantt

| Thuật ngữ | Gọi là | Nghĩa chốt | Không viết | Nguồn |
|---|---|---|---|---|
| Gantt chart | biểu đồ Gantt (giữ tên riêng Gantt, dịch phần chung) · *Gantt chart* | Cơ chế: đưa thời gian lên tiền cảnh và đẩy mọi thứ khác xuống hậu cảnh. Thanh ngang chỉ mã hoá hai điểm và một độ dài; khung hình quanh nó vẽ thêm được quan hệ phụ thuộc, mốc, người phụ trách, phần trăm hoàn thành, nhưng đều là tuỳ chọn phải chủ động đưa vào | Henry Gantt phát minh ra biểu đồ thanh hay khai sinh quản lý dự án; biểu đồ Gantt "chỉ mã hoá ba thứ" hay "không chứa được" quan hệ phụ thuộc và phần trăm hoàn thành; bản hiện đại "đã bỏ" cột lý do (đúng: mẫu mặc định không giữ sẵn, phần mềm có trường văn bản tuỳ chỉnh); vòng kiểm thử, sửa, kiểm lại "không vẽ được" (viết "một thanh cố định không thể hiện đầy đủ") | Weaver (2012); Geraldi & Lechter (2012); tài liệu Microsoft Project |
| tên gọi "Gantt chart" | — | Ba mệnh đề tách bạch: (1) Gantt không phát minh ra biểu đồ thanh; (2) ông có dựng một hệ biểu đồ quản trị sản xuất riêng, được Wallace Clark đặt theo tên ông trong sách đầu thập niên 1920, sau khi Gantt mất (1919); (3) biểu đồ thanh theo trục thời gian hôm nay khác khá xa hệ đó, và mãi tới thập niên 1930 mới bị gọi bằng tên ấy. Chỉ mệnh đề (3) là chỗ cái tên lạc địa chỉ | "cái tên gắn nhầm người" | Weaver (2012) |
| Gantt chart bản Clark | — | Bản trong sách của Clark đầu thập niên 1920, có cột ghi lý do mỗi lần lệch kế hoạch (W chờ máy, M thiếu vật tư, H thiếu người). Đây là chỗ bản hiện đại nghèo hơn bản gốc | mô tả bản hiện đại như thể vẫn còn cột lý do | Clark (1922/1923); Geraldi & Lechter (2012) |
| harmonogram | "harmonogram" | Sơ đồ Karol Adamiecki dựng năm 1896, mỗi việc là một dải giấy có tỷ lệ, phần tiêu đề ghi danh sách việc phải làm trước nó | "biểu đồ Gantt của người Ba Lan"; Gantt lấy cảm hứng từ nó | Weaver (2012), dẫn Morris (1994) |
| slack, total slack, total float | khoảng dư · *slack* (bài CPM ghi tên gốc *total float*) | Khoảng một chuỗi việc chậm được trước khi ngày kết thúc bị ảnh hưởng; việc găng là việc có khoảng dư nhỏ nhất, bằng không khi hạn trùng ngày xong sớm nhất (xem nhóm CPM) | "chậm trên chuỗi dài nhất là đẩy thẳng ngày kết thúc" khi chuỗi còn khoảng dư (chậm trước hết ăn vào khoảng dư) | Microsoft, *Manage your project's critical path* |
| baseline | lịch gốc · *baseline* | Bản kế hoạch chốt lúc đầu, giữ lại để so với lịch cập nhật và thực tế | coi lịch đã cập nhật là lịch gốc (thanh chỉ dịch chỗ thì tổng mức lệch mất dấu) | Bài Biểu Đồ Gantt |

### Cấu trúc phân rã công việc (WBS)

| Thuật ngữ | Gọi là | Nghĩa chốt | Không viết | Nguồn |
|---|---|---|---|---|
| work breakdown structure (WBS) | cấu trúc phân rã công việc, gọi tắt WBS; tên bài `Cấu Trúc Phân Rã Công Việc (WBS)` · *Work Breakdown Structure (WBS)* | Cây chia toàn bộ phạm vi dự án thành những thứ phải bàn giao, nhỏ dần tới gói việc. NASA: "cây phả hệ hướng theo sản phẩm"; phần việc không nằm trong WBS không được coi là một phần của dự án, và đây là quy tắc quản lý phạm vi: việc thuộc phạm vi mà bị sót thì sửa cây, yêu cầu mới thì qua kiểm soát thay đổi rồi mới thêm vào cây. Cơ chế hai vế: (1) luật 100%; (2) phép phân rã làm hiện ra thành phần hay bị bỏ qua, nhưng chỉ những gì người lập cây nghĩ tới. Cây chỉ trả lời "dự án gồm những gì": thứ tự và thời điểm thuộc biểu đồ Gantt và CPM, người chịu trách nhiệm ghi ở ma trận trách nhiệm đặt cạnh cây | WBS là một lịch hay chứa thứ tự trước sau; "việc không có trên cây thì không thuộc dự án" như một lối thoát cho việc bị quên; "không tìm được nhánh nghĩa là chưa ai nhận" (thiếu trong phạm vi và thiếu người phụ trách là hai chuyện); gộp phòng ban, giai đoạn và loại thợ thành một nhóm cách chia sai (xem mục WBS chia theo sản phẩm) | NASA (2018); GAO-20-195G, ch. 7 |
| 100% rule | luật 100% · *100% rule* | Luật về **độ phủ công việc**, không về con số: WBS chứa đúng 100% công việc thuộc phạm vi dự án, kể cả quản lý dự án, không chứa việc ngoài phạm vi; ở mọi tầng, các con phủ đúng 100% công việc của cha (Haugan 2002, qua Brotherton và cộng sự 2008; DOE). GAO diễn đạt qua phép cộng (tổng các con bằng cha) vì trong dự toán chi phí được cộng theo cây. Phân biệt hai phép kiểm: kiểm số học (các con số tổng hợp nhất quán) và kiểm phạm vi (các nhánh phủ hết việc phải làm, chỉ kiểm được bằng cách đối chiếu với hợp đồng, yêu cầu, người nhận sản phẩm). Cộng khớp là điều kiện cần, chưa phải bằng chứng đạt luật. Nhóm "khác" nếu có nên dưới 10% (DOE) | đồng nhất luật 100% với việc cộng khớp ngân sách; "cộng khớp nên cây đạt luật 100%"; "luật 100% chỉ kiểm cây khớp với chính nó" hay "luật của phép cộng, không phải của phép đếm" (thu hẹp nghĩa của nguồn) | Brotherton, Fried & Norman (2008); DOE (2012), mục 3.2; GAO-20-195G, tr. 58 |
| work package | gói việc · *work package* | Tầng thấp nhất của WBS (GAO), vẫn là một thứ bàn giao ("sàn đã chống thấm và nghiệm thu"); đủ nhỏ để ước lượng và giao cho **một đầu mối chịu trách nhiệm**, người làm có thể là cả một nhóm. Hoạt động (bước làm: làm sạch, quét, ngâm thử) được định nghĩa bên trong gói và đưa vào lịch, không thành thêm một tầng của cây | gọi gói việc là "hoạt động" hay "đầu việc trong lịch"; "giao cho một người nhận" (đọc thành một cá nhân phải tự làm); liệt kê bước làm (đục sàn, ốp lát) như gói việc | GAO-20-195G, tr. 56, 65 |
| WBS dictionary | từ điển WBS · *WBS dictionary* | Tài liệu đi kèm mô tả bằng lời mỗi phần tử gồm những việc gì; chỉnh thêm chút ít thì thành bản mô tả công việc cho hợp đồng. Ghi thêm "không gồm gì", tiêu chí xong và đầu mối chịu trách nhiệm là cách dùng bài khuyên, không phải định nghĩa của nguồn | — | GAO-20-195G, tr. 61, 64; NASA (2018) |
| product-oriented / functional WBS / phase-based | WBS chia theo sản phẩm (theo thứ bàn giao) / chia theo chức năng / chia theo giai đoạn · *product-oriented / functional / phase-based WBS* | Bài chọn cách chia theo sản phẩm theo NASA và GAO. Chia theo phòng ban, chức năng hay loại thợ nói ai làm chứ không nói làm ra cái gì: NASA gọi là lỗi, GAO chỉ ra cây chức năng không truy được vượt chi về hạng mục. Chia theo giai đoạn là trường hợp khác: NASA xếp vào loại không nên dùng, còn PMBOK (ấn bản 5, hình 5-12) chấp nhận giai đoạn ở tầng hai với sản phẩm bàn giao ở tầng ba. Phép kiểm chung: mỗi phần tử trả lời được "xong thì cầm được cái gì" | chia theo giai đoạn "là lỗi" như nguyên tắc chung; gộp phòng ban, giai đoạn và loại thợ thành một nhóm sai | GAO-20-195G, tr. 59-60; NASA (2018), mục 3.5.2; PMBOK ấn bản 5 (qua bản trích) |
| common elements | phần tử chung · *common elements* | Việc xuyên suốt không thuộc riêng một sản phẩm: quản lý chương trình (luôn ở tầng hai), tích hợp, kỹ thuật hệ thống, kiểm thử toàn hệ thống, đào tạo, dữ liệu; phải có mặt ngay từ đầu thì cây mới đủ toàn bộ công việc | gộp "chuyển dữ liệu" vào phần tử *Data* của GAO (phần tử ấy là dữ liệu phải bàn giao: tài liệu kỹ thuật, dữ liệu quản lý) | GAO-20-195G, bảng 6 |

### Phương pháp đường găng (CPM)

| Thuật ngữ | Gọi là | Nghĩa chốt | Không viết | Nguồn |
|---|---|---|---|---|
| critical path method (CPM) | phương pháp đường găng, gọi tắt CPM; tên bài `Phương Pháp Đường Găng (CPM)` | Phép tính: từ logic trước sau và thời lượng, cộng dọc mọi chuỗi việc, chỉ ra chuỗi quyết định ngày xong sớm nhất và khoảng dư của mọi việc khác. Cơ chế: phân bổ sự chú ý, phân biệt những việc đang quyết định ngày xong với những việc còn khoảng dư; ở dự án nhiều việc song song nhóm thứ nhất thường là số ít, ở dự án gần như nối đuôi thì gần hết số việc đều găng (GAO coi tỷ lệ gần 100% là dấu hiệu lịch nối tiếp quá mức hoặc bị giới hạn nguồn lực). Phép tính đúng tuyệt đối với đầu vào; đầu vào (mũi tên, thời lượng) là mô hình, nên đường găng là tính chất của mô hình, chưa chắc của dự án. Khác biểu đồ Gantt (cách bày lịch, có thể vẽ tay không qua phép tính) và WBS (dự án gồm những gì). Bản gốc 1959 là phương pháp cân thời gian với chi phí, vẽ mỗi việc thành một mũi tên | CPM "chỉ là tìm chuỗi dài nhất" khi nói về bản gốc; đồng nhất CPM với biểu đồ Gantt; CPM "chứng minh" ngày xong (ngày xong là kết quả tất định của các ước lượng); CPM "tách số ít việc găng" như tính chất luôn đúng | Kelley & Walker (1959); GAO-16-89G |
| critical path | đường găng · *critical path* | Quy ước của bài CPM: chuỗi dài nhất, quyết định ngày xong sớm nhất; khi hạn chót muộn hơn ngày xong sớm nhất, nó thường cũng là chuỗi có khoảng dư nhỏ nhất. Hai cách nhận diện có thể lệch nhau khi lịch có ràng buộc ngày cứng hoặc nhiều lịch làm việc; GAO: chuỗi dài nhất là cách duy nhất chắc chắn khi dùng nhiều lịch làm việc. Không cố định: đổi khi việc chậm, xong sớm hay làm sai thứ tự | "đường găng là chuỗi có khoảng dư bằng không" như định nghĩa chung (chỉ đúng khi hạn trùng ngày xong sớm nhất và không có ràng buộc ngày cứng); "đường găng" cho một chuỗi chọn tay; "đường tới hạn", "đường then chốt" | Kelley & Walker (1959), tr. 163; GAO-16-89G, thực hành 6 |
| critical activity / near-critical | việc găng / việc (chuỗi) gần găng | Việc găng: thời gian có sẵn đúng bằng thời lượng (Kelley & Walker). Gần găng: khoảng dư trong một ngưỡng hẹp so với đường găng; ngưỡng đặt theo quy mô (GAO: 5 ngày cho lịch ngắn, 2-3 tháng cho chương trình nhiều năm) | gọi việc quan trọng, tốn kém hay kéo dài là "việc găng" | Kelley & Walker (1959); GAO-16-89G |
| forward pass / backward pass | lượt tính xuôi / lượt tính ngược | Xuôi: ngày bắt đầu và xong sớm nhất; ngược, từ hạn chót: ngày bắt đầu và xong muộn nhất. Hiệu hai lượt là khoảng dư, nên khoảng dư đo theo mốc lượt ngược xuất phát: từ ngày xong sớm nhất thì là số ngày chậm được mà ngày xong sớm nhất chưa lùi; từ một hạn cam kết muộn hơn thì gồm cả phần đệm tới hạn | định nghĩa khoảng dư là "số ngày chậm được trước khi ngày xong bị ảnh hưởng" rồi tính ngược từ một hạn muộn hơn (ngày xong sớm nhất lùi mà hạn chưa lỡ) | Kelley & Walker (1959); GAO-16-89G |
| normal / crash duration | thời lượng bình thường / thời lượng rút ngắn tối đa (*crash*) | Bình thường: ứng với chi phí trực tiếp thấp nhất. Rút ngắn tối đa: giới hạn nhanh nhất có thể, chi phí cao hơn. Rút ngắn đúng cách: chọn phương án có chi phí thấp nhất cho mỗi ngày **cả dự án** sớm lên; khi có nhiều đường găng song song, nhóm việc được đẩy nhanh phải cắt ngang mọi đường (Kelley & Walker: *cut set*); rồi tính lại vì có thêm đường găng mới | "rút ở việc găng rẻ nhất" trơn (sai khi có nhiều đường găng); đẩy nhanh đồng loạt; rút ngắn mà không tính lại | Kelley & Walker (1959), tr. 164-165, 173 |
| merge point / merge bias | điểm hợp lưu / thiên lệch hợp lưu (*merge bias*) | Điểm hợp lưu: một việc có nhiều chuỗi song song dồn vào. Xác suất nó bắt đầu đúng hẹn là xác suất mọi chuỗi cùng về đúng hẹn: luôn không cao hơn xác suất của chuỗi kém chắc nhất, bằng tích khi các chuỗi độc lập; ví dụ GAO: 60% × 60% = 36%, ba chuỗi còn 22%. Các chuỗi chung một việc phía trước không độc lập nếu việc ấy bất định. Xác suất ở điểm hợp lưu chưa phải xác suất cả dự án kịp hạn | phép nhân xác suất mà không nêu giả định độc lập; "thấp hơn" nghiêm ngặt (viết "không cao hơn, thường thấp hơn"); "thiên lệch hợp lưu làm mọi dự án trễ" (GAO: ngày xong "có xu hướng" muộn hơn) | GAO-16-89G, thực hành 2 và 8 |
| criticality index | chỉ số độ găng · *criticality index* | Xác suất một việc nằm trên đường găng, tính bằng mô phỏng Monte Carlo | — | Van Slyke (1963), qua tóm tắt |
| dangling logic / date constraint / lag | việc treo (thiếu việc trước hoặc việc sau) / ràng buộc ngày cứng / độ trễ (*lag*) | Ba lỗi cách lập lịch làm đường găng sai: việc treo hiện ra với khoảng dư lớn hơn thật; ràng buộc ngày cứng làm mỗi ràng buộc sinh một chuỗi găng riêng; độ trễ che phần việc thật đang gây găng, nên viết khoảng chờ thành một việc có tên | gọi đó là giới hạn vốn có của CPM (giới hạn vốn có là phép tính không tự biết mình thiếu mũi tên) | GAO-16-89G, thực hành 6 |
| resource critical path | đường găng theo nguồn lực | Chuỗi quyết định ngày xong khi tính cả logic lẫn nguồn lực; GAO gọi là *resource critical path*, *resource constrained critical path* hoặc *critical chain*. CPM giả định nguồn lực vô hạn | CPM "tính" nguồn lực vì lịch đã gán người | GAO-16-89G; Kelley & Walker (1959), tr. 166 |
| PERT | "PERT" (Program Evaluation and Review Technique) | Hệ thống song song do Văn phòng Dự án Đặc biệt của Hải quân Mỹ (chương trình Polaris) dựng cùng Booz, Allen & Hamilton và Lockheed từ đầu năm 1958; cùng kiểu sơ đồ, mỗi việc ba ước lượng | PERT và CPM là một; PERT "làm Polaris xong sớm" (chưa kiểm; có tranh luận lịch sử ở Sapolsky 1972 và Engwall 2012, series chưa đọc) | Kelley & Walker (1959), tr. 171 |

### Quản lý giá trị thu được (EVM)

| Thuật ngữ | Gọi là | Nghĩa chốt | Không viết | Nguồn |
|---|---|---|---|---|
| earned value management (EVM) | quản lý giá trị thu được, gọi tắt EVM; tên bài `Quản Lý Giá Trị Thu Được (EVM)` · *Earned Value Management (EVM)* | Đặt ngân sách của phần việc đã xong (EV) cạnh kế hoạch (PV) và chi phí thực tế (AC). Cơ chế: quy tiến độ vật lý về cùng đơn vị với ngân sách để một phép so tách được làm chậm (SV) khỏi làm đắt (CV), và gộp được những loại việc khác nhau vào một bức tranh. Mọi thứ phụ thuộc vào cách tính EV. Đứng trên WBS (danh sách gói việc để gắn ngân sách) và lịch (hình dạng đường PV); không tự biết việc nào găng | EVM tự "phát hiện" vấn đề (A-12: chỉ số báo đúng, người quản lý không dùng); EVM chỉ là báo cáo cho chính phủ; "EVM làm dự án thành công hơn" như kết quả đã đo (chưa có nghiên cứu so có/không có EVM) | GAO-20-195G, mục "What EVM Is" |
| planned value / earned value / actual cost (PV / EV / AC) | giá trị kế hoạch (PV) / giá trị thu được (EV) / chi phí thực tế (AC); tên cũ trong tài liệu Bộ Quốc phòng Mỹ và GAO: BCWS / BCWP / ACWP | PV: ngân sách của phần việc lẽ ra đã xong tới ngày báo cáo. EV: ngân sách của phần việc đã xong, theo dự toán của nó. AC: chi phí đã phát sinh và được ghi nhận cho chính phần việc ấy (GAO: *costs actually incurred and recorded*); hoá đơn chưa trả vẫn là chi phí đã phát sinh; CV đẹp có thể chỉ là chi phí chưa kịp ghi nhận | EV là "tiền đã chi" hay "giá trị kinh doanh tạo ra" (không đo doanh thu, lợi ích kinh doanh); AC là "tiền đã chi" hay "tiền đã thanh toán"; giữ tiền thanh toán làm AC thấp đi; so AC với PV rồi gọi là phân tích giá trị thu được | GAO-20-195G, glossary; mục "Analyze Performance" |
| CV, SV, CPI, SPI | chênh lệch chi phí (CV) / chênh lệch tiến độ (SV) / chỉ số hiệu suất chi phí (CPI) / chỉ số hiệu suất tiến độ (SPI) | CV = EV − AC; CPI = EV / AC; SV = EV − PV; SPI = EV / PV. Chỉ số dưới 1 và chênh lệch âm là xấu. CPI không phụ thuộc PV: kéo PV xuống chỉ làm SV đẹp | CPI đổi khi sửa PV; SV "đo bằng thời gian" (SV đo bằng tiền; độ chậm bằng thời gian là SV(t)) | GAO-20-195G |
| BAC / EAC / TCPI | ngân sách hoàn thành (BAC) / dự báo chi phí khi hoàn thành (EAC) / chỉ số hiệu suất cần đạt (TCPI) | BAC: tổng ngân sách của mọi phần việc đã lên kế hoạch, điểm cuối đường PV; không gồm dự phòng quản lý (đường cơ sở + dự phòng quản lý = ngân sách hợp đồng, *contract budget base*). EAC = AC + (BAC − EV) / hệ số hiệu suất; không hệ số nào luôn tốt nhất. BAC / CPI thường là kịch bản tốt nhất; CPI × SPI "thường được gọi là" dự báo xấu nhất (GAO). TCPI: ngân sách của phần việc còn lại chia cho số tiền còn được tiêu; TCPI cao hơn CPI nghĩa là dự báo giả định hiệu suất tốt lên, cần bằng chứng; quy tắc kinh nghiệm GAO dẫn: cao hơn quá 5 điểm phần trăm thì dự báo quá lạc quan | BAC là "tổng ngân sách được duyệt" khi có dự phòng; BAC / CPI là "mức sàn chắc chắn" (Henderson & Zwikael có dự án CPI tốt dần tới cuối); báo EAC một con số; nhãn "kịch bản xấu" cho CPI × SPI trong bảng (gọi theo giả định: phần còn lại chịu cả CPI lẫn SPI); TCPI > CPI "chứng minh" mục tiêu bất khả (nó cho thấy mục tiêu đòi hiệu suất tốt hơn quá khứ) | GAO-20-195G, mục "Project Future Performance" |
| SPI quay về 1 | — | SV và SPI tính bằng tiền: tới cuối dự án PV dừng ở BAC, EV lên tới BAC, nên dự án trễ bao lâu cũng kết thúc với SV = 0, SPI = 1. Lipke: thường mất giá trị trong một phần ba cuối, hỏng hẳn khi quá ngày kết thúc kế hoạch | SPI cuối bằng 1 nghĩa là đúng hạn | Lipke (2003); GAO-20-195G |
| earned schedule (ES), SPI(t), SV(t) | tiến độ thu được (ES) · *earned schedule* | Chiếu EV hiện tại lên đường PV để tìm thời điểm kế hoạch lẽ ra đạt giá trị ấy; ES = số kỳ đã trọn + phần nội suy tuyến tính của kỳ dở dang; SV(t) = ES − AT, SPI(t) = ES / AT (AT: thời gian thực tế đã trôi qua). Lipke đề xuất làm chỉ số năm 2003 và tự ghi phép chiếu không mới | Lipke "phát minh" phép chiếu | Lipke (2003) |
| performance measurement baseline (PMB) | đường cơ sở đo lường, gọi gọn là đường cơ sở · *performance measurement baseline* | Kế hoạch ngân sách rải theo thời gian để đo mọi hiệu suất thực tế (đường PV). Khác "lịch gốc" của bài Gantt (một lịch). Chỉ đổi qua kiểm soát thay đổi đã được duyệt và ghi lại mọi thay đổi; lý do hợp lệ gồm cả phạm vi, lịch, dòng tiền, đơn giá, quyết định của lãnh đạo, phân bổ dự phòng | đồng nhất với lịch gốc; sửa PV cho khớp thực tế mỗi lần chậm; "chỉ đổi khi phạm vi đổi" | GAO-20-195G, mục "EVM Process", bước 13 |
| management reserve | dự phòng quản lý · *management reserve* | Khoản người quản lý để riêng cho rủi ro chưa biết lúc khởi đầu, nằm ngoài đường cơ sở; phần được phân bổ cho một việc cụ thể thì vào đường cơ sở; chỉ dùng cho việc trong phạm vi, không dùng để bù hay thu nhỏ CV đã có; khi tiêu hết, rủi ro xảy ra thêm chỉ còn hiện ra thành CV xấu đi | "dùng dự phòng" để trả cho vượt chi đã xảy ra; gộp dự phòng quản lý với tiền được duyệt nói chung (tiền để trả vượt chi có thể nằm trong tổng được duyệt mà không phải dự phòng đã phân bổ) | GAO-20-195G, mục "EVM Process", "Analyze Performance" |
| over-target baseline (OTB) | dựng lại đường cơ sở vượt ngân sách gốc · *over-target baseline* | Đường cơ sở được dựng lại vượt ngân sách gốc, mọi số luỹ kế khởi động lại. Petter và cộng sự loại nhóm này (khoảng 20% số hợp đồng khả dụng) và viết rằng các nghiên cứu quốc phòng trước cũng làm vậy; bản gốc Christensen & Heise (1993) không nhắc tới việc loại này và vẫn giữ các hợp đồng có "đường cơ sở không ổn định" (thêm việc mới làm phần trăm hoàn thành giảm) | "mọi nghiên cứu quốc phòng đều loại" như sự kiện đã kiểm | Petter, Ritschel & White (2015) |
| cách tính EV | quy tắc cố định 0/100, 50/50, 25/75 / mốc có trọng số / đo vật lý / phần trăm hoàn thành / việc tính theo thời gian (*level of effort*) | 0/100: gói nằm gọn trong một kỳ báo cáo; quy tắc cố định khác: trong hai kỳ; mốc có trọng số: gói dài, mỗi kỳ ít nhất một mốc; phần trăm hoàn thành phải dựa trên thứ định lượng được; việc tính theo thời gian dành cho việc không có sản phẩm hay sản phẩm bàn giao xác định (ví dụ của GAO: quản lý chương trình), luôn thu được bằng kế hoạch, trên khoảng 15% ngân sách thì xem lại (ngưỡng tham khảo, GAO nói rõ không cứng) | gọi ngưỡng 15% là luật cứng; "dưới 15% nên chấp nhận được" (dưới ngưỡng không chứng minh cách đo hợp; lý do là việc không có sản phẩm đếm được); phần trăm tự báo là "khách quan"; mốc nghiệm thu "không thể" bị đẩy lên (vẫn hỏng khi hạ tiêu chí hay nghiệm thu cho có) | GAO-20-195G, mục "EVM Process", bảng 21 |
| CPI stability rule | quy tắc CPI ổn định (từ mốc 20%) | Ba định nghĩa, luôn nói rõ đang dùng định nghĩa nào: (1) khoảng biến thiên: max − min của CPI luỹ kế từ mốc X tới cuối < 0,2 (Payne 1990 và Christensen & Payne 1991, theo Christensen & Heise; Christensen & Heise 1993); (2) khoảng tuyệt đối: CPI cuối lệch ≤ 0,10 so với CPI ở mốc X, và ở mọi mốc sau (Petter và cộng sự kiểm cứ 5% một lần tới mốc 85%; Henderson & Zwikael lấy mốc mà mọi quan sát sau đều trong giới hạn 0,10) (Christensen & Templin 2002; Henderson & Zwikael 2008); (3) khoảng tương đối: lệch ≤ 10% của CPI ở mốc X (GAO). Christensen & Heise tự giải thích độ ổn định đến phần lớn từ tính luỹ kế của chỉ số; họ tự nhận đã khái quát kết quả cho các quân chủng, chương trình, loại hợp đồng quốc phòng (Petter và cộng sự đọc khác, xem mục 7); không nói gì về dự án ngoài quốc phòng | "CPI ổn định từ 20%" như sự thật chung; trộn ba định nghĩa; tả định nghĩa khoảng chỉ bằng phép so CPI ở mốc X với CPI cuối (thiếu điều kiện mọi mốc sau; 56% của Petter và cộng sự đo theo điều kiện chặt ấy); gọi mẫu 2015 là "dữ liệu quốc phòng tốt nhất hiện có" (viết "trong mẫu 209 hợp đồng của nghiên cứu năm 2015"); "Christensen & Heise chưa từng khái quát" (bản gốc tự nhận khái quát trong quốc phòng); độ ổn định là tính chất của dự án mà bỏ qua tính luỹ kế | Petter, Ritschel & White (2015) |

### Khung mục tiêu SMART

| Thuật ngữ | Gọi là | Nghĩa chốt | Không viết | Nguồn |
|---|---|---|---|---|
| SMART | khung mục tiêu SMART; tên bài `Khung Mục Tiêu SMART` · *SMART framework* | Danh sách kiểm năm tiêu chí cho **một** câu mục tiêu: kiểm câu ấy đã rõ và làm nổi chưa (chữ R của Doran, chữ A khả thi của bản thông dụng là đánh giá nội dung, không chỉ cách viết), không hỏi đủ khó chưa hay đo đúng chưa. Cơ chế: ép một ý định mơ hồ thành một câu người ngoài chấm được là đạt hay trượt (việc gì, đo bằng gì, ai làm, tới bao giờ). Không chọn mục tiêu, không nối mục tiêu giữa các cấp (OKR), không theo dõi liên tục (KPI). Bài SMART kiểm mọi câu mục tiêu bằng năm chữ của Doran và nói ra điều đó ngay ở đoạn mở | SMART "chỉ kiểm cách viết"; SMART là "lý thuyết đặt mục tiêu" hay "rút ra từ nghiên cứu của Locke và Latham"; SMART "không sinh ra từ nghiên cứu" (điều đã kiểm chỉ là bài của Doran không dẫn nghiên cứu và không trình bày phép thử nào; nguồn gốc tư tưởng của Doran chưa kiểm); "mục tiêu SMART hiệu quả hơn cố hết sức" như kết quả đã đo trên chính SMART; trộn câu hỏi của hai bản (ví dụ "ai chịu trách nhiệm" đặt ngay sau bản thông dụng) | Doran (1981) |
| năm chữ gốc của Doran | cụ thể / đo được / giao được việc / thực tế / gắn với thời gian · *Specific / Measurable / Assignable / Realistic / Time-related* | S: nhắm một vùng cụ thể cần cải thiện; M: định lượng hoặc ít nhất gợi ra chỉ báo tiến độ; A: nói rõ ai làm; R: kết quả đạt được một cách thực tế với nguồn lực hiện có; T: nói rõ khi nào đạt. Doran: không phải mục tiêu nào cũng cần đủ năm tiêu chí; không đòi mọi mục tiêu ở mọi cấp phải định lượng | chữ A của Doran là "khả thi" (*achievable*); bản gốc có chữ "phù hợp" (*relevant*) | Doran (1981) |
| bản thông dụng | cụ thể / đo được / khả thi / phù hợp / có thời hạn · *Specific / Measurable / Attainable (Achievable) / Relevant / Time-bound* | Một bản hay gặp; ở cuộc rà 40 trang web của Rubin, là bản phổ biến nhất (khoảng 10 trang). Chữ A và chữ R có nhiều cách đọc | gọi là bản "chuẩn" hay "chính thức"; "bản phổ biến nhất hiện nay" (số liệu năm 2002, rà không hệ thống) | Rubin (2002) |
| trôi nghĩa của từ viết tắt | trôi nghĩa · *acronym drift* | Từ của Rubin: năm chữ cái giữ nguyên, nghĩa từng chữ tản ra qua các lần truyền lại | — | Rubin (2002) |
| hệ số ảnh hưởng | hệ số ảnh hưởng (*d*) · *effect size (d)* | Khoảng cách giữa hai nhóm tính theo độ lệch chuẩn; giải thích ở lần đầu xuất hiện trong bài | — | Bài SMART |
| lời dặn cố hết sức | lời dặn cố hết sức, nhóm cố hết sức · *do-your-best goal* | Mục tiêu không có điểm tham chiếu bên ngoài, mỗi người tự định nghĩa | "mục tiêu chung chung" như tên thuật ngữ | Locke & Latham (2002) |
| mục tiêu kết quả / mục tiêu học | mục tiêu kết quả / mục tiêu học · *performance (outcome) goal / learning goal* | Mục tiêu kết quả: mức thành tích cần đạt. Mục tiêu học: số cách làm hay chiến lược cần tìm ra. Với việc mới, phức tạp, mục tiêu kết quả có thể cản việc học; mục tiêu học cụ thể cho thành tích cao hơn cố hết sức | mục tiêu học "luôn tốt hơn"; ví dụ mục tiêu học viết bằng hoạt động ("thử ba cách") thay vì thứ tìm ra ("tìm ra ba cách, mỗi cách chạy với ai, bằng chứng gì") | Locke & Latham (2002), dẫn Kanfer & Ackerman (1989), Winters & Latham (1996) |
| mục tiêu gần | mục tiêu gần, từng chặng · *proximal goal* | Mục tiêu cho chặng ngắn, đặt thêm bên cạnh mục tiêu xa | — | Locke & Latham (2002), dẫn Latham & Seijts (1999) |
| mục tiêu mở | mục tiêu mở · *open goal* | Lời dặn kiểu "xem bạn đi được bao xa"; khái niệm của nhóm Swann | đồng nhất với cố hết sức (hai điều kiện riêng trong thí nghiệm) | Swann và cộng sự (2020) |
| chỉ số chặn | chỉ số chặn · *guardrail metric* | Chỉ số viết ngay dưới mục tiêu để bắt chỗ đạt con số mà hỏng kết quả (bài SMART: tỷ lệ nghỉ trước ngày 60, tỷ lệ gia hạn của hội viên cũ; bài OKR: số lần vượt tốc độ trên 10.000 km, lịch chạy đủ chuyến). Thuật ngữ của series, chưa có nguồn chuẩn | trình bày như thuật ngữ của Doran, của Locke và Latham, hay của Google | Bài SMART; bài OKR |

### Mục tiêu và kết quả then chốt (OKR)

| Thuật ngữ | Gọi là | Nghĩa chốt | Không viết | Nguồn |
|---|---|---|---|---|
| OKR | mục tiêu và kết quả then chốt, gọi tắt OKR; tên bài `Mục Tiêu Và Kết Quả Then Chốt (OKR)` · *Objectives and Key Results (OKR)* | Một mục tiêu (hướng, không con số) cạnh khoảng ba kết quả then chốt đo được; ba tới năm mục tiêu mỗi người hay nhóm; chấm 0 tới 1,0; công khai trong tổ chức; mỗi nhóm nối OKR của mình vào ít nhất một mục tiêu của tổ chức, không phải mọi mục tiêu; xem lại vài lần trong quý. Cơ chế: đặt mục tiêu cạnh vài kết quả then chốt kiểm được, đưa ra chỗ mọi nhóm đều thấy, chấm lại sau một chu kỳ ngắn. Không chọn mục tiêu. Bài OKR kiểm mọi cách dùng bằng hướng dẫn của Google và nói ra điều đó ở đoạn `Là Gì` (bài chưa đọc nguyên văn sách của Grove) | OKR "làm tổ chức đạt kết quả tốt hơn" như kết quả đã đo; "OKR là MBO đổi tên" (Doerr đặt việc tách khỏi lương thưởng làm chỗ khác); OKR "phải chép từ trên xuống mọi cấp"; trích nguyên văn *High Output Management* (chưa đọc) | Google re:Work, *Set goals with OKRs* |
| mục tiêu / kết quả then chốt (trong OKR) | mục tiêu / kết quả then chốt · *objective / key result* | Mục tiêu trả lời "tôi muốn đi tới đâu"; kết quả then chốt là các cột mốc trả lời "tôi canh nhịp thế nào để biết mình có đang tới đó không" (hai câu hỏi của Grove, dẫn qua Google). Kết quả then chốt mô tả kết quả, không mô tả hoạt động; có bằng chứng hoàn thành kiểm được. Trong bài OKR, chữ "mục tiêu" chỉ objective; chữ "đích" chỉ con số cần đạt của một kết quả then chốt | "chỉ tiêu then chốt", "kết quả chính"; kết quả then chốt viết bằng động từ hoạt động ("hỗ trợ", "phân tích", "tư vấn", "triển khai") | Google re:Work |
| OKR cam kết / OKR vươn xa | OKR cam kết / OKR vươn xa · *committed OKR / aspirational OKR* | Cam kết: được chờ đạt trọn khi chấm cuối kỳ; chỉ gắn khi đã có căn cứ và nguồn lực để đạt. Vươn xa: đường tới đích còn đang dò; nhóm phụ thuộc chỉ nên trông vào khoảng 70% điều được hứa (Google). Nhãn chỉ nói về kỳ vọng hoàn thành, không kiểm soát rủi ro: giới hạn về an toàn, chất lượng, ngân sách là chỉ số chặn dưới cả hai loại | "đạt điểm qua" (dịch máy của *passing grade*); "chỗ rủi ro thì dùng OKR cam kết" như cách kiểm soát rủi ro (thí nghiệm của Gary và cộng sự không thử OKR cam kết); gán hai nhãn "cam kết / vươn xa" cho hướng dẫn của Google (trang ấy chỉ dùng *stretch goals*; hai nhãn lấy từ trang What Matters của Doerr) | What Matters, *What is an OKR?*; Google re:Work |
| điểm OKR | điểm OKR, thang 0 tới 1,0; vùng 0,6 tới 0,7 · *OKR grade*, *sweet spot* | Google chấm từ 0 tới 1,0, điểm mục tiêu là trung bình gần đúng của các kết quả then chốt; vùng "vừa đẹp" 0,6 tới 0,7; người lúc nào cũng đạt trọn thì OKR chưa đủ tham vọng; OKR không đồng nghĩa với đánh giá nhân viên. Vùng 0,6 tới 0,7 là cách chấm cho OKR vươn xa; OKR cam kết được chờ đạt trọn; bài OKR nêu phân biệt cam kết / vươn xa trước khi nêu vùng điểm. Google viết điểm mục tiêu là "rough average" của các kết quả then chốt; trung bình đều là lựa chọn của tình huống, phải ghi ra. Cách chấm "quãng đường đã đi từ mức đầu quý tới đích" là quy ước của bài OKR, không phải của Google; bài nói ra điều đó ngay ở ví dụ đầu. Một điểm gộp trong vùng kỳ vọng không chứng minh mục tiêu đạt khi một dòng thấp (tình huống nhà xe: 0,63 gồm 0,45 và 0,80) | "0,63 nên mục tiêu đã đạt"; "0,7 là trượt"; 0,6 tới 0,7 như chuẩn đạt của mọi OKR; đem 70% điểm ra làm mức dịch vụ hứa với khách; trình bày cách chấm theo quãng đường như cách của Google | Google re:Work |
| mục tiêu vươn xa | mục tiêu vươn xa · *stretch goal* | Đích đặt cao với kỳ vọng chỉ đạt một phần. Trong mô phỏng People Express của Gary và cộng sự: không nâng trung vị, tăng phân tán và tỷ lệ phá sản, kéo cam kết xuống | "mục tiêu khó luôn cho thành tích cao hơn"; khái quát kết quả mô phỏng thành kết quả về OKR | Gary, Yang, Yetton & Sterman (2017) |
| giấu sức | giấu sức · *sandbagging* | Nhóm đạt mọi OKR mà chưa cần dùng hết sức mình; một trong năm lỗi viết OKR của Google. Tỷ lệ dòng đạt trọn 1,0 cao chỉ là tín hiệu cần kiểm độ khó và chất lượng kết quả then chốt; thứ củng cố nghi vấn là đích đặt thấp hơn mức đã đạt kỳ trước | "đạt trọn nhiều là dấu hiệu giấu sức"; "đặt mục tiêu thận trọng" như điều tốt; "giấu sức là do gắn thưởng" như điều đã đo (Google chỉ liệt kê lỗi; liên hệ với thưởng là suy luận của bài) | Google re:Work |
| OKR việc thường ngày | OKR việc thường ngày · *business-as-usual OKRs* | OKR chỉ chép lại việc đang làm thay vì điều quan trọng nhất; Google xếp vào lỗi. Ranh giới OKR với KPI trong bài OKR ("thứ phải chạy đều mỗi ngày thuộc về chỉ số theo dõi thường xuyên như KPI") là cách đọc của bài dựng trên mục này | trình bày ranh giới OKR / KPI như định nghĩa của Google | Google re:Work |
| lượt được chọn vào thiết kế | lượt được chọn vào thiết kế · *design win* | Một lần khách hàng quyết định dùng chip cho sản phẩm đang thiết kế; ở Operation Crush chỉ đếm khi khách mua hệ thống phát triển hay bo mạch, thư cam kết chỉ được tin với một số khách | "hợp đồng", "đơn hàng" (doanh thu đến sau nhiều năm) | CHM (2014) |

---

## 2. Nguyên tắc diễn đạt chung

Áp dụng cho mọi bài trong series.

| Nguyên tắc | Viết | Không viết |
|---|---|---|
| Giới hạn của công cụ | "ký pháp mặc định / mẫu mặc định không có quy ước (chỗ) cho X", "X là phần tuỳ chọn, chỉ có khi người vẽ thêm vào" | công cụ "không thể" / "không ghi được" / "không chứa được" X. Lỗi này lặp ở Gantt, xương cá, lưu đồ, SIPOC và SOP: luôn tách giới hạn của *mẫu tối giản* khỏi giới hạn của *công cụ* |
| Tuyên bố phủ định về nghiên cứu | "trong phạm vi tìm kiếm của bài này, chưa tìm thấy…" | "không có", "chưa có ai đo được", "không tồn tại" |
| Hai nguồn lấy từ nhau | "nhất quán với nhau" | "kiểm chéo được với nhau", "hai phép kiểm độc lập" |
| Quan hệ quan sát được | "liên hệ", "đi cùng", "có thể giúp giải thích" | "gây ra", "quyết định", "làm tăng" khi nguồn chỉ có quan sát |
| Nguồn tự lệch số liệu | nêu cả hai con số, nói rõ chỗ lệch, dẫn "theo báo cáo của nhóm tác giả" | tự sửa con số cho khớp, hoặc chỉ dẫn một con số |
| Tổng quan về cách áp dụng | "tổng quan về cách áp dụng / về độ tin cậy", "cải thiện tự báo cáo" | dùng nó như bằng chứng về hiệu quả |
| Tỷ lệ nghiên cứu ghi lại một việc | "phần lớn các nghiên cứu không ghi lại…" | "phần lớn các lần dùng bỏ qua…" |
| Nguồn thứ cấp và tóm tắt | ghi rõ "dẫn lại qua…", "theo tóm tắt" | trình bày như đã đọc nguồn gốc hay toàn văn |
| Cách đọc của series | ghi rõ "cách đọc của bài", "suy diễn của bài", "giả thuyết" | trình bày cách ghép, cách đọc hay giả thuyết như phát hiện của nguồn |
| Lời của một người | gắn tên người nói và nguồn | biến lời kể của một người thành quy luật chung |
| Phạm vi bằng chứng | nói rõ phạm vi (ngành, mốc thời gian, loại can thiệp) ở cả phần tóm tắt và phần kết | khái quát vượt phạm vi của nguồn |
| Đoạn phản biện | nhãn `Phản biện:`; gọi bên bênh công cụ là "phe bênh" | đổi cách gọi giữa các bài |

---

## 3. Dữ kiện nền đã chốt

Những khẳng định về lịch sử và nguồn gốc mà các bài đã chốt. Bài sau không được nói ngược, trừ khi cố ý sửa bài cũ.

| Chủ đề | Viết | Không viết | Nguồn |
|---|---|---|---|
| 5S và Toyota | Toyota thực hành bốn chữ S; chữ thứ năm được thêm khi phương pháp lan ra ngoài Toyota, "theo LEI và Art Smalley" | "trong cách trình bày của chính Toyota" (không nguồn nào của series là tài liệu Toyota) | Smalley, *Four S*; LEI, *Lean Lexicon* |
| Lịch sử PDCA | Shewhart (1939): ba bước thẳng hàng đặc tả - sản xuất - kiểm định; Deming trình bày bánh xe bốn bước tại hội thảo JUSE năm 1950; giới quản lý Nhật đúc lại thành PDCA năm 1951; Ishikawa sửa tiếp, bản 1985; Deming chốt PDSA năm 1993 | — | Moen & Norman (2010) |
| Ai đặt ra PDCA | không ai biết; tính tới năm 2010 chưa ai nhận cũng chưa ai bác (Imai nêu việc này mà không nói ai làm) | tên một người hay tổ chức cụ thể; "tới nay" | Moen & Norman (2010), dẫn Imai (1986) |
| Deming từ chối chữ PDCA | thư gửi Ronald Moen 17/11/1990 (*"Be sure to call it PDSA, not the corruption PDCA"*); hai vòng "chẳng liên hệ gì với nhau" | — | Moen & Norman (2010) |
| Nguồn gốc A3 | tờ giấy khổ A3 đã được các công ty Nhật dùng kể chuyện cải tiến theo PDCA từ thập niên 1960; A3 **với tư cách một quy trình quản lý** được dựng có chủ đích ở trụ sở Toyota năm 1978 (Kan-Pro) | "A3 sinh ra năm 1978"; A3 "đi lên từ xưởng" | LEI/Yoshino; Smalley, *A3* |
| A3 và máy fax | có nguồn thứ cấp (*"the largest size that can fit through a fax machine"*), chưa có tài liệu sơ cấp. Tách hai câu hỏi: vì sao dùng khổ A3 (máy fax có thể trả lời), vì sao Toyota biến tờ giấy thành quy trình phát triển con người (Kan-Pro trả lời); hai câu trả lời không loại trừ nhau | chuyện máy fax "không có nguồn"; chuyện máy fax "dẫn đi nhầm hướng" nói chung | Bassuk & Washington (2013) |
| Sơ đồ nhân quả ra đời | Ishikawa dựng ra năm 1953, áp dụng ở nhà máy Fukiai của Kawasaki Steel; trình bày như một xung đột nguồn có đánh giá độ tin cậy | mốc 1943 như sự kiện (chỉ nhắc như phiên bản phổ biến bị biên niên JUSE chọi lại) | JUSE, *A Parallel Chronology of Prof. Kaoru Ishikawa's Life and TQC in Japan* |
| Biểu đồ thanh trước Gantt | Priestley (1765), harmonogram của Adamiecki (1896), chương trình thi công cầu cạn Langwies năm 1912 ở bang Graubünden, Thuỵ Sĩ, tuyến Chur-Arosa | cầu Langwies ở "Bavaria" (lỗi của Weaver) | Weaver (2012); Schürch (1916) |
| Gantt dùng cho dự án | trong tư liệu Geraldi & Lechter khảo sát, minh hoạ sớm nhất của một biểu đồ mang tên Gantt dùng cho dự án nằm trong sách của Koepke (1941); Muther (1944) là nơi biểu đồ như ngày nay xuất hiện lần đầu, khi đó gọi là *schedule charts* | "lần đầu dùng cho dự án là thập niên 1940" (thiếu phạm vi, chọi với ca Langwies 1912) | Geraldi & Lechter (2012), tr. 581 |
| Cục Quân nhu Lục quân Mỹ 1917 | hệ biểu đồ đặt lời hứa cạnh kết quả; tướng Crozier bị thay tháng 12/1917, giữa chiến tranh | "sau chiến tranh" | Gantt (1919), *Organizing for Work*, tr. 78-82 |
| Nguồn gốc FMEA | MIL-P-1629 của quân đội Mỹ, ngày 9/11/1949; NASA dùng trong chương trình Apollo thập niên 1960; công nghiệp ô tô tiếp nhận về sau | năm Ford hay ngành ô tô bắt đầu dùng | ASEMS Online |
| Nguồn gốc SIPOC | không nêu | năm ra đời, người đặt ra; nhắc sơ đồ "Production Viewed as a System" (1950) của Deming | — |
| Nguồn gốc sơ đồ chuỗi giá trị | Toyota gọi là *Material and Information Flow Mapping*, dùng để vẽ trạng thái hiện tại và tương lai khi lập kế hoạch triển khai; Rother để ý tới nó khi nghiên cứu Toyota và chuẩn hoá thành công cụ cùng Shook trong *Learning to See* (LEI), lời mở đầu đề tháng 5/1998; sách nhận giải nghiên cứu Shingo năm 1999 | "ra đời năm 1998" cho chính công cụ; "năm 1997" (Rother tự viết như vậy ở bài *Pitfalls*, chọi với ngày đề ở lời mở đầu; dùng ngày ở lời mở đầu) | Rother & Shook, *Learning to See*, lời mở đầu; LEI, *Lean Lexicon* |
| Lưu đồ và Gilbreth | Gilbreth & Gilbreth trình bày "Process Charts" tại hội nghị ASME, New York, 12/1921 | Gilbreth phát minh ra lưu đồ | Gilbreth & Gilbreth (1921) |
| Six Sigma | khởi nguồn ở Motorola năm 1986, phổ biến trong doanh nghiệp thập niên 1990 sau khi GE dùng | — | Hindo (2007) |
| Taylorism ở Mỹ | đình công Watertown 8/1911; Taylor điều trần trước uỷ ban đặc biệt Hạ viện 25/01/1912; từ 1914-15 các điều khoản kèm trong đạo luật chuẩn chi cấm đồng hồ bấm giây và cấm trả tiền thưởng hoặc tiền phụ trội (*"any premium or bonus or cash reward"*) trong cơ sở của chính phủ liên bang. Gọn thành "một điều khoản trong Đạo luật Chuẩn chi Quân đội" là chấp nhận được | "chế độ trả thưởng theo định mức"; nước Mỹ "cấm quản lý khoa học" | Aitken, *Scientific Management in Action* |
| Tái lập quy trình | *Reengineering the Corporation* (Hammer & Champy) ra năm 1993; năm 1996 *WSJ* gọi tái lập quy trình là ngành 4,7 tỷ đô và đăng lời thú nhận của Hammer về việc bỏ quên con người | — | Davenport, Prusak & Wilson (2003) |
| 3M và Six Sigma | nêu một cơ chế cần bằng chứng rộng hơn để kiểm; biên lợi nhuận 17% → 23% là cấp toàn công ty | 3M là "thí nghiệm tự nhiên", ví dụ cô lập được tác động của Six Sigma (cùng giai đoạn: đổi CEO, cắt 8.000 người, hạ chi tiêu vốn); "nâng biên lợi nhuận ở xưởng" | Hindo (2007) |
| Art Fry | 5.000 tới 6.000 ý tưởng thô mới ra một việc kinh doanh thành công, là lời của Fry, gắn tên ông | quy luật chung | Hindo (2007) |
| Khảo sát Besner & Hobbs | trang tổng quan viết "hơn 750"; bài Gantt viết "750" (dẫn qua Geraldi & Lechter); số gốc là 753 | sửa một bài về 753 mà bỏ bài kia | Besner & Hobbs (2008) |
| Phạm vi trang tổng quan | bằng chứng chỉ phủ Taylorism, tái lập quy trình, Six Sigma và TQM | khái quát cho cả 30 công cụ | Chính trang tổng quan |
| Phạm vi bài PDCA | toàn bộ bằng chứng thực nghiệm đến từ y tế; tóm tắt và phần kết phải mang giới hạn đó | nói chung về PDCA ở mọi ngành | Chính bài PDCA |
| Lịch sử WBS | theo Haugan: cụm từ đã thông dụng từ khoảng năm 1961; tài liệu hướng dẫn thiết kế hệ thống PERT/COST do Bộ Quốc phòng Mỹ soạn cùng NASA và giới công nghiệp, tháng 6/1962, mô tả WBS khá đầy đủ; tháng 10/1962 NASA nhấn mạnh dựng cây từ trên xuống; chỉ thị 5010.20 (31/7/1968) và MIL-STD-881 (1/11/1968) chuẩn hoá công cụ | "Bộ Quốc phòng và NASA đặt ra WBS năm 1962"; "định nghĩa chính thức đầu tiên năm 1962" (cách nói của Wikipedia; Haugan không nói vậy) | Haugan (2008), chương 1 |
| Lịch sử CPM | cuối năm 1956, nhóm kiểm soát kỹ thuật (Integrated Engineering Control Group) của DuPont khảo sát việc dùng máy tính lập kế hoạch công trình; Remington Rand UNIVAC cử Kelley, Walker đại diện DuPont; Dự án A (khu nhà máy hoá chất 10 triệu đô la) bắt đầu cuối năm 1957, thử nghiệm Louisville xong tháng 3/1959; công bố ở *Proceedings of the Eastern Joint Computer Conference* 1959 | "DuPont phát minh CPM năm 1957" như mốc chốt; Louisville "giảm từ 125 xuống 78 giờ" (93 giờ là đã đạt, 78 giờ là dự kiến) | Kelley & Walker (1959) |
| Phạm vi bằng chứng bài CPM | trong phạm vi tìm kiếm của bài, chưa tìm thấy nghiên cứu so kết quả dự án có và không có phân tích đường găng; bằng chứng gồm báo cáo của chính người tạo ra công cụ (không đối chứng), một nghiên cứu trên lịch xây dựng thật về đường lan của chậm trễ, một khảo sát cảm nhận bốn nước, và đánh giá của kiểm toán | CPM "làm dự án nhanh hơn" như kết quả đã đo | Chính bài CPM |
| Lịch sử EVM | trong quy định quản lý tài chính năm 1967, Bộ Quốc phòng Mỹ ban hành 35 tiêu chí C/SCSC, lõi là khái niệm giá trị thu được, áp cho phần lớn các chương trình mua sắm vũ khí lớn; tháng 8/1996 các hiệp hội công nghiệp ban hành bộ hướng dẫn hệ thống EVM 32 tiêu chí, Bộ Quốc phòng công nhận tháng 12/1996 (GAO 1997); năm 1998 ANSI và EIA cùng ban hành tiêu chuẩn quốc gia, bản gần nhất EIA-748-D sửa tháng 1/2019; OMB buộc dùng cho mọi dự án đầu tư lớn từ năm 2006 (GAO 2020) | "một người phát minh EVM"; "Bộ Quốc phòng phát minh EVM năm 1967"; tiêu chuẩn 1998 "dựng từ bộ 1996" (GAO 2020 không nói vậy) | GAO/NSIAD-97-108; GAO-20-195G |
| Chương trình A-12 | A-12 Avenger II, máy bay tấn công tàng hình của Hải quân Mỹ; hợp đồng bị chấm dứt vì lỗi nhà thầu ngày 7/1/1991, khi chi phí cuối dự báo vượt giá hợp đồng 1 tỷ đô la và trễ ít nhất một năm; ở mốc 48% khối lượng CPI 0,76, TCPI theo ngân sách 1,22 (nguồn viết "gần gấp đôi", tỷ số thật khoảng 1,6); dự báo độc lập của chính phủ cao hơn của nhà thầu tới 1 tỷ đô la; Beach phê phán dùng EAC theo CPI luỹ kế làm trần thay vì sàn; sau A-12, OUSD(A) buộc giải trình mọi EAC thấp hơn mức tính theo CPI luỹ kế (Christensen & Heise 1993); điều tra hành chính năm 1990 cho Bộ trưởng Hải quân (Chester Paul Beach Jr.): báo cáo hiệu suất chi phí của nhà thầu đã cho thấy rõ vấn đề; một lần rà soát giám sát dự báo vượt trần khoảng 1 tỷ đô la; nhà thầu và người quản lý chương trình dựa vào kế hoạch phục hồi quá lạc quan, thiếu khách quan, gạt đi các nhà phân tích tài chính (GAO 1997, tóm tắt). Theo báo cáo Beach (28/11/1990, đọc toàn văn bản chép lại): hợp đồng giá cố định có thưởng ký 13/1/1988 với liên danh McDonnell Douglas và General Dynamics, chi phí mục tiêu 3,981 tỷ, giá trần 4,777 tỷ; nhà thầu chịu sức ép giữ dòng tiền vì tiền tạm ứng theo tiến độ bị cắt khi có ước tính vượt chi; chuyên viên phân tích chi phí của NAVAIR chỉ ghi dự báo theo CPI luỹ kế (con số thấp nhất) theo thông lệ văn phòng, chú thích tháng 7/1989 rằng "CPI có trọng số" cho vượt trần khoảng 200 triệu; người quản lý chương trình dùng con số ấy làm trần và hạ thêm trong DAES tháng 11/1989 và 2/1990; phó giám đốc quản lý chi phí OUSD(A) ngày 27/3/1990 kết luận vượt trần khoảng 1 tỷ, báo cho người quản lý ngày 29/3, không có trong slide ngày 24/4; dự báo cân bằng CPI với SPI cao hơn nhưng sát kết cục nhất. Câu "hơn 400 chương trình từ năm 1977", CPI luỹ kế "không có ngoại lệ" nào cải thiện đáng kể trong khoảng 15% tới 85% (bản Christensen & Heise ghi "15% and 18%", lỗi gõ) | EVM "thất bại" ở A-12; giá trị hợp đồng (chưa kiểm); tin số liệu sớm thì "cứu được" chương trình; "gần gấp đôi" cho TCPI 1,22 so với CPI 0,76; người quản lý chương trình "muốn giữ chương trình" như động cơ (Beach không nói vậy; GAO 1997 tóm tắt là thiếu khách quan) | Beach (1990); GAO/NSIAD-97-108; Christensen & Heise (1993) |
| Phạm vi bằng chứng bài EVM | trong phạm vi tìm kiếm của bài, chưa tìm thấy nghiên cứu so kết cục dự án có và không có EVM; GAO viết lợi ích khó đo thành con số và chỉ dẫn ý kiến chuyên gia rằng lợi tức đầu tư hợp lý. Bằng chứng của bài là về độ ổn định của chỉ số (giá trị cảnh báo sớm): hợp đồng quốc phòng Mỹ chưa dựng lại đường cơ sở, và 26 dự án ngoài quốc phòng | EVM "làm giảm vượt chi" như kết quả đã đo; khái quát kết quả quốc phòng ra mọi dự án | Chính bài EVM |
| Phạm vi bằng chứng bài WBS | trong phạm vi tìm kiếm của bài, chưa tìm thấy nghiên cứu so kết quả dự án có và không có WBS; bằng chứng gồm một khảo sát tự báo cáo, các thí nghiệm về phân rã khi ước lượng, và đánh giá của kiểm toán | WBS "làm giảm vượt chi" như kết quả đã đo | Chính bài WBS |
| Nguồn gốc SMART | chữ SMART cho mục tiêu xuất hiện trong bài hai trang của George T. Doran, *Management Review* số tháng 11/1981, tr. 35-36; Doran khi đó là chủ tịch Management Assistance Programs (Coeur d'Alene, Idaho), trước là giám đốc kế hoạch của Washington Water Power Company; bài không dẫn nghiên cứu nào và không trình bày phép thử nào cho năm tiêu chí (một lời khuyên thực hành); viết "trong phạm vi tìm kiếm của bài, văn bản sớm nhất" | "Doran phát minh SMART" như sự kiện đã chốt; SMART "không sinh ra từ nghiên cứu" (chưa kiểm được nguồn gốc tư tưởng); nối SMART với Drucker hay quản trị theo mục tiêu (chưa kiểm); số tập, số kỳ của *Management Review* (chưa kiểm từ bản quét) | Doran (1981) |
| Phạm vi bằng chứng bài SMART | trong phạm vi tìm kiếm của bài, chưa tìm thấy nghiên cứu so kết quả của tổ chức có và không có SMART; các thí nghiệm gọi đích danh SMART tập trung ở vận động thể chất (bài đi bộ sáu phút, mẫu dưới 80 người) cộng một thử nghiệm có SMART trong gói can thiệp; bằng chứng mạnh hơn là của lý thuyết đặt mục tiêu (mục tiêu cụ thể **và khó**), không phải của SMART | SMART "làm tăng thành tích" như kết quả đã đo; gán hệ số ảnh hưởng của Locke và Latham cho SMART | Chính bài SMART |
| Nguồn gốc OKR | hướng dẫn của Google truy công cụ về *High Output Management* của Andy Grove (hai câu hỏi: đi tới đâu, canh nhịp thế nào); trang What Matters của Doerr gọi Grove là cha đẻ của OKR và đặt nó nối tiếp MBO của Drucker trong thập niên 1950; Doerr giới thiệu OKR cho hai nhà sáng lập Google năm 1999 theo trang của Doerr, "đầu năm 2000" theo hướng dẫn của Google, nêu cả hai; ở Intel năm 1980 người trong cuộc gọi hệ thống là quy trình MBO | "Grove phát minh OKR năm…"; một mốc duy nhất cho Google; năm Doerr vào Intel (chưa kiểm) | Google re:Work; What Matters; CHM (2014) |
| Operation Crush | chiến dịch của Intel cuối 1979 tới hết 1980 cho bộ vi xử lý 8086, đứng thứ ba sau 68000 của Motorola và Z8000 của Zilog; khởi đầu từ telex của Don Buckhout (New York); Bill Davidow chạy chương trình. Đích 1.000 rồi thành 2.000 lượt được chọn vào thiết kế; chỉ tiêu khoảng một lượt mỗi tháng mỗi người bán, gắn chuyến đi Tahiti nếu cả khu vực đạt; khoảng 98% đội bán hàng đi (lời Katz); kết quả "hơn 2.300" (ban chỉ đạo, 2013), "gần 2.500" kể cả IBM PC (trang Intel); doanh thu về chậm tới khi máy tương thích IBM PC ra khoảng 1983-1984; House không biết có liên hệ trực tiếp nào giữa Crush và lượt IBM PC; 2 triệu đô la quảng cáo. Bài OKR đọc chi tiết Tahiti như phản ví dụ cho lời khuyên tách điểm khỏi thưởng: một chỉ tiêu bán hàng được trả thưởng (không phải điểm vươn xa) đã đi cùng một chiến dịch người trong cuộc coi là thành công, nên tách khỏi thưởng không phải điều kiện bắt buộc của mọi hệ thống mục tiêu chạy được | "Crush đem lại IBM PC"; "chỉ tiêu gắn thưởng đi cùng kết quả kinh doanh quan trọng" (doanh thu về sau nhiều năm, phần đóng góp của chỉ tiêu không tách được); 2.500 như con số duy nhất; quy thành công của Crush cho riêng cách đặt mục tiêu (chiến dịch gồm hội thảo, danh mục sản phẩm tương lai, quảng cáo); con số chi phí chuyến Tahiti (lời Katz không rõ nghĩa: "another close to $2 million") | CHM (2014); Intel; What Matters |
| Phạm vi bằng chứng bài OKR | trong phạm vi tìm kiếm của bài, chưa tìm thấy nghiên cứu so kết quả của tổ chức có và không có OKR; các nghiên cứu gọi đích danh OKR là nghiên cứu tình huống dựa trên phỏng vấn và khảo sát tự báo cáo, trong từng tổ chức; bằng chứng về mục tiêu vươn xa đến từ mô phỏng, không gọi tên OKR | OKR "làm tăng hiệu quả" như kết quả đã đo; dùng thí nghiệm mô phỏng như phép thử OKR | Chính bài OKR |

---

## 4. Cách gọi các nguồn nghiên cứu

Mỗi nguồn được mô tả cùng một cách ở mọi bài. Cột **Không viết** ghi cách mô tả sai đã gặp. Số liệu chi tiết nằm trong bài; khi dẫn lại thì đọc bài và nguồn.

### Trang tổng quan

| Nguồn | Gọi là | Không viết |
|---|---|---|
| Staw & Epstein (2000), *ASQ* 45(3) | nghiên cứu quan sát: công ty gắn với TQM, làm việc nhóm, trao quyền **không** có kết quả kinh doanh tốt hơn, nhưng được ngưỡng mộ hơn và CEO được trả cao hơn | "không tìm thấy ảnh hưởng đáng kể" (giữ sát nguyên văn); phần thưởng "rơi vào" danh tiếng và túi CEO như cơ chế; thêm chữ "ngắn hạn" |
| Benner & Tushman (2002), *ASQ* 47(4) | 20 năm sáng chế và chứng nhận ISO 9000 ở ngành sơn và nhiếp ảnh; quản lý theo quy trình làm tăng sáng chế dựa trên tri thức đã có | — |
| Hindo (2007), *BusinessWeek* | bài báo về 3M dưới thời McNerney | xem mục 3M ở phần 3 |

### 5S

| Nguồn | Gọi là | Không viết |
|---|---|---|
| Kanabar và cộng sự (2024), *Cureus* | tổng quan hệ thống về 5S trong y tế; nguồn tự lệch (tóm tắt ghi sáu nghiên cứu, bảng 1 liệt kê bảy); không gộp số liệu được | "sáu nghiên cứu ở sáu quốc gia" như con số chắc; dùng nó như bản kiểm kê cả lĩnh vực; tổng quan nói "bước duy trì là bước khó giữ nhất" (nó nói khó *đánh giá* độ bền lâu dài); "cải thiện lớn nhất ở hai bước đầu" là kết quả chung (chỉ một nghiên cứu) |
| Doğan và cộng sự (2014), *Mikrobiyol Bul* | phòng xét nghiệm lâm sàng ở Izmir, bối cảnh phần an toàn của ISO 15189; dẫn thẳng bài gốc | tỷ lệ 52,3% (nguồn tự lệch; chỉ dẫn số người 63/114); *non-conformity score* là "số điểm không đạt"; điểm "do bên thứ ba kiểm" |
| Ishijima, Eliakimu & Mshana (2016), *TQM J* | thử nghiệm ngẫu nhiên theo cụm, 16 bệnh viện bắc Tanzania, đo thời gian chờ; số liệu từ tóm tắt | thử nghiệm đo "thời gian đi tìm" hay "cái giá của việc đi tìm" |
| Kamiya và cộng sự (2017), *IJQHC* | khảo sát người bệnh ở 16 bệnh viện huyện Tanzania, cùng nhóm với Ishijima | Ishijima và Kamiya là "hai phép kiểm độc lập" (viết "nhất quán với nhau") |
| Kanamori và cộng sự (2016), *Glob Health Action* | nghiên cứu có đối chứng **không ngẫu nhiên** ở Senegal; phần tăng hơn đối chứng là 0,13 | ghép 0,19 (mức tăng bên trong nhóm 5S) với mức nền 3,98; gọi là thử nghiệm ngẫu nhiên; dùng kết quả giao tiếp làm bằng chứng cho giả thuyết "5S xây năng lực nhìn ra sai lệch" |

### PDCA

| Nguồn | Gọi là | Không viết |
|---|---|---|
| Moen & Norman (2010), *Quality Progress* | bản dựng lại lịch sử PDCA / PDSA | — |
| Taylor và cộng sự (2014), *BMJ Qual Saf* | tổng quan về **cách áp dụng**, không phải về hiệu quả; hai chỗ hở lớn là dự đoán (9%) và thử nhỏ trước khi mở rộng | khoảng hở "rộng nhất" là bước dự đoán; chênh 13,6% so với 44% giữa nhóm gọi PDCA và PDSA là nhân quả, hay cái tên quyết định cách hiểu bước ba (cách đọc ngược lại hợp lý ngang bằng; phải nêu cả hai); chênh lệch này bác được giả thuyết "có làm mà không ghi" |
| McNicholas và cộng sự (2019), *BMJ Qual Saf* | 421 vòng PDSA của 39 đội; 2% đạt cả sáu tiêu chí | hai tỷ lệ 12% (49/421) và 29% (121/421) (bản gốc không rõ, chỏi với con số 2%) |
| Knudsen và cộng sự (2019), *BMC Health Serv Res* | 120 dự án PDSA đăng báo; cải thiện tự báo cáo | 27% là tỷ lệ dự án có dự đoán (mục tiêu định lượng không phải dự đoán); Knudsen và Taylor là hai phép kiểm độc lập (tiêu chí của Knudsen dẫn một phần từ Taylor) |
| Benning và cộng sự (2011), *BMJ*, Safer Patients Initiative | đánh giá có đối chứng một gói can thiệp nhiều thành phần; cả hai nhóm tốt lên gần như nhau, khớp xu thế chung trong NHS | nghiên cứu "chứng minh PDCA vô dụng"; so "với chỗ không làm gì"; nhóm đối chứng tốt lên vì chạy sáng kiến riêng |

### A3

| Nguồn | Gọi là | Không viết |
|---|---|---|
| Bassuk & Washington (2013), *PLoS One* | một đơn vị (khu nuôi động vật thí nghiệm, Seattle Children's), không nhóm đối chứng, người chạy A3 cũng là người viết bài; mô tả một hệ thống dạy và kèm | bằng chứng nhân quả cho cơ chế kèm cặp (nghiên cứu không so nhóm có kèm với nhóm không kèm) |
| Smalley, *A3* (Art of Lean) và LEI/Yoshino | hai nguồn lịch sử của người trong phong trào lean; Art of Lean dẫn thẳng LEI/Yoshino | "kiểm chéo được với nhau" |
| Simons và cộng sự (2014), *IJQHC* | nghiên cứu về đúng A3: giảm số lần mở cửa ở **một** phòng mổ chỉnh hình; theo dõi 12 tháng; "mức giảm 78% theo báo cáo của nhóm tác giả" | 24 lần/giờ là mức nền của phòng mổ chỉnh hình (đó là trung bình 26 chuyên khoa); tự đổi 78% thành 83%; nghiên cứu đo nhiễm trùng vết mổ hay "số lần mở cửa, thứ làm tăng nguy cơ nhiễm trùng" như quan hệ đã đo |
| Moraros và cộng sự (2016), *IJQHC* | tổng quan 22 bài về **Lean trong y tế**, không phải A3; khối Saskatchewan phân tích tách riêng; khảo sát điều dưỡng do công đoàn đặt hàng; con số 1.511 đô luôn kèm điều kiện *"If the numbers reported are accurate and true"* và cấu phần | bằng chứng về A3; 15 chỉ báo chỉ đo "mức gắn kết"; đặc tả quy mô kiểu "khi được nhân bản ở quy mô hệ thống"; dẫn 1.511 đô trần |
| Ghosh & Sobek (2015), *J Health Organ Manag* | A3 chín bước ở một bệnh viện; số liệu từ bản thảo trên trang Montana State, bản thảo tự lệch (17-60% trong chữ, có ca 0 trong bảng); công thức đúng: "dấu hiệu tuân thủ không đều" | làm đủ bước "gây ra" cải thiện cao hơn; "có ý nghĩa thống kê"; 8/18 là bằng chứng thiếu người kèm; bước nào bị bỏ hay "bước tốn công nhất" |
| Myers và cộng sự (2022), *BMJ Qual Saf* | nghiên cứu về **độ tin cậy của việc chấm** tờ A3 | tờ được chấm cao thì cải thiện nhiều hơn |

### Sơ đồ xương cá

| Nguồn | Gọi là | Không viết |
|---|---|---|
| McDermott và cộng sự (2023); Antony và cộng sự (2021), *TQM J* | hai khảo sát tự báo cáo về công cụ được dùng nhiều nhất; con số niềm tin nói về cả bộ bảy công cụ | con số niềm tin là về riêng sơ đồ xương cá; bằng chứng hiệu quả |
| Seong và cộng sự (2025), *Jpn J Nurs Sci* | ICU Hàn Quốc, sơ đồ bốn nhánh biến thành bảng hỏi cho 58 điều dưỡng; chưa thử đối sách | các tỷ lệ đứng đầu nhánh là "% người trả lời"; điểm nhánh là mức đóng góp |
| Kumah & Forkuo-Minka (2023), *Glob J Qual Saf Healthc* | Nyaho Medical Centre, Ghana: 11 ca kim tiêm đâm năm 2018, **3** ca năm 2021 theo bài gốc; bảy thay đổi chạy cùng lúc | "2 ca" năm 2021 (con số của bài tổng quan 2024 cùng tác giả); bài gốc ghép từng thay đổi với từng nhánh (việc ghép là cách đọc của series) |
| Gartlehner và cộng sự (2017), *BMC Med Res Methodol* | dùng hình xương cá để **trình bày kết quả tổng quan hệ thống**; cho thấy hình xương cá mã hoá được bằng chứng bằng kiểu nét | bằng chứng về sức phân tích nguyên nhân của công cụ |

### Phân tích Pareto

| Nguồn | Gọi là | Không viết |
|---|---|---|
| Fenton & Ohlsson (2000), *IEEE TSE* | Ericsson Telecom AB; phân bố kiểu 20-60; kết quả quan trọng nhất là **đảo chiều** giữa lỗi trước và sau phát hành; bài đọc qua tóm tắt | "20% module chứa 80% lỗi" |
| Andersson & Runeson (2007); Galinac Grbac, Runeson & Huljenić (2013), *IEEE TSE* | hai bản lặp lại: phân bố không đều, mức dễ lỗi giữ nguyên qua các giai đoạn, không lặp lại kết quả đảo chiều | — |
| Palo, Dulaney Bumpers & Mohsenian (2021), *Pediatr Qual Saf* | Bệnh viện Nhi Seattle, khoa tiệt khuẩn; ba cột đầu là lỗi **không ảnh hưởng tới vô khuẩn**; rách giấy gói là loại lỗi ảnh hưởng tới vô khuẩn **xảy ra nhiều nhất**; bài báo gọi 56%, tự tính được khoảng 43,4%, nêu cả hai | "lỗi không vô trùng" (đọc thành nghĩa ngược); rách giấy gói là lỗi "nặng nhất"; "giảm 56%" trơn |

### FMEA

| Nguồn | Gọi là | Không viết |
|---|---|---|
| Shebl, Franklin & Barber (2009), *J Patient Saf* | hai nhóm làm FMEA độc lập cho cùng quy trình; mỗi nhóm 50 dạng hỏng, 17 trùng ("17 (17%)", trên tổng 100); đọc qua tóm tắt | "34%" hay "17% của mỗi nhóm"; điểm O khác nhau |
| Shebl, Franklin & Barber (2012), *BMC Health Serv Res* | bốn phép kiểm hợp lệ; RPN không hợp lệ vì nhân thang thứ bậc; điểm S cao hơn sổ sự cố vì FMEA chấm hậu quả tiềm năng; tác giả vẫn gọi FMEA hữu ích để hiểu quy trình | — |
| Ashley & Armitage (2010), *J Patient Saf* | hai cách chấm (trung bình cá nhân và đồng thuận) cho kết quả khác nhau; đọc qua tóm tắt | cách nào đúng hơn |
| Färlin-Helin, Suominen & Tuominen (2025), *J Patient Saf* | tổng quan phạm vi 18 nghiên cứu; 10 nghiên cứu có đánh giá tác động nhưng thước đo chưa đủ để ước lượng chắc | tổng quan chứng minh FMEA giảm tổn hại; bằng chứng "mới dừng ở" việc sinh danh sách |
| Ford và cộng sự (2014, 2009) | FMEA rút gọn ở một trung tâm xạ trị (2014); FMEA đầy đủ (2009) | bản 2014 rút gọn từ bản 2009; hai bản ở cùng một trung tâm |
| IHI (2017), ví dụ mẫu cấp phát thuốc | số chấm minh hoạ của tài liệu hướng dẫn | dữ liệu bệnh viện |

### SOP

| Nguồn | Gọi là | Không viết |
|---|---|---|
| FAA AC 120-71B (2017) | thông tư **không bắt buộc**, một cách chấp nhận được; lý do từng bước để ở tài liệu đào tạo | số liệu NTSB 1994 về lỗi quy trình (chưa kiểm) |
| CSB (2007), BP Texas City | báo cáo điều tra; dùng số ở mục 3.1 (chỉ 1/19 lần khởi động giữ cả mức lẫn áp suất trong giới hạn) | số đếm từ bảng Phụ lục I; quy trình là nguyên nhân duy nhất (phải nêu đo mức sai, báo động hỏng, ống xả không nối đuốc đốt, nhà tạm quá gần, ca 12 giờ) |
| Ljungqvist và cộng sự (2024), *Acta Anaesthesiol Scand* | trực thăng cấp cứu Phần Lan, chia theo thời điểm trước, trong, sau triển khai; "xu hướng" giảm tử vong 1 ngày; đọc qua tóm tắt | "giảm" tử vong; "tử vong 30 ngày không khác" (viết "không phát hiện khác biệt có ý nghĩa thống kê"); nghiên cứu có, hay không có, nhóm căn cứ đối chứng đồng thời |
| Kortgen, Niederprüm & Bauer (2006), *Crit Care Med* | SOP sốc nhiễm khuẩn so với đối chứng lịch sử; SOP chuẩn hoá cả rhAPC, thành phần về sau bị rút (EMA 2011) | nước của bệnh viện; vì rhAPC mà kết quả Kortgen sai |
| Key và cộng sự (FAA, 2022), DOT/FAA/AM-22/01 | tổng quan về không làm theo quy trình trong bảo dưỡng tàu bay; mọi con số là dẫn lại qua tổng quan | trình bày số liệu như đo trực tiếp |
| EPA QA/G-6 (2007) | hướng dẫn soạn SOP; rà soát định kỳ "ví dụ mỗi 1-2 năm" | EPA "bắt buộc" rà soát 1-2 năm |
| Hale & Borys (2013), *Safety Science* | nguồn phụ cho ý hai cách nhìn từ trên xuống / từ dưới lên; đọc qua tóm tắt đăng lại | nguồn số liệu về khoảng cách giữa giấy và việc (số liệu ấy lấy từ FAA 2022) |

### Lưu đồ quy trình

| Nguồn | Gọi là | Không viết |
|---|---|---|
| Antonacci và cộng sự (2021), *BMC Health Serv Res* | tổng quan hệ thống 105 nghiên cứu về lưu đồ quy trình trong y tế; **không đo hiệu quả**; các tỷ lệ là tỷ lệ nghiên cứu ghi lại việc đã làm. Ở bài SIPOC chỉ dùng như phép đếm ở công cụ cùng họ | "phần lớn các lần dùng bỏ qua…"; "dừng ở bản vẽ" (viết "chỉ ra chỗ cần cải tiến mà không báo cáo đã làm gì tiếp"); "cuộc trò chuyện chỉ xảy ra khi người làm cùng vẽ"; bằng chứng về SIPOC |
| Holland & Rose (1981), ERIC ED213027 | thí nghiệm 54 người; lưu đồ giúp ở điều kiện khó sau luyện tập, nhưng lần gặp đầu đảo ngược lợi thế | mức chính xác thấp nhất của lưu đồ ở lần đầu (bản quét lỗi đúng con số đó) |
| Kammann (1975), *Human Factors* | chỉ đọc tóm tắt | chi tiết "thí nghiệm quay số điện thoại ở Bell Labs" |
| Gill (2014), *BMJ Quality Improvement Reports* | West Herts NHS Trust, rút thời gian tiêu sợi huyết; không đối chứng, can thiệp nhiều thành phần, không tách được phần của bản vẽ | bản vẽ "phát hiện" quãng CT tới tiêm (số liệu nền đã khoanh ra quãng ấy); câu *"within the London performance standards"* của tóm tắt |

### Sơ đồ SIPOC

| Nguồn | Gọi là | Không viết |
|---|---|---|
| de Barros và cộng sự (2021), *IJERPH* | tổng quan tích hợp 33 bài về công cụ lean trong y tế; mô tả, không đánh giá hiệu quả từng công cụ; dẫn số bài, không dẫn phần trăm (phần trăm của bài lệch với số đếm) | sự kết hợp DMAIC và SIPOC "đem lại" kết quả như quan hệ nhân quả |
| DelliFraine, Langabeer & Nembhard (2010), *Qual Manag Health Care* | bằng chứng ở tầng phương pháp về Six Sigma và lean trong y tế, mốc trước 2010; đọc qua tóm tắt | bằng chứng về SIPOC |
| Baughn và cộng sự (2020), *J Clin Sleep Med* | Mayo Clinic, SIPOC-R đóng khung dự án; nhiều thay đổi cùng lúc, khó tách; nhóm không theo dõi mức hài lòng của nhân viên | SIPOC "làm tăng" điểm; tính video vào mức 71% |
| ASQ, *SIPOC+CM Diagram* | trích Bialek, Duffy & Moran (2009) | — |
| Wikipedia, mục SIPOC | đối tượng bàn tới, không phải nguồn | dẫn câu "SIPOC có từ TQM cuối thập niên 1980" như sự kiện |

### Sơ đồ chuỗi giá trị

| Nguồn | Gọi là | Không viết |
|---|---|---|
| Rother & Shook, *Learning to See* (LEI) | sách bài tập; series đọc phần mở đầu và Phần I do LEI đăng công khai | trình bày như đã đọc toàn văn; số liệu ca Acme Stamping (chưa đọc, chỉ thấy qua nguồn thứ cấp) |
| Rother, *Avoiding Common Pitfalls of Value-Stream Mapping* (LEI) | bài viết của đồng tác giả; nguồn cho việc ước lead time từ lượng tồn đếm được | — |
| Nowak, Pfaff & Karbach (2017), *Systematic Reviews* 6:170 | tổng quan có hệ thống 22 nghiên cứu dùng VSM như phương pháp tự đứng ở cơ sở chăm sóc; tất cả trước-sau không đối chứng, mức bằng chứng IV; 11 nghiên cứu có kiểm định được dùng để đánh giá | bằng chứng nhân quả; "VSM giảm thời gian nằm viện" trơn (viết "bảy trên chín nghiên cứu đo … ghi nhận mức giảm có ý nghĩa thống kê") |
| Marin-Garcia, Vidal-Carreras & Garcia-Sabater (2021), *IJERPH* 18(3):951 | tổng quan phạm vi 80 bài VSM trong dịch vụ y tế, 2015-2019, chỉ tìm qua Web of Science; **không đo hiệu quả**; đếm cái bài báo trình bày: 20 bài không trình bày bản đồ, 40 trên 60 không có bản mục tiêu, 41 bài thiếu ký hiệu dòng thông tin | "40 nhóm không vẽ bản mục tiêu" (viết "không trình bày"); lãng phí "bị chuyển" sang đơn vị khác như phát hiện (đó là giả thuyết tác giả nêu từ công trình trước); câu kết "seems to lead to major improvements" như bằng chứng hiệu quả |
| Serrano, Ochoa & De Castro (2008), *IJPR* 46(16) | nghiên cứu nhiều ca ở sáu công ty công nghiệp, thiết kế lại dây chuyền rời rạc; series chỉ đọc tóm tắt (qua OpenAlex), toàn văn sau tường phí; tóm tắt không nêu con số cải thiện | bằng chứng định lượng về hiệu quả; tổng quan về sản xuất |
| Hitti và cộng sự (2017), *BMC Health Serv Res* 17:625 | AUBMC, Beirut; trước-sau, một trung tâm; VSM của **quy trình chuyển bệnh nhân** (chú thích hình 2), lộ ra dòng thông tin phụ thuộc thư ký; thời gian chuyển 22,89 → 9,87 phút; báo cáo sơ bộ 31,16 → 42,63 phút, tác giả cho là "nhiều khả năng" do thay đổi lãnh đạo khoa chẩn đoán hình ảnh; chỉ số gộp từ lúc yêu cầu được xử lý tới báo cáo sơ bộ 54,04 → 52,50 phút (p = 0,02; hiệu chỉnh −2,31 phút). Chỉ số gộp có trong tóm tắt (*"from order processing to preliminary report"*), phần phương pháp không định nghĩa, nhưng khớp tổng hai đoạn; khi dẫn phải nói cả hai điều đó | thời gian bị "dồn sang" khâu đọc phim như kết luận của bài báo; mức giảm thời gian nằm khoa thuộc riêng can thiệp (khoa cùng lúc đổi quy trình vào cửa tới gặp bác sĩ); kể 13 phút ở khâu chuyển mà bỏ chỉ số gộp |
| Little (2011), *Operations Research* 59(3) | bài tổng kết của chính Little; L = λW liên hệ ba giá trị **trung bình**, đúng trong điều kiện rất rộng, không phụ thuộc thứ tự phục vụ | định luật "đòi hàng được nhả đều"; dùng một lần đếm như lượng tồn trung bình; so kết quả của phép chia (trung bình) với trung vị |

### Biểu đồ Gantt

| Nguồn | Gọi là | Không viết |
|---|---|---|
| Weaver (2012), *PM World Journal* | bản dựng lại lịch sử biểu đồ thanh | chép "Bavaria" cho cầu Langwies; "sau chiến tranh" cho việc Crozier bị thay |
| Geraldi & Lechter (2012) | phân tích logic quản trị của Gantt; lập luận "builds on the logic of linear effort behaviour" dẫn đúng như vậy; quan hệ dùng sai công cụ và thất bại dự án là *"fit hypothesis"* | hạ lập luận thành "một cách đọc sai có thể xảy ra"; sáu nguyên tắc là ràng buộc kỹ thuật của mọi biểu đồ Gantt; phân tích "chứng minh" điều gì |
| MacNeice (1951) | thí nghiệm 300 sinh viên quản trị, dẫn lại hai lần (qua Wilson 2003 rồi Geraldi & Lechter) | — |
| Gantt (1919), *Organizing for Work* | sách của người trong cuộc, không có số liệu sản lượng; chỉ dùng cho phần mô tả cách dùng | — |

### Cấu trúc phân rã công việc (WBS)

| Nguồn | Gọi là | Không viết |
|---|---|---|
| NASA (2018), *WBS Handbook*, SP-2016-3404/REV1; DOE (2012), *WBS Handbook*; GAO-20-195G, ch. 7 | tài liệu hướng dẫn của các cơ quan dùng WBS; nguồn cho định nghĩa, luật 100% và các lỗi hay gặp. Cách nhìn của NASA về chia theo giai đoạn là lựa chọn của NASA | dẫn như bằng chứng hiệu quả; dẫn NASA như chuẩn chung cho mọi cách chia |
| Brotherton, Fried & Norman (2008), PMI Global Congress North America | bài hội thảo của PMI, nguồn cho phát biểu luật 100% (dẫn Haugan 2002, tr. 17) | — |
| PMI (2013), *PMBOK Guide*, ấn bản 5, phần 5.4, hình 5-12 | chấp nhận WBS chia theo giai đoạn ở tầng hai, sản phẩm ở tầng ba; series đối chiếu qua bản trích, chưa đọc sách | dẫn số trang (chưa kiểm) |
| Haugan (2008), *Work Breakdown Structures for Projects, Programs, and Enterprises*, Management Concepts | nguồn lịch sử; bài đọc mục lịch sử chương 1 qua bản điện tử | — |
| Zwikael & Globerson (2006), *IJPR* 44(17) | khảo sát tự báo cáo ở khoảng 50 tổ chức tại Israel, 282 người trả lời, 202 bảng được phân tích; sơ đồ WBS là sản phẩm của quá trình "xác định phạm vi", xếp 12, 8, 11, 13 trên 16 về tác động lên bốn thước đo, không có ý nghĩa thống kê; mức dùng 3,6/5, thứ chín; "xác định hoạt động" đứng đầu, và theo hai tác giả cần có WBS trước; R² khoảng 0,15 tới 0,25. Số liệu từ bản thảo đã nộp | "WBS không ảnh hưởng tới thành công dự án"; khảo sát đo chất lượng cây; quan hệ nhân quả |
| Kruger & Evans (2004), *JESP* 40(5) | năm thí nghiệm, người tham gia tự liệt kê các phần trước khi ước lượng; ước lượng dài hơn, ở thí nghiệm 3-4 ít lệch hơn; thí nghiệm 5: tuỳ độ phức tạp. Đọc qua tóm tắt và mô tả của Hadjichristidis và cộng sự | số liệu cụ thể (chưa đọc toàn văn) |
| Hadjichristidis, Summers & Thomas (2014), *JESP* 51 | người làm thí nghiệm gọi tên phần; nghiên cứu 1: 152 sinh viên Trento, định dạng một mục từ điển, 8,48 phút (không nhắc) / 6,24 (nhắc phần nhanh) / 12,73 (nhắc phần chậm); số từ bảng 1 bản thảo trước khi in | "phân rã luôn làm ước lượng dài ra" |
| Connolly & Dean (1997), *Management Science* 43(7) | hai thí nghiệm với sinh viên các lớp lập trình nâng cao (*advanced programming students*); gần một nửa kết quả thật nằm ngoài đuôi 1%; phân rã không làm khoảng rộng ra, gợi cận trên và dưới rộng rãi thì có; đọc qua tóm tắt | "sinh viên năm cuối"; phân rã làm ước lượng kém đi |
| GAO-15-225 (2015); GAO-20-195G, ca 9 | tổng điều tra dân số 2020: dự toán sơ bộ khoảng 73 triệu đô cho phương án trả lời qua Internet, không đáng tin cậy, chưa cập nhật từ 2011, không dựng trên WBS có định nghĩa; GAO tháng 4/2018 ghi nhận cải thiện đáng kể. Là đánh giá của kiểm toán về độ đầy đủ của dự toán | thiếu WBS "làm tăng" chi phí; cải thiện năm 2018 là nhờ riêng WBS |

### Phương pháp đường găng (CPM)

| Nguồn | Gọi là | Không viết |
|---|---|---|
| Kelley & Walker (1959), *Proceedings of the Eastern Joint Computer Conference*, tr. 160-173 | bài công bố của chính hai người tạo ra phương pháp; báo cáo không đối chứng. Dự án A: lịch chạy song song, **không dùng để điều hành dự án**; 7 trên 156 đợt giao hàng găng, 3 không có trong danh sách của bộ phận lập lịch thường lệ; khoảng 10% việc găng; rút hai tháng không tốn thêm và hai tháng nữa với 1% chi phí trực tiếp biến đổi là **kết quả tính**. Louisville: dừng máy trung bình 125 → 93 giờ (đã đạt, "chủ yếu nhờ phân tích tốt hơn"), 78 giờ là dự kiến; cùng lúc có đào tạo, thư viện lịch mẫu, dữ liệu mới | Dự án A "rút được bốn tháng" như kết quả đã đạt; Louisville là bằng chứng tách riêng phần của phép tính; con số 10% là quy luật chung |
| GAO-16-89G (2015), *Schedule Assessment Guide* | hướng dẫn của kiểm toán, nguồn cho định nghĩa và các lỗi lập lịch; bản trực tuyến guides.gaoinnovations.gov. Các ca: USCIS (ca 12, từ GAO-12-66), NSC 3 của Tuần duyên (ca 14, từ GAO-11-743: 3.920 việc còn lại, mốc chậm 5 ngày, 57 việc dồn vào) | dẫn như bằng chứng hiệu quả |
| GAO-12-66 (2011), USCIS Transformation Program | 18 lịch dự án riêng, không có lịch tổng; hai lịch được đánh giá không có đường găng hợp lệ (thiếu hoặc treo logic ở hơn 60% và 40% số việc còn lại, hai con số lấy từ ca 12 của GAO-16-89G); lịch tổng nộp cuối năm 2015 được GAO ghi nhận cải thiện. Bài đọc trang tóm tắt và phần theo dõi khuyến nghị | thiếu đường găng "làm chương trình chậm" như kết quả đo |
| Olivieri và cộng sự (2019), *J Constr Eng Manag* 145(12), 04019077 | khảo sát cảm nhận ở Brazil, Trung Quốc, Phần Lan, Mỹ, 532 bảng hợp lệ; CPM 71%, theo vị trí 40%, Last Planner 28%; 20% người dùng CPM nêu yêu cầu hợp đồng là lý do chính; 79% phân tích đường găng "thường xuyên hoặc ở mức vừa phải"; phân tích ràng buộc chạy tốt hoặc rất tốt: CPM 46%, Last Planner 65%. Galloway (2006): 63%, dẫn lại qua bài này | bằng chứng về kết cục dự án; 79% "thường xuyên" |
| Vazquez, Pozzana, Kalogridis & Ellinas (2023), *Scientific Reports* 13:509 | 323 lịch Primavera P6 của 77 công trình xây dựng (hơn 10 tỷ đô la, 100 tới 16.000 việc) cộng một mô hình mạng; phần việc trên đường găng nhỏ dần theo kích thước lịch (c/n ~ n^-0,79, "xấp xỉ"); mức lan chậm trễ = tỷ lệ việc chậm quá khoảng dư của chính nó, dưới 1% hoặc tới 15% tuỳ khả năng truyền chậm trễ; không liên hệ có ý nghĩa với chỉ báo dựng từ kích thước đường găng (Pearson −0,1, mức ý nghĩa 0,7); kết luận của nhóm tác giả: vượt một mức phức tạp, vượt hạn chủ yếu đến từ việc ngoài đường găng. Chỉ xây dựng, dữ liệu không công khai | "đường găng vô dụng"; tương quan với "kích thước đường găng" trơn (chỉ báo là p × c); khái quát ra ngoài xây dựng |
| Van Slyke (1963), *Operations Research* 11(5) | mô phỏng Monte Carlo cho mạng PERT, đề xuất chỉ số độ găng; đọc qua tóm tắt | số liệu cụ thể của bài |

### Quản lý giá trị thu được (EVM)

| Nguồn | Gọi là | Không viết |
|---|---|---|
| GAO-20-195G (2020), chương 17-20, bản trực tuyến guides.gaoinnovations.gov/cost-guide | hướng dẫn của kiểm toán; nguồn cho định nghĩa, ví dụ 4 dặm đường ray, cách tính EV, công thức dự báo, TCPI, chi phí dựng hệ thống. Vẫn viết câu "CPI không đổi quá 10% sau mốc 20%" (định nghĩa khoảng tương đối) | dẫn như bằng chứng hiệu quả; dẫn câu 20% của GAO như kết quả đã kiểm |
| GAO/NSIAD-97-108 (1997) | báo cáo của GAO về thay đổi trong quy trình EVM của Bộ Quốc phòng; nguồn lịch sử 1967/1996, tóm tắt ca A-12 (người quản lý hai phía thiếu khách quan) và lý do số liệu phải ra ngoài văn phòng chương trình | — |
| Beach (1990), *A-12 Administrative Inquiry*, ghi nhớ gửi Bộ trưởng Hải quân, 28/11/1990 | đọc toàn văn qua bản chép lại do Christensen soạn cho bài giảng tình huống (ghi chú của bản ấy: không quét, có thể còn lỗi gõ), bản lưu Internet Archive năm 2010 của suu.edu; nguồn chi tiết A-12 và câu về 400 chương trình | trình bày như bản gốc của Hải quân (là bản chép lại) |
| Christensen & Heise (1993), *National Contract Management Journal* 25, 7-15 | đọc toàn văn qua bản lưu Internet Archive của trang suu.edu. 155 hợp đồng của 44 chương trình trong DAES, 6/1971 tới 2/1991, mẫu chọn theo phán đoán; định nghĩa khoảng biến thiên < 0,2; ổn định ở mốc 20%: 134/155 (86%), mốc 50%: 153/155; CPI luỹ kế thường đi xuống (bình phương nhỏ nhất); CPI ba tháng ổn định từ mốc 50% chỉ 6%; độ ổn định "phần lớn vì là chỉ số luỹ kế"; gọi EAC theo CPI luỹ kế là "mức sàn hợp lý"; tự nhận khái quát cho quân chủng, chương trình, loại hợp đồng quốc phòng khác; nguồn chi tiết A-12 | "loại các hợp đồng dựng lại đường cơ sở" (bản gốc không nói vậy); "chưa từng khái quát"; dẫn tỷ lệ CPI sáu tháng (văn bản và bảng lệch nhau: 19% và 29%) |
| Henderson & Zwikael (2008), *CrossTalk* 21(4), 7-13 | 26 dự án kiểm CPI (12 công nghệ cao Israel, 10 xây dựng Anh, 4 công nghệ thông tin Úc), 37 dự án kiểm SPI(t), chỉ nhân công trực tiếp; định nghĩa ±0,10; phép kiểm dấu, mức 0,05; 3/26 ổn định từ mốc 20%; ổn định sớm không đi cùng kết cục tốt hơn. Bị Abba (2008) phản bác (qua Petter và cộng sự). Bài đọc bản của tác giả | "45 dự án" như cỡ mẫu kiểm CPI (45 là số dự án thô trước khi loại, con số Petter và cộng sự dùng); kết luận về quốc phòng chỉ từ mẫu này (phần quốc phòng dựa vào nhìn biểu đồ của báo cáo Popp) |
| Petter, Ritschel & White (2015), *Journal of Public Procurement* 15(3), 341-364 | Viết rằng Christensen & Heise không gọi kết quả là quy tắc và không khái quát ra ngoài dữ liệu (chọi với bản gốc, xem mục 7). 209 hợp đồng ACAT I 1987-2012, loại hợp đồng dựng lại đường cơ sở vượt ngân sách (khoảng 20% số khả dụng); CPI ổn định từ mốc 20%: 83% (khoảng biến thiên), 56% (±0,10), 55% (±10%); 81% ở mốc 55% theo ±0,10; SPI(t) theo định nghĩa khoảng đạt từ 80% ở mốc 75%; kết quả chỉ áp cho ACAT I | khái quát ra ngoài quốc phòng; "44% hợp đồng có CPI cuối lệch hơn 0,10" (định nghĩa đòi ổn định ở mọi mốc sau, nên viết "đạt mức ổn định từ mốc 20%") |
| Lipke (2003), *The Measurable News*, tháng 3, tr. 10-15 | bài đề xuất tiến độ thu được, của bộ phận phần mềm Trung tâm Hậu cần Không quân Oklahoma City; ví dụ dự án dự kiến xong 1/2002, xong 4/2002 | trình bày số kỳ, số trang như đã kiểm từ bản in (lấy từ danh mục của Henderson & Zwikael) |

### Khung mục tiêu SMART

| Nguồn | Gọi là | Không viết |
|---|---|---|
| Doran (1981), *Management Review*, tháng 11/1981, tr. 35-36 | bài báo hai trang, đọc qua bản quét trên decisionskills.com; nguồn cho năm chữ gốc, câu mẫu về hệ thống tồn kho (không ghi ai làm), cảnh báo về ép định lượng, mục tiêu đi cùng kế hoạch hành động | trình bày như một nghiên cứu |
| Locke & Latham (2002), *American Psychologist* 57(9), 705-717 | tổng kết lý thuyết đặt mục tiêu của chính hai tác giả; hơn 100 nhiệm vụ, hơn 40.000 người, ít nhất tám nước; cụ thể và khó so với cố hết sức *d* 0,42-0,80; độ khó *d* 0,52-0,82; nhiệm vụ phức tạp nhất 0,41 so với 0,77 (Wood, Mento & Locke 1987); tính cụ thể tự nó không nhất thiết cho thành tích cao vì mục tiêu cụ thể có thể dễ, nó chủ yếu thu hẹp độ phân tán; phần thân bài không nhắc tới SMART; các nghiên cứu về việc phức tạp dẫn lại qua bài này | kiểm định độc lập (là tổng kết của chính người dựng lý thuyết); gán các hệ số cho SMART |
| Rubin (2002), *The Industrial-Organizational Psychologist* 39(4), 26-27 | bài ngắn trên bản tin SIOP; rà 40 trang web đầu tiên cho "SMART goals", tự nhận không hệ thống; bản phổ biến nhất ở khoảng 10 trang; chữ A có chín cách đọc ngoài *attainable*; trong mọi cách đọc ông gặp, chỉ "cụ thể kèm độ vươn" (*specific with a stretch*) chạm tới độ khó | "khảo sát", "nghiên cứu" như có phương pháp |
| Takahashi và cộng sự (2019), *SAGE Open Medicine* 7 | phân tích thứ cấp một thử nghiệm ngẫu nhiên 130 bệnh nhân; SMART nằm trong gói (cùng huấn luyện hành vi, máy đếm bước); đọc qua tóm tắt | dùng như phép thử riêng của SMART |
| Swann và cộng sự (2023), *Health Psychology Review* 17(2), 211-226 | tổng quan tường thuật và phê bình, trong vận động thể chất; đọc qua tóm tắt; tám nhận định phê phán, liệt kê đủ cả tám khi dẫn: không dựa trên lý thuyết, không nhất quán với bằng chứng, không xét loại mục tiêu, áp dụng không nhất quán, thiếu hướng dẫn chi tiết, tiêu chí trùng lặp, không dùng như ý định ban đầu, nguy cơ gây hại | "phân tích gộp", "tổng quan hệ thống"; khái quát ra ngoài vận động thể chất |
| Swann và cộng sự (2020), *Psychology of Sport and Exercise* 47, 101475 | thí nghiệm 78 người, phân ngẫu nhiên bốn nhóm, bài đi bộ sáu phút; đọc qua tóm tắt và phần mô tả lại của Hawkins và cộng sự | "SMART đi xa hơn cố hết sức" hay "không khác" (tóm tắt không báo so sánh giữa ba nhóm có mục tiêu) |
| Hawkins và cộng sự (2020), *Psychology of Sport and Exercise* 48, 101661 | 36 người (18 vận động đủ, 18 chưa đủ), mỗi người qua cả bốn điều kiện; mục tiêu SMART là lần đo nền cộng 16,67%, rồi cộng 8,33%; tác dụng đổi chiều theo mức vận động (p < 0,001); đọc bản thảo trên figshare | — |
| Schweitzer, Ordóñez & Douma (2004), *Academy of Management Journal* 47(3), 422-432 | thí nghiệm 154 sinh viên ghép từ; mục tiêu chín từ "khó nhưng thực tế" (nguyên văn *difficult, but realistic*); nhóm có thưởng nhận 2 đô la mỗi vòng đạt; khai sai ít nhất một lần 10,5% / 22,7% / 30,2% số người; mỗi nhóm có mục tiêu khác nhóm cố hết sức có ý nghĩa (kiểm một phía, *p* = 0,005 và 0,048), có thưởng so với không thưởng thì không (*p* = 0,20 với tỷ lệ người, 0,17 với điểm khai sai); ở vòng hụt đúng một từ 14,81% / 34,48% / 48,48% **số lượt**; năng suất khác biệt không có ý nghĩa thống kê; không gọi tên SMART; đọc toàn văn | "gần một nửa số người" (là số lượt); dùng làm ví dụ về SMART; "thưởng làm tăng khai sai" như kết quả đã đo; "đừng gắn thưởng lớn vào ngưỡng" như điều thí nghiệm chứng minh (là suy luận quản trị; thí nghiệm không so mức thưởng) |

### Mục tiêu và kết quả then chốt (OKR)

| Nguồn | Gọi là | Không viết |
|---|---|---|
| Google re:Work, *Set goals with OKRs*, rework.withgoogle.com/en/guides/set-goals-with-okrs | hướng dẫn chính thức của Google; nguồn cho định nghĩa, hai câu hỏi của Grove (dẫn lại), số mục tiêu và kết quả then chốt, thang 0 tới 1,0 và vùng 0,6 tới 0,7, mốc "đầu năm 2000", tính công khai, OKR không đồng nghĩa với đánh giá nhân viên, năm lỗi viết OKR, khoảng 70% cho OKR vươn xa, cách nối OKR nhóm, việc xem lại trong quý; trang dẫn tới video của GV (Rick Klau) | dẫn như bằng chứng hiệu quả; gán nhãn "cam kết / vươn xa" cho trang này |
| What Matters (trang của John Doerr): *OKRs history: The origin story*; *What is an OKR?*; *Operation Crush: An Intel story* | lời kể của người cổ vũ công cụ; nguồn cho Grove là cha đẻ, MBO của Drucker thập niên 1950, mốc 1999, công thức "Tôi sẽ… đo bằng…", OKR cam kết / vươn xa, OKR tách khỏi lương thưởng, mục tiêu và đích 2.000 của Crush, nhận định 85% thị trường 16 bit năm 1986 (gắn tên Doerr) | trình bày như nguồn độc lập; dẫn sách *Measure What Matters* như đã đọc (bài chỉ đọc các trang trên What Matters) |
| Computer History Museum (2014), *Intel Crush oral history panel*, ghi hình 14/10/2013, X6984.2014 | lời kể 33 năm sau của năm thành viên ban chỉ đạo (Davidow, McKenna, Bader, House, Katz), người dẫn Dane Elliot và Rosemary Remacle; đọc toàn văn bản ghi | gán câu "quy trình MBO được dùng để đưa xuống tận người làm" cho Davidow (là lời Remacle, House xác nhận) |
| Intel, *The Intel 8086 and the IBM PC* | trang lịch sử của công ty; "gần 2.500" lượt, đếm IBM PC trong đó | — |
| Butler, Zimmermann & Bird (2023), arXiv:2311.00236; trình bày tại ICSE 2024, mảng SEIP | ba nhà nghiên cứu Microsoft; một bộ phận khoảng 4.000 kỹ sư trong một công ty phần mềm đa quốc gia có hàng chục nghìn lập trình viên, bài báo không nêu tên công ty; dùng OKR khoảng hai năm; 47 phỏng vấn, 512 câu trả lời (khoảng 13%); 45% nhóm cho rằng đo mục tiêu hiệu quả; hơn 50% người quản lý không mấy hiệu quả khi chuyển OKR thành mục tiêu nhóm; 76% không biết tìm mục tiêu nhóm khác; 59% muốn hoặc cần thấy OKR nhóm khác; 12 công cụ; tự báo cáo, một công ty, bảng hỏi chưa kiểm định; Microsoft mua Ally.io năm 2021, ở thời điểm viết bán Viva Goals (Viva Goals ngừng ngày 31/12/2025, theo Microsoft Learn); đọc bản arXiv | dẫn như bằng chứng OKR làm kết quả tốt lên; bỏ chi tiết lợi ích của Microsoft; "tổ chức của Microsoft" hay "tổ chức 4.000 kỹ sư" (là một bộ phận, công ty không nêu tên); "nay bán Viva Goals" |
| Microsoft Learn, *Viva Goals retirement* | trang thông báo chính thức: Viva Goals ngừng ngày 31/12/2025 | — |
| Gary, Yang, Yetton & Sterman (2017), *Organization Science* 28(3), 395-410 | hai thí nghiệm trên mô phỏng People Express, 40 quý. Nghiên cứu 1: 134 quản lý học EMBA, 50 đội, phân tích 39 đội; đích 60 triệu (vừa phải) / 315 triệu (vươn xa, phân vị 90 của đội thử); đạt 61% / 19%, phá sản 33% / 43%; trung vị 120 / 6 triệu, *p* = 0,81; độ lệch chuẩn 113 / 219 triệu. Nghiên cứu 2: 59 sinh viên, thêm mục tiêu từng năm và tiền thưởng nhỏ; trung vị 138 / 185 triệu, *p* = 0,19; độ lệch chuẩn 114,5 / 526,6 triệu; lợi nhuận theo rủi ro thấp hơn có ý nghĩa ở nhóm vươn xa; cam kết trước vòng cuối 6,12 / 3,99. Tác giả tự nêu: mục tiêu không thích ứng, một mục tiêu duy nhất; phê phán lấy mẫu trên ca thành công; không gọi tên OKR; đọc bản thảo trước khi in | "mục tiêu vươn xa làm kết quả tệ hơn" (trung vị không khác có ý nghĩa); "không nâng trung vị", "trung vị không cao hơn" (viết "không tìm thấy bằng chứng thống kê rằng mục tiêu vươn xa nâng trung vị"; ở nghiên cứu 2 trung vị nhóm vươn xa cao hơn về số); "phá sản nhiều hơn" như kết quả đã kiểm (bài báo không kiểm định chênh lệch tỷ lệ phá sản); dùng như phép thử OKR; nói nghiên cứu 1 có thưởng (bài báo không mô tả khoản thưởng nào) |
| Stray, Moe, Vedal & Berntzen (2022), HICSS-55, tr. 7360-7369, doi 10.24251/HICSS.2022.883 | nghiên cứu tình huống hai nhóm (Alpha 10 người, Bravo 7 người) trong một dự án agile lớn của một cơ quan Na Uy khoảng 50.000 nhân viên, làm từ xa vì đại dịch; quan sát 21 cuộc họp từ 9/11 tới 7/12/2020, phỏng vấn đủ 17 thành viên; đọc toàn văn. OKR giúp ưu tiên việc và hiểu việc nhóm khác; viết kết quả then chốt đo được là khó nhất; buổi OKR hằng quý bị coi là nặng nề; nhiều người chưa tin OKR cải thiện đáng kể công việc; hơn một năm mới thấy lợi ích; bảng theo dõi OKR mở nhưng nhiều người không đọc. Butler và cộng sự dẫn nghiên cứu này, nên hai kết quả về tính công khai "nhất quán với nhau" | khái quát ra ngoài phần mềm; "kiểm chéo" với Butler và cộng sự; "cơ quan nhà nước" (nguồn chỉ ghi *Norwegian agency*) |
| Rompho (2024), *Benchmarking: An International Journal* 31(3), 669-682 | định tính, phỏng vấn 204 nhân viên ở 26 tổ chức Thái Lan đã dùng OKR; tác giả tự nêu giới hạn khái quát và đề nghị kiểm lại khi dùng lâu hơn sáu tháng; đọc qua tóm tắt | "khảo sát", số liệu định lượng |

---

## 5. Bảng dịch Việt - Anh

Cách gọi đã chốt khi dịch. Bản dịch sau dùng lại, không tự chọn lại. Chính tả tiếng Anh theo lối Anh (`organising`, `standardise`, `summarise`); tên riêng giữ chính tả gốc (Mayo Clinic Center for Sleep Medicine).

| Tiếng Việt | Tiếng Anh |
|---|---|
| bác sĩ trẻ | *junior doctors* |
| ban giám đốc | *the directors* |
| bản đồ quy trình | *process map* |
| bản hiện trạng / bản mục tiêu | *current-state map* / *future-state map* |
| báo cáo quản trị | *management report* |
| biên bản nhận hàng | *delivery note* |
| bản hiện trạng / bản mục tiêu (trong sơ đồ chuỗi giá trị) | *current-state map* / *future-state map* |
| chênh lệch chi phí / chênh lệch tiến độ | *cost variance* / *schedule variance* |
| chỉ số hiệu suất chi phí / tiến độ / cần đạt | *cost performance index* / *schedule performance index* / *to-complete performance index* |
| chi phí thực tế | *actual cost* |
| chi phí đã phát sinh và được ghi nhận (định nghĩa AC) | *cost incurred and recorded* |
| kiểm soát thay đổi đã được duyệt / phân bổ từ dự phòng (bài EVM) | *approved change control* / *allocated from the reserve* |
| quy tắc kinh nghiệm (TCPI cao hơn CPI quá 5 điểm phần trăm) | *rule of thumb* (*more than 5 percentage points above CPI*) |
| dự báo xấu nhất (CPI × SPI, theo GAO) | *often referred to as the worst-case forecast* |
| cấp cứu, khoa cấp cứu | *A&E* (bài VSM, ca Beirut: *emergency department*, theo tên khoa trong nguồn) |
| chăn mền | *duvets and blankets* |
| chuyến giao | *delivery run* |
| chụp mô phỏng | *simulation* |
| chuỗi nhà thuốc / dược sĩ bán hàng / phần mềm bán hàng | *chain of pharmacies* / *counter pharmacists* / *point-of-sale software* |
| chỉ số chặn | *guardrail metric* |
| chuyển tay | *handoff* |
| công việc chuẩn | *standardised work* |
| Cục Điều tra Dân số Mỹ | *US Census Bureau* |
| căn hộ (bài WBS) | *flat* |
| chạy thử song song / chuyển đổi tám cửa hàng (bài CPM) | *parallel trial* / *switch over eight shops* |
| cộng khớp từng đồng | *add up to the last dong* |
| Cục Quân nhu Lục quân Mỹ | *US Army Ordnance Department* |
| danh sách kiểm | *checklist* |
| câu lạc bộ thể hình / buổi hướng dẫn riêng / quẹt thẻ (bài SMART) | *gym* / *one-to-one induction session* / *check-in* |
| trưởng nhóm huấn luyện viên / kế toán xuất số (bài SMART) | *head trainer* / *exported by accounts* |
| chuỗi điện máy / buổi bán thử / ba tỉnh miền Tây (bài SMART) | *electronics retail chain* / *trial selling shift* / *three Mekong Delta provinces* |
| khai sai / vòng hụt sát nút / người tự chọn (bài SMART) | *overstate*, *overstatement* / *near miss* / *self-selection* |
| kịch bản tham chiếu / quyết định quản lý / suy luận quản trị | *reference scenario* / *management decision* / *management inference* |
| rõ và làm nổi (phụ đề bài SMART) | *clear and doable* (không dùng *achievable*, để khỏi lẫn với chữ A của bản thông dụng) |
| dạng hỏng / tác động | *failure mode* / *effect* |
| đặt cọc | *pays the deposit* |
| đặt ống thành công ngay lần đầu | *first-attempt intubation success* |
| đêm phòng | *room-nights* |
| điểm bắt đầu / điểm kết thúc | *start point* / *end point* |
| điểm hợp lưu / thiên lệch hợp lưu | *merge point* / *merge bias* |
| đường găng / việc găng / gần găng | *critical path* / *critical activity* / *near-critical* |
| đường găng theo nguồn lực | *resource critical path* |
| đổi yêu cầu / điều kiện ẩn / sót hạng mục (ba loại phát sinh, bài WBS) | *change requests* / *concealed conditions* / *omitted items* |
| đo đa ký giấc ngủ | *polysomnography* |
| dòng thông tin / dòng vật liệu | *information flow* / *material flow* |
| đường thời gian (đáy sơ đồ chuỗi giá trị) | *timeline* |
| duyệt chi | *spending approval* |
| dự báo chi phí khi hoàn thành | *estimate at completion* |
| dự phòng quản lý | *management reserve* |
| đường cơ sở (đo lường) | *(performance measurement) baseline* |
| dựng lại đường cơ sở vượt ngân sách gốc | *over-target baseline* |
| giao được việc (chữ A của Doran) | *assignable* |
| giấu sức | *sandbagging* |
| giá trị tồn kho tạm tính | *provisional stock value* |
| giải ngân / thẩm định / định giá tài sản | *disbursement* / *credit appraisal* / *property valuation* |
| gói việc | *work package* |
| đầu mối chịu trách nhiệm | *accountable owner* |
| kiểm số học / kiểm phạm vi (độ phủ) | *arithmetic check* / *scope check* (*coverage*) |
| kiểm soát thay đổi | *change control* |
| giặt sấy thường / giặt hấp | *standard wash-and-dry* / *steam-pressing* |
| giờ làm việc | *working hours* |
| giá trị kế hoạch / giá trị thu được | *planned value* / *earned value* |
| gói việc tính theo thời gian | *level-of-effort work package* |
| hạn hợp đồng (thuê) | *lease deadline* |
| hạn cam kết / ngày xong sớm nhất | *committed deadline* / *earliest finish* |
| họ sản phẩm | *product family* |
| khả năng phát hiện / khả năng xảy ra / mức nghiêm trọng | *detection* / *occurrence* / *severity* |
| khoảng dư | *slack*; bài CPM: *float* (lần đầu *total float, also called total slack*) |
| khoa tiệt khuẩn | *sterile processing department* |
| kho quân giới Frankford | *Frankford Arsenal* |
| khớp tay | *manual matching* |
| làm khác (quy trình) | *deviation*, *departure* |
| luật 100% | *100% rule* |
| làn | *lane* |
| lượt tính xuôi / lượt tính ngược | *forward pass* / *backward pass* |
| lệnh xuất kho | *dispatch order* |
| lịch gốc | *baseline* |
| kỷ yếu (bài CPM) / ban liên lạc lớp | *yearbook* / *class committee* |
| lỗi (không) ảnh hưởng tới vô khuẩn | *defects that do (not) affect sterility* |
| lưu đồ chia làn | *swimlane flowchart* |
| lời dặn cố hết sức | *do-your-best goal* |
| lượt được chọn vào thiết kế | *design win* |
| mục tiêu kết quả / mục tiêu học / mục tiêu gần / mục tiêu mở | *performance goal* / *learning goal* / *proximal goal* / *open goal* |
| mục tiêu / kết quả then chốt / đích (bài OKR) | *objective* / *key result* / *target* |
| mục tiêu vươn xa / mục tiêu vừa phải | *stretch goal* / *moderate goal* |
| nhà xe khách giường nằm / thời gian quay đầu / thiết bị giám sát hành trình / tin nhắn báo trễ (bài OKR) | *sleeper-coach operator* / *turnaround time* / *journey-monitoring device* / *delay text message* |
| OKR cam kết / OKR vươn xa / OKR việc thường ngày | *committed OKR* / *aspirational OKR* / *business-as-usual OKR* |
| điểm OKR / vùng vừa đẹp | *OKR grade* / *sweet spot* |
| chấm theo quãng đường đã đi / trung bình đều / điểm gộp (bài OKR) | *graded by distance travelled* / *simple average* / *composite grade* |
| rời bến đúng giờ / giờ tới dự kiến / điều hành / phòng vé (bài OKR) | *on-time departure* / *expected arrival time* / *dispatch* / *ticketing* |
| sửa thước đo chứ không sửa chuyến xe (câu đặc trưng, bài OKR) | *fixing the ruler, not the journey* |
| ban chỉ đạo / thư cam kết / hệ thống phát triển (ca Crush) | *steering committee* / *letter of intent* / *development system* |
| chuỗi nhà sách / buổi đọc truyện / hội viên có con nhỏ (bài OKR) | *bookshop chain* / *story session* / *members with young children* |
| phân vị 90 / lợi nhuận tính theo rủi ro / mức cam kết với mục tiêu | *90th percentile* / *risk-adjusted profit* / *goal commitment* |
| mức tuân thủ / chất lượng thao tác / kết cục | *compliance* / *the quality of the task* / *outcome* |
| mức ưu tiên hành động | *Action Priority* |
| ngân sách hoàn thành | *budget at completion* |
| người chăm sóc | *caregivers* |
| nhân viên giao nhận | *rider* |
| ô quyết định | *decision diamond* |
| phạm vi / ranh giới | *scope* / *boundaries* |
| phản ánh (của khách) | *complaints* |
| phe bênh | *defenders* |
| phần tử chung | *common elements* |
| pallet / kho mới / phần mềm quản lý kho (bài EVM) | *pallet* / *new warehouse* / *warehouse management system* |
| phí bảo vệ thang máy / thang hàng | *lift protection fee* / *service lift* |
| phiếu hoàn tiền | *return form* |
| phiếu nhập kho | *goods-received notes* |
| phiếu sửa | *repair ticket* |
| phó hiệu trưởng | *vice-rector* |
| phòng đào tạo (cấp bảng điểm) | *university records office* |
| phòng kế hoạch | *planning department* |
| quản lý giá trị thu được | *earned value management* |
| quy tắc CPI ổn định | *CPI stability rule* |
| quỹ NHS | *NHS trust* |
| sổ sự cố | *incident records*, *incident log* |
| tâm lý "đánh dấu cho xong" | *"check-the-box" mentality* |
| thời lượng bình thường / rút ngắn tối đa | *normal duration* / *crash duration* |
| tài khoản học | *learning account* |
| tiến độ thu được | *earned schedule* |
| tính năng / nghiệm thu (bài EVM, ví dụ phần mềm) | *feature* / *acceptance* |
| tiền (đồng) | *million dong* |
| tiêu sợi huyết | *thrombolysis* |
| thời gian từ cửa tới kim | *door-to-needle time* |
| thời gian xử lý | *processing time* |
| từ cửa tới cửa | *door-to-door* |
| từ điển WBS | *WBS dictionary* |
| trường mầm non / tuyển sinh / bếp một chiều | *kindergarten* / *enrolment* / *one-way-flow kitchen* |
| tủ điện tổng có thiết bị chống giật | *main distribution board with residual-current protection* |
| việc treo / ràng buộc ngày cứng / độ trễ | *dangling activity* / *hard date constraint* / *lag* |
| xưởng may | *garment workshop* |
| tiệm giặt sấy giao nhận tận nhà | *laundry with collection and home delivery* |
| tiếng nói của khách hàng | *voice of the customer* |
| trôi nghĩa của từ viết tắt | *acronym drift* |
| trung vị / trung bình cộng | *median* / *mean* |
| vi phạm cần thiết | *"necessary violations"* |
| xạ trị chùm ngoài | *external beam radiotherapy* |
| yêu cầu / ràng buộc / thước đo | *requirements* / *constraints* / *measures* |

---

## 6. Tiêu đề và nhãn cố định

### Trang mục

| Chỗ | Tiếng Việt | Tiếng Anh |
|---|---|---|
| Section 1 | `Định Nghĩa` | `Definition` |
| Section 1, sub-section 1 | `<Tên Công Cụ> Là Gì` | `What Is <Tool Name>` |
| Section 1, sub-section 2 | `Tại Sao Ta Cần Dùng Nó` | `Why We Need It` |
| Section 1, sub-section 3 | `Giới Hạn Của Công Cụ Này Là Gì` | `What Are Its Limits` |
| Section 2 | `Ví Dụ` | `Examples` |
| Section 3 | `Một Vài Nghiên Cứu Về <Tên Mục>` | `Some Research on <Item Name>` |
| Section 4 | `Cách Áp Dụng` | `How to Apply It` |
| Section 5 | `Tình Huống Áp Dụng` | `Applying It to a Scenario` |
| Section 6 | `Tóm Tắt` | `Summary` |
| Section 7 | `Tài Liệu Tham Khảo` | `References` |
| Mở ví dụ tầng 1 | `Tình huống minh hoạ:` | `An illustrative scenario:` |

### Tên bài

| Tiếng Việt | Tiếng Anh | Sub-section 1 (EN) |
|---|---|---|
| `Sơ Đồ Xương Cá Ishikawa` | `Ishikawa Diagrams (Fishbone)` | `What Is a Fishbone Diagram` |
| `Quy Trình Thao Tác Chuẩn (SOP)` | `Standard Operating Procedure (SOP)` | `What Is a Standard Operating Procedure` |
| `Lưu Đồ Quy Trình` | `Process Flowchart` | `What Is a Process Flowchart` |
| `Sơ Đồ SIPOC` | `SIPOC Diagram` | `What Is a SIPOC Diagram` |
| `Sơ Đồ Chuỗi Giá Trị` | `Value Stream Mapping` | `What Is a Value Stream Map`; section 3 là `Some Research on Value Stream Mapping` |
| `Phương Pháp Đường Găng (CPM)` | `Critical Path Method (CPM)` | `What Is the Critical Path Method`; section 3 là `Some Research on the Critical Path Method` |
| `Quản Lý Giá Trị Thu Được (EVM)` | `Earned Value Management (EVM)` | `What Is Earned Value Management`; sub-section 1 bản VN là `Quản Lý Giá Trị Thu Được Là Gì`; section 3 là `Some Research on Earned Value Management` |
| `Cấu Trúc Phân Rã Công Việc (WBS)` | `Work Breakdown Structure (WBS)` | `What Is a Work Breakdown Structure`; sub-section 1 bản VN là `Cấu Trúc Phân Rã Công Việc Là Gì`; section 3 là `Some Research on Work Breakdown Structures` |
| `Khung Mục Tiêu SMART` | `SMART Framework` | `What Is the SMART Framework`; sub-section 1 bản VN là `Khung Mục Tiêu SMART Là Gì`; section 3 là `Some Research on the SMART Framework` |
| `Mục Tiêu Và Kết Quả Then Chốt (OKR)` | `Objectives and Key Results (OKR)` | `What Are Objectives and Key Results`; sub-section 1 bản VN là `Mục Tiêu Và Kết Quả Then Chốt Là Gì`; section 3 bản VN là `Một Vài Nghiên Cứu Về Mục Tiêu Và Kết Quả Then Chốt`, bản EN là `Some Research on Objectives and Key Results` |
| `Giải Quyết Vấn Đề A3` | `A3 Problem Solving` | — |

Tên bài bản EN khớp tên trong mục lục trang tổng quan EN.

### Trang tổng quan

| Chỗ | Tiếng Việt | Tiếng Anh |
|---|---|---|
| Section 1 | `Định Nghĩa` | `Definition` |
| Section 2 | `Một Vài Công Cụ Và Kỹ Thuật` | `Some Tools and Techniques` |
| Section 3 | `Ví Dụ Kinh Điển` | `Classic Examples` |
| Section 4 | `Nghiên Cứu Khoa Học` | `Scientific Research` |
| Section 5 | `Đọc Thêm` | `Further Reading` |
| Section 6 | `Tóm Tắt` | `Summary` |
| Section 7 | `Tài Liệu Tham Khảo` | `References` |

### Nhãn dùng chung

| Chỗ | Tiếng Việt | Tiếng Anh |
|---|---|---|
| Nhãn đoạn nghiên cứu | `Nghiên cứu:` / `Kết quả:` / `Kết luận:` / `Phản biện:` / `Vì sao điều này hữu ích:` | `The study:` / `Findings:` / `What it shows:` / `The counter-case:` / `Why this is useful:` |
| Mở `summary-box` | `Điểm Chính:` | `Key Point:` |
| Nhãn ngày | `Đăng ngày:` / `Cập nhật:` | `Published:` / `Updated:` |
| Định dạng ngày | `5 Tháng 8, 2026` | `August 5, 2026` |
| Nhãn hình | `Hình 1.` | `Figure 1.` |

---

## 7. Chưa chốt

Những khái niệm các nguồn hoặc các bài đang nói khác nhau mà chưa ai quyết.

- **Vai trò của Henry Gantt.** Weaver (2012) nói Gantt không dính dáng gì tới biểu đồ thanh; Geraldi & Lechter (2012) dựng một mạch liên tục hơn từ công việc điều phối quân nhu năm 1914. Bài nào chạm tới lịch sử công cụ này phải nêu cả hai, không chọn bên.
- **Ma trận rủi ro.** Bài FMEA phân biệt mình với ma trận rủi ro bằng câu "công cụ chấm những rủi ro đã được gọi tên theo hai trục khả năng và hậu quả", chưa có nguồn. Khi viết bài Ma Trận Rủi Ro, chốt định nghĩa có nguồn rồi sửa câu ở bài FMEA cho khớp.
- **"Chuỗi giá trị" hai nghĩa.** Bài Sơ Đồ Chuỗi Giá Trị dùng "chuỗi giá trị" cho *value stream* (đường đi của một họ sản phẩm qua các khâu); cụm này trùng chữ với *value chain* của Porter. Khi bài Năm Lực Lượng Cạnh Tranh Của Porter hay một bài chiến lược khác cần nhắc tới *value chain*, chốt cách gọi cho nó (có nguồn) và kiểm hai bài không gọi lẫn.
- **Christensen & Heise có khái quát kết quả hay không.** Bản gốc (1993) tự viết đã xác lập tính khái quát cho các quân chủng, chương trình và loại hợp đồng quốc phòng khác; Petter, Ritschel & White (2015) viết rằng hai tác giả không khái quát ra ngoài dữ liệu. Bài EVM nêu cả hai và chỉ khẳng định phần hai bên cùng nhận: bản 1993 không nói gì về dự án ngoài quốc phòng. Bài sau dẫn lại thì giữ cách nêu này.
- **Ranh giới SMART với OKR và KPI.** Bài SMART phân biệt mình bằng câu: OKR nối mục tiêu của các cấp, mỗi mục tiêu đi kèm vài kết quả then chốt đo được; KPI theo dõi liên tục một mặt của hoạt động. Vế OKR nay khớp với hướng dẫn của Google (mỗi mục tiêu khoảng ba kết quả then chốt, mỗi nhóm nối OKR vào ít nhất một mục tiêu của tổ chức), nên câu ở bài SMART không cần sửa. Vế KPI vẫn chưa có nguồn, và bài OKR cũng chỉ vạch ranh giới với KPI bằng cách đọc của bài dựa trên lỗi "OKR việc thường ngày" của Google. Khi viết bài KPI, chốt định nghĩa có nguồn rồi kiểm cả hai câu ở bài SMART và bài OKR.
- **Chồng lấn với series Scrum.** Bài Agile / Scrum / Kanban của series này trùng chủ đề với `pages/information-technology/agile-software-development/scrum-agile-and-more/`. Khi viết, đối chiếu từ điển của series đó để hai series dùng cùng thuật ngữ.
