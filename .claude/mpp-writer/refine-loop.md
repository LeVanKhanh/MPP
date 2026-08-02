# Vòng lặp review → sửa

Giao thức cho mode `refine`. Đọc file này cùng `review-rubric.md` và các lens trong `lenses/` trước khi chạy.

Mục tiêu không phải là điểm cao. Mục tiêu là bài đứng vững trước một người đọc khó tính, và vẫn là bài của tác giả.

---

## 1. Điều kiện trước khi bắt đầu

1. `git status` phải sạch, hoặc file đích chưa có thay đổi chưa commit. Vòng lặp sẽ sửa file nhiều lần, git là cách hoàn tác duy nhất. Nếu working tree bẩn, báo tác giả và dừng.
2. Chạy `preserve-author-voice` mục 1 để lấy **mẫu giọng từ bản gốc**. Mẫu này giữ nguyên suốt cả vòng lặp, không cập nhật lại theo bản đã sửa.
3. Xác định độc giả (`adapt-for-audience` mục 1). Nếu tác giả chưa nói, hỏi ngay ở đây, đừng để tới vòng 2.
4. Ghi điểm gốc theo `review-rubric.md`. Đây là mốc so sánh cho mọi vòng sau.

## 2. Một vòng gồm sáu bước

### Bước 1 - Review

Chạy bốn lens theo đúng thứ tự, không đảo:

1. `audit-argument` - lập luận trước, vì mọi thứ khác phụ thuộc vào nó
2. `developmental-edit` - cấu trúc, sau khi biết lập luận nào giữ
3. `adapt-for-audience` - độ sâu, sau khi biết phần nào ở lại
4. `polish-vietnamese` - câu chữ, sau cùng vì chỉ đánh bóng thứ đã chốt

Chạy thêm `research-evidence` khi vòng trước phát hiện tuyên bố thiếu nguồn hoặc trục 2 dưới 12.

Chấm điểm 5 trục theo rubric.

### Bước 2 - Gộp và giải xung đột

Gom toàn bộ đề xuất sửa từ các lens vào một danh sách. Khi hai lens đòi hai điều trái nhau, áp thứ tự ưu tiên:

| Ưu tiên | Lens | Ghi chú |
|---|---|---|
| 1 | `research-evidence` | Sự thật thắng tất cả. Không thương lượng. |
| 2 | `audit-argument` | Tính chặt của lập luận. Không thương lượng. |
| 3 | `preserve-author-voice` | Thắng 4, 5, 6 khi mục sửa thuộc nhóm "chất". |
| 4 | `developmental-edit` | |
| 5 | `adapt-for-audience` | |
| 6 | `polish-vietnamese` | |

Khi 1 hoặc 2 buộc phải sửa một câu thuộc mẫu giọng: sửa, nhưng bản viết lại phải giữ nhịp và từ vựng của tác giả.

### Bước 3 - Phân loại A/B

Mỗi mục sửa xếp vào một trong hai loại:

**Loại A - tự sửa, không hỏi:**
- Lỗi chính tả, ngữ pháp, dấu câu
- Dấu hiệu máy hoá theo checklist `voice-guide.md`
- Câu dịch máy, rào đón thừa, câu chuyển tiếp rỗng
- Lỗi HTML, đường dẫn CSS/script, `rel`, `#ref` lệch
- Gắn nguồn đã xác minh vào chỗ thiếu
- Cắt đoạn không viết được câu "làm gì"
- Sửa một ngụy biện mà cách sửa chỉ có một đường rõ ràng

**Loại B - phải hỏi (xem mục 4):**
- Mọi thứ đụng vào luận đề hoặc đoạn kết
- Bỏ hoặc thay cả một section
- Bỏ một chi tiết vì không xác minh được nguồn
- Phản ví dụ mức 3 (`audit-argument` mục 4)
- Bài đang gánh hai luận đề
- Hai lens xung đột mà thứ tự ưu tiên không giải được
- Có từ hai hướng sửa trở lên dẫn tới hai bài khác nhau
- `preserve-author-voice` xếp mục sửa vào nhóm "chưa rõ"

### Bước 4 - Hỏi, rồi sửa

Gom mọi câu hỏi loại B thành **một lượt hỏi duy nhất, tối đa 3 câu**, mỗi câu kèm một phương án mặc định và hệ quả của từng hướng. Không hỏi rải rác giữa lúc đang sửa.

Sau khi có trả lời, áp toàn bộ loại A và các loại B đã chốt vào file. Sửa thật, không mô tả sẽ sửa.

Nếu tác giả không trả lời trong lượt này: làm hết loại A, để nguyên loại B, ghi rõ vòng lặp đang chờ ở đâu, và dừng vòng lặp.

### Bước 5 - Kiểm giọng

Chạy `preserve-author-voice` mục 4 trên bản vừa sửa. Nếu một section vượt 20% câu viết mới, hoàn tác section đó về bản trước, báo tác giả, đề xuất tác giả tự viết lại.

Đây là cửa cuối. Không bỏ qua bước này kể cả khi vòng lặp đang gấp.

### Bước 6 - Chấm lại và báo cáo

Chấm lại 5 trục. Báo cáo theo mẫu ở mục 5.

---

## 3. Điều kiện dừng

Kiểm theo thứ tự, gặp cái nào trước thì dừng ở đó:

1. **Đạt ngưỡng:** tổng ≥ 80 **và** không trục nào < 12. Dừng, báo đạt L4.
2. **Hết trần:** đã xong vòng 3. Dừng dù chưa đạt ngưỡng.
3. **Bão hoà:** tổng điểm tăng dưới 3 so với vòng trước. Dừng và nói rõ bài đang kẹt ở đâu, cần tác giả làm gì (thường là: cần một quan sát riêng, một nguồn gốc, hoặc một luận đề khác, ba thứ trợ lý không tạo ra thay tác giả được).
4. **Giọng trôi:** `preserve-author-voice` báo đã sửa quá tay hai vòng liên tiếp. Dừng, hoàn tác về bản tốt nhất, báo tác giả.
5. **Chờ trả lời:** có mục loại B chưa được chốt mà vòng không đi tiếp được nếu thiếu.

Không tự nâng trần 3 vòng. Muốn chạy tiếp thì tác giả yêu cầu thêm một lượt.

Nếu điểm **giảm** so với vòng trước: hoàn tác vòng đó, giữ bản điểm cao hơn, và nói rõ vòng vừa rồi làm hỏng cái gì. Điểm giảm gần như luôn là dấu hiệu đã đánh bóng vào chỗ không nên.

---

## 4. Luật hỏi

Tác giả yêu cầu hỏi lại khi có mâu thuẫn hoặc nhiều hướng xử lý. Cụ thể:

- Tối đa **3 câu mỗi vòng**, gom một lượt ở bước 4.
- Mỗi câu phải: nêu chỗ đang vướng, nêu các hướng kèm hệ quả, và **đề xuất một hướng mặc định**. Không hỏi trống.
- Không hỏi thứ đã tra được trong repo, trong menu, hay bằng WebSearch. Tra trước.
- Không hỏi lại điều tác giả đã chốt ở vòng trước.
- Tác giả hay ra yêu cầu từ điện thoại. Câu hỏi phải trả lời được bằng một dòng ngắn.

Mẫu:

```
HỎI (vòng N):
1. [Chỗ vướng] Section 4 kết luận "mọi tổ chức đều..." nhưng bằng chứng chỉ từ
   công ty phần mềm.
   Hướng a: thu hẹp luận điểm về ngành phần mềm (mặc định, giữ nguyên cấu trúc bài)
   Hướng b: giữ phạm vi rộng, tôi đi tìm nguồn ngành khác (thêm 1 vòng, có thể không tìm ra)
   Chọn a hay b?
```

---

## 5. Mẫu báo cáo mỗi vòng

```
VÒNG N

ĐIỂM:   trục1  trục2  trục3  trục4  trục5  tổng  cấp
Gốc:      12     10     11     14     16     63    L2
Vòng N:   15     14     14     15     17     75    L3
Delta:    +3     +4     +3     +1     +1    +12

ĐÃ SỬA (loại A): (số mục, gom theo lens)
  audit-argument: ...
  developmental-edit: ...
  ...

ĐÃ SỬA (loại B, sau khi tác giả chốt):

CHẶN BỞI preserve-author-voice:
  [lens] đề xuất "..." - giữ nguyên vì ...

CÒN LẠI ĐỂ LÊN BẬC:
  Trục thấp nhất: ... cần gì để lên 3 điểm

TRẠNG THÁI: chạy tiếp vòng N+1 / dừng vì (ngưỡng | trần | bão hoà | giọng trôi | chờ trả lời)
```

---

## 6. Sau khi dừng

1. Chạy `review` đầy đủ một lần cuối trên bản chốt và báo điểm cuối cùng.
2. Rà HTML theo `html-menu-rules.md` mục 8.
3. Liệt kê mọi `<!-- CẦN XÁC MINH -->` còn sót.
4. Nói rõ bài đang ở cấp nào và có nên đăng chưa. Dưới L3 thì nói thẳng là chưa nên đăng.
5. Không tự chạy `publish`. Hỏi trước.
6. Không commit, không push, trừ khi tác giả yêu cầu.
