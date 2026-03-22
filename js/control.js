const btnOpenModalCreate = document.querySelector("#btn-add");
const btnOpenModalStats = document.querySelector("#btn-stats");

const modaleCreate = document.querySelector(".modal-create");

const btnCreateHistory = document.querySelector("#btn-create");
const btnCancelModal = document.querySelector("#btn-cancel");

btnOpenModalCreate.addEventListener("click", () => {
    modaleCreate.classList.add("modal-create--visiable");
});

btnCancelModal.addEventListener("click", () => {
    modaleCreate.classList.remove("modal-create--visiable");
});
