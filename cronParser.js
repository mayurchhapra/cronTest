let parser = require('cron-parser');
let date = new Date();
let dataList = [];
let data = [
	{
		id: 1,
		name: 'A',
		scheduler: '* */2 * * * *'
	},
	{
		id: 2,
		name: 'B',
		scheduler: '* * * * * ?'
	},
	{
		id: 3,
		name: 'C',
		scheduler: '0 15 10 ? * *'
	},
];

try {
	for (let i=0; i<data.length; i++) {

	  let interval = parser.parseExpression(data[i].scheduler);

	  let stampFromParser = interval.next().toString().split(' ');
	  // console.log(stampFromParser);
	  let stampFromParser_addOn =  stampFromParser[4].split(':');
	  stampFromParser_addOn[1] = (parseInt(stampFromParser_addOn[1])).toString();
	  stampFromParser.splice(-2,2);
	  // console.log(stampFromParser);
	  // console.log(stampFromParser_addOn);
	  let timeStampFromParser = stampFromParser.concat(stampFromParser_addOn);
	  timeStampFromParser.splice(-1,1);
	  console.log(timeStampFromParser); // String format = [ 'Day', 'Mon', 'Date', 'Year', 'Hour', 'Minute']
	  // stampFromParser.concat(stampFromParser_addOn);

	  let stampFromCode = date.toString().split(' ');
	  // console.log(stampFromCode);
	  let stampFromCode_addOn = stampFromCode[4].split(':');  
	  stampFromCode.splice(-3,3);
	  timeStampFromCode = stampFromCode.concat(stampFromCode_addOn);
	  timeStampFromCode.splice(-1,1);
	  console.log(timeStampFromCode);
	  console.log('\n');

	  if (timeStampFromParser[0] === timeStampFromCode[0] && timeStampFromParser[1] === timeStampFromCode[1] && timeStampFromParser[2] === timeStampFromCode[2] && timeStampFromParser[3] === timeStampFromCode[3] && timeStampFromParser[4] === timeStampFromCode[4] && timeStampFromParser[5] === timeStampFromCode[5]) {
	  	console.log('IF -------');
	  	dataList =  dataList.concat(data[i]);
	  	console.log(dataList)
	  }
	  else 	continue;
	  
	}
} catch (err) {
  console.log('Error: ' + err.message);
}