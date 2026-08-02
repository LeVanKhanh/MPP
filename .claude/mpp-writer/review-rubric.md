# Thang đánh giá bài viết - My Personal Planet

Dùng cho mode `review`. Chấm thẳng, không nới điểm. Một bài 65 điểm được gọi là 65 điểm thì tác giả mới biết đường sửa.

---

## 1. Năm trục, mỗi trục 0-20

### Trục 1 - Độ sắc của luận điểm (0-20)

| Điểm | Mô tả |
|---|---|
| 0-5 | Không tìm ra luận điểm. Bài là tập hợp các nhận xét đúng nhưng rời rạc. |
| 6-10 | Có luận điểm nhưng là điều ai cũng đồng ý. Không ai phản đối được vì không có gì để phản đối. |
| 11-15 | Luận điểm rõ, có người sẽ không đồng ý, nhưng đã có nhiều người viết rồi. |
| 16-20 | Luận điểm rõ, gây tranh cãi được, và đưa ra một góc nhìn mà tác giả này mới có. Bài đứng vững nếu bị chất vấn. |

### Trục 2 - Bằng chứng và nguồn (0-20)

| Điểm | Mô tả |
|---|---|
| 0-5 | Khẳng định suông. Không nguồn, hoặc nguồn không kiểm chứng được. |
| 6-10 | Có nguồn nhưng là nguồn thứ cấp, blog tổng hợp, hoặc nguồn chỉ dùng để trang trí chứ không đỡ luận điểm. |
| 11-15 | Nguồn tốt, gắn đúng chỗ, nhưng còn tuyên bố quan trọng chưa có nguồn. |
| 16-20 | Nguồn gốc (sách, paper, tài liệu chính thức), gắn đúng luận điểm cần đỡ, mỗi nguồn có lý do tồn tại, link còn sống. Chi tiết không xác minh được đã bị loại khỏi bài. |

Trừ thẳng về 0-5 nếu phát hiện **một** nguồn bịa.

### Trục 3 - Tính phản biện (0-20)

| Điểm | Mô tả |
|---|---|
| 0-5 | Một chiều. Không có phe đối lập trong bài. |
| 6-10 | Có nhắc phản đề nhưng dựng phiên bản yếu để dễ đánh (straw-man). |
| 11-15 | Dựng phản đề tử tế, phản bác được, nhưng không nói giới hạn của chính lập luận mình. |
| 16-20 | Dựng phản đề ở phiên bản mạnh nhất (steel-man), phản bác trung thực, và tự chỉ ra bài này sai ở đâu, áp dụng được tới đâu, khi nào thì không nên dùng. |

Kiểm thêm: bài có mắc chính ngụy biện nào không? Repo có cả series về ngụy biện, một bài mắc lỗi mình đang dạy người khác tránh thì trừ nặng.

### Trục 4 - Giọng văn (0-20)

| Điểm | Mô tả |
|---|---|
| 0-5 | Đọc như bài do AI viết. Nhiều dấu hiệu trong checklist ở `voice-guide.md`. |
| 6-10 | Trôi chảy nhưng vô danh. Ai viết cũng ra như vậy. Nhịp câu đều đặn. |
| 11-15 | Có giọng riêng ở vài đoạn, nhưng còn cụm từ sáo và nhịp lặp. |
| 16-20 | Giọng nhất quán suốt bài, nhịp câu biến thiên, có những câu chỉ tác giả này viết được. Không còn dấu hiệu nào trong checklist. |

Đếm và liệt kê cụ thể: mỗi em dash trong văn xuôi, mỗi cụm từ trong danh sách cấm, mỗi khuôn "không phải X mà là Y" từ lần thứ hai.

### Trục 5 - Cấu trúc và kỹ thuật trình bày (0-20)

| Điểm | Mô tả |
|---|---|
| 0-5 | Sai template, sai class, sai đường dẫn CSS, HTML vỡ. |
| 6-10 | Đúng template nhưng dòng chảy lộn xộn, các section không nối tiếp nhau. |
| 11-15 | Cấu trúc hợp lý, HTML sạch, còn vài lỗi nhỏ (thiếu `rel`, sai định dạng ngày, `#ref` lệch). |
| 16-20 | Mỗi section đẩy lập luận đi một bước và để lại câu hỏi cho section sau. HTML qua hết checklist trong `html-menu-rules.md`. |

---

## 2. Phân cấp theo tổng điểm

| Cấp | Điểm | Nghĩa |
|---|---|---|
| **L1 - Nháp** | < 50 | Chưa nên đăng. Cần viết lại phần lớn. |
| **L2 - Blog phổ thông** | 50-64 | Đọc được, nhưng không khác nội dung sẵn có trên internet. |
| **L3 - Bài chất lượng** | 65-79 | Ngang mặt bằng các blog chuyên môn tốt. Đăng được. |
| **L4 - Xuất sắc** | 80-91 | Ngang các bài được chia sẻ lại và trích dẫn. Có góc nhìn riêng, phản biện chắc. |
| **L5 - Tham chiếu** | 92-100 | Người khác sẽ dẫn lại bài này khi bàn về chủ đề đó. |

Bất kỳ trục nào dưới 8 thì trần của bài là L2, kể cả tổng điểm cao.

---

## 3. Đối chiếu với bài chuẩn mực

Khi chấm, nêu rõ bài đang đứng ở đâu so với các nguồn dưới đây, và cụ thể thiếu gì để lên một bậc.

**Bài luận / chiêm nghiệm:**
- Aeon, Psyche - luận dài, có nền triết học, kết ở căng thẳng chưa giải quyết
- Paul Graham essays - luận điểm sắc, câu văn trần trụi, không trang trí
- Tiêu chí đối chiếu: bài có chịu được một người đọc thông minh phản đối không?

**Bài kỹ thuật:**
- martinfowler.com - khái niệm được định nghĩa chặt, luôn kèm trade-off
- Julia Evans (jvns.ca) - giải thích cho người chưa biết mà không hạ thấp độ chính xác
- LWN.net, Stripe Increment - chiều sâu kỹ thuật, ngôn ngữ vẫn đọc được
- Tiêu chí đối chiếu: người non-tech hiểu được vấn đề, và người trong nghề không thấy chỗ nào sai.

**Bài trong chính repo (chuẩn nội bộ):**
- `pages/reading-studying/fallacy-bias-debate/fallacy/01-fallacy-vn.html` - chuẩn hiện tại cho bài luận có phản biện
- `pages/writing-opinion/values-creation/` - chuẩn cho series luận dài
- `pages/information-technology/agile-software-development/scrum-agile-and-more/` - chuẩn cho bài kỹ thuật

---

## 4. Cấu trúc output khi review

1. **Bảng điểm 5 trục** + tổng + cấp L1-L5, mỗi trục một câu lý do.
2. **So sánh benchmark**: đứng ở đâu, thiếu gì để lên bậc kế tiếp.
3. **Phản biện nội dung**: luận điểm chưa được chứng minh, chỗ dùng ví dụ thay lập luận, phản đề đang né, ngụy biện trong chính bài.
4. **Rà giọng văn**: trích nguyên văn câu có vấn đề, kèm bản viết lại đề xuất.
5. **Rà nguồn**: nguồn yếu, link chết, chỗ cần thêm nguồn.
6. **Rà HTML**: theo checklist `html-menu-rules.md` mục 8.
7. **Danh sách sửa theo ưu tiên**: mỗi mục ghi rõ sửa ở đâu, sửa thành gì, và sửa xong thì trục nào lên bao nhiêu điểm.

Không tự sửa file trừ khi được yêu cầu.
