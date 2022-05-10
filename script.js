window.addEventListener('DOMContentLoaded',() => {

    const baseKeys = [

        {enEventKey: '`', enEventKeyRu: 'ё', keyCode: "Backquote"},
        {enEventKey: '1', enEventKeyRu: '1', keyCode: "Digit1"},
        {enEventKey: '2', enEventKeyRu: '2', keyCode: "Digit2"},
        {enEventKey: '3', enEventKeyRu: '3', keyCode: "Digit3"},
        {enEventKey: '4', enEventKeyRu: '4', keyCode: "Digit4"},
        {enEventKey: '5', enEventKeyRu: '5', keyCode: "Digit5"},
        {enEventKey: '6', enEventKeyRu: '6', keyCode: "Digit6"},
        {enEventKey: '7', enEventKeyRu: '7', keyCode: "Digit7"},
        {enEventKey: '8', enEventKeyRu: '8', keyCode: "Digit8"},
        {enEventKey: '9', enEventKeyRu: '9', keyCode: "Digit9"},
        {enEventKey: '0', enEventKeyRu: '0', keyCode: "Digit0"},
        {enEventKey: '-', enEventKeyRu: '-', keyCode: "Minus"},
        {enEventKey: '=', enEventKeyRu: '=', keyCode: "Equal"},
        {enEventKey: 'Backspace', enEventKeyRu: 'Backspace', keyCode: "Backspace"},
        {enEventKey: 'Tab', enEventKeyRu: 'Tab', keyCode: "Tab"},
        {enEventKey: 'q', enEventKeyRu: 'й', keyCode: "KeyQ"},
        {enEventKey: 'w', enEventKeyRu: 'ц', keyCode: "KeyW"},
        {enEventKey: 'e', enEventKeyRu: 'у', keyCode: "KeyE"},
        {enEventKey: 'r', enEventKeyRu: 'к', keyCode: "KeyR"},
        {enEventKey: 't', enEventKeyRu: 'е', keyCode: "KeyT"},
        {enEventKey: 'y', enEventKeyRu: 'н', keyCode: "KeyY"},
        {enEventKey: 'u', enEventKeyRu: 'г', keyCode: "KeyU"},
        {enEventKey: 'i', enEventKeyRu: 'ш', keyCode: "KeyI"},
        {enEventKey: 'o', enEventKeyRu: 'щ', keyCode: "KeyO"},
        {enEventKey: 'p', enEventKeyRu: 'з', keyCode: "KeyP"},
        {enEventKey: '[', enEventKeyRu: 'х', keyCode: "BracketLeft"},
        {enEventKey: ']', enEventKeyRu: 'ъ', keyCode: "BracketRight"},
        {enEventKey: '\\', enEventKeyRu: '\\', keyCode: "Backslash"},
        {enEventKey: 'Del', enEventKeyRu: 'Del', keyCode: "Delete"},
        {enEventKey: 'CapsLock', enEventKeyRu: 'CapsLock', keyCode: "CapsLock"},
        {enEventKey: 'a', enEventKeyRu: 'ф', keyCode: "KeyA"},
        {enEventKey: 's', enEventKeyRu: 'ы', keyCode: "KeyS"},
        {enEventKey: 'd', enEventKeyRu: 'в', keyCode: "KeyD"},
        {enEventKey: 'f', enEventKeyRu: 'а', keyCode: "KeyF"},
        {enEventKey: 'g', enEventKeyRu: 'п', keyCode: "KeyG"},
        {enEventKey: 'h', enEventKeyRu: 'р', keyCode: "KeyH"},
        {enEventKey: 'j', enEventKeyRu: 'о', keyCode: "KeyJ"},
        {enEventKey: 'k', enEventKeyRu: 'л', keyCode: "KeyK"},
        {enEventKey: 'l', enEventKeyRu: 'д', keyCode: "KeyL"},
        {enEventKey: ';', enEventKeyRu: 'ж', keyCode: "Semicolon"},
        {enEventKey: "'", enEventKeyRu: "э", keyCode: "Quote"},
        {enEventKey: 'Enter', enEventKeyRu: 'Enter', keyCode: "Enter"},
        {enEventKey: 'Shift', enEventKeyRu: 'Shift', keyCode: "ShiftLeft"},
        {enEventKey: 'z', enEventKeyRu: 'я' , keyCode: "KeyZ"},
        {enEventKey: 'x', enEventKeyRu: 'ч' , keyCode: "KeyX"},
        {enEventKey: 'c', enEventKeyRu: 'с' , keyCode: "KeyC"},
        {enEventKey: 'v', enEventKeyRu: 'м' , keyCode: "KeyV"},
        {enEventKey: 'b', enEventKeyRu: 'и' , keyCode: "KeyB"},
        {enEventKey: 'n', enEventKeyRu: 'т' , keyCode: "KeyN"},
        {enEventKey: 'm', enEventKeyRu: 'ь' , keyCode: "KeyM"},
        {enEventKey: ',', enEventKeyRu: 'б' , keyCode: "Comma"},
        {enEventKey: '.', enEventKeyRu: 'ю' , keyCode: "Period"},
        {enEventKey: '/', enEventKeyRu: '.' , keyCode: "Slash"},
        {enEventKey: '↑',enEventKeyRu: '↑' , keyCode: "ArrowUp"},
        {enEventKey: 'Shift',enEventKeyRu: 'Shift', keyCode: "ShiftRight"},
        {enEventKey: 'Ctrl',enEventKeyRu: 'Ctrl', keyCode: "ControlLeft"},
        {enEventKey: 'Win',enEventKeyRu: 'Win', keyCode: "MetaLeft"},
        {enEventKey: 'Alt',enEventKeyRu: 'Alt', keyCode: "AltLeft"},
        {enEventKey: ' ',enEventKeyRu: ' ', keyCode: "Space"},
        {enEventKey: 'Alt',enEventKeyRu: 'Alt', keyCode: "AltRight"},
        {enEventKey: '←',enEventKeyRu: '←', keyCode: "ArrowLeft"},
        {enEventKey: '↓',enEventKeyRu: '↓', keyCode: "ArrowDown"},
        {enEventKey: '→',enEventKeyRu: '→', keyCode: "ArrowRight"},
        {enEventKey: 'Ctrl',enEventKeyRu: 'Ctrl', keyCode: "ControlRight"},
    ]

    document.body.innerHTML = `
        <div class="layout">
            <div class="wrapper">
                <h1>Виртуальная клавиатура</h1>
                <textarea class="textarea" id="textarea" rows="5" cols="50"></textarea>
                     <div id="keyBordWraper"> 
                        <div class="keyboard" id="keyboard"></div>
                    </div>    
                <div class="description">
                Клавиатура создана в операционной системе Windows<br/>
                Для переключения языка комбинация: левыe ctrl + alt
                    </div>
                </div>    
            </div>
        `
    
    const keyBordWraper = document.querySelector('#keyBordWraper')
    const keyboard = document.querySelector('#keyboard')


    function createKeyBoard() {

         let lang = localStorage.getItem('lang') 

         if (localStorage.length === 0) {
             lang = 'en'
         }
        

        keyboard.innerHTML = ''

        baseKeys.forEach(el => {

            keyboard.innerHTML += `
                <div class="key" data-keyCode='${el.keyCode}' >${lang === 'en' ? el.enEventKey : el.enEventKeyRu}</div>
                `
        })

        const keyButtons = document.querySelectorAll('.key')

        styleSomeKeyButtons(keyButtons)
        clickKeyboard(keyButtons)

    }

    createKeyBoard()

    const textarea = document.querySelector('#textarea')

    function styleSomeKeyButtons(key) {

        const caps = document.querySelector('[data-keycode="CapsLock"]')

        const keyButtons = document.querySelectorAll('.key')

        key.forEach(btn => {

            const favBtn = btn.innerText;


            if (favBtn === '' || favBtn === 'Backspace' || favBtn === 'Enter'){
                btn.classList.add('key-large')
            }
    
            if (favBtn === 'Shift') {
                btn.style.width = '94px'
                btn.classList.add('check') 
            }
    
            if (favBtn === 'Tab' ){
                btn.style.width = '57px'
            }

            if(keyBordWraper.hasAttribute('caps') && btn.textContent.length == 1) {
                btn.innerHTML = btn.textContent.toUpperCase()
                caps.classList.add('CapsLock')
            }

            if(!keyBordWraper.hasAttribute('caps') && btn.textContent.length == 1) {
                btn.innerHTML = btn.textContent.toLowerCase()
                caps.classList.remove('CapsLock')
            }
        })

    }

    function clickKeyboard(buttons){

        const keyButtons = document.querySelectorAll('.key')

        buttons.forEach(btn => {

            btn.addEventListener('click', (e) => {

                // e.preventDefault()

                let target = e.target.textContent
    
                result = target
    
                if (target == 'Backspace'){

                    target = ''

                    
                    if (textarea.value.length === textarea.selectionEnd) {
                        console.log('1');
                        const delElBefore = textarea.value.slice(0, -1)
                        textarea.value = ''
                        textarea.setRangeText(delElBefore, textarea.selectionStart, textarea.selectionEnd, 'end')
                    }

                    if (textarea.value.length !== textarea.selectionEnd) {
                        console.log('2');
                        const start = textarea.value.slice(0, textarea.selectionStart-1)
                        const end = textarea.value.slice(textarea.selectionStart)
                        const newSrt = start + end
                        textarea.value = ''
                        textarea.setRangeText(newSrt, textarea.selectionStart, textarea.selectionEnd, 'end')
                        textarea.focus()
                        textarea.setSelectionRange(start.length, start.length)
                    }

                    if (textarea.selectionStart === 0 && textarea.selectionEnd === 0) {
                        // const nothing = ' '
                        // console.log('3');
                        textarea.setRangeText(" ", textarea.selectionStart, textarea.selectionEnd, 'end')
                        // textarea.setSelectionRange(textarea.value.length, textarea.value.length)
                    }

                    // console.log(textarea.value.length);
                    // console.log(textarea.selectionStart);
                    // console.log(textarea.selectionEnd);

                    textarea.focus()
                }

                if (target == 'Del'){

                    target = ''

                    const start = textarea.value.slice(0, textarea.selectionStart)
                    const end = textarea.value.slice(textarea.selectionStart + 1)
                    const newSrt = start + end
                    textarea.value = ''
                    textarea.setRangeText(newSrt, textarea.selectionStart, textarea.selectionEnd, 'end')
                    textarea.focus()
                    textarea.setSelectionRange(start.length, start.length)

                }

                if (target == 'Alt' || target == 'Win' || target == 'Ctrl' || target == 'Shift'){
                    target = ''
                }

                if (target == 'Tab'){
                    target = '     '
                }

                if (target == 'Enter'){
                    target = "\n"
                    // textarea.setRangeText(target, 0, 300, 'end')
                    textarea.focus()
                    console.log(textarea.selectionStart);
                }
    
                if (target == 'CapsLock'){
                    target = ''
    
                    btn.classList.toggle('CapsLock')
                    
                    if (btn.classList.contains('CapsLock')){
                        keyBordWraper.setAttribute('caps', true)
                        styleSomeKeyButtons(keyButtons)
                    }else {
                        keyBordWraper.removeAttribute('caps')
                        styleSomeKeyButtons(keyButtons)
                    }
                }
                
                textarea.setRangeText(target, textarea.selectionStart, textarea.selectionEnd, 'end')
                // textarea.focus()
                // textarea.innerHTML += result
            })           
        })

    }

    function delText(e) {

        const before = e.target.selectionStart
        const after = e.target.selectionEnd

        const textArea = e.target.value

        const start = textArea.slice(0, before-1)
        const end = textArea.slice(before)

        const newValue = start + end

        // console.log(before);
        // console.log(after);

        cursorPos = newValue

        // console.log(cursorPos);

    //     console.log(e.target.selectionStart);
    //     console.log(e.target.selectionEnd);
    //    console.log(e.target.value);
    } 


    textarea.addEventListener('click', delText)

    // keyboard.addEventListener('click', (e) => {
    //     console.log(e.target.innerText);
    // })

    document.addEventListener('mousedown', (e) => {
        e.target.classList.add('active')
    })

    document.addEventListener('mouseup', () => {
        const keyButtons = document.querySelectorAll('.key')
        keyButtons.forEach(btn => btn.classList.remove('active'))
    })

    document.addEventListener('keydown', (e) => {

        e.preventDefault()

        const keyCodes = document.querySelectorAll('[data-keyCode]')

        keyCodes.forEach(keys => {
            
            const codes = keys.getAttribute('data-keyCode')

            if (codes === e.code) {
                keys.classList.add('active')
                textarea.innerHTML += e.key.length === 1 ? e.key : '' 

                console.log(e.key.textContent);
            }

            
        })
    })

    document.addEventListener('keyup', (e) => {

        const keyCodes = document.querySelectorAll('[data-keyCode]')

        keyCodes.forEach(keys => {
            
           const codes = keys.getAttribute('data-keyCode')

            if (codes === e.code) {
                keys.classList.remove('active')
            }

        })

    })
    
    function changeLang(e) {

        let checkLang = localStorage.getItem('lang')

        if (!checkLang) {
            checkLang = 'en'
        }

        if (e.code == 'AltLeft' && e.ctrlKey) {

            if (checkLang === 'en') {
                localStorage.setItem('lang', 'ru')
            }

            if (checkLang === 'ru') {
                localStorage.setItem('lang', 'en')
            }

            createKeyBoard()
        }
    }

  

    document.addEventListener('keydown', changeLang)
})