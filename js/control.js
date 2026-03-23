import { myHistories } from "./History.js";

const btnOpenModalCreate = document.querySelector("#btn-add");
const btnOpenModalStats = document.querySelector("#btn-stats");

const modalCreate = document.querySelector(".modal-create");
const btnCancelModal = document.querySelector("#btn-cancel");

const formCreating = document.forms["creating"];

const modalStats = document.querySelector("#modal-stats");
const closeModal = document.querySelector("#closeModal");

const template = document.querySelector("#template-history");
const historiesList = document.querySelector(".histories__ul");

btnOpenModalCreate.addEventListener("click", () => {
    modalCreate.classList.add("modal-create--visiable");
});

const histories = document.getElementsByClassName("history");

btnOpenModalStats.addEventListener("click", () => {
    modalStats.querySelector(".amount-history").textContent = histories.length;
    modalStats.showModal();
});

modalStats.addEventListener("click", (event) => {
    if (event.target === modalStats) modalStats.close();
});

closeModal.addEventListener("click", () => {
    modalStats.close();
});

btnCancelModal.addEventListener("click", () => {
    modalCreate.classList.remove("modal-create--visiable");
});

formCreating.addEventListener("submit", (event) => {
    event.preventDefault();

    const title = formCreating.title.value;
    const desc = formCreating.desc.value;
    const img = formCreating.img.value || "assets/no-image.png";
    console.log({ title, desc, img });

    const newHistory = myHistories.shapeHistoryObj(title, desc, img);
    //const numberHistory = myHistories.addHistory(newHistory);

    modalCreate.classList.remove("modal-create--visiable");
    formCreating.reset();

    const templHis = template.content.cloneNode(true);

    templHis.querySelector(".history__img > img").src = newHistory.img;
    templHis.querySelector(".history__desc").textContent = newHistory.desc;
    templHis.querySelector(".history__title").textContent = newHistory.title;
    templHis.querySelector(".history__number").textContent = `История`;

    historiesList.append(templHis);
});
