import {COOKIE_CONST_KEY} from "./constants";

export default class CookieConsent {
    constructor(selector){
        this.el = document.querySelector(selector);
        if(localStorage.getItem(COOKIE_CONST_KEY) !== 'true' && this.el){
            this.acceptBtn = this.el.querySelector('.cookie-consent__button')
            this.acceptBtn?.addEventListener('click', this.onAccept().bind(this))
        }else{
            this.el.classList.add('hide')
        }
    }
    onAccept() {
        localStorage.setItem('COOKIE_COSENT_KEY', "true")
        this.el.classList.add('hide');
        this.acceptBtn?.removeEventListener('click', this.onAccept().bind(this))
    }

}