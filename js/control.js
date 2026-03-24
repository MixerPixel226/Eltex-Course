import { myHistories } from "./History.js";

const btnOpenModalCreate = document.querySelector("#btn-add");
const btnOpenModalStats = document.querySelector("#btn-stats");

const modalCreate = document.querySelector(".modal-create");
const btnCancelModal = document.querySelector("#btn-cancel");

const formCreating = document.forms["creating"];

const modalStats = document.querySelector("#modal-stats");
const closeModal = document.querySelector("#closeModal");

const template = document.querySelector("#template-history");

const historiesList = document.querySelector(".histories__ul--blog");

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
    formCreating.reset();
});

formCreating.addEventListener("submit", (event) => {
    event.preventDefault();

    const title = formCreating.title.value;
    const desc = formCreating.desc.value;
    const img = formCreating.img.value || "assets/no-image.png";

    const newHistory = myHistories.shapeHistoryObj(title, desc, img);
    myHistories.addHistory(newHistory);

    let elementHistory = shapingElement(newHistory);
    historiesList.append(elementHistory);

    modalCreate.classList.remove("modal-create--visiable");
    formCreating.reset();
});

const shapingElement = (history) => {
    const templHis = template.content.cloneNode(true);

    templHis.querySelector(".history__img > img").src = history.img;
    templHis.querySelectorAll(".history__desc").forEach((el) => {
        el.textContent = history.desc;
    });
    templHis.querySelector(".history__title").textContent = history.title;
    templHis.querySelector(".history__number").textContent = `История`;
    templHis.querySelector(".histories__item").dataset.id = history.id;

    return templHis;
};

const outputList = () => {
    const histories = myHistories.histories;

    histories.forEach((history) => {
        historiesList.append(shapingElement(history));
    });
};

historiesList.addEventListener("click", (event) => {
    if (event.target.closest(".history__delete")) {
        const history = event.target.closest(".histories__item");
        myHistories.deleteHistory(history.dataset.id);
        history.remove();
    }
});

outputList();
