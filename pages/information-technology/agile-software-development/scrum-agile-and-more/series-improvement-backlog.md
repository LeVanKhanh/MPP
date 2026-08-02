# Scrum, Agile and More — Improvement Backlog

## Goal

Nâng series từ một tập hợp bài thought leadership về Scrum thành một practical playbook có thể dùng trong team và tổ chức:

- đúng với Scrum Guide nhưng không biến Scrum Guide thành giới hạn duy nhất;
- phân biệt rõ nội dung chính thức của Scrum với phần mở rộng của tác giả;
- dùng measurement để học và cải thiện, không để chấm điểm hoặc quy trách nhiệm máy móc;
- nối được accountability, decision-right, capability, flow, product outcome và system ownership;
- có thể áp dụng từng bước, với minimum viable practice, guardrails, case và câu hỏi phản tư;
- phù hợp với AI, scaling và bối cảnh tổ chức hiện đại.

## Review snapshot — 2026-08-02

### Overall assessment

Series đã vượt qua giai đoạn “thought leadership thuần túy”. Các bài hiện tại đã hình thành một hệ thống tương đối nhất quán gồm:

- Scrum làm lộ vấn đề hệ thống thay vì tự giải quyết mọi vấn đề;
- learning over judgement;
- accountability không đồng nghĩa với toàn quyền kiểm soát outcome;
- measurement là tín hiệu có ngữ cảnh, không phải điểm hiệu suất;
- managers là system owners bên ngoài Scrum Team;
- mỗi khung quan sát cần dẫn đến decision, experiment, owner và review point;
- Scrum Events được trình bày như learning loop thay vì chuỗi ceremony;
- thảo luận, bất đồng và decision-making được xem là năng lực vận hành cắt ngang toàn series.

Điểm mạnh nhất hiện nay là sự kết nối giữa Scrum, product thinking, engineering sustainability, people development và organizational design. Khoảng trống lớn nhất không còn là “thiếu nội dung”, mà là:

1. một số phát biểu cần phân biệt chính xác hơn giữa Scrum Guide và diễn giải thực hành;
2. vài decision-right và event boundary cần chỉnh để tránh tạo ra quy tắc trái với Scrum;
3. lớp measurement cá nhân cần thêm governance và bảo vệ dữ liệu;
4. navigation, thuật ngữ và kiến trúc series chưa đồng nhất;
5. series chưa có một bài riêng về Artifacts và Commitments, dù nhiều bài đang dựa vào chúng.

### Current article status

| Article | Current strength | Main remaining work |
| --- | --- | --- |
| `0-introduction-vn.html` | Đã đặt đúng scope, learning over judgement và measurement guardrails | Sửa route bài tiếp theo, thêm series map, cập nhật DORA hiện hành |
| `1-scrum-team-product-owner-vn.html` | Outcome/discovery/flow/decision-quality framework tốt; có rubric, guardrails và case | Làm rõ quyền PO khi có urgent work; tách Scrum Guide khỏi product-management extension |
| `2-scrum-team-scrum-master-vn.html` | Đã tách capability/team/system; có minimum viable practice, maturity rubric và misuse guardrails | Sửa thuật ngữ 2020 và logic “điều kiện cần/đủ”; mở rộng intervention options |
| `3-scrum-team-development-team-vn.html` | Khung team-level toàn diện; tách individual/team/system; bảo vệ technical sustainability | Cập nhật DORA năm metric; phân biệt accountability chính thức với khuyến nghị product collaboration |
| `4-scrum-team-development-team-personal-observation-vn.html` | Growth rubric mạnh, không cộng điểm, có calibration và system context | Đổi thuật ngữ Development Team; thêm data governance và giảm opportunity/attribution bias |
| `5-collaboration-across-scrum-accountabilities-vn.html` | Bài tổng hợp tốt nhất về accountability/influence/decision-right/system ownership | Làm rõ hierarchy Product Goal–Sprint Goal–Definition of Done; tránh câu “chỉ có một mục tiêu” quá tuyệt đối |
| `6-scrum-events-and-activities-vn.html` | Practical playbook rất đầy đủ; mỗi event có brief, minimum practice, questions và anti-patterns | Bổ sung timebox chính thức; sửa event boundary và participant semantics; phân biệt Scrum rule với meeting option |
| `10-effective-conversation-discussion-vn.html` | Lập luận sâu, nguồn tốt, có phản biện giới hạn của chính mô hình và nối được với Scrum | Thêm minimum template dùng ngay; qualify một số khuyến nghị phụ thuộc bối cảnh; đưa vào series map |

### Review basis

- [The Scrum Guide 2020 — current official guide](https://scrumguides.org/scrum-guide.html)
- [Evidence-Based Management Guide 2024](https://www.scrum.org/resources/evidence-based-management-guide)
- [DORA software delivery performance metrics — current guidance](https://dora.dev/guides/dora-metrics/)

## Priority 0 — Correctness and release blockers

### Scrum Guide alignment

- [ ] Product Owner article:
  - [ ] Tách câu “theo Scrum Guide” khỏi các kỳ vọng mở rộng như hiểu thị trường, user research và product discovery; giữ các nội dung này nhưng ghi rõ là practical product-management extension.
  - [ ] Sửa bảng urgent work: Manager/business owner có thể tạo constraint hoặc yêu cầu chiến lược, nhưng không nên được mô tả như người thay PO quyết định thứ tự Product Backlog.
  - [ ] Nêu rõ only Product Owner can cancel a Sprint khi Sprint Goal trở nên obsolete; trong Sprint, scope có thể được làm rõ và thương lượng lại giữa PO và Developers miễn không gây nguy hiểm cho Sprint Goal.
  - [ ] Phân biệt Product Goal/Product Backlog accountability của PO với strategy, funding, pricing và policy có thể thuộc organizational system owner.
- [ ] Scrum Master article:
  - [ ] Đổi `self-organizing` thành `self-managing` khi mô tả Scrum Guide 2020; chỉ dùng self-organizing khi bàn lịch sử hoặc một phạm vi hẹp có giải thích.
  - [ ] Thay “trao quyền là điều kiện cần / năng lực là điều kiện đủ” bằng mô hình các điều kiện cùng đóng góp; năng lực Scrum Master không tự nó đủ nếu decision-right, trust hoặc organizational support không tồn tại.
  - [ ] Phân biệt “bảo vệ team khỏi gián đoạn” là cách diễn giải thực hành với accountability chính thức của Scrum Master: establishing Scrum, improving Scrum Team effectiveness và causing impediment removal.
- [ ] Developers articles:
  - [ ] Đổi `Development Team` sang `Developers` hoặc `Scrum Team` trong title, metadata và nội dung theo thuật ngữ Scrum Guide 2020.
  - [ ] Gắn nhãn rõ: product discovery, solution challenge và post-release learning là khuyến nghị để tăng hiệu quả product team, không phải danh sách accountability nguyên văn của Scrum Guide.
- [ ] Collaboration article:
  - [ ] Sửa heading “Chỉ có một mục tiêu: Product Goal” để phản ánh đúng hierarchy: Product Goal định hướng dài hơn; Sprint Goal tạo focus trong Sprint; Definition of Done bảo vệ chất lượng Increment.
  - [ ] Giữ luận điểm one team/one product direction nhưng không làm mờ Sprint Goal hoặc các commitments khác.
- [ ] Scrum Events article:
  - [ ] Sửa `Sprint kết thúc hoặc gần kết thúc` ở Sprint Review: Review diễn ra trong Sprint; Retrospective kết thúc Sprint.
  - [ ] Sửa `Sprint vừa kết thúc` ở Retrospective: Sprint chưa kết thúc trước Retrospective.
  - [ ] Bổ sung timebox chính thức cho Sprint, Sprint Planning, Daily Scrum, Sprint Review và Sprint Retrospective; ghi rõ event của Sprint ngắn hơn thường ngắn hơn.
  - [ ] Làm rõ Daily Scrum là event 15 phút cho Developers; PO hoặc Scrum Master chỉ tham gia như Developers khi đang làm việc trên Sprint Backlog. Observer không được mô tả như participant mặc định.
  - [ ] Làm rõ Scrum Team tạo Sprint Goal cùng nhau; Developers chọn Product Backlog Items cho Sprint và tạo Sprint Backlog.
  - [ ] Bổ sung Sprint cancellation và scope adaptation để hoàn thiện vòng đời Sprint.
  - [ ] Gắn nhãn `Required by Scrum` và `Optional meeting design` cho facilitator, note taker, decision maker, pre-read và agenda để tránh biến hướng dẫn thực hành thành quy tắc Scrum mới.
- [ ] Effective Conversation article:
  - [ ] Kiểm tra lại câu “bốn event có đủ timebox, nhịp lặp và nhóm người phải có mặt” để diễn đạt chính xác participant semantics của từng event.
  - [ ] Giữ incident command như một ví dụ phụ thuộc bối cảnh, không như quy luật cho mọi incident hoặc mọi tổ chức.

### Reference currency

- [ ] Thay tài liệu Four Keys 2020 trong Introduction và Developers article bằng hướng dẫn DORA hiện hành.
- [ ] Cập nhật mô hình từ bốn lên năm software delivery performance metrics, bao gồm deployment rework rate, hoặc ghi rõ khi đang nói về mô hình lịch sử Four Keys.
- [ ] Thêm ngày truy cập hoặc version cho các nguồn sống có thể thay đổi như DORA, EBM và Scrum.org resources.

### Navigation and technical QA

- [ ] Sửa link ở cuối `0-introduction-vn.html` từ `1-scrum-team-product-owner.html` sang đúng Vietnamese route.
- [ ] Kiểm tra toàn bộ internal links theo cả hai hướng và bảo đảm Vietnamese page không vô tình trỏ sang English page.
- [ ] Xác nhận canonical order và chủ ý đánh số từ `6` sang `10`; nếu `7–9` chưa xuất bản, hiển thị roadmap hoặc bỏ số khỏi URL/title công khai.
- [ ] Chạy HTML parse/validation, anchor validation, duplicate-id check và table-width check cho toàn series trước mỗi release.
- [ ] Kiểm tra responsive rendering cho các bảng 4–5 cột trên mobile.

## Priority 1 — Measurement safety and governance

### Completed foundation

- [x] Introduction có learning over judgement và measurement anti-abuse disclaimer.
- [x] Product Owner có outcome/discovery/flow/decision-quality framework, rubric, minimum practice và guardrails.
- [x] Scrum Master đã tách capability, team maturity và organizational enablement; có minimum practice và misuse risks.
- [x] Developers đã bỏ fixed percentage scoring, tách individual/team/system và dùng development rubric.
- [x] Individual capability article không cộng điểm và có calibration, evidence, system context, right to respond và guardrails.
- [x] Mỗi khung quan sát chính đều nhấn mạnh trend, context và action thay vì single metric judgement.

### Remaining safety work

- [ ] Create article: **Measurement in Scrum — Signals for Learning, Not Scores for Judgement**.
- [ ] Thêm một `Measurement Design Card` dùng chung:
  - [ ] Câu hỏi cần học hoặc quyết định cần cải thiện.
  - [ ] Unit of analysis: individual, team, product hay system.
  - [ ] Signal và nguồn dữ liệu.
  - [ ] Context/segmentation cần giữ lại.
  - [ ] Người có quyền giải thích dữ liệu.
  - [ ] Hành động hoặc experiment có thể thực hiện.
  - [ ] Side effects/gaming cần theo dõi.
  - [ ] Review date và điều kiện ngừng đo.
- [ ] Bổ sung data governance cho individual capability:
  - [ ] Ai được xem dữ liệu và vì mục đích gì.
  - [ ] Dữ liệu được giữ bao lâu, sửa hoặc phản hồi bằng cách nào.
  - [ ] Không thu thập private communication hoặc surveillance data chỉ vì có thể thu thập.
  - [ ] Không dùng automated score hoặc AI inference làm bằng chứng duy nhất cho compensation, promotion hoặc discipline.
- [ ] Kiểm tra opportunity bias: người được giao dự án nổi bật, incident lớn hoặc mentoring chính thức có nhiều evidence hơn nhưng không mặc nhiên có năng lực cao hơn.
- [ ] Kiểm tra attribution bias: defect, incident, cycle time và rework thường là kết quả hệ thống; không gắn một chiều vào người có tên trên ticket/commit.
- [ ] Rà lại các tín hiệu như “hoàn thành cam kết đúng hạn”, PR, test coverage, defect leakage và incident để bảo đảm chúng luôn đi kèm complexity, role scope, team context và opportunity.
- [ ] Thêm ví dụ về metric tạo hành vi xấu và cách retire metric khi nó không còn giúp ra quyết định.

## Priority 2 — Series architecture and editorial consistency

- [ ] Thêm `Series map` ở Introduction và cuối mỗi bài:
  - [ ] Foundation and measurement.
  - [ ] Product Owner.
  - [ ] Scrum Master.
  - [ ] Developers.
  - [ ] Individual capability.
  - [ ] Collaboration and decision rights.
  - [ ] Scrum Events and Activities.
  - [ ] Effective Conversation and Discussion.
  - [ ] Planned articles.
- [ ] Tạo shared glossary cho các từ được dùng xuyên series: accountability, responsibility, influence, decision-right, system owner, outcome, output, signal, metric, evidence, experiment, self-management, Product Goal, Sprint Goal và Definition of Done.
- [ ] Dùng visual label nhất quán trong mỗi bài:
  - [ ] `Scrum Guide` — nội dung chính thức.
  - [ ] `Practical extension` — cách áp dụng hoặc mở rộng của tác giả.
  - [ ] `Guardrail` — ranh giới chống lạm dụng.
  - [ ] `Example` — tình huống minh họa, không phải quy tắc phổ quát.
- [ ] Chuẩn hóa title, subtitle, publish/update date, reference heading, summary, reflection questions và next/previous navigation.
- [ ] Giảm lặp lại các đoạn measurement disclaimer dài; giữ short guardrail tại bài và link về bài Measurement chung.
- [ ] Quyết định audience chính cho từng bài: practitioner playbook, leadership essay hay people-management framework; ghi rõ ở đầu bài.
- [ ] Tạo shared references page theo nhóm nguồn, nhưng vẫn giữ citation gần claim trong từng bài.

## Priority 3 — Article-specific improvements

### Introduction

- [ ] Thêm series map và hướng đọc theo problem, không chỉ theo thứ tự bài.
- [ ] Nêu rõ article 4 là people-management extension bên ngoài Scrum, không phải accountability thứ tư.
- [ ] Thêm một mini-case cho vòng `signal → hypothesis → system owner → experiment → review`.

### Product Owner

- [x] Có outcome, learning, flow và decision-quality framework.
- [x] Có decision-right table, maturity rubric, minimum viable practice, guardrails và adoption case.
- [ ] Mở rộng boundary matrix cho PO, Product Manager, Sponsor/Business Owner, UX, Data và Manager trong các mô hình tổ chức khác nhau.
- [ ] Thêm case về Product Goal trở nên obsolete, Sprint cancellation và cách xử lý urgent work mà không bypass PO.
- [ ] Thêm failure mode khi PO có quyền backlog nhưng không có access to customers/data hoặc không có authority thực chất.

### Scrum Master

- [x] Có three-layer model, maturity ladder, minimum viable practice, review cadence, guardrails và escalation case.
- [ ] Thay lựa chọn nhị phân “chấp nhận hoặc tìm môi trường khác” bằng intervention ladder: educate, coach, contract, expose impact, run experiment, escalate, renegotiate role và only then consider exit.
- [ ] Thêm case phân biệt team resistance, capability gap, lack of authority, incentive conflict và psychological safety issue.
- [ ] Làm rõ Scrum Master success không đồng nghĩa team “không cần Scrum Master”; mục tiêu là giảm unhealthy dependency, không xóa accountability.

### Developers

- [x] Có năm khía cạnh quan sát, team maturity rubrics, minimum health review, guardrails và spillover case.
- [ ] Thêm Definition of Done case nối technical sustainability với usable Increment.
- [ ] Thêm ví dụ về product outcome tốt nhưng operational/reliability cost xấu.
- [ ] Tách rõ `team capability review` khỏi `individual growth review` bằng cross-link tới article 4.

### Individual capability

- [x] Có six-dimension growth rubric, không tổng điểm, calibration và development profile template.
- [ ] Đổi tên bài theo hướng **Developing Individual Capability in a Scrum Environment** để tránh ngụ ý đây là Scrum mechanism.
- [ ] Thêm manager accountability: feedback quality, opportunity allocation, support plan và fair calibration.
- [ ] Thêm appeal/correction mechanism khi evidence sai, thiếu bối cảnh hoặc bị hiểu khác nhau.
- [ ] Thêm case về người tạo đòn bẩy qua mentoring/platform work nhưng có ticket output thấp.

### Collaboration

- [x] Đã formalize accountability/influence/decision-right/system ownership.
- [x] Đã đưa Managers vào vai trò system owners mà không gọi là accountability thứ tư.
- [x] Có minimum collaboration agreement, conflict-resolution pattern và urgent-work case.
- [ ] Thêm decision-right matrix cho product, technical, quality, people và organizational decisions.
- [ ] Thêm case khi decision-right chính thức và quyền lực thực tế không trùng nhau.
- [ ] Cross-link trực tiếp tới Effective Conversation ở conflict pattern.

### Scrum Events and Activities

- [x] Refinement, Planning, Daily, Review và Retrospective đã có common practical format.
- [x] Có purpose, expected outcome, inputs, participants, focus questions, minimum practice, signals và anti-patterns.
- [x] Có event-to-event learning loop và link tới Effective Conversation.
- [ ] Sau khi hoàn thành P0, thêm một one-page facilitation card cho từng event.
- [ ] Thêm case xuyên suốt một Sprint để cho thấy outcome của event trước trở thành input của event sau.
- [ ] Thêm remote/hybrid adaptations nhưng không biến tool usage thành mục tiêu.

### Effective Conversation and Discussion

- [x] Có central argument rõ, five-step diagnostic architecture, four layers of disagreement, decision follow-through, limits và Scrum application.
- [x] Có credible research, counter-evidence và tránh tuyệt đối hóa choice overload.
- [ ] Thêm `Minimum viable discussion` template một trang: purpose, shared facts, disagreement layer, options, decision mechanism, owner, review point.
- [ ] Thêm reflection questions và một worked example xuyên suốt năm bước.
- [ ] Làm rõ khi nào cần consensus, consent, advice process, single decision owner hoặc experiment; không dùng “Product Owner quyết” ngoài phạm vi product value/backlog ordering.
- [ ] Đưa bài này thành cross-cutting capability trong series map, không để nó trông như bài rời số 10.

## Priority 4 — Missing foundation articles

- [ ] **Scrum Artifacts and Commitments: Three Feedback Loops**
  - [ ] Product Backlog ↔ Product Goal.
  - [ ] Sprint Backlog ↔ Sprint Goal.
  - [ ] Increment ↔ Definition of Done.
  - [ ] Transparency quality và consequences khi commitment chỉ tồn tại trên giấy.
- [ ] **Measurement in Scrum — Signals for Learning, Not Scores for Judgement**.
- [ ] **Definition of Done, Quality and Technical Sustainability**.
- [ ] **Product Goal, Sprint Goal and Outcome: Different Horizons, One Direction**.

## Priority 5 — New articles for the 2026 context

- [ ] **Scrum, AI and Developer Productivity**
  - [ ] AI tác động đến empiricism, Sprint boundaries, Definition of Done và learning loop như thế nào.
  - [ ] SDD và “working software over comprehensive documentation”.
  - [ ] How Scrum turns AI speed into learning.
  - [ ] Measuring what actually improves.
  - [ ] AI có thay PO, Scrum Master, Developers hoặc toàn Scrum Team không.
- [ ] **Scrum Beyond One Team: Dependencies, Team Design and Scaling**
  - [ ] Product boundaries, cross-team dependencies và integration risk.
  - [ ] Team Topologies và interaction modes.
  - [ ] Khi scaling framework giúp ích và khi nó chỉ nhân ceremony.
- [ ] **Managers as System Owners**
  - [ ] Decision rights, incentives, staffing, capability, architecture ownership và platform investment.
  - [ ] Manager không bypass Scrum Team nhưng cũng không thoái thác trách nhiệm hệ thống.
  - [ ] Management cadence và evidence để xử lý structural impediments.

## Definition of Done for each article

- [ ] Central argument có thể tóm tắt trong một câu và không mâu thuẫn với conclusion.
- [ ] Phân biệt rõ Scrum Guide, interpretation và practical extension.
- [ ] Dùng thuật ngữ Scrum Guide 2020 nhất quán.
- [ ] Có concrete anti-patterns hoặc failure modes.
- [ ] Có reflection questions.
- [ ] Có minimum viable practice hoặc một starting point dùng được.
- [ ] Có measurement guardrails khi bài chứa metric, rubric hoặc assessment.
- [ ] Có ít nhất hai credible references; claim quan trọng có citation gần claim.
- [ ] Có ít nhất một case, scenario hoặc worked example; Introduction có thể dùng mini-case.
- [ ] Có boundary/limitation hoặc điều kiện khiến khuyến nghị không còn phù hợp.
- [ ] Internal links, anchors, previous/next links và Vietnamese/English routes hoạt động.
- [ ] HTML hợp lệ, bảng đọc được trên mobile và không có visible duplication.
- [ ] Publish/update metadata và canonical series order nhất quán.

## Suggested execution order

1. Hoàn thành toàn bộ Priority 0 để khóa correctness và release quality.
2. Hoàn thiện measurement governance, đặc biệt cho individual capability.
3. Chuẩn hóa series map, glossary, labels và navigation.
4. Viết bài Artifacts and Commitments trước các bài mở rộng, vì đây là nền còn thiếu của series hiện tại.
5. Viết Measurement article và rút gọn phần disclaimer lặp lại ở các bài khác.
6. Sau đó mới mở rộng sang AI, scaling và Managers as System Owners.
