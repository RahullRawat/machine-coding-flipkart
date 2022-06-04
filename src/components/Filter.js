import React from "react";
import { useFilter } from "../FilterContext";
import "./Filter.css";

export const Filter = () => {
	const {
		filterState: { sortBy, filterBySize, gender, adidas, levis, puma },
		filterDispatch,
	} = useFilter();

	return (
		<div>
			<div className="filters">
				<h2>Sort By</h2>
				<label htmlFor="low-to-high">
					<input
						type="radio"
						name="low-to-high"
						id="low-to-high"
						value={sortBy === "LOW_TO_HIGH"}
						onChange={() =>
							filterDispatch({ type: "SORT", payload: "LOW_TO_HIGH" })
						}
					/>
					Low to high
				</label>

				<label htmlFor="high-to-low">
					<input
						type="radio"
						name="high-to-low"
						id="high-to-low"
						value={sortBy === "HIGH_TO_LOW"}
						onChange={() =>
							filterDispatch({ type: "SORT", payload: "HIGH_TO_LOW" })
						}
					/>
					High to Low
				</label>
			</div>
			<div className="filters">
				<h2>Filter by size</h2>
				<label htmlFor="size-s">
					<input
						type="radio"
						id="size-s"
						name="size"
						value={filterBySize === "SMALL"}
						onChange={() =>
							filterDispatch({ type: "FILTER_BY_SIZE", payload: "SMALL" })
						}
					/>
					Small
				</label>
				<label htmlFor="size-m">
					<input
						type="radio"
						id="size-m"
						name="size"
						value={filterBySize === "MEDIUM"}
						onChange={() =>
							filterDispatch({ type: "FILTER_BY_SIZE", payload: "MEDIUM" })
						}
					/>
					Medium
				</label>
				<label htmlFor="size-l">
					<input
						type="radio"
						id="size-l"
						name="size"
						value={filterBySize === "LARGE"}
						onChange={() =>
							filterDispatch({ type: "FILTER_BY_SIZE", payload: "LARGE" })
						}
					/>
					Large
				</label>
				<label htmlFor="size-xl">
					<input
						type="radio"
						id="size-xl"
						name="size"
						value={filterBySize === "EXTRA_LARGE"}
						onChange={() =>
							filterDispatch({ type: "FILTER_BY_SIZE", payload: "EXTRA_LARGE" })
						}
					/>
					Extra Large
				</label>
			</div>
			<div className="filters">
				<h2>Filter by brand</h2>
				<label htmlFor="brand-a">
					<input
						type="checkbox"
						id="brand-a"
						name="brand"
						checked={adidas}
						onChange={() => filterDispatch({ type: "ADIDAS" })}
					/>
					Adidas
				</label>
				<label htmlFor="brand-b">
					<input
						type="checkbox"
						id="brand-b"
						name="brand"
						checked={levis}
						onChange={() => filterDispatch({ type: "LEVIS" })}
					/>
					Levis
				</label>
				<label htmlFor="brand-c">
					<input
						type="checkbox"
						id="brand-c"
						name="brand"
						checked={puma}
						onChange={() => filterDispatch({ type: "PUMA" })}
					/>
					Puma
				</label>
			</div>
			<div className="filters">
				<h2>Gender</h2>
				<label htmlFor="male">
					<input
						type="radio"
						id="male"
						name="gender"
						value={gender === "MALE"}
						onChange={() => filterDispatch({ type: "GENDER", payload: "MALE" })}
					/>
					Male
				</label>
				<label htmlFor="female">
					<input
						type="radio"
						id="female"
						name="gender"
						value={gender === "FEMALE"}
						onChange={() =>
							filterDispatch({ type: "GENDER", payload: "FEMALE" })
						}
					/>
					Female
				</label>
			</div>
			<button onClick={() => filterDispatch({ type: "RESET" })}>
				Clear filters
			</button>
		</div>
	);
};
