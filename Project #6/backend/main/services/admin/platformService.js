const { setPlatformsWorksheetFormat, fillSheetWithPlatformsData } = require('../../helpers/excelHelper');

class AdminPlatformService extends BaseService {
  // eslint-disable-next-line class-methods-use-this
  async exportExcel(platformsData, categoriesData) {
    const workbook = new ExcelJS.Workbook();
    const sheet = workbook.addWorksheet('Платформы', {
      properties: {
        outlineLevelCol: 3,
        outlineLevelRow: 3,
        defaultRowHeight: 18,
      },
    });

    setPlatformsWorksheetFormat(sheet);
    fillSheetWithPlatformsData(platformsData, sheet, categoriesData);

    const data = await workbook.xlsx.writeBuffer();
    return data;
  }
}