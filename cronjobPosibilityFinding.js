let date = new Date();
let pattern = [];
let default_pattern = "* * * * *";
pattern.push(default_pattern);
for (let i=1; i<=5; i++) {
	switch (i) {
		case 1:
			console.log(i);
			pattern.push(loop(i, min(), default_pattern));
			break;
		case 2:
			console.log(i);
			pattern.push(loop(i, hour(), default_pattern));
			break;
		case 3:
			console.log(i);
			pattern.push(loop(i, sys_date(), default_pattern));
			break;
		case 4:
			console.log(i);
			pattern.push(loop(i, month(), default_pattern));
			break;
		case 5:
			console.log(i);
			pattern.push(loop(i, day(), default_pattern));
			break;
		// case 6:
		// 	console.log(i);
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

function loop(i, patternValue, default_pattern) {
	let array=[];
	// for (let j=0; j<=i; j++) {
	// 	if( j==0 ) 
	// 		array.push(default_pattern);
	// 	else {
			switch (i) {
				case 1:
					array.push(patternValue.toString()+" * * * *");
					break;
				case 2:
				array.push("* "+patternValue.toString()+" * * *");
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
		// 	}
		// }
		console.log('\t',j, '\t : ', patternValue);
	}
	console.log(array);
	return array;
}