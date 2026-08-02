# Ngôn ngữ chung - Scrum, Agile and More

Cập nhật: 2026-08-02. Thư mục: `pages/information-technology/agile-software-development/scrum-agile-and-more/`.

**Trạng thái:** rà từ Scrum Guide 2020 (các mục về Scrum Team, events, Product Backlog) và từ bài 10 (toàn bộ), bài 7 (toàn bộ), bài 5 và bài 6 (một phần). **Chưa rà: bài 0, 1, 2, 3, 4, và phần lớn bài 5 và 6.** Bài 8 và bài 9 hiện mới là nội dung thô dạng markdown nằm trong file `.html`, chưa được draft. Thuật ngữ không có trong file này thì chưa được coi là đã kiểm; grep các file `.html` cùng thư mục rồi bổ sung vào đây.

Cách dùng và cách nuôi file: `.claude/mpp-writer/ubiquitous-language.md`.

---

## Quy ước chung của series

**Tiêu đề section tham khảo:** bản VN dùng `Tài Liệu Tham Khảo`, bản EN dùng `References`. Tác giả chốt ngày 2026-08-02, và toàn bộ series đã được sửa về đúng hai dạng này. Không dùng `Nguồn tham khảo` hay `Tài liệu tham chiếu` nữa.

**`page-meta`:** mọi bài trong series đều phải có. Nhãn `Cập nhật:` / `Updated:` cho bài đã tồn tại, `Đăng ngày:` / `Published:` cho bài mới. Định dạng hiển thị theo `html-menu-rules.md` mục 2.1. Bài 0, 1, 2 còn giữ định dạng cũ `dd/mm/yyyy` và nhãn `Published on:` ở bản EN; chưa chuẩn hoá vì các bản đó chưa được sửa nội dung.


Series giữ nguyên tên tiếng Anh của thuật ngữ Scrum và thuật ngữ quản trị công việc, giải thích bằng tiếng Việt ở lần xuất hiện đầu. Không dịch cưỡng ép. Các từ đang được giữ nguyên xuyên suốt: `accountability`, `outcome`, `timebox`, `empiricism`, `psychological safety`, `learning loop`, `decision-right`, `shared understanding`, `Increment`, `backlog`.

## Thuật ngữ

| Thuật ngữ | Trong bản tiếng Việt | Chốt nghĩa | Không được nói | Nguồn |
|---|---|---|---|---|
| Product Backlog Refinement | giữ nguyên, hoặc "Refinement" | Hoạt động liên tục để chia nhỏ và làm rõ thêm các Product Backlog Item | **Không gọi nó là Scrum event.** Bài 6 đã chốt: "Refinement không phải là một Scrum Event chính thức" | Scrum Guide 2020, mục Product Backlog; bài 6 ref-4 |
| Sprint | giữ nguyên | Event chứa bốn event còn lại | Không liệt kê Sprint ngang hàng với bốn event kia như thể chúng cùng cấp | Scrum Guide 2020 |
| Scrum event | giữ nguyên | Đúng bốn event nằm trong Sprint: Sprint Planning, Daily Scrum, Sprint Review, Sprint Retrospective | Không nói "năm event" khi đang tính cả Refinement | Scrum Guide 2020 |
| Daily Scrum | giữ nguyên | Event 15 phút của Developers, để kiểm tra tiến độ hướng tới Sprint Goal và điều chỉnh Sprint Backlog | Không mô tả nó như buổi báo cáo trạng thái cho một người | Scrum Guide 2020 |
| Sprint Review | giữ nguyên | Buổi kiểm tra kết quả Sprint và xác định điều chỉnh tiếp theo | Không gọi là buổi demo hay buổi trình chiếu. Scrum Guide nói rõ đây là buổi làm việc và team nên tránh thu hẹp nó thành trình chiếu | Scrum Guide 2020 |
| Sprint Retrospective | giữ nguyên | Buổi lên kế hoạch nâng chất lượng và hiệu quả; cải tiến quan trọng nhất được xử lý sớm nhất có thể, có thể đưa thẳng vào Sprint Backlog kế tiếp | Không mô tả nó chỉ như buổi nói ra cảm nhận | Scrum Guide 2020 |
| Sprint Planning | giữ nguyên | Mở đầu Sprint, trả lời ba câu: vì sao Sprint này có giá trị, hoàn thành được gì, công việc đã chọn làm thế nào | Không mô tả nó như buổi giao việc | Scrum Guide 2020 |
| accountability | giữ nguyên | Product Owner, Scrum Master, Developers là ba accountability **trong cùng một** Scrum Team | Không gọi chúng là ba nhóm chức năng, ba vai trò tách rời, hay ba lớp giao việc / thực hiện / kiểm tra | Scrum Guide 2020; bài 5 |
| Managers | giữ nguyên | Nằm ngoài Scrum, nhưng tạo điều kiện hệ thống: staffing, budget, policy, incentive, quyền quyết định | **Không gọi Managers là accountability thứ tư.** Bài 5 chốt điều này | Bài 5 |
| Scrum Team | giữ nguyên | Tự quản, tự quyết ai làm gì, khi nào, như thế nào; thường mười người trở xuống | Không mô tả team như đơn vị nhận việc từ bên ngoài | Scrum Guide 2020 |
| Definition of Done | giữ nguyên | Định nghĩa được viết ra và cả team cam kết về việc thế nào là xong | Không dùng lẫn với Acceptance Criteria của một item | Scrum Guide 2020 |
| Product Goal / Sprint Goal | giữ nguyên | Mục tiêu dài hạn của sản phẩm / mục tiêu duy nhất của một Sprint | Không dùng thay cho nhau | Scrum Guide 2020 |
| meeting brief | giữ nguyên | Khung mô tả một buổi họp trong bài 6: Title, Objective, Expected Result, Context, Input, Attendees, Agenda, Logistics, Decisions and Follow-up | Không gọi là "biên bản họp"; brief viết trước buổi, biên bản viết sau | Bài 6 |
| cơ chế quyết định | giữ nguyên "cơ chế", không dịch "decision mechanism" | Cách một quyết định được đưa ra: một người quyết, consent, biểu quyết, hoặc một thử nghiệm có thời hạn. Phải chốt trước khi bất đồng xảy ra | Không quy về "ai là người quyết". Uỷ quyền cho một cá nhân chỉ là một trong các cơ chế, và cách nói đó loại mất consent với quyết định tập thể | Bài 10 |
| minimum viable \<event\> | giữ nguyên | Phiên bản tối giản của một event mà vẫn giữ được purpose của nó, dùng nhất quán ở bài 6 | Không dịch thành "phiên bản rút gọn", vì rút gọn có thể làm mất purpose | Bài 6 |
| AI Agent | giữ nguyên, viết hoa `Agent` khi đứng một mình | Hệ thống dùng mô hình ngôn ngữ để tự thực hiện một chuỗi công việc phát triển sản phẩm (viết code, test, phân tích, cập nhật tài liệu) dưới sự điều phối của người | **Không gọi Agent là một thành viên của Scrum Team** và không gán accountability cho Agent. Bài 7 chốt: đặt tên Agent theo ba accountability không làm chúng có accountability | Bài 7 |
| capability / accountability / authority / legitimacy | giữ nguyên cả bốn | Bốn tầng bài 7 dùng để tách chữ "thay thế": làm được việc gì / chịu trách nhiệm kết quả / có quyền chốt / được stakeholder chấp nhận. Tính tới 8/2026, AI chỉ tiến nhanh ở tầng đầu | Không gộp bốn tầng thành "vai trò". Không dùng phân biệt này như bức tường để mọi phản biện đều bị đẩy về "đó chỉ là capability"; bài 7 đã tự đặt hai điều kiện để lập luận sai | Bài 7 |
| Spec-Driven Development (SDD) | giữ nguyên, viết tắt SDD sau lần đầu | Cách làm đặt specification làm artifact chính, code là biểu hiện của nó trong một ngôn ngữ cụ thể | Không mô tả SDD là "waterfall bằng AI" như một sự thật. Bài 7 chốt: SDD thành waterfall **chỉ khi** spec bị đóng băng trước khi có phần mềm chạy được để đối chiếu | GitHub Spec Kit, `spec-driven.md`; bài 7 ref-8 |
| specification | giữ nguyên, không dịch thành "tài liệu" | Trong ngữ cảnh AI, một artifact vừa để người trao đổi, vừa là context cho Agent, vừa là input lập kế hoạch, nguồn sinh test, tiêu chuẩn đối chiếu và dấu vết thiết kế | **Không đánh đồng `specification` của SDD với `documentation` trong Agile Manifesto.** Bài 7 chốt chúng khác loại vì specification tham gia trực tiếp vào việc tạo và kiểm chứng phần mềm | Agile Manifesto; bài 7 |
| execution context | giữ nguyên | Hình dạng thực tế của Sprint Backlog khi phần thực thi do Agent làm: Sprint Goal, đặc tả, ràng buộc, bối cảnh kiến trúc, acceptance criteria, chiến lược test, kế hoạch Agent đang chạy, trạng thái | Không nói execution context **thay thế** Sprint Backlog. Nó là cách Sprint Backlog trông ra sao; quyền sở hữu vẫn thuộc Developers | Bài 7 |
| Validated Learning Lead Time | giữ nguyên | Thời gian từ lúc hình thành một giả định đến lúc có đủ bằng chứng để giữ, sửa hoặc bác bỏ nó. **Thuật ngữ do bài 7 đề xuất** | Không trình bày như một chỉ số đã có nghiên cứu đứng sau. Bài 7 đã nói rõ đây là đề xuất chưa được kiểm chứng | Bài 7 |
| moral crumple zone | giữ nguyên, kèm giải thích "vùng hấp thụ đạo đức" ở lần đầu | Tình trạng trách nhiệm bị dồn về con người đứng gần hệ thống tự động nhất, trong khi người đó có ít quyền kiểm soát nhất | Không dùng như một phép ẩn dụ tuỳ hứng; đây là khái niệm có nguồn (Elish 2019) và bài 7 dùng nó để tự phản biện chính mình | Elish (2019); bài 7 ref-13 |

## Tuyên bố series đã cam kết

| Tuyên bố | Bài chốt nó |
|---|---|
| Refinement không phải Scrum Event chính thức | Bài 6 |
| Managers không phải accountability thứ tư trong Scrum | Bài 5 |
| Event là cơ chế empiricism, không phải lịch họp bắt buộc; purpose mất thì ceremony vẫn chạy đúng lịch mà team không học được gì | Bài 6 |
| Chỉ có một mục tiêu đáng hướng tới trong Scrum Team: Product Goal | Bài 5 |
| Đo lường trong series này dùng để học, không dùng để chấm điểm cá nhân | Bài 0 (theo `series-improvement-backlog.md`, chưa đọc trực tiếp) |
| Bài 6 dựng khung của buổi họp; bài 10 bàn thứ diễn ra bên trong khung | Bài 6 và bài 10 |
| Trong năm mục Refinement / Planning / Daily / Review / Retrospective, Refinement là mục duy nhất Scrum Guide 2020 không gán timebox, không gán nhịp lặp cố định, và không định nghĩa nhóm người phải có mặt. Bốn mục kia có đủ cả ba | Bài 10 (kiểm trực tiếp từ Scrum Guide 2026-08-02) |
| AI không gánh được accountability; Agent không phải thành viên Scrum Team. Nhưng số **người** cần để gánh accountability đó thì giảm, và giảm rõ nhất ở Developers | Bài 7 |
| Con số "AI làm lập trình viên chậm hơn 19%" (METR, 2025) **không được trình bày như một ước lượng hiện hành**. Nhưng cũng **không được nói là nó đã bị chứng minh sai**: METR đổi thiết kế thí nghiệm vì thiên lệch chọn mẫu ở lần chạy sau, kết quả cũ vẫn đúng trong phạm vi của nó và chỉ hết hạn | Bài 7 (kiểm trực tiếp 2026-08-02) |
| Trong Scrum Guide, `commitment` là thuật ngữ gắn với artifact (Product Goal, Sprint Goal, Definition of Done). Bốn nội dung của Developers là thứ họ `always accountable for`, **không được gọi là "bốn cam kết"** | Bài 7 (kiểm trực tiếp từ Scrum Guide 2026-08-02) |
| Scrum **tạo cơ hội chính thức** để inspect và adapt, **không bảo đảm** team có giả định kiểm chứng được hay thu được bằng chứng thật. Không viết "Scrum buộc..." | Bài 7 |
| Sprint Review yêu cầu **key stakeholders**, không yêu cầu người dùng cuối. Muốn đòi người dùng cuối thì phải ghi rõ đó là khuyến nghị của tác giả | Bài 7 (Scrum Guide 2020) |
| Mọi tuyên bố về năng lực AI trong series gắn mốc **tháng 8 năm 2026**. Bài sau muốn nói khác phải gắn mốc mới, không được sửa ngầm | Bài 7 |
| Definition of Done, khi tốc độ sinh code vượt tốc độ người đọc code, đóng vai trò một bộ điều tốc chứ không chỉ một danh sách chất lượng | Bài 7 |

## Chưa chốt

- **Bài 1 và bài 2 không có `page-meta` theo định dạng hiện hành** (còn `dd/mm/yyyy` và nhãn `Published on:` ở bản EN). Chưa chuẩn hoá vì hai bài đó chưa được sửa nội dung.
- **Bài 1 và bài 2 không có section tham khảo** ở cả hai bản ngôn ngữ. Chưa rõ là chủ ý hay thiếu sót.
- **Chưa rà bài 0, 1, 2, 3, 4.** Thuật ngữ về Product Owner, Scrum Master và Developers gần như chắc chắn đã được định nghĩa ở đó và chưa có mặt trong bảng trên.
- **"Case Mars".** Tác giả nhắc tới nó trong nội dung thô của bài 7 như một ca thật minh hoạ chuỗi Testing Agent → Support Agent → Development Agent → Spec Agent. Trong repo, `Mars AI Support Tool` chỉ xuất hiện ở bài 6 như một ví dụ đặt tên meeting, không có mô tả ca nào. Bài 7 hiện viết đoạn đó ở dạng pattern chung và có gắn `<!-- CẦN XÁC MINH -->`. Chờ tác giả cung cấp chi tiết thật.
- **Bài 7 mới có bản VN.** Bản EN (`7-scrum-AI-and-developer-productivity.html`) vẫn đang là nội dung thô dạng markdown, chưa dịch. Cả hai bản đều chưa đăng ký menu.
