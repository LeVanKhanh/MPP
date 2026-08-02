# Lens: developmental-edit

**Giai đoạn:** review, refine. Chạy sau `audit-argument`, trước `polish-vietnamese`.

**Việc:** biên tập ở cấp độ toàn bài. Ở lens này chỉ đụng tới **section và đoạn**: giữ, bỏ, đổi chỗ, tách, gộp. Không sửa câu chữ, việc đó thuộc `polish-vietnamese`.

Thứ tự bắt buộc: xong logic và thứ tự rồi mới tới câu chữ. Đánh bóng một đoạn rồi bỏ nó ở vòng sau là phí công.

---

## 1. Lập bản đồ bài đang có

Đọc toàn bài, ghi lại **một câu cho mỗi đoạn**, nói đoạn đó làm gì (không phải nói về cái gì).

Bản đồ này lộ ra ba thứ ngay:

- Đoạn nào không viết được câu "làm gì" → ứng viên bỏ.
- Hai đoạn cùng một câu "làm gì" → ứng viên gộp.
- Thứ tự các câu "làm gì" đọc liền nhau có thành một chuỗi không, hay đang nhảy.

## 2. Kiểm logic dòng chảy

Đọc bản đồ theo thứ tự và tìm:

- **Bước hụt.** Đoạn N+1 giả định người đọc đã tin một điều mà chưa đoạn nào chứng minh. Đây là lỗi nặng nhất ở lens này.
- **Vòng lặp.** Bài quay lại điều đã nói mà không thêm gì. Khác với nhắc lại có chủ ý, cái đó phải thêm một tầng nghĩa.
- **Nhánh cụt.** Một ý được mở ra rồi bỏ giữa chừng, không dùng lại ở đâu.
- **Kết luận đến sớm.** Câu kết luận xuất hiện ở đoạn 4 trong khi bằng chứng nằm ở đoạn 9.

## 3. Kiểm trọng tâm

- **Tỷ lệ.** Đo độ dài mỗi section. Luận điểm trung tâm có được nhiều chữ nhất không? Nếu một ý phụ dài gấp đôi ý chính, hoặc ý phụ đó thực ra mới là bài, hoặc phải cắt.
- **Lạc đề có duyên.** Đoạn hay nhưng không phục vụ luận đề. Cắt, và nói với tác giả đây là hạt giống cho bài khác chứ đừng chỉ nói là bỏ.
- **Một bài một luận đề.** Nếu bài đang gánh hai luận đề, đề xuất tách thành hai bài, kèm phương án chia. Đây là chỗ phải hỏi tác giả, không tự cắt.

## 4. Kiểm thứ tự

Với mỗi section, hỏi: **đổi chỗ nó lên trước hoặc xuống sau thì bài có yếu đi không?**

Nếu đổi chỗ tuỳ ý được, các section đang xếp cạnh nhau chứ không nối tiếp nhau. Đó là bài liệt kê đội lốt bài luận. Đề xuất trật tự mới trong đó mỗi section mở đường cho section kế.

Kiểm riêng vị trí phản đề theo `structure-essay.md` mục 5.

## 5. Tìm phần thừa

Bốn loại cắt được gần như luôn luôn:

- **Đoạn dạo đầu.** Một tới hai đoạn mở bài nói chung chung trước khi vào chuyện. Thử bỏ hẳn, bắt đầu bài từ đoạn thứ ba.
- **Câu chuyển tiếp rỗng.** "Bây giờ chúng ta hãy chuyển sang..." Xoá thẳng.
- **Đoạn tóm tắt giữa bài.** "Như đã phân tích ở trên..." Xoá.
- **Đoạn kết tóm tắt.** Nếu phần kết chỉ nhắc lại bài, viết lại thành căng thẳng còn bỏ ngỏ, hoặc bỏ.

Với mỗi đề xuất cắt, ghi rõ số chữ cắt đi và bài mất gì. Nếu không mất gì thì nói thẳng là không mất gì.

## 6. Kiểm chỗ hổng

Ngược lại với cắt: chỗ nào bài đi quá nhanh?

- Luận điểm quan trọng chỉ được một câu.
- Khái niệm dùng suốt bài mà chưa từng được định nghĩa.
- Bước nhảy từ mô tả sang đánh giá không có đoạn cầu nối.

---

## Ranh giới với các lens khác

- Ngụy biện, kết luận quá mức → `audit-argument`, không xử ở đây.
- Câu, nhịp, từ ngữ → `polish-vietnamese`.
- Cắt vì độc giả không cần → `adapt-for-audience`.
- Đoạn "lệch chuẩn" nhưng ra chất tác giả → hỏi `preserve-author-voice` trước khi cắt. Lens này hay cắt nhầm đúng những đoạn hay nhất vì chúng không vừa khuôn.

## Output

```
BẢN ĐỒ ĐOẠN:
  §1 làm gì: ...
  §2 làm gì: ...

LOGIC:
  Bước hụt: [giữa §x và §y] người đọc phải tin ... mà bài chưa chứng minh
  Vòng lặp / nhánh cụt / kết luận sớm:

TRỌNG TÂM:
  Section - số chữ - phục vụ luận đề ở mức nào
  Bài có đang gánh hai luận đề không:

THỨ TỰ:
  Trật tự hiện tại: ...
  Đề xuất: ... vì sao

CẮT:
  [đoạn] - bao nhiêu chữ - bài mất gì - có phải hạt giống bài khác không

BỔ SUNG:
  [chỗ] - cần thêm gì
```

## Đạt khi

Mọi đoạn viết được câu "làm gì", không còn bước hụt, các section không đổi chỗ tuỳ ý được, và không còn đoạn nào cắt đi mà bài không mất gì.
