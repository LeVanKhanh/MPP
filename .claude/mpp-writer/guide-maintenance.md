# Sửa chính hướng dẫn

Giao thức cho bước cuối của mode `feedback`, và cho bất kỳ lúc nào một lỗi lặp lại đủ để nghi ngờ rằng hướng dẫn mới là chỗ hỏng.

Mục tiêu: **mỗi lỗi chỉ phải sửa bằng tay một lần.** Lần thứ hai thì hướng dẫn phải bắt được nó.

Mục tiêu đối trọng, quan trọng không kém: **hướng dẫn phải còn đọc hết được.** Một bộ luật phồng lên sau mỗi lời góp ý sẽ tới lúc không ai đọc tới cuối, và một luật không được đọc thì bằng không. Hai mục tiêu này kéo ngược nhau, và phần lớn nội dung dưới đây tồn tại để giữ cân bằng giữa chúng.

---

## 1. Ba câu hỏi trước khi đụng vào hướng dẫn

Trả lời đủ ba, theo thứ tự. Dừng ở câu nào cho kết quả "không" thì không sửa hướng dẫn.

1. **Lỗi này do hướng dẫn thiếu, hướng dẫn sai, hay do lượt viết không làm theo hướng dẫn đã có?**
   Nếu luật đã có và đã nói rõ mà vẫn sai, đừng thêm luật mới. Vấn đề nằm ở chỗ luật cũ bị bỏ qua, và thêm chữ không chữa được điều đó. Trường hợp này ghi vào nhật ký với ghi chú "luật đã có, lỗi ở khâu thực hiện" rồi thôi.
   Ngoại lệ: nếu luật cũ đúng nhưng bị chôn ở chỗ không ai đọc tới đúng lúc cần, thì việc cần làm là **di chuyển** nó, không phải nhân bản nó.

2. **Lỗi này sẽ lặp ở bài sau không?**
   Một lỗi xảy ra một lần là một lỗi. Cùng một lỗi ở hai bài, hoặc một lỗi mà bất kỳ bài nào cùng thể loại cũng sẽ mắc, mới là lỗi của hướng dẫn. Chỉ đúng với một bài thì ghi vào chính bài đó.

3. **Có luật nào đang mâu thuẫn với luật sắp thêm không?**
   Có thì sửa luật cũ. Chồng luật mới lên trên một luật cũ trái ngược là cách nhanh nhất để bộ hướng dẫn tự vô hiệu hoá.

## 2. Bài học đi vào file nào

| Loại bài học | File | Chỗ cụ thể |
|---|---|---|
| Cụm từ, nhịp câu, dấu hiệu máy hoá | `voice-guide.md` | mục 4 |
| Đặc điểm riêng của một thể loại | `voice-guide.md` | mục 1, 2 hoặc 3 |
| Khung section của bài mục lục kiến thức | `catalog-series.md` | mục tương ứng, và checklist mục 7 |
| Template, class, đường dẫn, `page-meta`, menu | `html-menu-rules.md` | mục tương ứng, và checklist mục 8 |
| Cách chấm, ngưỡng, benchmark | `review-rubric.md` | |
| Quy trình của một lượt đọc bài | lens tương ứng trong `lenses/` | |
| Quy trình vòng lặp, luật hỏi, phân loại A/B | `refine-loop.md` | |
| Việc chỉ thuộc về một mode | `.claude/commands/mpp-writer.md` | mục của mode đó |

Nếu một bài học không rơi gọn vào ô nào, đó thường là dấu hiệu nó chưa được diễn đạt đủ cụ thể. Viết lại cho cụ thể hơn trước khi tìm chỗ đặt.

## 3. Luật mới phải viết được ở dạng kiểm được

Mỗi luật thêm vào phải trả lời được hai câu: **dấu hiệu nhận biết là gì**, và **xử lý thế nào**.

| Không phải một luật | Là một luật |
|---|---|
| "Viết cho hay hơn" | "Không mở hai section liên tiếp bằng một câu hỏi" |
| "Chú ý nguồn" | "Link tới trang sau tường phí phải ghi rõ là sau tường phí trong mục tham khảo" |
| "Cấu trúc nên rõ ràng" | "Section nào không viết được câu 'làm gì' thì bỏ hoặc gộp" |

Luật không kiểm được thì không bắt được lỗi nào, nhưng vẫn chiếm chỗ đọc. Nó tệ hơn không có luật.

## 4. Giới hạn cứng

- **Tối đa 2 chỗ sửa hướng dẫn mỗi lượt.** Nhiều hơn thì chọn 2 chỗ đắt nhất, phần còn lại ghi vào nhật ký ở dạng ứng viên.
- **Ưu tiên siết một luật đã có hơn thêm một luật mới.** Trước khi thêm, đọc lại file đích xem có luật nào gần đúng chỉ cần bổ sung một mệnh đề.
- **Ưu tiên đổi một dòng trong checklist hơn thêm một đoạn văn.** Checklist là thứ thật sự được chạy qua trước khi ghi file.
- **Ngưỡng phồng:** nếu một file tăng quá 20% số dòng trong ba lượt liên tiếp, dừng thêm vào file đó và đề xuất rút gọn nó trước.
- **Không tự sửa hướng dẫn.** Hướng dẫn chi phối mọi bài sau, không phải một file nội dung lẻ. Đề xuất bản vá rồi hỏi, theo mẫu ở mục 5. Tác giả đồng ý thì sửa ngay trong cùng lượt.

## 5. Mẫu đề xuất bản vá

Một câu hỏi, trả lời được bằng một dòng, đúng ràng buộc "tác giả hay ra yêu cầu từ điện thoại".

```
ĐỀ XUẤT SỬA HƯỚNG DẪN (từ đánh giá bài <tên bài>)

Lỗi đã gặp:   (một câu, cụ thể)
Sẽ lặp vì:    (một câu, vì sao bài sau cũng mắc)
Luật đã có:   (trích dòng hiện tại, hoặc "chưa có")

File:         .claude/mpp-writer/<file>.md, mục <N>
Dòng cũ:      (nguyên văn, hoặc "thêm mới sau dòng ...")
Dòng mới:     (nguyên văn)

Áp hay bỏ qua?
```

Không gộp nhiều bản vá vào một câu hỏi. Hai bản vá thì hai khối, vẫn trong một lượt hỏi.

## 6. Nhật ký

Mỗi lần sửa hướng dẫn ghi một dòng vào bảng dưới. Nhật ký này phục vụ hai việc: biết một luật sinh ra từ đâu, và biết luật nào chưa từng bắt được lỗi nào.

Rà nhật ký khi bộ hướng dẫn có vẻ đã quá dài. Luật nào nằm đó lâu mà cột "đã bắt lại lỗi" vẫn trống là ứng viên để xoá. Xoá một luật cũng phải hỏi, theo cùng mẫu ở mục 5.

| Ngày | Phát hiện từ bài | File và mục | Luật đã đổi | Đã bắt lại lỗi |
|---|---|---|---|---|
| 2026-08-02 | Bài 10, Thảo Luận Hiệu Quả Trong Công Việc | `commands/mpp-writer.md`, Mode draft, bước 5 mới | Thêm bước đối chiếu ngôn ngữ chung với bài anh em cùng thư mục trước khi ghi file. Nguyên nhân: bài 10 gọi Product Backlog Refinement là Scrum event trong khi bài 6 cùng series đã chốt ngược lại | |
| 2026-08-02 | Cùng lỗi trên | `ubiquitous-language.md` (mới) + `commands/mpp-writer.md` Bước 0 | Mỗi series có một `domain-ubiquitous-language.md` cạnh các bài `.html`, chốt nghĩa thuật ngữ và các tuyên bố đã cam kết, để bước 5 không phải đọc lại toàn bộ bài cũ | |
| 2026-08-04 | Đánh giá ngoài bài 5S, vòng 2 | `lenses/research-evidence.md`, mục 4 | Luật cấm từ tuyệt đối thêm hôm nay không bắt được bản diễn đạt khác của cùng lỗi. Thêm phép kiểm bằng phản ví dụ thay cho việc dò mặt chữ, và buộc chạy lại cả trên câu đã sửa một lần. Nguyên nhân: cùng một câu về ảnh trước/sau phải sửa ba lần, hai lần đầu đều quá mạnh, lần hai lọt vì không chứa từ nào trong danh sách cấm | |
| 2026-08-04 | Đánh giá ngoài bài 5S | `lenses/research-evidence.md`, mục 4 | Siết luật "một nguồn chỉ đỡ đúng điều nó nói" bằng hai mệnh đề mới: phạm vi câu phải khớp phạm vi nguồn và phải nói ra trong chính câu đó; không dùng "nhất", "duy nhất", "không thể", "luôn luôn" nếu nguồn không nói vậy. Nguyên nhân: bài lấy tổng quan phạm vi y tế để kết luận về toàn bộ bằng chứng của 5S, và khẳng định một con số không thể giải thích bằng sai số khi chưa đọc nghiên cứu gốc. Rủi ro lặp cao vì `catalog-series.md` mục 7.2 bắt mọi bài nói giới hạn bằng chứng, mà cách nói cho kêu luôn là cách nói quá | |
| 2026-08-04 | Bài 5S, phê bình 5S mà không có chỗ đặt lập luận phe bênh | `catalog-series.md` mục 3.4, cộng dòng bảng mục 3 và checklist mục 8 | Cho thêm đoạn nhãn thứ năm `Phản biện:` giữa `Kết luận:` và `Vì sao điều này hữu ích:`, bắt buộc khi bài nêu bằng chứng yếu theo mục 7.2. Nguyên nhân: mục 7.2 bắt mọi bài nói thẳng chỗ bằng chứng mỏng, nên bài nào cũng có nguy cơ thành một chiều theo hướng chê công cụ. Kèm hai bẫy: phe bênh phải dựng ở phiên bản mạnh nhất, và phải nói rõ vế nào bài chấp nhận | |
| 2026-08-04 | Bản chấm bài 5S trừ điểm sai hai trục | `catalog-series.md` mục 6 và mục 7 mới + `review-rubric.md` mục 1b mới | Bài mục lục là bài học tập, không phải bài luận, nên không đòi quan sát riêng của tác giả và không được trừ điểm vì thiếu nó. Thay bằng ba tiêu chí kiểm được từ ngoài: nghiên cứu tả đủ mẫu và con số, nói thẳng giới hạn của bằng chứng, tính ứng dụng suy ra từ cơ chế. Nguyên nhân: trục 1 và trục 4 của rubric viết cho bài luận, tôi áp thẳng sang thể loại mới và trừ bài 5S 5 điểm cho một thứ thể loại đó không cần | |
| 2026-08-04 | Bài 5S, áp khung mục lục lần đầu vào một series công cụ | `catalog-series.md` mục 3, 3.2, 3.5, 3.7, 4, 7 | Ba con số rút từ series thiên kiến hoá ra là đặc điểm của riêng series đó, không phải luật: bỏ trần 3-4 dòng bảng và trần số nguồn (giữ sàn 3), nới độ dài trang mục lên 3000 từ. Thêm bảng chọn tiêu đề section 4 theo loại danh mục (`Chiến Lược Giảm Thiểu` cho lỗi, `Cách Áp Dụng` cho công cụ) và luật tiêu đề section là nhãn chức năng, không nhét luận điểm vào | |
| 2026-08-04 | Series thiên kiến nhận thức, `bias/01-cognitive-bias-vn.html` và 22 trang mục | `catalog-series.md` (mới) + `commands/mpp-writer.md` Bước 0 và Bước 3, mode outline bước 4 + `html-menu-rules.md` mục 1 | Thêm thể loại thứ tư "mục lục kiến thức" với khung sáu section đã chốt, rút ra từ 22 bài đã viết. Nguyên nhân: tác giả sắp viết thêm series cùng dạng, và hướng dẫn cũ chỉ biết ba thể loại nên mỗi lần sẽ phải tự dựng lại bố cục | |
| 2026-08-02 | Bài 7, AI Scrum Và Tương Lai Của Phát Triển Sản Phẩm | `lenses/research-evidence.md`, mục 3 | Thêm câu hỏi thứ năm khi đánh giá nguồn: đọc cả đoạn chứa câu định trích, vì tài liệu của chính dự án hay đặt tuyên ngôn mạnh rồi thu hẹp ngay sau. Nguyên nhân: bài 7 trích Spec Kit "code serves specifications" và xây phê bình lên đó trong khi câu bên cạnh nói spec chỉ cần "stable enough, not complete"; cùng lượt còn nói METR đã làm con số 19% mất hiệu lực, trong khi METR chỉ gắn nhãn hết hạn | |
