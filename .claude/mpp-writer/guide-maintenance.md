# Sửa chính hướng dẫn

Giao thức cho bước cuối của mode `feedback`, và cho bất kỳ lúc nào một lỗi lặp lại đủ để nghi ngờ rằng hướng dẫn mới là chỗ hỏng.

Mục tiêu: **mỗi lỗi chỉ phải sửa bằng tay một lần.** Lần thứ hai thì hướng dẫn phải bắt được nó.

Mục tiêu đối trọng, quan trọng không kém: **hướng dẫn phải còn đọc hết được.** Một bộ luật phồng lên sau mỗi lời góp ý sẽ tới lúc không ai đọc tới cuối, và một luật không được đọc thì bằng không. Hai mục tiêu này kéo ngược nhau, và phần lớn nội dung dưới đây tồn tại để giữ cân bằng giữa chúng.

---

## 1. Ba câu hỏi trước khi đụng vào hướng dẫn

Trả lời đủ ba, theo thứ tự. Dừng ở câu nào cho kết quả "không" thì không sửa hướng dẫn.

1. **Lỗi này do hướng dẫn thiếu, hướng dẫn sai, hay do lượt viết không làm theo hướng dẫn đã có?**
   Nếu luật đã có và đã nói rõ mà vẫn sai, đừng thêm luật mới. Vấn đề nằm ở chỗ luật cũ bị bỏ qua, và thêm chữ không chữa được điều đó. Ngoại lệ: nếu luật cũ đúng nhưng bị chôn ở chỗ không ai đọc tới đúng lúc cần, thì việc cần làm là **di chuyển** nó, không phải nhân bản nó.

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

- **Tối đa 2 chỗ sửa hướng dẫn mỗi lượt.** Nhiều hơn thì chọn 2 chỗ đắt nhất.
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
