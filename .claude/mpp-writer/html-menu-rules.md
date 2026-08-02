# Quy tắc HTML và Menu - My Personal Planet

## 1. Chọn template

| Thể loại | Template | Ghi chú |
|---|---|---|
| Bài luận, quan điểm | `pages/template-notes.html` | |
| Bài kỹ thuật | `pages/template-notes.html` | Cùng template, khác giọng văn |
| Thơ | `pages/template-poetry.html` | Dùng custom element `<stanza>` / `<line>`, cần thêm `poetry-style.css` |

Đọc template trước khi viết. Không tự sáng tác cấu trúc mới.

## 2. Khung file cho bài luận / kỹ thuật

```html
<!DOCTYPE html>
<html lang="vi">
<head>
    <meta charset="UTF-8">
    <title>Tiêu Đề Bài - My Personal Planet</title>
    <link rel="stylesheet" href="../../../pages-styles.css">
</head>
<body>
    <article class="content-article">
        <header class="article-header">
            <h1 class="page-title">Tiêu Đề Bài</h1>
            <p class="page-subtitle">Một câu nói rõ luận điểm, không phải một câu quảng cáo</p>
            <p class="page-meta">Đăng ngày: <time datetime="2026-08-02">2 Tháng 8, 2026</time></p>
        </header>

        <section class="content-section">
            <h2 class="main-point">Tiêu đề section</h2>
            <p class="intro-text">Đoạn mở của section.</p>
            <div class="sub-section">
                <h3 class="sub-point-1">Tiêu đề mục con</h3>
                <p>Nội dung.</p>
            </div>
        </section>
    </article>

    <script src="../../../pages-scripts.js"></script>
</body>
</html>
```

**Bắt buộc kiểm tra:**

- `lang="vi"` cho file `-vn.html`, `lang="en"` cho file EN.
- `<title>` theo dạng `Tiêu Đề - My Personal Planet`.
- **Số cấp `../` phải khớp độ sâu thư mục.** Đếm từ file tới `pages/`:
  - `pages/x.html` → `pages-styles.css`
  - `pages/a/x.html` → `../pages-styles.css`
  - `pages/a/b/x.html` → `../../pages-styles.css`
  - `pages/a/b/c/x.html` → `../../../pages-styles.css`
  - Cả `pages-styles.css` và `pages-scripts.js` dùng cùng số cấp.
- `<time datetime="YYYY-MM-DD">` giữ nguyên định dạng ISO ở thuộc tính, phần hiển thị viết theo ngôn ngữ của bài.
- Ngày viết theo ngày thật, không viết ngày tương lai.

### 2.1 `page-meta` phải khớp lần sửa cuối

**Mỗi lần ghi file là một lần cập nhật `page-meta`.** Không có ngoại lệ, kể cả khi chỉ sửa một câu. Ngày trong bài là thứ người đọc dùng để biết nội dung này còn mới tới đâu; để nó trỏ về một ngày trước lần sửa gần nhất là nói sai với người đọc, và đó là lỗi nặng hơn trong một repo có cả series về ngụy biện.

| Tình huống | Nhãn | Ngày |
|---|---|---|
| Bài mới, ghi file lần đầu | `Đăng ngày:` / `Published:` | Ngày tạo |
| Bài đã có, sửa nội dung bất kỳ | `Cập nhật:` / `Updated:` | Ngày sửa |

Đổi cả hai chỗ, không chỉ một: thuộc tính `datetime` theo ISO, và phần hiển thị theo ngôn ngữ của bài.

```html
<!-- VN -->  <time datetime="2026-08-02">2 Tháng 8, 2026</time>
<!-- EN -->  <time datetime="2026-08-02">August 2, 2026</time>
```

Khi bài chuyển từ lần đăng đầu sang lần sửa đầu tiên, đổi luôn nhãn `Đăng ngày:` thành `Cập nhật:` (và `Published:` thành `Updated:`).

Nếu một lượt sửa cả bản VN lẫn bản EN, hai bản mang cùng một ngày. Nếu chỉ sửa một bản, chỉ đổi ngày của bản đó; hai bản lệch ngày là thông tin đúng, không phải lỗi.

Lấy ngày hôm nay từ môi trường, đừng suy từ ngày đang có sẵn trong file.

## 3. Class được phép

Chỉ dùng class đã có style trong `pages/pages-styles.css`:

`content-article`, `article-header`, `page-title`, `page-subtitle`, `page-meta`, `author`, `content-section`, `main-point`, `intro-text`, `sub-section`, `sub-point-1`, `sub-section-nested`, `sub-point-2`, `outline-list`, `nested-list`, `numbered-outline`, `nested-numbered`, `content-table`, `summary-box`, `helper-text`, `video-container`.

Cần thứ khác thì phải kèm `<style>` inline trong chính file đó (cách các trang trong `values-creation/` làm với `mm-text-tree`). Không sửa `pages-styles.css` cho một bài lẻ.

## 4. Tài liệu tham khảo và trích dẫn

Trích dẫn trong bài:

```html
<p>Nội dung cần dẫn nguồn. <sup><a href="#ref-3">[3]</a></sup></p>
```

Section tham khảo, đặt gần cuối bài, sau phần tóm tắt:

```html
<section class="content-section">
    <h2 class="main-point">Tài Liệu Tham Khảo</h2>
    <ol class="outline-list">
        <li id="ref-1">Hamblin, C. L. (1970). <em>Fallacies</em>. Methuen. Một câu nói rõ nguồn này đóng góp gì cho bài. <a href="https://example.org/..." rel="noopener noreferrer" target="_blank">Đọc bản gốc</a>.</li>
    </ol>
</section>
```

Quy tắc:

- `id="ref-N"` đánh số liên tục từ 1, theo thứ tự xuất hiện lần đầu trong bài.
- Mỗi mục có một câu giải thích vai trò của nguồn, không chỉ liệt kê thư mục.
- Link ngoài luôn có `rel="noopener noreferrer" target="_blank"`.
- Ưu tiên nguồn gốc: sách, paper, tài liệu chính thức. Tránh blog tổng hợp và nội dung do AI sinh ra.
- Link phải được kiểm tra là còn sống tại thời điểm viết.
- Không bịa nguồn, không bịa số trang, không bịa DOI. Không xác minh được thì bỏ chi tiết đó ra khỏi bài.
- Bản EN dùng `<h2 class="main-point">References</h2>`, phần "Xem Thêm" thành "Further Watching".

## 5. Đặt tên và vị trí file

- Bản tiếng Việt: `ten-bai-vn.html`. Bản tiếng Anh: `ten-bai.html`. Hai bản nằm **cùng thư mục**.
- Tên file: chữ thường, không dấu, nối bằng gạch ngang.
- Bài thuộc series đánh số tiền tố: `01-`, `02-`, hoặc `1-`, `2-` theo đúng cách series đó đang dùng. Nhìn các file cùng thư mục rồi theo.
- Thư mục gốc theo chủ đề:
  - `pages/writing-opinion/` - bài luận, quan điểm
  - `pages/reading-studying/` - đọc và nghiên cứu
  - `pages/information-technology/` - kỹ thuật
  - `pages/literature/poetry/` - thơ
  - `pages/health/`, `pages/food-and-beverage/`, `pages/the-planet/`

## 6. Đăng ký vào menu

- Bản tiếng Việt → `main-menu-vn.js` (mảng `mainMenuVn`)
- Bản tiếng Anh → `main-menu.js` (mảng `mainMenu`)

Format một entry lá:

```js
{
    title: "Tên Hiển Thị Trong Menu",
    route: "pages/reading-studying/fallacy-bias-debate/fallacy/01-fallacy-vn.html",
    hash: "#/fallacy-theory",
    icon: "fas fa-file-alt",
    subItems: [],
},
```

Format một nhóm:

```js
{
    title: "Tên Nhóm",
    icon: "fas fa-folder",
    subItems: [ /* các entry con */ ],
},
```

Quy tắc:

- **`hash` phải giống hệt nhau giữa `main-menu-vn.js` và `main-menu.js`** cho cùng một bài. Router (`scripts.js`) khớp trang theo hash, nên hash lệch sẽ làm mất trang khi đổi ngôn ngữ. `route` thì khác nhau (một bên `-vn.html`).
- `hash` viết theo dạng `#/ten-bai-khong-dau`, không có hậu tố `-vn`.
- `route` là đường dẫn từ **gốc repo**, luôn bắt đầu bằng `pages/`, không có `./`.
- `icon`: `fas fa-file-alt` cho bài, `fas fa-folder` cho nhóm, `fas fa-home` cho trang chủ.
- Entry lá vẫn phải có `subItems: []`.
- Giữ dấu phẩy cuối mỗi property và mỗi entry, đúng như style hiện có.
- Thứ tự trong nhóm theo thứ tự đọc của series, không theo alphabet.
- Sau khi sửa, đọc lại đoạn vừa sửa để chắc chắn mảng JS không vỡ cú pháp.

Hai file menu này cũng đóng vai trò **mapping tree**: khi chỉ biết tên bài mà không biết đường dẫn, grep `title` trong `main-menu-vn.js` để tìm ra `route`.

## 7. Cấu trúc bài thơ

```html
<article class="poetry-article">
    <header class="poetry-header">
        <h1 class="poem-title">Tên Bài Thơ</h1>
        <p class="poem-author">Tác giả</p>
        <p class="poem-meta">Năm • Tập thơ</p>
    </header>
    <div class="poetry-content">
        <stanza class="poem-stanza">
            <line class="poem-line">Dòng thơ</line>
        </stanza>
    </div>
    <footer class="poetry-footer">
        <p class="poem-notes"><strong>Ghi chú:</strong> Bối cảnh, xuất xứ, cảm nhận.</p>
    </footer>
</article>
```

Trang thơ cần cả hai stylesheet: `pages-styles.css` và `poetry-style.css`, số cấp `../` tính như mục 2.

## 8. Kiểm tra trước khi coi là xong

- [ ] Đúng template theo thể loại
- [ ] `lang` đúng ngôn ngữ
- [ ] Đường dẫn CSS và script đúng số cấp `../`
- [ ] Chỉ dùng class có sẵn, hoặc có `<style>` inline kèm theo
- [ ] `<time datetime>` đúng ISO, ngày không nằm ở tương lai
- [ ] `page-meta` đã đổi sang ngày của lần sửa này, cả `datetime` lẫn phần hiển thị (mục 2.1)
- [ ] Nhãn đúng loại: `Đăng ngày:` cho bài mới, `Cập nhật:` cho bài đã sửa
- [ ] Mọi `<sup><a href="#ref-N">` đều có `id="ref-N"` tương ứng, và ngược lại
- [ ] Mọi link ngoài có `rel="noopener noreferrer" target="_blank"`, và còn sống
- [ ] Đã đăng ký menu đúng file theo ngôn ngữ, `hash` khớp với bản ngôn ngữ kia
- [ ] Không còn ghi chú `CẦN XÁC MINH` sót lại
