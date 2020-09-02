module.exports.getFilterOptions = (type, filterList) => {
	let filterOptions = {};
	switch (type) {
	case 'offer': {
		filterOptions = filterList.length ? {
			retailer: filterList[2][0] || '',
			typeOffer: filterList[3][0] || '',
			categoryList: filterList[4][0] || '',
			platform: filterList[5][0] || '',
		} : {};
		break;
	}
	case 'category': {
		filterOptions = filterList.length ? {
			typeOffer: filterList[2][0] || '',
			isActive: filterList[3][0] || '',
			noFollow: filterList[4][0] || '',
			noIndex: filterList[5][0] || '',
			platform: filterList[6][0] || '',
		} : {};
		break;
	}
	case 'retailer': {
		filterOptions = filterList.length ? {
			type: filterList[2][0] || '',
			offers: filterList[3][0] || 0,
		} : {};
		break;
	}
	default:
		filterOptions = {};
	}

	return filterOptions;
};

module.exports.getFilteredOffersData = (data, filterOptions) => {
	let filteredOffersData = data;
	// eslint-disable-next-line no-restricted-syntax
	for (const option in filterOptions) {
		if (filterOptions[option] !== '') {
			if (option === 'categoryList') {
				filteredOffersData = filteredOffersData.filter((offer) => {
					if (offer[option].length) {
						const category = offer[option][0];
						return category.name === filterOptions[option];
					}
					return false;
				});
			} else {
				// eslint-disable-next-line max-len
				filteredOffersData = filteredOffersData.filter((offer) => offer[option].name === filterOptions[option]);
			}
		}
	}

	return filteredOffersData;
};

module.exports.getFilteredCategoriesData = (data, filterOptions) => {
	let filteredCategoriesData = data;
	// eslint-disable-next-line no-restricted-syntax
	for (const option in filterOptions) {
		if (filterOptions[option] !== '') {
			if (option === 'typeOffer' || option === 'platform') {
				// eslint-disable-next-line max-len
				filteredCategoriesData = filteredCategoriesData.filter((category) => category[option].name === filterOptions[option]);
			} else {
				// eslint-disable-next-line max-len
				filteredCategoriesData = filteredCategoriesData.filter((category) => category[option].toString === filterOptions[option]);
			}
		}
	}

	return filteredCategoriesData;
};

module.exports.getFilteredRetailersData = (data, filterOptions) => {
	let filteredRetailersData = data;
	// eslint-disable-next-line no-restricted-syntax
	for (const option in filterOptions) {
		if (filterOptions[option] !== '') {
			if (option === 'type') {
				// eslint-disable-next-line max-len
				filteredRetailersData = filteredRetailersData.filter((retailer) => retailer[option].name === filterOptions[option]);
			} else {
				// eslint-disable-next-line max-len
				filteredRetailersData = filteredRetailersData.filter((retailer) => retailer[option] === filterOptions[option]);
			}
		}
	}

	return filteredRetailersData;
};

module.exports.getFilteredPlatformsData = (platformsData, categoriesData, filterOptions) => {
	let filteredPlatformsData = platformsData;
	// eslint-disable-next-line no-restricted-syntax
	for (const option in filterOptions) {
		if (filterOptions[option] !== '') {
			if (option === 'categoryList') {
				filteredPlatformsData = filteredPlatformsData.filter((platform) => {
					if (platform.options.categoryList.length) {
						const categoryFull = categoriesData.find((item) => (
							item.name === filterOptions.categoryList
						));
						const category = platform.options.categoryList[0];
						
						return String(category.category) === String(categoryFull._id);
					}
					return false;
				});
			} else {
				// eslint-disable-next-line max-len
				filteredPlatformsData = filteredPlatformsData.filter((platform) => (
					String(platform.options.mainPage.noFollow) === filterOptions.noFollow.slice(11)
				));
			}
		}
	}

	return filteredPlatformsData;
};
