# Lens: structure-essay

**Giai đoạn:** outline, draft. Trong `refine` thì việc này thuộc `developmental-edit`.

**Việc:** thiết kế dàn ý sao cho mỗi phần có một chức năng, và không phần nào thay thế được phần nào.

Nguyên tắc gốc: **dàn ý không phải mục lục.** Mục lục liệt kê chủ đề. Dàn ý ghi việc mà mỗi phần phải làm xong trước khi người đọc đi tiếp.

---

## 1. Hình dạng bài, chọn trước khi chia section

Bài luận ở repo này chạy theo hình: quan sát cụ thể → nghịch lý lộ ra → câu hỏi → bóc tiền đề → kết luận tạm thời kèm giới hạn của chính nó.

Không dùng hình: khẳng định → ba lý do → kết luận. Hình đó là bài thuyết trình, không phải bài luận.

Ba hình dùng được, chọn theo nội dung chứ không theo thói quen:

- **Bóc lớp.** Mỗi section lột một tiền đề, câu trả lời ở section này thành câu hỏi của section sau.
- **Hai giọng.** Bài chạy song song hai cách đọc một hiện tượng, tới cuối mới cho biết vì sao không hoà giải được.
- **Lần theo một ca cụ thể.** Bám một tình huống từ đầu tới cuối, mỗi section đào sâu thêm một tầng của chính nó.

## 2. Chức năng của từng section

Mỗi section ghi bốn dòng, thiếu dòng nào thì section đó chưa được thiết kế:

```
Section N - [tiêu đề]
  Làm gì:      (một động từ: lột tiền đề X / dựng phản đề / cho thấy Y hỏng ở đâu)
  Đỡ bằng:     (bằng chứng, ví dụ, hay lập luận nào)
  Người đọc bước vào section này đang tin gì:
  Bước ra thì tin thêm gì, và mang theo câu hỏi nào:
```

Nếu hai section trả lời cùng dòng "làm gì", gộp lại. Nếu một section không đổi được điều người đọc tin, bỏ.

Số section: 4 tới 7 cho bài luận. Nhiều hơn thường là dàn ý theo chủ đề chứ không theo lập luận.

## 3. Chức năng của từng đoạn trong section

Trong mỗi section, đoạn cũng phải có việc. Bốn loại đoạn dùng được:

- **Đoạn đặt.** Đưa quan sát hoặc tình huống cụ thể.
- **Đoạn bóc.** Chỉ ra thứ nằm dưới quan sát đó.
- **Đoạn đỡ.** Gắn bằng chứng, nguồn, hoặc ví dụ.
- **Đoạn xoay.** Quay lại nghi ngờ chính điều vừa nói.

Section nào chỉ toàn đoạn đỡ là section liệt kê. Section nào không có đoạn xoay nào trong cả bài là bài một chiều.

Không thiết kế mọi section theo cùng một trình tự bốn đoạn. `voice-guide.md` cấm nhịp đều.

## 4. Mở và kết

**Câu mở** phải là một trong: một câu người ta hay nói, một tình huống cụ thể có thời gian và nơi chốn, một nghịch lý quan sát được, một trích dẫn có nguồn.

Cấm: định nghĩa từ điển, "trong thế giới ngày nay", một câu tóm tắt trước những gì bài sắp nói.

**Kết** dừng ở căng thẳng chưa giải quyết xong. Không ba bài học rút ra, không lời khuyên gọn gàng, không tóm tắt lại bài. Kiểm: xoá đoạn kết đi, bài có mất gì không? Nếu không mất gì, đoạn kết đang là phần thừa.

## 5. Chỗ đặt phản đề

Phải có một section riêng cho phản đề và giới hạn của chính bài. Vị trí quyết định sức nặng:

- Đặt gần cuối: bài thừa nhận yếu điểm sau khi đã dựng xong lập luận. Mặc định dùng cái này.
- Đặt ở giữa: khi phản đề là bản lề, tức là phần sau của bài chỉ có nghĩa sau khi đã đối mặt với nó.
- Đặt ngay sau phần mở: khi phản đề chính là cách nghĩ phổ biến mà bài muốn tháo.

Đặt phản đề ở cuối cùng, sau cả phần kết, là chôn nó. Không làm.

## 6. Đối chiếu repo

Grep `main-menu-vn.js` tìm bài cùng chủ đề. Nếu có, thiết kế bài mới như một bước tiếp theo hoặc một cuộc đối thoại với bài cũ, và ghi rõ trong dàn ý chỗ nào trỏ sang bài đó. Đừng dựng lại từ đầu một thứ repo đã có.

---

## Output

```
HÌNH BÀI: bóc lớp / hai giọng / lần theo một ca - vì sao chọn

DÀN Ý:
  Section 1 - ... (bốn dòng chức năng)
  ...

CÂU MỞ: (viết luôn, không mô tả)
CÁCH KẾT: căng thẳng nào để lại

PHẢN ĐỀ: đặt ở section mấy, vì sao

BÀI LIÊN QUAN TRONG REPO: route + đoạn nào nên trỏ sang

CHỖ CÒN YẾU TRONG DÀN Ý:
```

## Đạt khi

Không hai section nào cùng chức năng, mỗi section đổi được điều người đọc tin, phản đề có chỗ riêng, và đoạn kết không xoá đi được.
