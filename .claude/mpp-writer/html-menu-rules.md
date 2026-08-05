# Quy tắc HTML và Menu - My Personal Planet

## 1. Chọn template

| Thể loại | Template | Ghi chú |
|---|---|---|
| Bài luận, quan điểm | `pages/template-notes.html` | |
| Bài kỹ thuật | `pages/template-notes.html` | Cùng template, khác giọng văn |
| Bài trong series mục lục kiến thức | `pages/template-notes.html` | Cùng template, nhưng bố cục section đã chốt sẵn ở `catalog-series.md` |
| Thơ | `pages/template-poetry.html` | Dùng custom element `<stanza>` / `<line>`, cần thêm `poetry-style.css` |

Đọc template trước khi viết. Không tự sáng tác cấu trúc mới.

Stylesheet phụ chỉ link ở trang thật sự dùng tới nó: `poetry-style.css` cho trang thơ, `diagram-styles.css` cho trang có hình (mục 3.1).

## 2. Khung file cho bài luận / kỹ thuật

```html
<!DOCTYPE html>
<html lang="vi">
<head>
    <meta charset="UTF-8">
    <title>Tiêu Đề Bài - My Personal Planet</title>
    <link rel="stylesheet" href="../../../pages-styles.css">
    <!-- Chỉ thêm dòng dưới khi bài có hình, xem mục 3.1 -->
    <link rel="stylesheet" href="../../../diagram-styles.css">
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
  - `pages-styles.css`, `pages-scripts.js`, và các stylesheet phụ (`diagram-styles.css`, `poetry-style.css`) đều dùng cùng số cấp, vì cả bốn file đều nằm ngay trong `pages/`.
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

### 3.1 Hình minh hoạ: SVG nội tuyến, không phải ảnh tải về

Khi bài cần một hình, vẽ bằng SVG nội tuyến đặt thẳng trong file. **Không tải ảnh biểu đồ từ nguồn khác về.** Ảnh sơ đồ trên internet gần như luôn có bản quyền, và một ảnh raster thì không đổi màu theo dark theme, không phóng to được, không đọc được bằng trình đọc màn hình.

**Style nằm ở `pages/diagram-styles.css`, không chép vào từng bài.** Trang nào có hình thì thêm một dòng link ngay sau dòng link `pages-styles.css`, số cấp `../` đếm y hệt:

```html
<link rel="stylesheet" href="../../pages-styles.css">
<link rel="stylesheet" href="../../diagram-styles.css">
```

Trang không có hình thì không link, đúng như cách `poetry-style.css` chỉ xuất hiện ở trang thơ. Không viết khối `<style>` inline cho hình: mọi class dưới đây đã có sẵn trong `diagram-styles.css`, và một series nhiều bài mà mỗi bài giữ một bản sao của bộ biến màu thì sẽ trôi khỏi nhau.

Bản mẫu đang chạy: `pages/reading-studying/management-tools-and-techniques/12-gantt-charts-vn.html`.

```html
<figure class="tool-diagram">
    <svg role="img" aria-label="Mô tả hình bằng một câu đầy đủ" viewBox="0 0 1120 320">
        <rect class="node" x="30" y="38" width="150" height="52" rx="10"></rect>
        <text x="105" y="64">Nhãn</text>
        <path class="arrow" d="M180 64 H235"></path>
    </svg>
    <figcaption><strong>Hình 1.</strong> Câu này nói ra điều hình cho thấy, không lặp lại tiêu đề hình.</figcaption>
</figure>
```

Bắt buộc:

- Đã link `diagram-styles.css`, đúng số cấp `../`.
- `role="img"` cộng `aria-label` một câu đầy đủ. Chữ nằm trong `<text>` của SVG không thay được `aria-label`.
- Có `viewBox`, không đặt `width` và `height` cố định trên thẻ `<svg>`.
- **Không viết mã màu thẳng vào `fill` hay `stroke`.** Màu đến từ class, class lấy màu từ biến CSS, nhờ vậy hình đổi theo `body.dark-theme`. Ngoại lệ duy nhất là `fill="currentColor"` trong `<marker>`.
- Đánh số `Hình 1.`, `Hình 2.` theo thứ tự xuất hiện. Bản EN dùng `Figure 1.`.

Class có sẵn trong `diagram-styles.css`:

| Class | Dùng cho |
|---|---|
| `bar`, `node` | Khối đặc: một đầu việc, một bước, một ô đã xác định |
| `band` | Dải mờ viền đứt: một khoảng bất định, một phạm vi chưa chốt |
| `ghost` | Khối rỗng viền đứt: vị trí cũ, phương án đã bỏ |
| `axis`, `tick` | Trục và vạch chia |
| `edge`, `edge-ghost` | Vạch nhấn hai đầu của một khối |
| `today` | Vạch mốc cần chú ý, màu cảnh báo |
| `arrow` | Đường nối, dùng kèm `marker-end` |
| `small` | Chữ phụ, nhỏ và nhạt hơn |
| `rowlabel` | Nhãn cột trái, canh phải |
| `note` | Ghi chú bên phải một khối, canh trái |
| `alert` | Chữ màu cảnh báo |

Cần một hình thù không nằm trong bảng này thì thêm class vào `diagram-styles.css`, đừng đặt style riêng trong bài.

Ảnh raster (`.png`, `.jpg`, `.webp`) chỉ dùng khi thứ cần cho xem là một vật có thật không vẽ lại được, ví dụ ảnh chụp một tài liệu gốc. Khi đó đặt trong `images/` cùng thư mục, luôn có `alt`, và ghi nguồn cùng tình trạng bản quyền ngay trong `figcaption`.

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
- [ ] Bài có hình thì đã link `diagram-styles.css` đúng số cấp `../`, và không còn khối `<style>` inline nào cho hình (mục 3.1)
- [ ] Hình minh hoạ là SVG nội tuyến, có `role="img"` và `aria-label`, không có mã màu viết thẳng vào `fill`/`stroke` nên đổi được cả ở dark theme (mục 3.1)
- [ ] `<time datetime>` đúng ISO, ngày không nằm ở tương lai
- [ ] `page-meta` đã đổi sang ngày của lần sửa này, cả `datetime` lẫn phần hiển thị (mục 2.1)
- [ ] Nhãn đúng loại: `Đăng ngày:` cho bài mới, `Cập nhật:` cho bài đã sửa
- [ ] Mọi `<sup><a href="#ref-N">` đều có `id="ref-N"` tương ứng, và ngược lại. Số phải chạy theo đúng thứ tự xuất hiện lần đầu trong bài, và thứ tự các `<li>` trong danh sách tham khảo phải khớp với số
- [ ] Mọi link ngoài có `rel="noopener noreferrer" target="_blank"`, và còn sống
- [ ] Đã đăng ký menu đúng file theo ngôn ngữ, `hash` khớp với bản ngôn ngữ kia
- [ ] Không còn ghi chú `CẦN XÁC MINH` sót lại
