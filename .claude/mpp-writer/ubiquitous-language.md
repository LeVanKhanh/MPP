# Ngôn ngữ chung của một series

Mỗi thư mục series có một file `domain-ubiquitous-language.md` nằm cạnh các bài `.html` của nó.

**Việc của file:** là **từ điển tra cứu** để mọi bài gọi cùng một khái niệm bằng cùng một tên, hiểu nó theo cùng một nghĩa, và tránh cùng những cách diễn đạt sai, **mà không phải đọc lại bài cũ**. Một series bảy bài dài mấy trăm KB thì đọc lại toàn bộ trước mỗi lần viết là không khả thi. File này tồn tại đúng để thay việc đó.

**Việc file không làm:**

- Nó không phải nguồn chân lý. Mỗi mục đều dẫn một nguồn, và khi mục và nguồn nói khác nhau thì nguồn thắng, còn mục thì phải sửa.
- Nó không phải nhật ký. Không ghi lịch sử sửa, ngày sửa, lượt đánh giá, "lỗi đã mắc và đã sửa", trạng thái đăng bài hay menu. Lịch sử nằm trong git; trạng thái tra từ repo.
- Nó không chứa quy ước viết không thuộc về ngôn ngữ (cảnh ví dụ đã dùng, tên file, menu, hình, quyết định phạm vi của tác giả). Những thứ đó nằm ở `series-conventions.md`.

---

## 1. Đưa cái gì vào

Không phải mọi thuật ngữ trong bài. Chỉ những loại sinh ra mâu thuẫn giữa các bài:

1. **Thuật ngữ có định nghĩa chuẩn từ một nguồn có thẩm quyền**, nơi bài viết dễ trôi khỏi định nghĩa gốc. Ví dụ: một thứ mà tài liệu chuẩn gọi là "hoạt động" nhưng người ta quen gọi là "sự kiện".
2. **Thuật ngữ do chính tác giả đặt ra** trong series. Chúng phải giữ nguyên nghĩa từ bài đầu tới bài cuối, và không có nguồn ngoài nào giữ hộ.
3. **Cách gọi đã chọn ở hai ngôn ngữ**: giữ nguyên tiếng Anh hay dịch, và cụm tiếng Anh đã chọn khi dịch. Đây là mục `translate` cần nhất; thiếu nó thì hai bản ngôn ngữ trôi xa nhau.
4. **Cách diễn đạt đã chốt**: khẳng định về sự kiện, lịch sử, nguồn gốc mà một bài đã chốt và bài sau không được nói ngược; nguyên tắc diễn đạt chung của series; cách mô tả một nguồn nghiên cứu (loại nghiên cứu, phạm vi, cách mô tả sai đã gặp).
5. **Tiêu đề và nhãn cố định** ở hai ngôn ngữ.

Không đưa vào: từ phổ thông, thuật ngữ chỉ xuất hiện một lần ở một bài, thứ tra được bằng một câu tìm kiếm mà không ai hiểu lệch, và thuật ngữ hay nguồn mà không bài nào còn dùng.

## 2. Cấu trúc file

```markdown
# Từ điển ngôn ngữ chung - <tên series>

<Một câu nói file dùng để làm gì.>

**Phạm vi:** <các bài đã rà>. **Chưa rà:** <các bài chưa rà, nếu có>. Thuật ngữ không có trong file này là chưa được chốt.

**Khi file và nguồn nói khác nhau, nguồn thắng**; sửa mục trong file.

Mục lục: ...

## Thuật ngữ
(chia nhóm theo công cụ / chủ đề; mỗi nhóm một bảng)

| Thuật ngữ | Gọi là | Nghĩa chốt | Không viết | Nguồn |
|---|---|---|---|---|

## Cách diễn đạt đã chốt
(nguyên tắc diễn đạt chung; dữ kiện nền; cách gọi các nguồn nghiên cứu)

| Chủ đề | Viết | Không viết | Nguồn |
|---|---|---|---|

## Bảng dịch Việt - Anh
(xếp theo chữ cái tiếng Việt)

## Tiêu đề và nhãn cố định

## Chưa chốt
(những khái niệm các nguồn hoặc các bài đang nói khác nhau mà chưa ai quyết)
```

Series nào chưa cần một phần (ví dụ chưa có bản EN thì chưa có bảng dịch) thì bỏ phần đó, giữ thứ tự các phần còn lại.

Cột **"Không viết"** là cột đắt nhất. Nó ghi đúng cái bẫy: cách diễn đạt sai mà người viết dễ rơi vào, kèm cách viết đúng trong ngoặc khi cần. Một mục không viết được cột này thường là mục không cần có trong file.

Dòng **"Phạm vi"** ở đầu file là bắt buộc. Một file từ điển đọc như thể đã đầy đủ trong khi mới rà hai trong bảy bài thì nguy hiểm hơn không có file, vì nó khiến người viết bỏ qua bước grep. Dòng này chỉ liệt kê bài đã rà và chưa rà, không ghi ngày hay lượt rà.

Phần **"Chưa chốt"** cũng bắt buộc, kể cả khi rỗng. Chỗ hai bài hoặc hai nguồn mâu thuẫn về một khái niệm mà chưa ai quyết phải nằm ở đây chứ không được lặng lẽ biến mất. Việc cần làm về bài (chưa dịch, chưa đăng, thiếu `page-meta`) không thuộc phần này.

**Mỗi mục ghi trạng thái hiện tại, viết như định nghĩa.** Không viết "sửa ngày…", "đã gỡ khỏi bài…", "phát hiện qua đánh giá ngoài…", "~~đã xong~~". Một cách diễn đạt sai từng mắc thì đưa vào cột "Không viết", không kể lại chuyện đã mắc.

## 3. Dùng file lúc nào

| Mode | Dùng thế nào |
|---|---|
| `draft` | Đọc trước khi viết. Mọi thuật ngữ trong bài phải khớp với file, hoặc phải được bổ sung vào file trong cùng lượt |
| `refine` | Đọc ở vòng 1. Chỗ bài lệch khỏi file là lỗi loại A, sửa không cần hỏi |
| `feedback` | Khi một mục đánh giá nói bài dùng sai thuật ngữ, đối chiếu file trước, rồi đối chiếu nguồn của mục đó trong file |
| `translate` | Bắt buộc. Cột "Gọi là", bảng dịch và bảng tiêu đề quyết định cách dịch, không tự chọn lại từ đầu |
| `outline`, `review` | Đọc nếu bài chạm tới thuật ngữ của series |

**Thuật ngữ chưa có trong file thì không được coi là đã kiểm.** Grep các file `.html` cùng thư mục theo thuật ngữ đó, chốt nghĩa, rồi thêm vào file. Nếu bỏ bước này, file sẽ dần trở thành cái cớ để không kiểm gì cả.

## 4. Nuôi file

- **Thêm mục ngay trong lượt phát hiện**, đừng để sang lượt sau. Một thuật ngữ vừa phải tra mất mười phút mà không ghi lại thì lần sau lại mất mười phút.
- **Đặt mục vào đúng nhóm**, không nối thêm xuống cuối bảng. Từ điển phải tra được theo nhóm.
- **Cập nhật dòng "Phạm vi"** mỗi lần rà thêm một bài.
- **Khi sửa nghĩa một mục đã có, ghi đè** mục đó bằng nghĩa mới; không giữ song song nghĩa cũ. Kiểm luôn các bài đang dùng nghĩa cũ: đổi từ điển mà không đổi bài là tạo ra mâu thuẫn thay vì gỡ nó.
- **Khi một thuật ngữ hay một nguồn không còn bài nào dùng, xoá mục đó.**
- **Khi phát hiện bài cũ sai**, không tự sửa bài cũ. Ghi vào mục "Chưa chốt", báo tác giả, để tác giả quyết sửa bài nào.
- File này là nội dung của series, không phải file quy tắc, nên **không chịu giới hạn hai chỗ sửa mỗi lượt** của `guide-maintenance.md`.

## 5. Khi series chưa có file

Tạo mới theo cấu trúc mục 2, nhưng chỉ điền những mục **thật sự đã kiểm trong lượt này**. Không đoán, không điền cho đầy bảng. Một file bốn mục đúng có ích hơn một file hai mươi mục trong đó năm mục sai, vì năm mục sai sẽ được tin và nhân bản vào các bài sau.

Ghi rõ ở dòng "Phạm vi" những bài chưa rà. Đó là danh sách việc cho các lượt sau.
