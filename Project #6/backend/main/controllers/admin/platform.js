const readXlsxFile = require('read-excel-file/node');
const fs = require('fs');

const { AdminPlatformService, AdminCategoryService } = require('../../services/admin');
const { crudControllers } = require('../../lib/crudFactory/admin');
const { getFilterOptions, getFilteredPlatformsData } = require('../../helpers/filterHelper');

const container = crudControllers(AdminPlatformService);

/**
 * @param {Express.Request} req
 * @param {Response} res
 */
// eslint-disable-next-line no-unused-vars
container.exportPlatforms = async (req, res) => {
	const { filterList } = req.body;
	
	const filterOptions = getFilterOptions('platform', filterList);

	const serviceCategory = new AdminCategoryService();
	const categoriesData = await serviceCategory.getAll();
	const service = new AdminPlatformService();
	const platformsData = await service.getAll();

	// eslint-disable-next-line
	const filteredPlatformsData = getFilteredPlatformsData(platformsData, categoriesData, filterOptions);
	const excelData = await service.exportExcel(filteredPlatformsData, categoriesData);

	return res.send(excelData);
};

container.importPlatforms = async (req, res) => {
	const { files } = req;
	const streamRead = fs.createReadStream(files.file.path);
	readXlsxFile(streamRead)
		.then((rows) => {
			// eslint-disable-next-line no-console
			console.log('Notes number', (rows.length - 1));
		});

	res.send(`File ${files.file.name} received successfully!`);
};

module.exports = container;
