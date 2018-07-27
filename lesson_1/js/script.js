function myFirstApp (name, age) {
	

	alert("Привет, меня зовут " + name + " и это моя первая программа!");

/*Функция вывода умений*/
	function showSkills() {
		let skills = ["HTML", "CSS", "JS"];
		document.write("Я умею писать код на: <br />"); 

		for (var i = 0; i < skills.length; i++) {
			document.write(skills[i] + "<br />");
		}

	}

	showSkills();

	/*Функция проверки возраста*/
	function checkAge() {
		if (age > 18) {
			alert("Вход разрешён, проходите.");
		}
		else {
			alert("Вход воспрещён! Вам сюда нельзя!");
		}
	}


checkAge();

/*Функция выведения квадрата числа*/
function calcPow (num) {
	num = num * num;
	console.log(num);
}
calcPow(4);


}
/*Конец всей функции myFirstApp*/
myFirstApp("Роман", 13);