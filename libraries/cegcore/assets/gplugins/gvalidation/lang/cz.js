jQuery.gvalidation.errors = $.extend(jQuery.gvalidation.errors, {
	required: "Toto pole je povinné.",
	alpha: "Toto pole může obsahovat pouze písmena.",
	alphanum: "Do tohoto pole můžete zadávat pouze alfanumerické znaky.",
	nodigit: "Toto pole nemůže obsahovat číslice.",
	digit: "Toto pole může obsahovat jen celá kladná čísla.",
	digitmin: "Číslo musí být minimálně %1",
	digitltd: "Hodnota musí byt v intervalu %1 až %2",
	number: "Číslo prosím zadejte ve správném formátu.",
	email: "Prosím, zadajte e-mail ve správném formátu: Např. VaseJmeno@domena.cz",
	image : 'Toto pole může obsahovat jen obrázky',
	phone: "Prosím, zadejte telefonní číslo ve správném formátu: Např. 789123456",
	url: "URL prosím zadejte ve správném formátu: Např. http://www.domena.cz",
	confirm: "Pole není totožné s polem %1",
	differs: "Toto pole musí bý odlišné od %1",
	length_str: "Zadaný řetězec nemá správnu délku, musí být v rozsahu %1 a %2",
	length_fix: "Zadaný řetězec nemá správnu délku, musí mít délku přesne %1 znaků",
	lengthmax: "Zadaný řetězec nemá správnu délku, může být dlouhý maximálně %1 znaků",
	lengthmin: "Zadaný řetězec nemá správnu délku, musí být kratší než %1 znakov",
	words_min : "Toto pole musí obsahovat minimálně %1 slov. Momentálně má jen: %2 slov",
	words_range : "Toto pole musí obsahovat %1-%2 slov. Momentálně má : %3 slov",
	words_max : "Toto pole může obsahovat maximálně %1 slov. Momentálně má: %2 slov",
	checkbox: "Zaškrtnutí tohoto checkboxu je povinné",
	group : 'Prosím, vyberte minimálně %1 možnost(i)',
	custom: "Prosím vyberte jednu z možností",
	select: "Prosím vyberte jednu z možností",
	select_multiple : "Prosím vyberte jednu nebo více možností"
});