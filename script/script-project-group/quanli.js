document.addEventListener("DOMContentLoaded", function () {
    const modal = document.querySelector(".intro-modal")
    const closeBtn = document.querySelector(".intro-modal__close-btn")
    const overlay = document.querySelector(".intro-modal__overlay")
  
    // Hiển thị modal
    modal.classList.add("intro-modal--active")
  
    // Đóng modal khi nhấn nút x
    closeBtn.addEventListener("click", () => {
      modal.classList.remove("intro-modal--active")
    })
  
    // Đóng modal khi nhấn bên ngoài nội dung
    overlay.addEventListener("click", () => {
      modal.classList.remove("intro-modal--active")
    })
  })
  
  /* JavaScript để xử lý submenu */
  
  document.addEventListener("DOMContentLoaded", function () {
    const managementLink = document.querySelector(".bx-chat").parentElement
    const submenu = managementLink.nextElementSibling.nextElementSibling // submenu element
  
    managementLink.addEventListener("click", function (e) {
      e.preventDefault() // Ngăn chặn hành vi mặc định của thẻ a
  
      // Toggle submenu
      if (submenu.style.display === "block") {
        submenu.style.display = "none"
      } else {
        // Ẩn tất cả submenu khác (nếu có)
        const allSubmenus = document.querySelectorAll(".submenu")
        allSubmenus.forEach((menu) => {
          menu.style.display = "none"
        })
  
        submenu.style.display = "block"
      }
    })
  
    // Ẩn submenu khi click ra ngoài
    document.addEventListener("click", function (e) {
      if (!managementLink.contains(e.target) && !submenu.contains(e.target)) {
        submenu.style.display = "none"
      }
    })
  }) // Tab functionality
  document.querySelectorAll(".tab-link").forEach((tab) => {
    tab.addEventListener("click", (e) => {
      e.preventDefault()
  
      // Hide all panels and remove active class from tabs
      document
        .querySelectorAll(".tab-panel")
        .forEach((panel) => panel.classList.remove("active"))
      document
        .querySelectorAll(".tab-link")
        .forEach((link) => link.classList.remove("active"))
  
      // Add active class to clicked tab and show its panel
      tab.classList.add("active")
      const target = tab.getAttribute("data-target")
      document.getElementById(target).classList.add("active")
    })
  })
  