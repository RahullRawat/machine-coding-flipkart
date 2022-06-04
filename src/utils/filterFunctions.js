export const filterBySort = (products, sortBy) => {
	if (sortBy === "LOW_TO_HIGH") {
		return [...products].sort(
			(product1, product2) => product1.price - product2.price
		);
	}
	if (sortBy === "HIGH_TO_LOW") {
		return [...products].sort(
			(product1, product2) => product2.price - product1.price
		);
	}
	return products;
};

export const filterBySize = (products, filterSize) => {
	if (filterSize === "SMALL") {
		return products.filter((item) => item.size === filterSize);
	}
	if (filterSize === "MEDIUM") {
		return products.filter((item) => item.size === filterSize);
	}
	if (filterSize === "LARGE") {
		return products.filter((item) => item.size === filterSize);
	}
	if (filterSize === "EXTRA_LARGE") {
		return products.filter((item) => item.size === filterSize);
	}
	return products;
};

export const filterByGender = (products, gender) => {
	if (gender === "MALE") {
		return products.filter((item) => item.gender === gender);
	}
	if (gender === "FEMALE") {
		return products.filter((item) => item.gender === gender);
	}
	return products;
};

export const filterByBrand = (products, adidas, levis, puma) => {
	let filterProducts = [];
	if (!adidas && !levis && !puma) {
		return products;
	}
	if (adidas) {
		filterProducts = [
			...filterProducts,
			...products.filter((product) => product.brand === "adidas"),
		];
	}
	if (levis) {
		filterProducts = [
			...filterProducts,
			...products.filter((product) => product.brand === "levis"),
		];
	}
	if (puma) {
		filterProducts = [
			...filterProducts,
			...products.filter((product) => product.brand === "puma"),
		];
	}

	return filterProducts;
};
