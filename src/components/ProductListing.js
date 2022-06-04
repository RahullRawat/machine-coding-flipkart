import React from "react";
import data from "../data";
import { Filter } from "./Filter";
import { Products } from "./Products";
import {
	filterBySort,
	filterBySize,
	filterByGender,
	filterByBrand,
} from "../utils/filterFunctions";
import { useFilter } from "../FilterContext";
import "./ProductListing.css";

export const ProductListing = () => {
	const {
		filterState: { sortBy, filterSize, gender, adidas, puma, levis },
	} = useFilter();
	const filterBySizeData = filterBySize(data, filterSize);
	const filterByGenderData = filterByGender(filterBySizeData, gender);
	const filterBySortData = filterBySort(filterByGenderData, sortBy);
	const filterByBrandData = filterByBrand(
		filterBySortData,
		adidas,
		levis,
		puma
	);
	return (
		<section className="flex">
			<section className="filter-wrapper">
				<Filter />
			</section>
			<section className="product-wrapper">
				{filterByBrandData.map((product) => (
					<Products product={product} />
				))}
			</section>
		</section>
	);
};
