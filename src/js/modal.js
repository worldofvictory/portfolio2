(() => {
  const openModalBtns = document.querySelectorAll("[data-modal-open]");

  for (let i = 0; i < openModalBtns.length; i++) {
    let openModalBtn = openModalBtns[i],
      modal = null,
      modalClose = null;
    openModalBtn.addEventListener("click", () => {
      let target = openModalBtn.getAttribute('data-modal-open');
      if (target) {
        modal = document.querySelector(`[data-modal="${target}"]`);
        modalClose = modal.querySelector("[data-modal-close]");
        modal.classList.toggle("is-hidden");
        document.body.classList.toggle('no-scroll');
      }
    });
    document.addEventListener('click', (e) => {
      if (e.target.closest('[data-modal-close]')) {
        e.target.closest('[data-modal]').classList.add("is-hidden");
        document.body.classList.remove('no-scroll');
      }
    })
  }
})();