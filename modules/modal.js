export { modalMOD };

const modalMOD = (function () {
  const dialog = document.querySelector("dialog");
  const confirmBtn = dialog.querySelector("#confirm");
  const cancelBtn = dialog.querySelector("#cancel");

  cancelBtn.addEventListener("click", () => dialog.close());

  function showModal() {
    dialog.showModal();
  }

  return {
    showModal,
  };
})();
