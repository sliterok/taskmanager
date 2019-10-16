import Vue from 'vue'
import App from './App.vue'

import VueMaterial from 'vue-material'

import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default.css'



Vue.use(VueMaterial)

Vue.material.locale = {
	startYear: 2000,
	endYear: 2099,

	// date format for date picker
	dateFormat: 'dd.MM.yyyy',

	// i18n strings
	days: ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'],
	shortDays: ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'],
	shorterDays: ['В', 'П', 'В', 'С', 'Ч', 'П', 'с'],
	months: ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'],
	shortMonths: ['Янв', 'Фев', 'Мар', 'Апр', 'Май', 'Июнь', 'Июль', 'Авг', 'Сент', 'Окт', 'Ноя', 'Дек'],
	shorterMonths: ['Я', 'Ф', 'М', 'А', 'М', 'Ию', 'Ию', 'А', 'Се', 'О', 'Н', 'Д'],

	// `0` stand for Sunday, `1` stand for Monday
	firstDayOfAWeek: 1
}

console.log(Vue.material)



Vue.config.productionTip = false

new Vue({
	render: h => h(App),
}).$mount('#app')