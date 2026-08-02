# Ngôn ngữ chung của một series

Mỗi thư mục series có một file `domain-ubiquitous-language.md` nằm cạnh các bài `.html` của nó.

**Việc của file:** chốt nghĩa các thuật ngữ và các tuyên bố mà series đã cam kết, để bài mới không mâu thuẫn với bài cũ **mà không phải đọc lại bài cũ**. Một series bảy bài dài mấy trăm KB thì đọc lại toàn bộ trước mỗi lần viết là không khả thi. File này tồn tại đúng để thay việc đó.

**Việc file không làm:** nó không phải nguồn chân lý. Mỗi mục đều dẫn một nguồn, và khi mục và nguồn nói khác nhau thì nguồn thắng, còn mục thì phải sửa. File này là bản ghi nhớ của series, không phải tài liệu chuẩn của ngành.

---

## 1. Đưa cái gì vào

Không phải mọi thuật ngữ trong bài. Chỉ bốn loại, vì chỉ bốn loại này sinh ra mâu thuẫn giữa các bài:

1. **Thuật ngữ có định nghĩa chuẩn từ một nguồn có thẩm quyền**, nơi bài viết dễ trôi khỏi định nghĩa gốc. Ví dụ: một thứ mà tài liệu chuẩn gọi là "hoạt động" nhưng người ta quen gọi là "sự kiện".
2. **Thuật ngữ do chính tác giả đặt ra** trong series. Chúng phải giữ nguyên nghĩa từ bài đầu tới bài cuối, và không có nguồn ngoài nào giữ hộ.
3. **Cách gọi tiếng Việt đã chọn** cho một thuật ngữ tiếng Anh, kèm quyết định giữ nguyên tiếng Anh hay dịch. Đây là mục `translate` cần nhất; thiếu nó thì hai bản ngôn ngữ trôi xa nhau.
4. **Tuyên bố mà series đã cam kết**: những khẳng định về sự kiện mà một bài đã chốt và bài sau không được nói ngược, trừ khi cố ý sửa bài cũ.

Không đưa vào: từ phổ thông, thuật ngữ chỉ xuất hiện một lần ở một bài, hoặc thứ tra được bằng một câu tìm kiếm và không ai hiểu lệch.

## 2. Cấu trúc file

```markdown
# Ngôn ngữ chung - <tên series>

Cập nhật: YYYY-MM-DD. Thư mục: <đường dẫn>.
Trạng thái: rà từ các bài <liệt kê>. Chưa rà: <liệt kê>.

## Thuật ngữ

| Thuật ngữ | Trong bản tiếng Việt | Chốt nghĩa | Không được nói | Nguồn |
|---|---|---|---|---|

## Tuyên bố series đã cam kết

| Tuyên bố | Bài chốt nó | Nguồn |
|---|---|---|

## Chưa chốt
(những chỗ hai bài đang nói khác nhau mà chưa ai quyết)
```

Cột **"Không được nói"** là cột đắt nhất. Nó ghi đúng cái bẫy: cách diễn đạt sai mà người viết dễ rơi vào. Một mục không viết được cột này thường là mục không cần có trong file.

Phần **"Trạng thái"** ở đầu file là bắt buộc. Một file từ điển đọc như thể đã đầy đủ trong khi mới rà hai trong bảy bài thì nguy hiểm hơn không có file, vì nó khiến người viết bỏ qua bước grep.

Phần **"Chưa chốt"** cũng bắt buộc, kể cả khi rỗng. Chỗ hai bài mâu thuẫn mà chưa ai quyết phải nằm ở đây chứ không được lặng lẽ biến mất.

## 3. Dùng file lúc nào

| Mode | Dùng thế nào |
|---|---|
| `draft` | Đọc trước khi viết. Mọi thuật ngữ trong bài phải khớp với file, hoặc phải được bổ sung vào file trong cùng lượt |
| `refine` | Đọc ở vòng 1. Chỗ bài lệch khỏi file là lỗi loại A, sửa không cần hỏi |
| `feedback` | Khi một mục đánh giá nói bài dùng sai thuật ngữ, đối chiếu file trước, rồi đối chiếu nguồn của mục đó trong file |
| `translate` | Bắt buộc. Cột "Trong bản tiếng Việt" quyết định cách dịch, không tự chọn lại từ đầu |
| `outline`, `review` | Đọc nếu bài chạm tới thuật ngữ của series |

**Thuật ngữ chưa có trong file thì không được coi là đã kiểm.** Grep các file `.html` cùng thư mục theo thuật ngữ đó, chốt nghĩa, rồi thêm vào file. Nếu bỏ bước này, file sẽ dần trở thành cái cớ để không kiểm gì cả.

## 4. Nuôi file

- **Thêm mục ngay trong lượt phát hiện**, đừng để sang lượt sau. Một thuật ngữ vừa phải tra mất mười phút mà không ghi lại thì lần sau lại mất mười phút.
- **Cập nhật dòng "Trạng thái"** mỗi lần rà thêm một bài.
- **Khi sửa nghĩa một mục đã có**, kiểm luôn các bài đang dùng nghĩa cũ. Đổi từ điển mà không đổi bài là tạo ra mâu thuẫn thay vì gỡ nó.
- **Khi phát hiện bài cũ sai**, không tự sửa bài cũ. Ghi vào mục "Chưa chốt", báo tác giả, để tác giả quyết sửa bài nào.
- File này là nội dung của series, không phải file quy tắc, nên **không chịu giới hạn hai chỗ sửa mỗi lượt** của `guide-maintenance.md`.

## 5. Khi series chưa có file

Tạo mới, nhưng chỉ điền những mục **thật sự đã kiểm trong lượt này**. Không đoán, không điền cho đầy bảng. Một file bốn mục đúng có ích hơn một file hai mươi mục trong đó năm mục sai, vì năm mục sai sẽ được tin và nhân bản vào các bài sau.

Ghi rõ ở dòng "Trạng thái" những bài chưa rà. Đó là danh sách việc cho các lượt sau.
