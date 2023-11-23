export { modModal };

const modModal = (function () {
  const dialog = document.querySelector("dialog");
  const confirmBtn = dialog.querySelector("#confirm");
  const modalCont = dialog.querySelector(".modal-board");

  function showModal() {
    dialog.showModal();
  }

  return {
    showModal,
    modalCont,
  };
})();
