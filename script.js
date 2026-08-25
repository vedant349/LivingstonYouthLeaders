/* Livingston Youth Leaders, small bits of interactivity.
   No frameworks, no build step. */

(function () {
  "use strict";

  /* ---- Mobile nav toggle ---- */
  var toggle = document.querySelector(".nav-toggle");
  var menu = document.querySelector(".nav-menu");

  if (toggle && menu) {
    toggle.addEventListener("click", function () {
      var open = menu.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });

    // Close the menu after tapping a link on mobile
    menu.addEventListener("click", function (e) {
      if (e.target.tagName === "A") {
        menu.classList.remove("is-open");
        toggle.setAttribute("aria-expanded", "false");
      }
    });
  }

  /* ---- Project year filters (Projects page) ---- */
  var filters = document.querySelectorAll(".filter");
  var items = document.querySelectorAll("[data-year]");

  if (filters.length && items.length) {
    filters.forEach(function (btn) {
      btn.addEventListener("click", function () {
        var year = btn.getAttribute("data-filter");

        filters.forEach(function (b) { b.classList.remove("is-active"); });
        btn.classList.add("is-active");

        items.forEach(function (item) {
          var show = year === "all" || item.getAttribute("data-year") === year;
          item.style.display = show ? "" : "none";
        });
      });
    });
  }

  /* ---- Contact form: hand off to the email client ----
     Static sites can't send mail on their own. This opens the visitor's
     email app with everything pre-filled. To collect submissions directly
     instead, see README.md ("Making the contact form send email"). */
  var form = document.querySelector("#contact-form");

  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var get = function (name) {
        var el = form.querySelector('[name="' + name + '"]');
        return el ? el.value.trim() : "";
      };

      var subject = "[Website] " + (get("topic") || "General question") + ", " + get("name");
      var body =
        "Name: " + get("name") + "\n" +
        "Email: " + get("email") + "\n" +
        "Topic: " + get("topic") + "\n\n" +
        get("message");

      window.location.href =
        "mailto:LivingstonYouthLeaders@gmail.com" +
        "?subject=" + encodeURIComponent(subject) +
        "&body=" + encodeURIComponent(body);
    });
  }


  /* ---- Gallery filters ---- */
  var gFilters = document.querySelectorAll(".g-filter");
  var gItems = document.querySelectorAll(".g-item");

  if (gFilters.length && gItems.length) {
    gFilters.forEach(function (btn) {
      btn.addEventListener("click", function () {
        var cat = btn.getAttribute("data-gcat");
        gFilters.forEach(function (b) { b.classList.remove("is-active"); });
        btn.classList.add("is-active");
        gItems.forEach(function (item) {
          var show = cat === "all" || item.getAttribute("data-cat") === cat;
          item.style.display = show ? "" : "none";
        });
      });
    });
  }

  /* ---- Lightbox, works on any element with class lb-item ----
     Reads data-src for the full image, data-title and data-meta for the caption.
     Arrows move through whatever is currently visible. */
  var lbItems = document.querySelectorAll(".lb-item");

  if (lbItems.length) {
    var box = document.createElement("div");
    box.className = "lightbox";
    box.innerHTML =
      '<div class="lb-head">' +
        '<span class="lb-title"></span>' +
        '<span class="lb-count"></span>' +
        '<button class="lb-x" aria-label="Close">&times;</button>' +
      '</div>' +
      '<div class="lb-stage">' +
        '<button class="lb-nav lb-prev" aria-label="Previous">&#8249;</button>' +
        '<img alt="">' +
        '<button class="lb-nav lb-next" aria-label="Next">&#8250;</button>' +
      '</div>' +
      '<p class="lb-caption"></p>';
    document.body.appendChild(box);

    var img = box.querySelector("img"),
        title = box.querySelector(".lb-title"),
        count = box.querySelector(".lb-count"),
        cap = box.querySelector(".lb-caption"),
        visible = [], index = 0;

    function collect() {
      visible = [];
      lbItems.forEach(function (el) {
        if (el.style.display !== "none") { visible.push(el); }
      });
    }

    function show(i) {
      if (!visible.length) return;
      index = (i + visible.length) % visible.length;
      var el = visible[index];
      img.src = el.getAttribute("data-src");
      img.alt = el.getAttribute("data-title") || "";
      title.textContent = el.getAttribute("data-title") || "";
      cap.textContent = el.getAttribute("data-meta") || "";
      count.textContent = (index + 1) + " of " + visible.length;
    }

    function open(el) {
      collect();
      var at = visible.indexOf(el);
      show(at < 0 ? 0 : at);
      box.classList.add("is-open");
      document.body.style.overflow = "hidden";
    }

    function close() {
      box.classList.remove("is-open");
      document.body.style.overflow = "";
      img.src = "";
    }

    lbItems.forEach(function (el) {
      el.addEventListener("click", function () { open(el); });
      el.addEventListener("keydown", function (e) {
        if (e.key === "Enter" || e.key === " ") { e.preventDefault(); open(el); }
      });
    });
    box.querySelector(".lb-x").addEventListener("click", close);
    box.querySelector(".lb-prev").addEventListener("click", function () { show(index - 1); });
    box.querySelector(".lb-next").addEventListener("click", function () { show(index + 1); });
    box.addEventListener("click", function (e) { if (e.target === box) { close(); } });
    document.addEventListener("keydown", function (e) {
      if (!box.classList.contains("is-open")) return;
      if (e.key === "Escape") { close(); }
      if (e.key === "ArrowLeft") { show(index - 1); }
      if (e.key === "ArrowRight") { show(index + 1); }
    });
  }

  /* ---- Footer year ---- */
  var yearEl = document.querySelectorAll("[data-current-year]");
  yearEl.forEach(function (el) { el.textContent = new Date().getFullYear(); });
})();
