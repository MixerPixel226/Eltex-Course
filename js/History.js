class Histories {
    histories = JSON.parse(localStorage.getItem("histories")) || [];

    addHistory = (history) => {
        this.histories.push(history);
        localStorage.setItem("histories", JSON.stringify(this.histories));
    };

    deleteHistory = (id) => {
        this.histories = this.histories.filter((el) => el.id !== id);
        localStorage.setItem("histories", JSON.stringify(this.histories));
    };

    shapeHistoryObj = (title, desc, img) => {
        return { id: crypto.randomUUID(), title, desc, img };
    };
}

export const myHistories = new Histories();
