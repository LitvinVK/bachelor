class Entry {
    handleClear() {
        ROOT_ENTRY.innerHTML = '';
    }

    render() {

        const html = `
        <div class="header__dark-bg">
            <div class="header__entry-page">
                <div class="header__entry-close" onclick="entryPage.handleClear()">
                    <img src="img/shopping/close.png" alt="">
                </div>
                <div class="header__entry-rows">
                    <div class="header__entry-row entry-row">
                        <div class="entry-row__login-text">Логин</div>
                        <input type="text" class="entry-row__login-input">
                    </div>
                    <div class="header__entry-row">
                        <div class="entry-row__password-text">Пароль</div>
                        <input type="password" class="entry-row__password-input">
                    </div>
                    <button class="header__entry-button">Войти</button>
                </div>
            </div>
        </div>
        `;

        ROOT_ENTRY.innerHTML = html;
    }
}

const entryPage = new Entry();