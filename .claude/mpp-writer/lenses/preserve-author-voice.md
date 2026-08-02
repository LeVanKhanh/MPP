# Lens: preserve-author-voice

**Giai đoạn:** review, refine. Chạy **cuối cùng** trong mỗi vòng, sau khi mọi lens khác đã đề xuất sửa xong. Đây là cửa kiểm soát cuối trước khi ghi file.

**Việc:** đảm bảo bài sau khi sửa vẫn là bài của tác giả (bút danh Phù Du), không phải bài của một biên tập viên vô danh.

**Vì sao cần lens riêng:** mỗi lens trước đó đều kéo bài về phía chuẩn mực. Cộng dồn ba bốn vòng, bài trở nên đúng, trơn, và không còn ai cả. Đây là cách một vòng lặp tự động làm hỏng một bài viết mà không vòng nào tự nhận ra.

---

## 1. Lấy mẫu giọng trước khi sửa

Trước vòng lặp đầu tiên, đọc bản gốc và ghi lại:

- **Ba tới năm câu đặc trưng nhất.** Câu mà nếu thay bằng cách nói thông thường thì bài mất chất.
- **Nhịp quen.** Tác giả hay dùng câu dài hay câu ngắn, mở đoạn bằng gì, kết đoạn bằng gì.
- **Từ và cụm quen.** Cách gọi tên khái niệm, cách xưng hô, mức dùng "tôi".
- **Chỗ tác giả bực.** Chỗ nào trong bài có nhiệt. Đó thường là hạt nhân bài viết.
- **Quan điểm riêng.** Điều tác giả tin mà số đông không tin.

Mẫu này giữ nguyên suốt vòng lặp, không cập nhật theo bản đã sửa. Nếu cập nhật theo bản sửa thì nó trôi theo, và lens này thành vô dụng.

Nếu có bản gốc của tác giả trước khi trợ lý chạm vào, lấy mẫu từ bản đó. Đối chiếu thêm với `pages/writing-opinion/values-creation/` và `pages/reading-studying/fallacy-bias-debate/fallacy/01-fallacy-vn.html`.

## 2. Phân biệt lỗi với chất

Đây là việc chính của lens. Với mỗi đề xuất sửa từ các lens khác, xếp vào một trong ba nhóm:

| Nhóm | Dấu hiệu | Xử lý |
|---|---|---|
| **Lỗi** | Sai sự thật, ngụy biện, dịch máy, câu tối nghĩa, nhịp lặp máy móc | Sửa. Không thương lượng. |
| **Chất** | Lệch chuẩn nhưng có chủ ý, nằm trong mẫu giọng, người khác không viết được | Giữ nguyên. Chặn đề xuất sửa. |
| **Chưa rõ** | Vụng nhưng có thể là cố ý; câu dài nhưng có thể đang giữ một mạch nghĩ | Hỏi tác giả, tối đa 3 câu mỗi vòng |

Câu vụng không tự động là lỗi. Câu trơn không tự động là tốt.

## 3. Chín thứ không được san phẳng

1. **Câu dài giữ một mạch nghĩ chưa cắt được.** Cắt câu này là cắt mạch nghĩ.
2. **Chỗ tác giả thừa nhận chưa biết.** Đừng viết lại thành khẳng định chắc chắn cho gọn.
3. **Đoạn xoay lại nghi ngờ chính bài.** Lens `developmental-edit` hay đọc nó thành mâu thuẫn và đề nghị cắt. Không cắt.
4. **Kết ở căng thẳng chưa giải quyết.** Đừng đóng gói thành lời khuyên vì nghe hoàn chỉnh hơn.
5. **Quan sát riêng, ví dụ từ đời sống thật.** Đừng thay bằng ví dụ chuẩn mực hơn lấy từ sách.
6. **Cách đọc khác với cách đọc phổ biến.** Đừng "sửa" về cách hiểu thông thường.
7. **Giọng không an ủi.** `voice-guide.md` cấm trấn an. Đừng thêm câu làm dịu ở cuối section.
8. **Đoạn không cân xứng.** Một section dài gấp ba section khác có thể là chủ ý.
9. **Chỗ tác giả gay gắt.** Làm dịu giọng là cách nhanh nhất biến bài thành nhạt.

## 4. Rà sau khi sửa

Sau khi áp các sửa đổi, trước khi ghi file:

- **Đọc lại năm câu đặc trưng ở mục 1.** Còn nguyên không? Bị sửa thì vì lý do gì?
- **Đếm câu do trợ lý viết mới**, theo cách ở mục 4.1.
- **Kiểm nhiệt.** Chỗ có nhiệt ở bản gốc còn nhiệt không?
- **Kiểm quan điểm.** Bài sau sửa có còn nói cùng một điều với bản gốc không, hay đã trôi về một phiên bản trung tính hơn?
- **Đọc to một đoạn bất kỳ.** Nếu nghe như bài blog chuẩn mực, đã sửa quá tay.

### 4.1 Ngưỡng 20%: đếm cái gì và không đếm cái gì

Ngưỡng này đo **sự trôi giọng**, không đo khối lượng sửa. Nó tồn tại để bắt trường hợp văn tác giả bị thay dần bằng văn trơn hơn mà không ai để ý. Nó không tồn tại để chặn việc sửa lỗi.

Chia câu viết mới làm hai loại, đếm riêng:

| Loại | Gồm | Có tính vào 20% không |
|---|---|---|
| **Bắt buộc** | Sửa theo `research-evidence` hoặc `audit-argument` (ưu tiên 1-2); nội dung tác giả đã duyệt ở bước hỏi loại B | **Không** |
| **Tuỳ chọn** | Sửa theo `developmental-edit`, `adapt-for-audience`, `polish-vietnamese` (ưu tiên 4-6) | **Có** |

Chỉ **câu tuỳ chọn** mới vào tử số; mẫu số vẫn là tổng số câu của section. Vượt 20% thì hoàn tác **phần tuỳ chọn** của section đó về bản trước, giữ nguyên phần bắt buộc, rồi báo tác giả.

Lý do phải tách: mục 5 đã ghi lens này không phủ quyết được ưu tiên 1-2. Nếu đếm gộp, một lỗi sự thật nằm trong đoạn dài sẽ đẩy section vượt ngưỡng, và hoàn tác theo ngưỡng đồng nghĩa với khôi phục lại lỗi sự thật. Đó là guard tự mâu thuẫn với bảng ưu tiên.

Câu bắt buộc vẫn phải qua mục 5: viết lại **theo nhịp và từ vựng của tác giả**, không thay bằng câu trung tính. Và vẫn phải báo cáo số lượng, kể cả khi không tính vào ngưỡng, để tác giả biết đoạn nào đã bị viết lại nhiều.

Khi câu bắt buộc chiếm hơn nửa một section, đừng hoàn tác, nhưng nói thẳng với tác giả rằng section đó nên được chính tác giả đọc lại: sửa đúng nhiều tới mức đó thường có nghĩa đoạn gốc có vấn đề sâu hơn một lỗi lẻ.

## 5. Quyền phủ quyết

Lens này phủ quyết được đề xuất của `polish-vietnamese`, `adapt-for-audience`, và `developmental-edit` khi mục sửa rơi vào nhóm "chất".

Không phủ quyết được `audit-argument` và `research-evidence`. Sự thật và tính chặt của lập luận đứng trên giọng văn. Nếu một câu đặc trưng của tác giả mắc ngụy biện, sửa, nhưng đề xuất bản viết lại **vẫn giữ nhịp và từ vựng của tác giả**, chứ không thay bằng một câu trung tính.

---

## Output

```
MẪU GIỌNG (lấy một lần, giữ nguyên cả vòng lặp):
  Câu đặc trưng: 1... 2... 3...
  Nhịp quen:
  Từ quen:
  Chỗ có nhiệt:
  Quan điểm riêng:

PHÂN LOẠI ĐỀ XUẤT SỬA:
  Lỗi (sửa):
  Chất (chặn):  [lens nào đề xuất] "..." - vì sao giữ
  Chưa rõ (hỏi tác giả):

SAU KHI SỬA:
  Câu đặc trưng còn: x/5
  Câu viết mới theo section:
    [section] bắt buộc x câu (không tính ngưỡng) | tuỳ chọn y câu / z câu = n%
  Nhiệt / quan điểm có trôi không:
  Kết luận: an toàn ghi file / hoàn tác phần tuỳ chọn ở section ...
```

## Đạt khi

Mọi thứ trong mục 3 còn nguyên, các câu đặc trưng còn nguyên hoặc bị sửa có lý do được ghi rõ, không section nào vượt 20% **câu tuỳ chọn** viết mới, và đọc to lên vẫn nghe ra một người cụ thể.
