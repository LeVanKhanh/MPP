# Ngôn ngữ chung - Scrum, Agile and More

Cập nhật: 2026-08-02. Thư mục: `pages/information-technology/agile-software-development/scrum-agile-and-more/`.

**Trạng thái:** rà từ Scrum Guide 2020 (các mục về Scrum Team, events, Product Backlog) và từ bài 10 (toàn bộ), bài 5 và bài 6 (một phần). **Chưa rà: bài 0, 1, 2, 3, 4, và phần lớn bài 5 và 6.** Thuật ngữ không có trong file này thì chưa được coi là đã kiểm; grep các file `.html` cùng thư mục rồi bổ sung vào đây.

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

## Chưa chốt

- **Bài 1 và bài 2 không có `page-meta` theo định dạng hiện hành** (còn `dd/mm/yyyy` và nhãn `Published on:` ở bản EN). Chưa chuẩn hoá vì hai bài đó chưa được sửa nội dung.
- **Bài 1 và bài 2 không có section tham khảo** ở cả hai bản ngôn ngữ. Chưa rõ là chủ ý hay thiếu sót.
- **Chưa rà bài 0, 1, 2, 3, 4.** Thuật ngữ về Product Owner, Scrum Master và Developers gần như chắc chắn đã được định nghĩa ở đó và chưa có mặt trong bảng trên.
