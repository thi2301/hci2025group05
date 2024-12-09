// Lấy tất cả các thẻ <a> bên trong <li>
const links = document.querySelectorAll("ul li:nth-child(-n+6) a");

// Lặp qua từng thẻ <a>
links.forEach(link => {
  link.addEventListener("click", function (event) {
    // Xóa class "active" khỏi tất cả các thẻ <a>
    links.forEach(item => item.classList.remove("active"));
    
    // Thêm class "active" vào thẻ <a> được click
    this.classList.add("active");
  });
});
