// let list = ['*','*'];
// let newList=[]; 
// newList.push(list);

// for (let i=0; i<list.length; i++) {
//     console.log('-----------> ',newList, '----> ',list);
//     if (i==0) {
//         list[i] = 'A';
//         newList.push(list);
//     }
//     if (i==1) {
//         list[i] = 'B';
//         newList.push(list);
//     }
// }
// _____________________________________________________________


let list = ['*','*','*','*','*'];
let newList=[]; 
newList.push(list);

for (let i=0; i<list.length; i++) {
	list = [...list];
	if (i===0) {
		for (let j=i; j<list.length; j++) {
			list = [...list];
			if (j===0) list[j] = 'A';
			if (j===1) list[j] = 'B';
			if (j===2) list[j] = 'C';
			if (j===3) list[j] = 'D';
			if (j===4) list[j] = 'E';
			console.log('I=0, list => ',list);
			newList.push(list);
			list = [...list];
			
		}
		// list[i] = '*';
	}
	console.log('_____________________________________________________________',i);
	if (i===1) {

		for (let j=i; j<list.length; j++) {
			if (j===0) list[j] = 'A';
			if (j===1) list[j] = 'B';
			if (j===2) list[j] = 'C';
			if (j===3) list[j] = 'D';
			if (j===4) list[j] = 'E';
			console.log('I=1, list => ',list);
			newList.push(list);
			list = [...list];
			list[j] = '*';
		}
	}
	if (i===2) {
		// list[i] ='C';
		for (let j=i; j<list.length; j++) {
			if (j===0) list[j] = 'A';
			if (j===1) list[j] = 'B';
			if (j===2) list[j] = 'C';
			if (j===3) list[j] = 'D';
			if (j===4) list[j] = 'E';
			console.log('I=1, list => ',list);
			newList.push(list);
			list = [...list];
		}
	}
	// if (i===3) list[i] = 'D';
	// if (i===4) list[i] = 'E';
	// newList.push(list);
	// list = [...list];
	// list[i] = '*';
}


// for (let i=0;i<list.length;i++) {
// 	if (i===0) list[i] = 'A';
// 	if (i===1) list[i] = 'B';
// 	if (i===2) list[i] ='C';
// 	if (i===3) list[i] = 'D';
// 	if (i===4) list[i] = 'E';
// }


// // ___________________________USE LETER__________________________________
// for (let i=0; i<list.length; i++) {
// 	for (let j=i; j<list.length; j++ ) {
// 		// console.log('I => ',i,'   J => ',j);
// 		list = [...list];
// 		if (j===0) list[j] = 'A'; 
// 		if (j===1) list[j] = 'B'; 
// 		// if (j===2) list[j] = 'C'; 
// 		// if (j===3) list[j] = 'D';
// 		newList.push(list);
// 		list = [...list];
// 		list[j]='*';
// 	}
// }

console.log(newList);


// _____________________________________________________________
// for (let i=0; i<list.length; i++) {
//     list = [...list];
//     switch (i) {
//     	case 0:
//     		for (let j=i; j<list.length; j++) {
//     			if (i == 0) list[i] = 'A';
//     			if (i == 1) list[i] = 'B';
//     			if (i == 2) list[i] = 'C';
//     			if (i == 3) list[i] = 'D';
//     			if (i == 4) list[i] = 'E';
//     		}
//     		break;
//     	case 1:
//     		for (let j=i; j<list.length; j++) {
//     		if (i == 0) list[i] = 'A';
//     			if (i == 1) list[i] = 'B';
//     			if (i == 2) list[i] = 'C';
//     			if (i == 3) list[i] = 'D';
//     			if (i == 4) list[i] = 'E';
//     		}
//     		break;
//     	case 2:
//     		for (let j=i; j<list.length; j++) {
// 				if (i == 0) list[i] = 'A';
//     			if (i == 1) list[i] = 'B';
//     			if (i == 2) list[i] = 'C';
//     			if (i == 3) list[i] = 'D';
//     			if (i == 4) list[i] = 'E';
//     		}
//     		break;
//     	case 3:
//     		for (let j=i; j<list.length; j++) {
//     			if (i == 0) list[i] = 'A';
//     			if (i == 1) list[i] = 'B';
//     			if (i == 2) list[i] = 'C';
//     			if (i == 3) list[i] = 'D';
//     			if (i == 4) list[i] = 'E';
//     		}
//     		break;
//     	case 4:
//     		for (let j=i; j<list.length; j++) {
//     			if (i == 0) list[i] = 'A';
//     			if (i == 1) list[i] = 'B';
//     			if (i == 2) list[i] = 'C';
//     			if (i == 3) list[i] = 'D';
//     			if (i == 4) list[i] = 'E';
//     		}
//     		break;
//     	default : 
//     		console.log(' Inside Default.');
//     }
//     newList.push(list);
//     // if (i==0) list[i] = 'A';
//     // if (i==1) list[i] = 'B';
//     // if (i==2) list[i] = 'C';
//     // if (i==3) list[i] = 'D';
//     // newList.push(list);
//     // list = [...list];

//     // console.log('List => ',list);
//     // list[i] = '*';
// }
// console.log('\n\n',newList);
// --------------------------------------------------
