//格式化金额
function fmoney(money){
	var arr, t = '', r;
	money = parseFloat(money.replace(/[^\d\.-]/g, '')).toFixed(2);
	r = money.split('.')[1];
	arr = money.split('.')[0].split('').reverse();
	var len = arr.length;
	arr.forEach(function(item, i, arr){
		t += item + ((i + 1) % 3 === 0 && (i + 1) !== len ? ',' : '');
	})
	return t.split('').reverse().join('') + '.' + r;
}
function fmoney2(money){
	return money.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

fmoney('123456789.256')
fmoney2('123456789.256')