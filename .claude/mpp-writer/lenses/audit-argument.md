# Lens: audit-argument

**Giai đoạn:** review, refine. Pass đầu tiên của mỗi vòng lặp.

**Việc:** đọc bài như một người muốn bác bỏ nó. Không tìm chỗ khen. Kết quả của lens này nuôi trục 1 và trục 3 của `review-rubric.md`.

Repo này có cả series về ngụy biện. Một bài mắc đúng lỗi mình đang dạy người khác tránh là lỗi không thương lượng được: sửa, không giải thích.

---

## 1. Ngụy biện

Rà theo danh sách, ghi rõ **câu nào** mắc lỗi gì. Đối chiếu với `pages/reading-studying/fallacy-bias-debate/fallacy/` để gọi đúng tên đang dùng trong repo.

Hay gặp nhất trong bài luận tiếng Việt:

- **Người rơm.** Phe đối lập trong bài có được dựng ở phiên bản mạnh nhất không, hay là phiên bản dễ đánh?
- **Lưỡng nan giả.** Bài có ép người đọc chọn giữa hai lựa chọn trong khi còn lựa chọn thứ ba?
- **Khái quát vội.** Từ một trải nghiệm cá nhân suy ra một quy luật cho mọi người.
- **Nhân quả nhầm.** Hai chuyện xảy ra cùng lúc bị viết như chuyện này gây ra chuyện kia.
- **Viện dẫn thẩm quyền lệch ngành.** Trích một người nổi tiếng về chuyện họ không có chuyên môn.
- **Dốc trơn.** Chuỗi hệ quả dài mà không đỡ từng bước.
- **Đánh vào động cơ.** Bác bỏ một ý bằng cách suy đoán vì sao người ta nói ra ý đó.
- **Câu hỏi gài.** Câu hỏi tu từ đã cài sẵn kết luận vào trong câu hỏi.
- **Cầu xin luận đề.** Kết luận đã nằm sẵn trong tiền đề, chỉ đổi cách nói.

## 2. Trượt khái niệm

Với mỗi khái niệm trung tâm, tra **mọi lần nó xuất hiện** trong bài và so nghĩa.

- Nghĩa ở phần mở có giống nghĩa ở phần kết không? Bài luận hay bắt đầu bằng một nghĩa hẹp, kiểm chứng được, rồi kết bằng một nghĩa rộng, không kiểm chứng được.
- Từ có mang hai tầng nghĩa (một mô tả, một đánh giá) mà bài lợi dụng cả hai không? "Tự nhiên", "hiệu quả", "trưởng thành", "chuyên nghiệp" là các bẫy quen.
- Thuật ngữ tiếng Anh dịch sang tiếng Việt có bị nới nghĩa không?

Ghi dạng: `"khái niệm" - đoạn 3 nghĩa là X, đoạn 9 nghĩa là Y, chỗ trượt: ...`

## 3. Kết luận quá mức

Đặt câu kết luận cạnh bằng chứng thật sự có trong bài và so độ mạnh.

- **Lượng từ.** Bài chứng minh cho "một số" nhưng kết luận cho "mọi"? Đề xuất lượng từ đúng.
- **Phạm vi.** Bằng chứng lấy từ một ngành, một thế hệ, một nền văn hoá, kết luận nói về con người nói chung?
- **Thời gian.** Quan sát ở một thời điểm bị viết thành quy luật lâu dài?
- **Chuẩn tắc lén.** Bài mô tả cái đang là, rồi kết luận cái nên là, mà không có bước cầu nối giá trị nào.

Mỗi kết luận quá mức phải kèm bản viết lại đúng tầm, không chỉ báo lỗi.

## 4. Phản ví dụ

Với mỗi luận điểm chính, tự tìm **ít nhất một** trường hợp thật làm nó sai. Ưu tiên trường hợp cụ thể, có tên, có bối cảnh, không phải giả định trừu tượng.

Ba mức xử lý, chọn một và nói rõ chọn cái nào:

1. Phản ví dụ sai vì hiểu nhầm luận điểm → bài cần nói rõ hơn ở chỗ nào.
2. Phản ví dụ đúng nhưng nằm ngoài phạm vi → bài phải tự nêu phạm vi đó ra, đừng để người đọc tự phát hiện.
3. Phản ví dụ đúng và nằm trong phạm vi → luận điểm phải yếu đi hoặc đổi. Đây là trường hợp phải hỏi tác giả, không tự quyết.

## 5. Tự vấn của chính bài

`voice-guide.md` yêu cầu bài quay lại nghi ngờ công cụ nó vừa trao. Kiểm: có đoạn nào làm việc đó không, hay bài chỉ tự tin từ đầu tới cuối? Nếu không có, đó là thiếu, không phải là gọn.

---

## Output

```
NGỤY BIỆN:
  [đoạn/câu] tên lỗi - vì sao - sửa thành gì

TRƯỢT KHÁI NIỆM:
  "X": đoạn A nghĩa ..., đoạn B nghĩa ...

KẾT LUẬN QUÁ MỨC:
  Nguyên văn: "..."
  Bằng chứng thật có: ...
  Viết lại: "..."

PHẢN VÍ DỤ:
  Luận điểm 1 ← phản ví dụ ... → mức 1/2/3, xử lý:

TỰ VẤN: có / không, ở đâu

CẦN HỎI TÁC GIẢ: (chỉ các mục mức 3 và các chỗ đụng luận đề)
```

## Đạt khi

Không còn ngụy biện nào, mỗi khái niệm trung tâm giữ một nghĩa suốt bài, mọi kết luận vừa tầm bằng chứng, và mỗi luận điểm chính đã đứng được trước ít nhất một phản ví dụ thật.
