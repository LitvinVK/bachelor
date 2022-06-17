class Register {
    handleClear() {
        ROOT_REGISTER.innerHTML = '';
    }

    render() {

        const html = `
        <div class="header__dark-bg">
            <div class="header__register-page">
                <div class="header__register-close" onclick="registerPage.handleClear()">
                    <img src="img/shopping/close.png" alt="">
                </div>
                <div class="header__register-rows">
                    <div class="header__register-row register-row">
                        <div class="register-row__text">Имя</div>
                        <input type="text" class="register-row__input">
                    </div>
                    <div class="header__register-row">
                        <div class="register-row__text">Фамилия</div>
                        <input type="text" class="register-row__input">
                    </div>
                    <div class="header__register-row">
                        <div class="register-row__text">E-mail</div>
                        <input type="text" class="register-row__input">
                    </div>
                    <div class="header__register-row">
                        <div class="register-row__text">Логин</div>
                        <input type="text" class="register-row__input">
                    </div>
                    <div class="header__register-row">
                        <div class="register-row__text">Пароль</div>
                        <input type="password" class="register-row__input">
                    </div>
                    <div class="header__register-row">
                        <div class="register-row__text">Город</div>
                        <input type="text" class="register-row__input">
                    </div>
                    <button class="header__register-button">Зарегистрироваться</button>
                </div>
            </div>
        </div>
        `;

        ROOT_REGISTER.innerHTML = html;
    }
}

const registerPage = new Register();