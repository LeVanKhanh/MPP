# Từ điển ngôn ngữ chung - Scrum, Agile and More

Từ điển tra cứu để mọi bài trong series gọi cùng một khái niệm bằng cùng một tên, hiểu nó theo cùng một nghĩa, và tránh cùng những cách diễn đạt sai.

**Phạm vi:** Scrum Guide 2020 (Scrum Team, events, Product Backlog, nhiều Scrum Team cùng một sản phẩm, mọi chỗ chứa chuỗi `manag`), bài 5 (phần Managers), bài 6 (một phần), bài 7, 8, 9, 10. **Chưa rà bài 0, 1, 2, 3, 4**: thuật ngữ về Product Owner, Scrum Master và Developers gần như chắc chắn đã được định nghĩa ở đó mà chưa có ở đây. Thuật ngữ không có trong file này là **chưa được chốt**: grep các bài `.html` cùng thư mục trước khi dùng, rồi bổ sung vào đây.

**Khi file và nguồn nói khác nhau, nguồn thắng**; sửa mục trong file.

Mục lục:

1. [Quy ước chung](#1-quy-ước-chung)
2. [Thuật ngữ](#2-thuật-ngữ)
3. [Cách diễn đạt đã chốt](#3-cách-diễn-đạt-đã-chốt)
4. [Chưa chốt](#4-chưa-chốt)

---

## 1. Quy ước chung

- **Giữ nguyên tên tiếng Anh** của thuật ngữ Scrum và thuật ngữ quản trị công việc, giải thích bằng tiếng Việt ở lần xuất hiện đầu. Không dịch cưỡng ép. Các từ giữ nguyên xuyên suốt: `accountability`, `outcome`, `timebox`, `empiricism`, `psychological safety`, `learning loop`, `decision-right`, `shared understanding`, `Increment`, `backlog`.
- **Tiêu đề section tham khảo:** bản VN `Tài Liệu Tham Khảo`, bản EN `References`. Không dùng `Nguồn tham khảo` hay `Tài liệu tham chiếu`.
- **Nhãn ngày trong `page-meta`:** `Cập nhật:` / `Updated:` cho bài đã tồn tại, `Đăng ngày:` / `Published:` cho bài mới.

---

## 2. Thuật ngữ

Cột **Gọi là** ghi cách gọi trong bản tiếng Việt. Cột **Không viết** ghi cách diễn đạt sai dễ rơi vào.

### Scrum: events

| Thuật ngữ | Gọi là | Nghĩa chốt | Không viết | Nguồn |
|---|---|---|---|---|
| Sprint | giữ nguyên | Event chứa bốn event còn lại | liệt kê Sprint ngang hàng với bốn event kia như thể cùng cấp | Scrum Guide 2020 |
| Scrum event | giữ nguyên | Đúng bốn event nằm trong Sprint: Sprint Planning, Daily Scrum, Sprint Review, Sprint Retrospective. Event là cơ chế empiricism, không phải lịch họp bắt buộc | "năm event" khi đang tính cả Refinement | Scrum Guide 2020; bài 6 |
| Sprint Planning | giữ nguyên | Mở đầu Sprint, trả lời ba câu: vì sao Sprint này có giá trị, hoàn thành được gì, công việc đã chọn làm thế nào | buổi giao việc | Scrum Guide 2020 |
| Daily Scrum | giữ nguyên | Event 15 phút của Developers, kiểm tra tiến độ hướng tới Sprint Goal và điều chỉnh Sprint Backlog | buổi báo cáo trạng thái cho một người | Scrum Guide 2020 |
| Sprint Review | giữ nguyên | Buổi làm việc kiểm tra kết quả Sprint và xác định điều chỉnh tiếp theo, với **key stakeholders** | buổi demo, buổi trình chiếu; Scrum Guide yêu cầu người dùng cuối (muốn đòi thì ghi rõ là khuyến nghị của tác giả) | Scrum Guide 2020 |
| Sprint Retrospective | giữ nguyên | Buổi lên kế hoạch nâng chất lượng và hiệu quả; cải tiến quan trọng nhất được xử lý sớm nhất có thể, có thể đưa thẳng vào Sprint Backlog kế tiếp | chỉ là buổi nói ra cảm nhận | Scrum Guide 2020 |
| Product Backlog Refinement | giữ nguyên, hoặc "Refinement" | Hoạt động liên tục để chia nhỏ và làm rõ thêm các Product Backlog Item. Trong năm mục Refinement / Planning / Daily / Review / Retrospective, đây là mục duy nhất Scrum Guide không gán timebox, nhịp lặp cố định, hay nhóm người phải có mặt | Scrum event, hay event chính thức | Scrum Guide 2020; bài 6; bài 10 |
| minimum viable \<event\> | giữ nguyên | Phiên bản tối giản của một event mà vẫn giữ được purpose của nó | "phiên bản rút gọn" (rút gọn có thể làm mất purpose) | Bài 6 |
| meeting brief | giữ nguyên | Khung mô tả một buổi họp, viết **trước** buổi: Title, Objective, Expected Result, Context, Input, Attendees, Agenda, Logistics, Decisions and Follow-up | "biên bản họp" (biên bản viết sau) | Bài 6 |

### Scrum: team, accountability, artifact

| Thuật ngữ | Gọi là | Nghĩa chốt | Không viết | Nguồn |
|---|---|---|---|---|
| Scrum Team | giữ nguyên | Tự quản, tự quyết ai làm gì, khi nào, như thế nào; thường mười người trở xuống | đơn vị nhận việc từ bên ngoài | Scrum Guide 2020 |
| self-managing | giữ nguyên | Định nghĩa trong Scrum Guide chỉ gồm "ai làm gì, khi nào, bằng cách nào": một câu về **phạm vi**, không phải tuyên ngôn về quyền lực | suy ra quyền của team đối với ngân sách, biên chế hay chính sách phê duyệt | Scrum Guide 2020; bài 9 |
| accountability | giữ nguyên | Product Owner, Scrum Master, Developers là ba accountability **trong cùng một** Scrum Team | ba nhóm chức năng, ba vai trò tách rời, ba lớp giao việc / thực hiện / kiểm tra | Scrum Guide 2020; bài 5 |
| commitment | giữ nguyên | Thuật ngữ gắn với artifact: Product Goal, Sprint Goal, Definition of Done. Bốn nội dung của Developers là thứ họ `always accountable for` | "bốn cam kết" của Developers | Scrum Guide 2020; bài 7 |
| Product Goal / Sprint Goal | giữ nguyên | Mục tiêu dài hạn của sản phẩm / mục tiêu duy nhất của một Sprint. Mục tiêu đáng hướng tới duy nhất của Scrum Team là Product Goal | dùng thay cho nhau | Scrum Guide 2020; bài 5 |
| Definition of Done | giữ nguyên | Định nghĩa được viết ra, cả team cam kết, về việc thế nào là xong; gắn với Increment. Khi tốc độ sinh code vượt tốc độ người đọc code, nó đóng vai trò bộ điều tốc chứ không chỉ một danh sách chất lượng | dùng lẫn với Acceptance Criteria của một item; "Done cấp team" (Scrum Guide không có khái niệm này) | Scrum Guide 2020; bài 7; bài 8 |
| Increment | giữ nguyên | Dừng ở mức `thoroughly verified` và `usable`. Một Sprint có thể tạo nhiều Increment; lát cắt trung gian đã tích hợp, dùng được, đạt Definition of Done là Increment hợp lệ | Increment đồng nghĩa với "đã kiểm chứng được giá trị"; gọi mảnh *chưa tích hợp* là Done | Scrum Guide 2020; bài 8 |
| Managers | giữ nguyên | Nằm ngoài Scrum, nhưng tạo điều kiện hệ thống: staffing, budget, policy, incentive, quyền quyết định. Không phải một khối đồng nhất | accountability thứ tư; Scrum Guide "giao việc" cho manager (Scrum Guide không dùng chữ `manager` lần nào); gộp mọi chức danh quản lý vào một danh từ | Bài 5; bài 9; Scrum Guide 2020 |

### AI trong phát triển sản phẩm

| Thuật ngữ | Gọi là | Nghĩa chốt | Không viết | Nguồn |
|---|---|---|---|---|
| AI Agent | giữ nguyên, viết hoa `Agent` khi đứng một mình | Hệ thống dùng mô hình ngôn ngữ để tự thực hiện một chuỗi công việc phát triển sản phẩm (viết code, test, phân tích, cập nhật tài liệu) dưới sự điều phối của người | Agent là thành viên Scrum Team; gán accountability cho Agent (đặt tên Agent theo ba accountability không làm chúng có accountability) | Bài 7 |
| capability / accountability / authority / legitimacy | giữ nguyên cả bốn | Bốn tầng tách chữ "thay thế": làm được việc gì / chịu trách nhiệm kết quả / có quyền chốt / được stakeholder chấp nhận | gộp bốn tầng thành "vai trò"; dùng phân biệt này như bức tường để đẩy mọi phản biện về "đó chỉ là capability" | Bài 7 |
| Spec-Driven Development (SDD) | giữ nguyên, viết tắt SDD sau lần đầu | Cách làm đặt specification làm artifact chính, code là biểu hiện của nó trong một ngôn ngữ cụ thể. Thành waterfall **chỉ khi** spec bị đóng băng trước khi có phần mềm chạy được để đối chiếu | SDD là "waterfall bằng AI" như một sự thật | GitHub Spec Kit, `spec-driven.md`; bài 7 |
| specification | giữ nguyên | Artifact vừa để người trao đổi, vừa là context cho Agent, input lập kế hoạch, nguồn sinh test, tiêu chuẩn đối chiếu và dấu vết thiết kế | dịch thành "tài liệu"; đánh đồng với `documentation` trong Agile Manifesto | Agile Manifesto; bài 7 |
| execution context | giữ nguyên | Hình dạng thực tế của Sprint Backlog khi phần thực thi do Agent làm: Sprint Goal, đặc tả, ràng buộc, bối cảnh kiến trúc, acceptance criteria, chiến lược test, kế hoạch Agent đang chạy, trạng thái. Quyền sở hữu vẫn thuộc Developers | execution context **thay thế** Sprint Backlog | Bài 7 |
| Validated Learning Lead Time | giữ nguyên | Thời gian từ lúc hình thành một giả định đến lúc có đủ bằng chứng để giữ, sửa hoặc bác bỏ nó. **Thuật ngữ do series đề xuất** | chỉ số đã có nghiên cứu đứng sau | Bài 7 |
| moral crumple zone | giữ nguyên, kèm "vùng hấp thụ đạo đức" ở lần đầu | Trách nhiệm bị dồn về con người đứng gần hệ thống tự động nhất, trong khi người đó có ít quyền kiểm soát nhất | dùng như ẩn dụ tuỳ hứng (khái niệm có nguồn) | Elish (2019) |

### Phụ thuộc và nhiều team

| Thuật ngữ | Gọi là | Nghĩa chốt | Không viết | Nguồn |
|---|---|---|---|---|
| dependency | giữ nguyên khi đứng như thuật ngữ | Tình trạng một team không hoàn thành được phần việc của mình nếu chưa có thứ do bên ngoài team cung cấp. Chi phí nằm ở mức nó làm gián đoạn dòng giá trị | "sự phụ thuộc" khi dùng như thuật ngữ; đo bằng số đường nối trên bảng | Bài 8 |
| ba loại chờ | chờ artifact / chờ năng lực / chờ quyết định | Phân loại dependency theo **thứ đang bị chờ**, không theo nơi phát sinh. **Thuật ngữ do series đề xuất.** Ba loại có ba chi phí gỡ khác nhau; thứ tự chi phí (artifact rẻ nhất, quyết định đắt nhất) là **giả thuyết của series** | phân loại đã có trong tài liệu ngành; cả ba xử lý được bằng cùng một cách; thứ tự chi phí là kết quả đo | Bài 8 |
| điểm chặn | "điểm chặn"; cách nói thường là "người có quyền nói không" | Chỗ công việc không đi tiếp được nếu chưa có sự cho phép, sự xếp ưu tiên, hoặc sự chấp nhận rủi ro từ một người bên ngoài team. **Thuật ngữ do series đặt ra** | dùng lẫn với số người phải trao đổi, số ranh giới kỹ thuật phải vượt, hay số tầng quản trị; người được hỏi ý kiến là điểm chặn; biến thể "điểm phải gật đầu" | Bài 8 |
| cơ chế quyết định | giữ nguyên "cơ chế" | Cách một quyết định được đưa ra: một người quyết, consent, biểu quyết, hạn mức, thời hạn phản đối, danh sách duyệt trước, hoặc thử nghiệm có thời hạn. Chốt trước khi bất đồng xảy ra. Đổi cơ chế mà không đổi người là một cách gỡ chờ quyết định | quy về "ai là người quyết" (uỷ quyền cho một cá nhân chỉ là một cơ chế); chờ quyết định chỉ gỡ được bằng tái cấu trúc | Bài 8; bài 10 |
| quyền phủ quyết (vai trò `agree` trong RAPID) | giữ nguyên `agree`; tiếng Việt "quyền phủ quyết" | Vai trò phải ký trước khi một đề xuất đi tiếp, trong khung RAPID. Là cách nói khác của "điểm chặn", nhưng đến từ kinh nghiệm tư vấn, phải gắn nhãn như vậy | dùng lẫn với vai trò `input` (được hỏi mà không có quyền chặn) | Rogers & Blenko (2006) |
| decision latency / commitment latency | giữ nguyên cả hai | Thời gian từ lúc nêu yêu cầu quyết định tới lúc có câu trả lời / từ lúc ghi nhận một nhu cầu tới lúc nó nằm trong một backlog đã xếp thứ tự | đo phần chờ quyết định bằng "thời gian bị chặn" của item đã vào hệ thống (bắt đầu đếm quá muộn) | Bài 8; Scrum@Scale Guide |
| feature team / component team | giữ nguyên cả hai | Feature team: team dài hạn, cross-functional, cross-component, hoàn thành từng lát cắt giá trị end-to-end. Component team: team tổ chức quanh một tầng hoặc một thành phần kỹ thuật. Mục tiêu là để phần lớn thay đổi có giá trị hoàn thành được trong một team | feature team đúng, component team sai; định nghĩa của LeSS là trung lập (đó là cách trình bày của một phía) | LeSS; bài 8 |
| stream-aligned / platform / enabling / complicated-subsystem team | giữ nguyên cả bốn | Bốn kiểu team trong Team Topologies | dùng như nhãn đổi tên cho cơ cấu cũ (platform team mà mọi yêu cầu vẫn phải gửi ticket và chờ xếp lịch là component team đã đổi biển) | Skelton & Pais (2019) |
| Collaboration / X-as-a-Service / Facilitating | giữ nguyên cả ba | Ba kiểu tương tác giữa các team trong Team Topologies | ba kiểu xử lý được mọi loại dependency (không kiểu nào xử lý được chờ quyết định) | Skelton & Pais (2019) |
| cognitive load | giữ nguyên | Giới hạn về lượng phức tạp một team gánh được; tiêu chí đánh giá một platform có ích hay không | "tải trí tuệ", "áp lực công việc" | Skelton & Pais (2019) |
| Integrated Increment | giữ nguyên | Thuật ngữ của Nexus: tổng phần việc đã tích hợp của các Scrum Team trong một Nexus, tạo ít nhất một lần mỗi Sprint | dùng lẫn với `Increment` của Scrum Guide | Nexus Guide 2021 |
| scaling framework | giữ nguyên | Nexus, LeSS, Scrum@Scale, SAFe và các khung tương tự. Trục so sánh: sau khi áp dụng, một thay đổi có giá trị phải đi qua nhiều hay ít **điểm chặn** hơn trước | so theo "nặng hay nhẹ"; framework luôn khuyến khích thêm người và thêm tầng | Bài 8 |

### Manager và hệ thống

| Thuật ngữ | Gọi là | Nghĩa chốt | Không viết | Nguồn |
|---|---|---|---|---|
| system owner / system steward | giữ nguyên cả hai | `system owner`: người sở hữu điều kiện tổ chức mà Scrum Team không tự đổi được. `system steward`: cách gọi đề xuất để sửa chỗ hụt của chữ trước, nhấn vào chăm sóc, quan sát và cải tiến thay vì kiểm soát toàn phần | đọc "ownership" thành "toàn quyền kiểm soát"; dùng hai chữ thay nhau như đồng nghĩa hoàn toàn | Bài 5; bài 9 |
| sáu lớp hệ thống | giữ nguyên cách gọi | Cấu trúc / quyền quyết định / dòng chảy công việc / cơ chế khuyến khích / nền tảng kỹ thuật / đường đi của tin xấu. **Cách chia do series đặt ra** | sáu lớp thuộc cùng một người hay một cấp quản lý | Bài 9 |
| phép thử lặp lại qua nhiều người | giữ nguyên cách gọi | Cách rẻ nhất phân biệt vấn đề con người với vấn đề hệ thống: cùng một vấn đề có lặp lại qua nhiều người khác nhau ở cùng một vị trí không. Chạy được cả hai chiều. **Thuật ngữ do series đặt ra** | phép đo chính xác | Bài 9 |
| thang phản ứng với bất thường | giữ nguyên sáu tên tiếng Anh | Sáu bậc của Westrum: suppression, encapsulation, public relations, local fix, global fix, inquiry | rút gọn thành cặp "xử lý sự cố" và "sửa hệ thống"; typology của Westrum là quy luật (Westrum gọi là `a hypothesis`, quan hệ `statistical, not deterministic`) | Westrum (2004) |
| action bias | giữ nguyên, kèm "thiên lệch hành động" ở lần đầu | Xu hướng chọn hành động nhìn thấy được thay vì không hành động, kể cả khi không hành động có kết quả kỳ vọng tốt hơn | dùng như ẩn dụ tuỳ hứng; bỏ qua chỗ phép loại suy hỏng (phạt đền lặp lại, đo được ngay, ba lựa chọn; điều kiện tổ chức không có đặc điểm nào trong ba) | Bar-Eli và cộng sự (2007) |

---

## 3. Cách diễn đạt đã chốt

Những khẳng định mà các bài đã chốt. Bài sau không được nói ngược, trừ khi cố ý sửa bài cũ.

| Chủ đề | Viết | Không viết | Nguồn |
|---|---|---|---|
| Scrum và kiểm chứng | Scrum **tạo cơ hội chính thức** để inspect và adapt | "Scrum buộc…", Scrum bảo đảm team có giả định kiểm chứng được hay bằng chứng thật | Bài 7 |
| Mục đích của event | purpose mất thì ceremony vẫn chạy đúng lịch mà team không học được gì | event là lịch họp bắt buộc | Bài 6 |
| Bài 6 và bài 10 | bài 6 dựng khung của buổi họp; bài 10 bàn thứ diễn ra bên trong khung | — | Bài 6; bài 10 |
| Đo lường | dùng để học, không dùng để chấm điểm cá nhân | — | Bài 0 |
| AI và số người | AI không gánh được accountability; nhưng số **người** cần để gánh accountability thì giảm, rõ nhất ở Developers | — | Bài 7 |
| Mốc năng lực AI | mọi tuyên bố về năng lực AI gắn mốc **tháng 8 năm 2026**; bài sau muốn nói khác phải gắn mốc mới | sửa ngầm mốc cũ | Bài 7 |
| METR 2025 ("chậm hơn 19%") | kết quả đúng trong phạm vi của nó và đã hết hạn (METR đổi thiết kế vì thiên lệch chọn mẫu ở lần chạy sau) | ước lượng hiện hành; "đã bị chứng minh sai" | METR; bài 7 |
| Nhiều Scrum Team, một sản phẩm | **phải** dùng chung một Definition of Done (`must`); **nên** chung Product Goal, Product Backlog, Product Owner (`should`). Nhiều Product Owner trên một sản phẩm là lệch khỏi khuyến nghị | trình bày hai mức ràng buộc như nhau; nhiều Product Owner thì "không còn là Scrum Team" | Scrum Guide 2020; bài 8 |
| Chữ `management` trong Scrum Guide | xuất hiện ba lần: hai lần trong "Product Backlog management", một lần trong câu Scrum làm hiện rõ hiệu lực tương đối của management, môi trường và kỹ thuật làm việc | — | Scrum Guide 2020; bài 9 |
| Nexus thu nhỏ | Nexus Guide tự nói thu nhỏ số người làm một việc có thể là cách tạo thêm giá trị | — | Nexus Guide 2021 |
| Scrum@Scale | tự đặt mục tiêu giảm `decision latency`; mô tả một framework phải đọc cả phần nó tuyên bố về mục đích cấu trúc | framework chỉ thêm tầng | Scrum@Scale Guide |
| Trục "thêm hay bớt điểm chặn" | đếm số tầng quản trị chỉ là đại lượng thay thế; muốn biết thật thì đếm trên một thay đổi cụ thể (SAFe gom quyết định vào một sự kiện chung) | số tầng là số điểm chặn | Bài 8 |
| Gỡ điểm phê duyệt | giảm số người có quyền nói không là **phán đoán giá trị**; một số điểm phê duyệt là hàng rào thật; phải kèm phép thử phân biệt | sự thật hiển nhiên | Bài 8 |
| Accountability ở cấp tổ chức | đặt accountability ở cấp điều kiện tổ chức là **phán đoán giá trị**; cách hỏng: ngôn ngữ hệ thống thành lớp bảo vệ cho người làm việc kém; phải kèm phép thử phân biệt | sự thật hiển nhiên | Bài 9 |
| Herbsleb & Mockus (2003) | đo **khoảng cách địa lý**; series chỉ mượn cơ chế "số người tham gia tăng thì thời gian hoàn thành tăng" | con số 2,5 lần như thể đo ranh giới team | Bài 8 |
| MacCormack và cộng sự | chỉ có năm cặp sản phẩm, không tách được yếu tố tổ chức nào quyết định | mirroring hypothesis đã chứng minh trên mẫu lớn | Bài 8 |
| Nền bằng chứng về large-scale agile | gần 90% là experience report (Dikert và cộng sự, 2016); viết với độ tự tin tương xứng | — | Bài 8 |
| Conway | *How Do Committees Invent?* bị Harvard Business Review **từ chối năm 1967**; Datamation đăng **tháng 4 năm 1968** | gộp hai mốc | Trang của Mel Conway; bài 8 |
| Deming 94/6 | **ước lượng từ kinh nghiệm** do chính Deming ghi ("I should estimate that in my experience") | số liệu nghiên cứu; "đã bị bác bỏ" | Bài 9 |
| DORA | hiện dùng **năm** chỉ số giao hàng phần mềm (gồm `deployment rework rate`, `failed deployment recovery time`); mô hình bốn chỉ số là bản cũ; dẫn DORA phải gắn ngày kiểm | "bốn chỉ số DORA" như bản hiện hành | DORA; bài 9 |

---

## 4. Chưa chốt

Những khái niệm các bài đang nói khác nhau mà chưa ai quyết.

- **Thứ tự bốn cách xử lý dependency.** Bài 8 xếp `Coordinate` xuống cuối, nhưng chính bài nêu một ca ngược lại (Spotify: ranh giới team gần đúng lý thuyết mà vẫn hỏng vì thiếu quy trình phối hợp giữa các team). Bài sau đụng tới thứ tự này phải xử lý căng thẳng đó, không lặp lại thứ tự như một quy tắc.
- **Phụ thuộc với series Công cụ và kỹ thuật quản lý.** Bài Agile / Scrum / Kanban của series `pages/reading-studying/management-tools-and-techniques/` trùng chủ đề với series này; khi bài đó được viết, hai series phải dùng cùng thuật ngữ theo file này.
