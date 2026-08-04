# Series mục lục kiến thức - My Personal Planet

Thể loại thứ tư, bên cạnh luận, kỹ thuật và thơ. Bản mẫu tham chiếu là series thiên kiến nhận thức ở `pages/reading-studying/fallacy-bias-debate/bias/`: một trang tổng quan (`01-cognitive-bias-vn.html`) cộng 22 trang mục, mỗi trang một thiên kiến, tất cả dùng chung một bộ khung.

Đọc file này khi bài đang viết thuộc một danh mục có nhiều mục ngang hàng nhau. Không đọc khi viết bài luận đơn lẻ.

---

## 1. Nhận ra thể loại

Đây là series mục lục khi cả ba điều sau đúng:

- Chủ đề là **một danh mục có nhiều mục ngang hàng**, mỗi mục tự đứng được thành một bài (23 thiên kiến, N ngụy biện, N mô hình tư duy, N thiên lệch thống kê).
- Người đọc thường **tra một mục**, không đọc tuần tự từ đầu tới cuối.
- Mỗi mục trả lời **cùng một bộ câu hỏi**: nó là gì, trông ra sao trong đời thật, ai đã đo được nó, làm gì để bớt dính.

Thiếu một trong ba thì đó là series bài luận nhiều kỳ (như series Scrum), không phải mục lục. Series bài luận mỗi kỳ có bố cục riêng và không dùng khung ở đây.

**Sức mạnh của thể loại này nằm ở tính lặp lại của khung, và rủi ro của nó cũng vậy.** Khung giống nhau giúp người đọc tra nhanh và giúp người viết không bỏ sót. Nhưng khung giống nhau cũng là nhịp máy hoàn hảo: hai mươi bài cùng bố cục rất dễ thành hai mươi bài cùng giọng. Mục 6 tồn tại để chống lại đúng chuyện đó.

## 2. Hai loại trang

| Loại | Đánh số | Vai trò | Độ dài |
|---|---|---|---|
| Trang tổng quan | `01-` | Định nghĩa chung, mục lục, đặt lịch sử và giới hạn của cả lĩnh vực | 2500-2900 từ |
| Trang mục | `02-` trở đi | Một mục, đủ sáu section | 1800-3000 từ |

Đếm từ tính trên phần chữ, sau khi bỏ thẻ HTML. Ngắn hơn cận dưới thường là bài thiếu một ví dụ hoặc thiếu phần "vì sao hữu ích"; dài hơn cận trên thường là bài đang lấn sang phần của một mục khác.

## 3. Khung trang mục

Sáu section, đúng thứ tự này, không thêm không bớt:

| # | `<h2 class="main-point">` | Bắt buộc có |
|---|---|---|
| 1 | `Định Nghĩa` | `intro-text`, một đoạn cơ chế, một `content-table`, một video |
| 2 | `Ví Dụ` | `intro-text`, ba `sub-section` với `sub-point-1` |
| 3 | `Một Vài Nghiên Cứu Về <Tên Mục>` | `intro-text`, một `sub-section` với bốn đoạn nhãn, cộng đoạn `Phản biện:` khi có (mục 3.4) |
| 4 | `Chiến Lược Giảm Thiểu` hoặc `Cách Áp Dụng` | `intro-text`, một `ul class="outline-list"` bốn mục |
| 5 | `Tóm Tắt` | `summary-box` chứa `<strong>Điểm Chính:</strong>` |
| 6 | `Tài Liệu Tham Khảo` | `ol class="outline-list"` |

Tiêu đề section 3 mang tên mục ở dạng đầy đủ: `Một Vài Nghiên Cứu Về Thiên Kiến Neo Giá`. Đây là chỗ duy nhất trong khung có tên riêng.

Tiêu đề section 4 phụ thuộc vào thứ mà danh mục nói tới, và chỉ có hai lựa chọn:

| Danh mục nói về | Tiêu đề section 4 |
|---|---|
| Một lỗi cần giảm (thiên kiến, ngụy biện, bẫy tư duy) | `Chiến Lược Giảm Thiểu` |
| Một công cụ cần dùng đúng (5S, SWOT, OKR, biểu đồ Gantt) | `Cách Áp Dụng` |

**Tiêu đề section là nhãn chức năng, không phải chỗ để viết hay.** Đặt `Cách Áp Dụng Mà Không Biến Thành Hình Thức` là sai, dù câu đó đúng nội dung: nó nhét luận điểm của bài vào chỗ vốn chỉ để người đọc biết mình đang ở section nào. Thể loại này cần tính khoa học và thực tế trước, văn chương để dành cho câu chữ bên trong. Cùng luật đó áp cho cả sáu tiêu đề: không thêm tính từ, không thêm mệnh đề phụ.

### 3.1 Định Nghĩa

- `intro-text` làm hai việc trong một đoạn: nói mục này là gì bằng ngôn ngữ thường, rồi **hạ cánh xuống một tình huống cụ thể ngay trong cùng đoạn đó**. Bản mẫu: định nghĩa neo giá xong là tới ngay cái áo khoác có giá gạch chéo. Không kết thúc đoạn mở ở tầng trừu tượng.
- Đoạn kế nói **cơ chế**: nó chạy bằng cách nào, tên kỹ thuật của cơ chế nếu có, ai đặt tên và năm nào, kèm `<sup><a href="#ref-1">[1]</a></sup>`.
- Rồi tới bảng, rồi tới video. Thứ tự này cố định.

### 3.2 `content-table` phải là một phép đối chiếu

Bảng ở đây không phải bảng liệt kê. Nó là chỗ người đọc nhìn một cái thấy được sự lệch.

Ba cột: cột trái là tình huống, hai cột phải là hai kết cục khác nhau của **cùng một tình huống đó**. Hai cột: cột trái là điều được nhìn thấy, cột phải là điều bị bỏ sót.

| Đạt | Không đạt |
|---|---|
| `Tình huống \| Neo thấp \| Neo cao` | `Thuật ngữ \| Định nghĩa` |
| `Điều được nhìn thấy \| Điều bị bỏ sót` | `Ví dụ 1 \| Ví dụ 2 \| Ví dụ 3` |
| `Sự kiện khách quan \| Diễn giải của người ủng hộ \| Diễn giải của người phản đối` | `Ưu điểm \| Nhược điểm` |

Số dòng thân bảng do nội dung quyết định, không có trần: một mục có năm bước thì bảng có năm dòng, cắt bớt một dòng cho gọn là làm hỏng nội dung. Ô bảng viết ngắn, dạng cụm chứ không phải câu hoàn chỉnh.

Nếu không nghĩ ra được phép đối chiếu nào cho mục này, đó là dấu hiệu cơ chế của mục chưa được hiểu rõ. Quay lại section 1 trước khi dựng bảng.

### 3.3 Ba ví dụ phải ở ba tầng khác nhau

`intro-text` của section Ví Dụ nói thẳng ra ba tầng đó là gì, để người đọc biết mình sắp đọc gì:

> Thiên kiến này thể hiện ở ba mức độ khác nhau: một tình huống bạn có thể hình dung, một nghiên cứu đã đo lường được nó, và một sai lầm doanh nghiệp mà nó góp phần lý giải.

| Tầng | Nội dung | Chức năng |
|---|---|---|
| 1 | Tình huống đời thường, viết ở thể "hãy tưởng tượng" hoặc kể như một cảnh quen thuộc | Người đọc nhận ra chính mình |
| 2 | Thí nghiệm hoặc nghiên cứu, thường là cái đã đặt tên cho mục này | Chứng minh nó có thật và đo được |
| 3 | Một hậu quả thật, quy mô lớn, có con số: một vụ sập giá, một thảm hoạ, một khoản lỗ | Chứng minh nó đắt |

Tầng 1 **không cần nguồn** vì nó không tuyên bố một sự kiện đã xảy ra; nó là một tình huống dựng lên. Đừng gắn số liệu vào tầng 1 rồi phải đi tìm nguồn cho một chuyện chưa từng xảy ra. Tầng 2 và tầng 3 **bắt buộc có nguồn**, và mọi con số trong tầng 3 phải kiểm chứng được từng cái một.

Ba ví dụ ở ba tầng, không được hai cái cùng tầng. Hai nghiên cứu và một tình huống là bài thiếu tầng hậu quả.

`sub-point-1` đặt tên cho từng ví dụ như một cái tít, không phải như một nhãn phân loại: `Đêm Trước Ngày Challenger Cất Cánh`, `21 Môi Giới Bất Động Sản, Một Căn Nhà`, `Cách J.C. Penney Mất Gần 1 Tỷ Đô Vì Bỏ Neo Giá`. Không đặt là `Ví Dụ Trong Nghiên Cứu` hay `Trường Hợp Thực Tế`.

### 3.4 Các đoạn nhãn của section nghiên cứu

Trong một `sub-section`, bốn đoạn `<p>`, mỗi đoạn mở bằng một nhãn in đậm, đúng bốn nhãn này:

```html
<p><strong>Nghiên cứu:</strong> ...</p>
<p><strong>Kết quả:</strong> ...</p>
<p><strong>Kết luận:</strong> ...</p>
<p><strong>Vì sao điều này hữu ích:</strong> ...</p>
```

- **Nghiên cứu:** ai, năm nào, làm gì. Tả cách làm đủ để người đọc thấy thiết kế thí nghiệm chặt ở chỗ nào.
- **Kết quả:** con số thật. Không phải "kết quả cho thấy có sự khác biệt đáng kể".
- **Kết luận:** điều nghiên cứu này chứng minh, và **chỉ điều đó**. Đây là chỗ dễ kết luận quá tay nhất trong cả bài.
- **Vì sao điều này hữu ích:** đoạn quan trọng nhất và cũng là đoạn hay bị viết rỗng nhất. Nó phải đổi được thứ người đọc để ý từ ngày mai, và kết ở một thói quen cụ thể hoặc một câu tự hỏi cụ thể. Không được là bản tóm tắt lại ba đoạn trên bằng chữ khác.

Khi mục này có nhiều nghiên cứu quan trọng ngang nhau hoặc có tranh cãi chưa ngã ngũ, được phép đổi nhãn cho đúng thực tế (`Hiện trạng tranh luận:`, `Điểm phức tạp:`). Đổi vì nội dung đòi, không đổi cho đỡ lặp.

**Ngoại lệ duy nhất được thêm đoạn thứ năm.** Khi bài nói thẳng giới hạn của bằng chứng theo mục 7.2, chèn một đoạn nhãn `Phản biện:` giữa `Kết luận:` và `Vì sao điều này hữu ích:`. Đoạn này dựng phiên bản mạnh nhất của phe bênh mục đang bàn, rồi trả lời trung thực, kể cả khi câu trả lời là "vế này đứng vững, bài không có gì bác lại".

Lý do ngoại lệ tồn tại: mục 7.2 bắt mọi bài phải nêu chỗ bằng chứng yếu, nên bài nào cũng có nguy cơ thành một chiều theo hướng ngược lại, tức là chê công cụ mà không cho người đọc thấy lý do người ta vẫn dùng nó. Một bài học tập phải để người đọc tự cân được, không phải chỉ nghe một phía.

Hai cái bẫy của đoạn này. Thứ nhất, **phe bênh phải được dựng ở phiên bản mạnh nhất**, lấy từ lập luận thật của người trong nghề chứ không phải một phiên bản dễ đánh. Thứ hai, **phải nói rõ vế nào trong đó bài chấp nhận**; nhận hết rồi bác hết đều là né việc.

### 3.5 Section 4 phải mọc ra từ cơ chế

`intro-text` của section này viết theo đúng một khuôn, và khuôn này là phần có giá trị nhất của cả thể loại:

> `<Tên mục>` hoạt động bằng cách `<cơ chế đã nói ở section 1>`, nên cách `<khắc phục / triển khai>` hiệu quả là `<hệ quả trực tiếp của cơ chế đó>`.

Ví dụ: neo giá chiếm lấy điểm xuất phát trong đầu bạn, nên cách khắc phục là kiểm soát con số nào xuất hiện trước. Ác cảm mất mát phụ thuộc vào điểm mốc tham chiếu, nên cách khắc phục là đổi hoặc mở rộng điểm mốc trước khi quyết định. 5S làm cho trạng thái bất thường trở nên nhìn thấy được, nên cách triển khai là giữ việc nhìn đó nằm trong công việc hằng ngày thay vì tách thành một quy trình kiểm tra song song.

Bốn mục `<li>`, mỗi mục mở bằng `<strong>` là một **mệnh lệnh hành động** kết thúc bằng dấu hai chấm, rồi một câu giải thích. Câu giải thích không có dấu chấm cuối.

```html
<li><strong>Tự ước tính độc lập trước khi thấy con số của người khác:</strong> Viết ra con số của riêng bạn trước khi nhìn vào giá niêm yết, để con số đó không thể âm thầm trở thành cái neo của bạn</li>
```

Kiểm bốn mục bằng hai câu hỏi:

1. Mục này có suy ra được từ cơ chế đã nêu không? Không suy ra được thì đó là lời khuyên chung dán vào, bỏ.
2. Mục này có làm được vào sáng mai không? "Hãy khách quan hơn", "hãy nhận thức được thiên kiến của mình" thì không làm được, bỏ.

Có ít nhất một mục nói rõ **cách này hỏng khi nào** hoặc **vì sao cách hiển nhiên lại không chạy**. Bản mẫu: "cách phòng vệ thực sự không phải là cố lờ con số đó đi".

### 3.6 Tóm tắt

Một đoạn duy nhất trong `summary-box`, mở bằng `<strong>Điểm Chính:</strong>`. Ba việc, theo thứ tự: nhắc lại cơ chế, nhắc lại điều phản trực giác nhất trong bài, chốt bằng nguyên tắc phòng vệ. Không đưa vào đây bất kỳ dữ kiện, con số hay ví dụ nào chưa xuất hiện ở trên.

### 3.7 Tham khảo

Theo markup ở `html-menu-rules.md` mục 4. Không có trần số nguồn: bài cần bao nhiêu nguồn để đỡ hết các tuyên bố của nó thì liệt kê bấy nhiêu. Sàn thì có, và tự nhiên là 3, vì mỗi ví dụ tầng 2 và tầng 3 phải có nguồn riêng, cộng nguồn cho phần định nghĩa. Nguồn thừa là nguồn không đứng cạnh câu nào, không phải nguồn thứ năm.

Video nhúng phải là video có thật, đã kiểm bằng cách mở URL. Không suy ra ID YouTube từ tên chủ đề. Không tìm được video đúng thì bỏ khối video, đừng nhét một video gần đúng vào cho đủ khung.

## 4. Khung trang tổng quan

Bảy section:

| # | `<h2 class="main-point">` | Nội dung |
|---|---|---|
| 1 | `Định Nghĩa` | Định nghĩa cả lĩnh vực, bốn đoạn, rồi video |
| 2 | `<Tên danh mục>` (ví dụ `Một Vài Thiên Kiến`) | `ol class="outline-list"` liệt kê toàn bộ trang mục |
| 3 | `Ví Dụ Kinh Điển` | Ba `sub-section`, ví dụ ở tầng lịch sử hoặc xã hội |
| 4 | `Nghiên Cứu Khoa Học` | Lịch sử lĩnh vực, phương pháp nghiên cứu, giới hạn |
| 5 | `Đọc Thêm` | `ul` ba mục, thường là bài giảng hoặc video dài |
| 6 | `Tóm Tắt` | `summary-box` |
| 7 | `Tài Liệu Tham Khảo` | `ol` |

Bốn đoạn của section 1 làm bốn việc khác nhau: (a) hiện tượng này là gì và vì sao nó tồn tại, (b) phân biệt nó với thứ dễ nhầm nhất, (c) bác bỏ lối thoát mà người đọc sẽ nghĩ tới ngay ("cứ dựa vào dữ liệu là xong"), (d) nói rõ mục tiêu thật của cả series và mục tiêu đó **không** phải cái gì.

Mỗi dòng trong mục lục ở section 2 gồm link tới trang mục, tên mục in đậm, rồi một câu móc viết như một câu chứ không như một định nghĩa: "Con số đầu tiên bạn nghe được âm thầm định hình mọi phán đoán sau đó". Câu móc này **phải trùng với `page-subtitle` của chính trang mục đó**. Lệch nhau là một lỗi, sửa cả hai chỗ về cùng một câu.

Đoạn cuối của section 4 là đoạn tự phản biện, và nó bắt buộc: nói rõ những chỗ chính lĩnh vực này đã tự sửa lại mình, hiệu ứng nào yếu hơn sách phổ thông mô tả, phát hiện nào không lặp lại được. Một trang tổng quan chỉ ca ngợi lĩnh vực nó giới thiệu là một trang quảng cáo. Đoạn này khép lại bằng việc nói rõ điều đó **không** có nghĩa là gì, để người đọc không lật sang thái cực hoài nghi toàn bộ.

Trang tổng quan không kể lại nội dung của các trang mục. Ví dụ ở section 3 phải là ví dụ mà không trang mục nào sở hữu riêng.

## 5. Thêm một mục vào series đã có

Một mục mới đụng vào bốn chỗ. Thiếu chỗ nào là bài mồ côi.

1. File mới `NN-ten-muc-vn.html`, số thứ tự tiếp theo, hai chữ số.
2. Thêm một dòng vào mục lục của trang tổng quan, đúng vị trí đọc, câu móc trùng `page-subtitle`.
3. Đăng ký menu theo `html-menu-rules.md` mục 6.
4. Cập nhật `domain-ubiquitous-language.md` của thư mục theo `ubiquitous-language.md`.

Trang tổng quan có sửa thì `page-meta` của nó cũng đổi ngày, theo `html-menu-rules.md` mục 2.1. Số lượng ghi trong `intro-text` của mục lục ("22 thiên kiến cụ thể") phải đếm lại cho khớp.

Trước khi viết, đọc `domain-ubiquitous-language.md` và mục lục ở trang tổng quan để chắc chắn mục này chưa nằm dưới một cái tên khác, và để biết mục nào gần nó nhất. Hai mục gần nhau thì bài mới phải nói rõ nó khác mục kia ở đâu, ngay trong section Định Nghĩa.

## 6. Chống nhịp máy khi hai mươi bài cùng một khung

`voice-guide.md` mục 4 áp đủ cho thể loại này. Thêm bốn luật chỉ có ở đây:

- **Không dùng em dash và en dash trong văn xuôi**, đúng `voice-guide.md` mục 4.1. Series thiên kiến hiện có viết trước khi luật này ra đời và dùng em dash dày đặc; **đó là chỗ duy nhất trong bản mẫu không được chép lại**. Chỗ duy nhất còn được dùng em dash là dấu phân cách giữa tên mục và câu móc trong mục lục trang tổng quan, vì đó là ký hiệu trình bày chứ không phải câu văn.
- **Khung lặp, câu mở thì không.** Khung sáu section giống nhau đã đủ đều rồi. Câu đầu tiên của mỗi section phải khác kiểu với câu đầu tiên của cùng section đó ở bài liền trước: đừng để hai mươi bài cùng mở section Định Nghĩa bằng "X là xu hướng...".
- **Không tự tham chiếu chéo trong văn xuôi.** Không viết "như đã nói ở bài thiên kiến xác nhận". Người đọc thường vào thẳng một trang mục. Cần nhắc tới mục khác thì gọi tên nó và giải thích lại trong nửa câu, hoặc để link ở mục lục làm việc đó.
- **Không đòi quan sát riêng của tác giả.** Đây là chỗ thể loại này khác hẳn bài luận, và là ngoại lệ có chủ ý với `voice-guide.md` mục 4.4. Bài mục lục là bài học tập, người đọc tìm kiến thức dùng được chứ không tìm trải nghiệm của người viết. Không chèn "theo tôi", không dựng một câu chuyện cá nhân để bài có vẻ có giọng. Nếu tác giả có một quan sát thật và nó thật sự bổ sung thông tin thì giữ, nhưng thiếu nó không phải là lỗi.

## 7. Bài này hơn một mục từ điển ở chỗ nào

Vì thể loại này không lấy giọng riêng làm giá trị, phải nói rõ nó lấy gì. Một bài mục lục đạt khi có đủ ba thứ dưới đây, và cả ba đều kiểm được từ bên ngoài.

1. **Nghiên cứu thật, đọc tới nơi.** Không dừng ở định nghĩa và ví dụ minh hoạ. Phải có ít nhất một nghiên cứu được tả đủ để người đọc thấy nó đo cái gì, trên mẫu nào, và ra con số bao nhiêu. Dẫn lại qua một bài tổng hợp thì nói rõ là dẫn lại.
2. **Giới hạn của bằng chứng, nói thẳng.** Đây là phần các bài phổ thông cùng chủ đề gần như luôn bỏ qua, nên cũng là phần bài ở đây tạo ra giá trị nhiều nhất. Bằng chứng mỏng thì nói là mỏng; hiệu ứng chỉ đúng trong điều kiện hẹp thì nói rõ điều kiện; nghiên cứu chưa lặp lại được thì ghi ra. Một bài chỉ liệt kê lợi ích là một bài quảng cáo cho công cụ nó giới thiệu.
3. **Tính ứng dụng, suy ra được từ cơ chế.** Section 4 phải là thứ người đọc làm được vào sáng mai, và mỗi mục phải truy ngược về cơ chế ở section 1. Kèm ít nhất một chỗ nói rõ nó hỏng khi nào hoặc không sửa được cái gì.

Ba thứ này thay cho yêu cầu "chi tiết riêng của tác giả" ở bài luận. Một bài đủ cả ba thì không phải mục từ điển, kể cả khi trong bài không có câu nào mang dấu vết cá nhân, vì từ điển không chọn nghiên cứu, không đánh giá độ mạnh của bằng chứng, và không nói cho bạn biết lúc nào đừng dùng.

## 8. Kiểm tra trước khi coi là xong

Chạy sau checklist ở `html-menu-rules.md` mục 8, không thay thế nó.

- [ ] Đúng sáu section trang mục, hoặc bảy section trang tổng quan, đúng thứ tự
- [ ] Tiêu đề section 3 có tên đầy đủ của mục
- [ ] Tiêu đề section 4 đúng một trong hai tên chuẩn, không thêm mệnh đề nào
- [ ] `content-table` là một phép đối chiếu, không phải danh sách định nghĩa
- [ ] Ba ví dụ ở ba tầng khác nhau, tầng 2 và tầng 3 có nguồn, tầng 3 có con số
- [ ] Đủ bốn đoạn nhãn, và đoạn "Vì sao điều này hữu ích" kết ở một việc làm được
- [ ] Bài có nêu bằng chứng yếu thì phải có đoạn `Phản biện:`, dựng phe bênh ở phiên bản mạnh nhất và nói rõ vế nào bài chấp nhận
- [ ] `intro-text` của section 4 nối cơ chế với cách khắc phục hoặc cách triển khai
- [ ] Bốn mục ở section 4 đều suy ra được từ cơ chế và đều làm được vào sáng mai
- [ ] Có ít nhất một mục nói rõ nó hỏng khi nào, hoặc vì sao cách hiển nhiên không chạy
- [ ] Tóm tắt không có dữ kiện mới
- [ ] Có nghiên cứu tả đủ đo cái gì, mẫu nào, con số bao nhiêu (mục 7.1)
- [ ] Có chỗ nói thẳng giới hạn của bằng chứng (mục 7.2)
- [ ] Video đã mở thử và đúng chủ đề, hoặc đã bỏ hẳn khối video
- [ ] Không có em dash trong văn xuôi
- [ ] Không có "theo tôi" hay chuyện cá nhân chèn vào cho có giọng
- [ ] `page-subtitle` trùng đúng câu móc ở mục lục trang tổng quan
- [ ] Đã thêm dòng vào mục lục trang tổng quan, đã đổi `page-meta` của trang đó, đã đếm lại số lượng
- [ ] Đã cập nhật `domain-ubiquitous-language.md` của thư mục
