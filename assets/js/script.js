document.addEventListener("DOMContentLoaded", () => {
  // Value row expand / lock behaviour
  const rows = document.querySelectorAll(".value-row");

  rows.forEach(row => {
    let locked = false;

    row.addEventListener("mouseenter", () => {
      if (!locked) {
        row.classList.add("expanded");
      }
    });

    row.addEventListener("mouseleave", () => {
      if (!locked) {
        row.classList.remove("expanded");
      }
    });

    row.addEventListener("click", () => {
      locked = !locked;
      row.classList.toggle("expanded", locked);
    });
  });

  // Enable all Bootstrap tooltips
  const tooltipTriggerList = [].slice.call(
    document.querySelectorAll('[data-bs-toggle="tooltip"]')
  );

  tooltipTriggerList.forEach(el => {
    new bootstrap.Tooltip(el);
  });
});
