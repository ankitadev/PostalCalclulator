
function getMailPrice(typeMail, weightOfMail){
	if(typeMail == 'letterS'){
		if(weightOfMail == '1'){
			return '0.50';
		}
		else if(weightOfMail == '2'){
			return '0.71';
		}
		else if(weightOfMail == '3'){
			return '0.91';
		}else{
			return '1.13';
		}
	}
	else if(typeMail == 'letterM'){
			if(weightOfMail == '1'){
			return '0.47';
		}
		else if(weightOfMail == '2'){
			return '0.68';
		}
		else if(weightOfMail == '3'){
			return '0.89';
		}else{
			return '1.10';
		}
	}
	else if(typeMail == 'largeE'){
		if(weightOfMail == '1'){
			return '1.00';
		}else if(weightOfMail == '2'){
			return '1.21';
		}else if(weightOfMail == '3'){
			return '1.42';
		}else if(weightOfMail == '4'){
			return '1.63';
		}else if(weightOfMail == '5'){
			return '1.84';
		}else if(weightOfMail == '6'){
			return '2.05';
		}else if(weightOfMail == '7'){
			return '2.26';
		}else if(weightOfMail == '8'){
			return '2.47';
		}else if(weightOfMail == '9'){
			return '2.68';
		}else if(weightOfMail == '10'){
			return '2.89';
		}else if(weightOfMail == '11'){
			return '3.10';
		}else if(weightOfMail == '12'){
			return '3.31';
		}else if(weightOfMail == '13'){
			return '3.52'	
		}
	}
	else if(typeMail == 'first-class'){
		if(weightOfMail == '1'){
			return '3.50';
		}else if(weightOfMail == '2'){
			return '3.50';
		}else if(weightOfMail == '3'){
			return '3.50';
		}else if(weightOfMail == '4'){
			return '3.50';
		}else if(weightOfMail == '5'){
			return '3.75';
		}else if(weightOfMail == '6'){
			return '3.75';
		}else if(weightOfMail == '7'){
			return '3.75';
		}else if(weightOfMail == '8'){
			return '3.75';
		}else if(weightOfMail == '9'){
			return '4.10';
		}else if(weightOfMail == '10'){
			return '4.45';
		}else if(weightOfMail == '11'){
			return '4.80';
		}else if(weightOfMail == '12'){
			return '5.15';
		}else if(weightOfMail == '13'){
			return '5.50'	
		}
	}
}

function stampPrice(req, res){
	console.log('Stamp Prices');
	var mailChoice = req.query.mailType;
	var weightOfMail = req.query.weight;
	var mailPrice = getMailPrice(mailChoice, weightOfMail);
	console.log('Got the mail Price');
	var stuff = {mailChoice: mailChoice, weightOfMail: weightOfMail, mailPrice: mailPrice}
	res.render('stamp', stuff);
}

module.exports = {stampPrice: stampPrice};