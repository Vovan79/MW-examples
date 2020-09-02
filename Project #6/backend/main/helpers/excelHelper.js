const getCategoriesNamesForPlatforms = (categoryList, categoriesData) => {
	const categoriesNames = categoryList.map((item) => {
		if (item.category) {
			const category = categoriesData.find((cat) => String(cat._id) === String(item.category));
			return category.name;
		}
		return '';
	});
	return categoriesNames.join(', ');
};

module.exports.setPlatformsWorksheetFormat = (sheet) => {
	sheet.columns = [
		{ header: 'Название', key: 'name', width: 40 },
		{ header: 'Категория', key: 'category', width: 20 },
		{ header: 'noFollow', key: 'follow', width: 16 },
		{ header: 'Создан', key: 'createdAt', width: 12 },
		{ header: 'Кем создан', key: 'createdBy', width: 20 },
		{ header: 'Изменен', key: 'updatedAt', width: 12 },
		{ header: 'Кем изменен', key: 'updatedBy', width: 20 },
	];

	const headerRow = sheet.getRow(1);
	headerRow.height = 24;
	headerRow.font = { name: 'Arial', size: 14, bold: false };
	headerRow.alignment = { vertical: 'middle', horizontal: 'center' };

	const headerCells = ['A1', 'B1', 'C1', 'D1', 'E1', 'F1', 'G1'];
	headerCells.forEach((cell) => {
		sheet.getCell(cell).fill = {
			type: 'pattern',
			pattern: 'darkVertical',
			fgColor: { argb: 'ff76e8f5' },
		};
		sheet.getCell(cell).border = {
			right: { style: 'thin', color: { argb: '00000000' } },
			left: { style: 'thin', color: { argb: '00000000' } },
			bottom: { style: 'thin', color: { argb: '00000000' } },
		};
	});
};

module.exports.fillSheetWithPlatformsData = (platformsData, sheet, categoriesData) => {
	platformsData.forEach((platform) => {
		const {
			name,
			options,
		} = platform;
		//
		const platformName = name;
		const categoryListName = options.categoryList.length ? getCategoriesNamesForPlatforms(options.categoryList, categoriesData) : '';
		const follow = options.mainPage.noFollow ? 'да' : 'нет';
		
		sheet.addRow([
			platformName,
			categoryListName,
			follow,
		]);
	});
};
