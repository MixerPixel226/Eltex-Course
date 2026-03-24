class Histories {
    histories = [
        {
            id: "ifkdskmfks",
            title: "Кодинг по-кошачьи",
            desc: "Аня уходит в магазин за продуктами, забывая закрыть проект на компьютере. Любозательный МяуМяф решается дописать код, пока хозяйка не вернулась...",
            img: "assets/his1.png",
        },
        {
            id: "fkslifksdlls",
            title: "Хочешь жить - умей мяукать",
            desc: "В то время, как Аню грозятся уволить за сломанный проект, Мяумяф отправляется в компанию, чтобы спасти её карьеру...",
            img: "assets/his2.png",
        },
        {
            id: "sfs323d23d2",
            title: "Кодинг по-кошачьи",
            desc: "Аня уходит в магазин за продуктами, забывая закрыть проект на компьютере. Любозательный МяуМяф решается дописать код, пока хозяйка не вернулась...",
            img: "assets/his1.png",
        },
        {
            id: "fdhhsjjunftf4",
            title: "Кодинг по-кошачьи",
            desc: "Аня уходит в магазин за продуктами, забывая закрыть проект на компьютере. Любозательный МяуМяф решается дописать код, пока хозяйка не вернулась...",
            img: "assets/his1.png",
        },
    ];

    addHistory = (history) => {
        this.histories.push(history);
    };

    deleteHistory = (id) => {
        this.histories = this.histories.filter((el) => el.id !== id);
        console.log(this.histories);
    };

    shapeHistoryObj = (title, desc, img) => {
        return { id: crypto.randomUUID(), title, desc, img };
    };
}

export const myHistories = new Histories();
