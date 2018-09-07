let date = new Date();
let pattern = [];
let default_pattern = "* * * * *";
pattern.push(default_pattern);
for (let i=1; i<=5; i++) {
	switch (i) {
		case 1:
			pattern.push(loop(i, min()));
			break;
		case 2:
			pattern.push(loop(i, hour()));
			break;
		// case 3:
		// 	pattern.push(loop(i, sys_date(), default_pattern));
		// 	break;
		// case 4:
		// 	pattern.push(loop(i, month(), default_pattern));
		// 	break;
		// case 5:
		// 	pattern.push(loop(i, day(), default_pattern));
		// 	break;
		default:
			console.log('Invalid');
			break;
	}
}
console.log("----------------------");
console.log(pattern);

function min() {
	return date.getMinutes()
}

function hour() {
	return date.getHours();
}

function sys_date() {
	return date.getDate();
}

function month() {
	return date.getMonth()+1;
}

function day() {
	return date.getDay();
}

function loop(i, patternValue) {
	let array=[];
	switch (i) {
		case 1:
			array.push(patternValue.toString()+" * * * *");
			break;
		case 2:
			for (let j=0; j<i; j++) {
				switch (j) {
					case 0:
						array.push("* "+patternValue.toString()+" * * *");
						break;
					case 1:
						array.push(min()+" "+patternValue.toString()+" * * *");
						break;
					case 2: 
						array.push(min()+" "+patternValue.toString()+" "+sys_date()+" * *");
						break;
					case 3: 
					array.push(min()+" "+patternValue.toString()+" "+sys_date()+" "+month()+" *");
						break;
					case 4: 
					array.push(min()+" "+patternValue.toString()+" "+sys_date()+" "+month()+" "+day());
						break;
					case 5: 
						array.push(min()+" "+patternValue.toString()+" * * *");
						break;
				}	
			}
			break;
		case 3:
			array.push("* * "+patternValue.toString()+" * *");
			break;
		case 4:
			array.push("* * * "+patternValue.toString()+" *");
			break;
		case 5:
			array.push("* * * * "+patternValue.toString());
			break;
		default: 
			console.log('Out of Range');
	}
	return array;
}