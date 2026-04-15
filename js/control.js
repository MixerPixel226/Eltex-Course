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

const emptyHistoryBlock = document.querySelector("#emptyHistory");

const creatingFields = document.querySelector("#creatingFields");

btnOpenModalCreate?.addEventListener("click", () => {
    modalCreate.classList.add("modal-create--visiable");
});

const histories = document.getElementsByClassName("history");

btnOpenModalStats?.addEventListener("click", () => {
    modalStats.querySelector(".amount-history").textContent = histories.length;
    modalStats.showModal();
});

const loaderHistory = document.querySelector("#loaderHistory");

const timePromise = () => {
    return new Promise((resolve) => setTimeout(resolve, 2000));
};

const loader = async () => {
    await timePromise();
};

modalStats?.addEventListener("click", (event) => {
    if (event.target === modalStats) modalStats.close();
});

closeModal?.addEventListener("click", () => {
    modalStats.close();
});

btnCancelModal?.addEventListener("click", () => {
    modalCreate.classList.remove("modal-create--visiable");
    formCreating.reset();
});

formCreating?.addEventListener("submit", (event) => {
    event.preventDefault();

    const textBtn = event.target.querySelector(".modal-create__btn-add > span");
    const loaderBtn = event.target.querySelector(
        ".modal-create__btn-add > .loader-container",
    );

    textBtn.hidden = true;
    loaderBtn.hidden = false;

    creatingFields.setAttribute("disabled", "");

    loader().then(() => {
        const title = formCreating.title.value;
        const desc = formCreating.desc.value;
        const img = formCreating.img.value || "assets/no-image.png";
        const newHistory = myHistories.shapeHistoryObj(title, desc, img);
        myHistories.addHistory(newHistory);

        visibleEmpty();
        let elementHistory = shapingElement(newHistory);
        historiesList.append(elementHistory);
        modalCreate.classList.remove("modal-create--visiable");
        formCreating.reset();

        creatingFields.removeAttribute("disabled");

        textBtn.hidden = false;
        loaderBtn.hidden = true;
    });
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

const visibleEmpty = () => {
    const histories = myHistories.histories;

    if (histories.length > 0) {
        emptyHistoryBlock.setAttribute("hidden", "");
    } else {
        emptyHistoryBlock.removeAttribute("hidden");
    }
};

const outputList = (amount = null) => {
    const histories = myHistories.histories;

    if (!histories) return;
    visibleEmpty();

    const amountElements =
        amount && amount <= histories.length ? amount : histories.length;

    for (let i = 0; i < amountElements; i++) {
        historiesList.append(shapingElement(histories[i]));
    }
};

historiesList.addEventListener("click", (event) => {
    if (event.target.closest(".history__delete")) {
        const history = event.target.closest(".histories__item");
        myHistories.deleteHistory(history.dataset.id);
        visibleEmpty();
        history.remove();
    }
});

if (location.pathname.includes("blog")) {
    loader().then(() => {
        (outputList(), loaderHistory.setAttribute("hidden", ""));
    });
} else {
    loader().then(() => {
        outputList(2);
        loaderHistory.setAttribute("hidden", "");
    });
}
