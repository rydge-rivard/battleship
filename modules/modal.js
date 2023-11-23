export { modModal };

const modModal = (function () {
  const dialog = document.querySelector("dialog");
  const confirmBtn = dialog.querySelector("#confirm");
  const cancelBtn = dialog.querySelector("#cancel");
  const modalCont = dialog.querySelector(".modal-board");

  cancelBtn.addEventListener("click", () => dialog.close());

  function showModal() {
    dialog.showModal();
  }

  return {
    showModal,
    modalCont,
  };
})();
