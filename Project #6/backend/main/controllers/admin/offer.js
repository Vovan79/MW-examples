const readXlsxFile = require('read-excel-file/node');
const fs = require('fs');
const container = crudControllers(AdminOffersService);

container.importOffers = async (req, res) => {
	const { files } = req;
	const streamRead = fs.createReadStream(files.file.path);
	readXlsxFile(streamRead)
		.then((rows) => {
			console.log('Collection headers', rows[0]);
			console.log('Notes number', (rows.length - 1));
		});

	res.send(`File ${files.file.name} received successfully!`);
};