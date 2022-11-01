function reverse(str) {
	// add whatever parameters you deem necessary - good luck!
	if (str.length <= 1) return str;
	//remove the 1st char(index 0) and put it last
	return reverse(str.slice(1)) + str[0];
}
console.log(reverse("xH"));
// reverse('awesome') // 'emosewa'
// reverse('rithmschool') // 'loohcsmhtir'
