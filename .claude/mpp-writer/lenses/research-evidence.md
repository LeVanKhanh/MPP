# Lens: research-evidence

**Giai đoạn:** outline (liệt kê nguồn cần tìm), draft (tìm và gắn), refine (rà lại chỗ hổng).

**Việc:** đảm bảo mọi tuyên bố trong bài đứng được bằng thứ kiểm chứng được, và người đọc thấy rõ nguồn nào đỡ luận điểm nào. Nuôi trục 2 của `review-rubric.md`.

**Luật cứng: không bịa.** Không bịa link, không bịa số trang, không bịa tên tác giả, không bịa năm xuất bản. Không viết nguồn theo trí nhớ. Mọi nguồn phải qua WebSearch hoặc WebFetch trong lượt này. Một nguồn bịa kéo trục 2 về 0-5 và huỷ toàn bộ vòng lặp.

---

## 1. Phân biệt bằng chứng với ví dụ

Đây là chỗ bài luận tiếng Việt hỏng nhiều nhất. Hai thứ khác nhau về chức năng:

| | Ví dụ | Bằng chứng |
|---|---|---|
| Làm gì | Cho người đọc thấy luận điểm trông ra sao | Cho lý do để tin luận điểm đúng |
| Chọn thế nào | Chọn cái minh hoạ rõ nhất | Không được chọn, phải lấy cả cái ngược lại |
| Thay bằng cái khác được không | Được | Không |

Rà toàn bài: mỗi chỗ đang dùng một câu chuyện hay để **thay** cho lý do thì đánh dấu. Ba câu chuyện hay xếp cạnh nhau vẫn là không có bằng chứng.

Khi tìm thấy chỗ như vậy, có hai đường: tìm bằng chứng thật để gắn thêm, hoặc hạ giọng câu kết luận xuống mức mà ví dụ đỡ nổi. Nói rõ đang chọn đường nào.

## 2. Thứ tự ưu tiên nguồn

1. Nguồn gốc: sách gốc, paper bình duyệt, tài liệu chính thức của tổ chức, tài liệu chuẩn của dự án, số liệu từ cơ quan phát hành.
2. Nguồn thứ cấp có uy tín và có dẫn lại nguồn gốc.
3. Bài tổng hợp, blog cá nhân: chỉ dùng khi nó **là** đối tượng bàn tới, không dùng để chứng minh sự kiện.

Không trích nội dung do AI sinh. Không trích một bài chỉ vì nó đứng đầu kết quả tìm kiếm.

Với nguồn tiếng Việt: kiểm xem nó có dẫn lại nguồn nước ngoài không, và nếu có thì truy về tận gốc, vì bản dịch trung gian hay làm lệch số liệu.

## 3. Đánh giá từng nguồn

Với mỗi nguồn định gắn, trả lời bốn câu:

- **Ai nói, có lợi ích gì trong chuyện này?**
- **Nói khi nào?** Tuyên bố về công cụ, thị trường, công nghệ phải có mốc thời gian. Nguồn 2015 nói về một thứ đã đổi ba lần từ đó thì không dùng được.
- **Số liệu này đo cái gì, trên mẫu nào?** Một khảo sát 200 người ở một công ty không nói được gì về "người đi làm Việt Nam".
- **Có nguồn nào nói ngược lại không?** Tìm chủ động. Nếu có, bài phải nhắc tới, không được lờ đi.

## 4. Gắn nguồn đúng chỗ

- Nguồn phải đứng cạnh **câu nó đỡ**, không dồn hết xuống cuối bài.
- Một nguồn chỉ đỡ đúng điều nó nói. Đừng dùng một paper về A để đỡ một tuyên bố về B chỉ vì hai chuyện nghe liên quan.
- Markup theo `html-menu-rules.md`: `<sup><a href="#ref-N">[N]</a></sup>` trong bài, mục tương ứng trong section Tài Liệu Tham Khảo, `rel="noopener noreferrer"` cho link ngoài.
- Mỗi mục tham khảo kèm một câu nói nó đóng góp gì cho bài. Không liệt kê thư mục suông.

## 5. Xử lý chỗ không xác minh được

Không im lặng cho qua. Ba cách, theo thứ tự ưu tiên:

1. Bỏ chi tiết đó khỏi bài. Bài thường không yếu đi.
2. Hạ xuống mức nói được: bỏ con số, giữ chiều hướng, và nói rõ đây là quan sát chứ không phải số liệu.
3. Đánh dấu `<!-- CẦN XÁC MINH: ... -->` và báo tác giả ở cuối lượt, nếu chi tiết đó không bỏ được.

## 6. Rà link

Với bài đã có sẵn nguồn: fetch từng link. Ghi rõ link chết, link đổi hướng sang nội dung khác, link vào tường phí. Với link chết, tìm bản lưu hoặc nguồn thay thế trước khi đề xuất bỏ.

---

## Output

```
TUYÊN BỐ CHƯA CÓ NGUỒN:
  [đoạn] "nguyên văn" → cần loại nguồn gì → tìm được / không tìm được → xử lý

VÍ DỤ ĐANG ĐÓNG VAI BẰNG CHỨNG:
  [đoạn] ... → gắn thêm nguồn / hạ giọng kết luận

NGUỒN HIỆN CÓ:
  [N] còn sống? loại nguồn? đỡ đúng câu nào? có nguồn ngược lại không?

NGUỒN ĐỀ XUẤT THÊM:
  [tiêu đề] - URL - đỡ cho luận điểm nào - vì sao chọn nguồn này

CẦN XÁC MINH (báo tác giả):
```

## Đạt khi

Mọi số liệu, năm, tên riêng, tuyên bố sự kiện đều có nguồn kiểm chứng được và còn sống; không chỗ nào dùng ví dụ thay bằng chứng mà không được đánh dấu; mỗi nguồn đứng cạnh câu nó đỡ và có lý do tồn tại.
