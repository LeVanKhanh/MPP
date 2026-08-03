# Ngôn ngữ chung - Scrum, Agile and More

Cập nhật: 2026-08-03. Thư mục: `pages/information-technology/agile-software-development/scrum-agile-and-more/`.

**Trạng thái:** rà từ Scrum Guide 2020 (các mục về Scrum Team, events, Product Backlog, và phần nhiều Scrum Team cùng một sản phẩm) và từ bài 10 (toàn bộ), bài 7 (toàn bộ), bài 8 (toàn bộ), bài 5 và bài 6 (một phần). **Chưa rà: bài 0, 1, 2, 3, 4, và phần lớn bài 5 và 6.** Bài 9 hiện mới là nội dung thô dạng markdown nằm trong file `.html`, chưa được draft. Thuật ngữ không có trong file này thì chưa được coi là đã kiểm; grep các file `.html` cùng thư mục rồi bổ sung vào đây.

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
| dependency | giữ nguyên, không dịch thành "sự phụ thuộc" khi đứng như thuật ngữ | Tình trạng một team không hoàn thành được phần việc của mình nếu chưa có thứ do bên ngoài team cung cấp | Không đo dependency bằng số đường nối trên bảng. Bài 8 chốt: chi phí nằm ở mức nó làm gián đoạn dòng giá trị, không ở số lượng | Bài 8 |
| ba loại chờ (chờ artifact / chờ năng lực / chờ quyết định) | giữ nguyên cách gọi này | Cách phân loại dependency theo **thứ đang bị chờ** chứ không theo nơi nó phát sinh. **Thuật ngữ do bài 8 đề xuất**, thay cho cách chia sáu loại theo nguồn gốc | Không trình bày như một phân loại đã có trong tài liệu ngành. Không nói cả ba loại xử lý được bằng cùng một cách; điểm của phân loại này là ba loại có ba chi phí gỡ khác nhau | Bài 8 |
| feature team / component team | giữ nguyên cả hai | Feature team: team dài hạn, cross-functional, cross-component, hoàn thành từng lát cắt giá trị end-to-end. Component team: team tổ chức quanh một tầng hoặc một thành phần kỹ thuật | **Không trình bày feature team là đúng và component team là sai.** Bài 8 chốt: mục tiêu là để phần lớn thay đổi có giá trị hoàn thành được trong một team, không phải tạo ra team hoàn toàn độc lập. Định nghĩa trong LeSS là cách trình bày của một phía, phải gắn nhãn như vậy | LeSS; bài 8 ref-7 |
| stream-aligned / platform / enabling / complicated-subsystem team | giữ nguyên cả bốn | Bốn kiểu team trong Team Topologies | Không dùng bốn tên này như nhãn đổi tên cho cơ cấu cũ. Bài 8 chốt: một platform team mà mọi yêu cầu vẫn phải gửi ticket và chờ xếp lịch là component team đã đổi biển | Skelton & Pais (2019); bài 8 ref-8 |
| Collaboration / X-as-a-Service / Facilitating | giữ nguyên cả ba | Ba kiểu tương tác giữa các team trong Team Topologies | Không nói ba kiểu này xử lý được mọi loại dependency. Bài 8 chốt: không kiểu nào trong ba xử lý được việc chờ một quyết định | Skelton & Pais (2019); bài 8 ref-8 |
| cognitive load | giữ nguyên | Giới hạn về lượng phức tạp một team gánh được; tiêu chí để đánh giá một platform có ích hay không | Không dịch thành "tải trí tuệ" hay "áp lực công việc"; đây là khái niệm có nghĩa hẹp trong Team Topologies | Skelton & Pais (2019); bài 8 ref-8 |
| Integrated Increment | giữ nguyên | Trong Nexus: tổng phần việc đã tích hợp của các Scrum Team trong một Nexus, tạo ra ít nhất một lần mỗi Sprint | Không dùng lẫn với `Increment` của Scrum Guide. Integrated Increment là thuật ngữ của Nexus, không có trong Scrum Guide | Nexus Guide 2021; bài 8 ref-10 |
| scaling framework | giữ nguyên | Nexus, LeSS, Scrum@Scale, SAFe và các khung tương tự | Không so sánh chúng theo "nặng hay nhẹ". Bài 8 chốt trục so sánh: sau khi áp dụng, một thay đổi có giá trị phải đi qua nhiều hay ít **điểm chặn** hơn trước | Bài 8 |
| điểm chặn (quyết định) | "điểm chặn"; cách nói thường là "người có quyền nói không" | Chỗ mà công việc không đi tiếp được nếu chưa có sự cho phép, sự xếp ưu tiên, hoặc sự chấp nhận rủi ro từ một người bên ngoài team. **Thuật ngữ do bài 8 đặt ra** | **Không dùng lẫn với ba đại lượng khác**: số người phải trao đổi, số ranh giới kỹ thuật phải vượt, số tầng quản trị. Một người được hỏi ý kiến không phải một điểm chặn. Không dùng biến thể "điểm phải gật đầu"; bài 8 đã chuẩn hoá về một tên duy nhất | Bài 8 |
| decision latency / commitment latency | giữ nguyên cả hai | Thời gian từ lúc nêu một yêu cầu quyết định tới lúc có câu trả lời; và thời gian từ lúc ghi nhận một nhu cầu tới lúc nó nằm trong một backlog đã xếp thứ tự | Không đo phần chờ quyết định bằng "thời gian bị chặn" của một item đã vào hệ thống; chỉ số đó bắt đầu đếm quá muộn | Bài 8; `decision latency` cũng là chữ của Scrum@Scale Guide |

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
| Scrum Guide 2020 nói: nhiều Scrum Team cùng một sản phẩm thì **phải dùng chung một Definition of Done**, và **nên chung Product Goal, Product Backlog, Product Owner**. Hai câu này có mức ràng buộc khác nhau (`must` và `should`), không được trình bày như nhau | Bài 8 (kiểm trực tiếp từ Scrum Guide 2026-08-03) |
| Scrum Guide không có khái niệm "Done cấp team". Definition of Done gắn với Increment | Bài 8 |
| Nexus Guide 2021 tự nói rằng **thu nhỏ** số người làm một việc có thể là cách tạo thêm giá trị. Không được trình bày các scaling framework như thể chúng luôn khuyến khích thêm người và thêm tầng | Bài 8 (kiểm trực tiếp từ Nexus Guide 2021) |
| Herbsleb & Mockus (2003) đo **khoảng cách địa lý**, không đo ranh giới team. Series chỉ mượn cơ chế "số người tham gia một hạng mục tăng thì thời gian hoàn thành tăng", không được dùng con số 2,5 lần như thể nó đo cross-team | Bài 8 |
| MacCormack và cộng sự chỉ có **năm cặp sản phẩm**, và thiết kế nghiên cứu không tách được yếu tố tổ chức nào là quyết định. Không được trình bày mirroring hypothesis như đã chứng minh trên mẫu lớn | Bài 8 |
| Gần 90% tài liệu về large-scale agile là experience report chứ không phải nghiên cứu có thiết kế chặt (Dikert và cộng sự, 2016). Series không được viết về scaling với độ tự tin cao hơn nền bằng chứng | Bài 8 |
| Việc giảm số người có quyền nói không là một **phán đoán giá trị**, không phải một sự thật. Một số điểm phê duyệt là hàng rào thật. Bài nào bàn tới việc gỡ bỏ chúng đều phải kèm phép thử phân biệt | Bài 8 |
| Thứ tự chi phí giữa ba loại chờ (artifact rẻ nhất, quyết định đắt nhất) là **giả thuyết của series**, không phải kết quả đo. Nó sai ở tổ chức có kiến trúc rối tới mức mọi thay đổi lan ra nhiều service. Bài sau dùng lại thứ tự này phải giữ nhãn giả thuyết | Bài 8 |
| Giữa "đổi người giữ quyền" và "họp thêm" còn một lớp: **đổi cơ chế quyết định mà không đổi người** (consent, thử nghiệm có thời hạn, hạn mức, thời hạn phản đối, danh sách duyệt trước). Không được trình bày chờ quyết định như thể chỉ gỡ được bằng tái cấu trúc | Bài 8, nối vào bài 10 và bài 5 |
| Trục "framework thêm hay bớt điểm chặn" đo **số tầng quản trị**, và đó chỉ là đại lượng thay thế. SAFe gom quyết định vào một sự kiện chung nên có thể giảm số lần phải xin dù tăng số tầng. Muốn biết thật thì đếm trên một thay đổi cụ thể | Bài 8 |
| Conway gửi *How Do Committees Invent?* cho Harvard Business Review và **bị từ chối năm 1967**; Datamation đăng **tháng 4 năm 1968**. Hai mốc này khác nhau, đừng gộp | Bài 8 (kiểm trực tiếp từ trang của Mel Conway 2026-08-03) |
| Increment chỉ dừng ở mức `thoroughly verified` và `usable`. **Không được viết Increment đồng nghĩa với "đã kiểm chứng được giá trị"**. Và vì `Multiple Increments may be created within a Sprint`, một lát cắt trung gian đã tích hợp, dùng được, đạt Definition of Done vẫn là Increment hợp lệ; thứ sai là gọi mảnh *chưa tích hợp* là Done | Bài 8 (Scrum Guide 2020) |
| Scrum Guide dùng `should share` cho Product Goal / Product Backlog / Product Owner. **Không được suy ra rằng nhiều Product Owner trên một sản phẩm thì không còn là Scrum Team.** Đó là cấu hình lệch khỏi khuyến nghị, không phải cấu hình bị cấm | Bài 8 |
| Scrum@Scale **tự đặt mục tiêu giảm `decision latency`**. Không được mô tả nó như một framework chỉ thêm tầng; mô tả một framework phải đọc cả phần nó tuyên bố về mục đích của cấu trúc đó | Bài 8 (Scrum@Scale Guide) |

## Chưa chốt

- **Bài 1 và bài 2 không có `page-meta` theo định dạng hiện hành** (còn `dd/mm/yyyy` và nhãn `Published on:` ở bản EN). Chưa chuẩn hoá vì hai bài đó chưa được sửa nội dung.
- **Bài 1 và bài 2 không có section tham khảo** ở cả hai bản ngôn ngữ. Chưa rõ là chủ ý hay thiếu sót.
- **Chưa rà bài 0, 1, 2, 3, 4.** Thuật ngữ về Product Owner, Scrum Master và Developers gần như chắc chắn đã được định nghĩa ở đó và chưa có mặt trong bảng trên.
- **"Case Mars".** Tác giả nhắc tới nó trong nội dung thô của bài 7 như một ca thật minh hoạ chuỗi Testing Agent → Support Agent → Development Agent → Spec Agent. Trong repo, `Mars AI Support Tool` chỉ xuất hiện ở bài 6 như một ví dụ đặt tên meeting, không có mô tả ca nào. Bài 7 hiện viết đoạn đó ở dạng pattern chung và có gắn `<!-- CẦN XÁC MINH -->`. Chờ tác giả cung cấp chi tiết thật.
- **Bài 7 mới có bản VN.** Bản EN (`7-scrum-AI-and-developer-productivity.html`) vẫn đang là nội dung thô dạng markdown, chưa dịch. Bản VN đã có trong `main-menu-vn.js`.
- **Bài 8 đã xong cả hai bản và đã vào menu** (2026-08-03), hash chung `#/scrum-agile-and-more-beyond-one-team`. Bản EN do tác giả tự viết, đã rà xong em dash. Không còn mục nào treo ở bài 8 ngoài thứ tự section (mục ngay trên).
- **Thứ tự section của bài 8 chưa khớp với mô hình mà chính nội dung thô của tác giả đề ra.** Mô hình là `Product boundary → Team boundary → Technical boundary → Coordination mechanism → Scaling framework`, nhưng bài đang đặt phần "Một Product hay nhiều Product" *sau* phần bốn cách xử lý. Chờ tác giả quyết có đổi chỗ không.
- **Bài 8 xếp `Coordinate` xuống vị trí cuối trong bốn cách xử lý dependency, nhưng chính bài tự nêu một ca ngược lại** (Spotify: ranh giới team gần đúng lý thuyết mà vẫn hỏng vì không có quy trình chung cho phối hợp giữa các team). Thứ tự bốn bước vì vậy chưa được coi là đã chốt cho series. Bài 9 nếu đụng tới thứ tự này phải xử lý căng thẳng đó chứ không lặp lại thứ tự như một quy tắc.
- **Bài 8 cố ý không có ca thật.** Tác giả chốt ngày 2026-08-03: bài 8 đứng ở vị trí **bài đọc nghiên cứu, phần mở rộng của series**, không phải playbook thực hành, và chưa đưa ca từ công việc thật vào. Đây là quyết định về phạm vi, không phải chỗ thiếu cần lấp. Hệ quả khi review bài này và các bài mở rộng cùng loại: không trừ điểm vì thiếu quan sát cá nhân; `voice-guide` mục 4.4 vẫn được đáp ứng qua vế thứ ba của nó là "một cách đọc khác với cách đọc phổ biến". Cũng đừng đề xuất cắt bớt phần giới hạn bằng chứng cho gọn: với loại bài này, mật độ dè dặt là đặc tính chứ không phải chỗ thừa.
