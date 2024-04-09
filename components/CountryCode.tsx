"use client";
import { useState, useEffect, useRef } from "react";
import countryCodes from "country-codes-list";
import { Input } from "./ui/input";
import React from "react";

interface Props {
	setCountryCode: React.Dispatch<React.SetStateAction<string>>;
	countryCode: string;
}

const CountryCodeDropdown: React.FC<Props> = ({
	setCountryCode,
	countryCode,
}) => {
	const [searchTerm, setSearchTerm] = useState("");
	const [isOpen, setIsOpen] = useState(false);
	const dropdownRef = useRef<HTMLDivElement>(null);
	const myCountryCodesObject = Object.entries(
		countryCodes.customList(
			undefined,

			"[{countryCode}] {countryNameEn}: +{countryCallingCode}"
		)
	).map(([code, country]) => ({ code: "+" + code, country }));
	useEffect(() => {
		setSearchTerm(countryCode);
	}, [countryCode]);
	useEffect(() => {
		const handleClickOutside = (event: MouseEvent) => {
			if (
				dropdownRef.current &&
				!dropdownRef.current.contains(event.target as Node)
			) {
				setIsOpen(false);
			}
		};

		document.addEventListener("mousedown", handleClickOutside);

		return () => {
			document.removeEventListener("mousedown", handleClickOutside);
		};
	}, []);

	const handleSelect = (code: string) => {
		const spliceIndex = code.indexOf("+");
		setCountryCode(code.slice(0, 5) + code.slice(spliceIndex));
		setSearchTerm(code.slice(0, 5) + code.slice(spliceIndex));
		setIsOpen(false);
	};

	const filteredCountryCodes = myCountryCodesObject.filter((country) =>
		country.country.toLowerCase().includes(searchTerm.toLowerCase())
	);

	return (
		<>
			<div ref={dropdownRef} className="relative inline-block my-2">
				<Input
					type="text"
					placeholder="Search country..."
					className=" border-gray-100 rounded-md px-3 py- border outline-none focus:border-blue-100 bg-white/15"
					value={searchTerm}
					onChange={(e) => setSearchTerm(e.target.value)}
					onClick={() => {
						setIsOpen(true);
					}}
					required
				/>
				{isOpen && (
					<ul className="absolute z-10 mt-1 w-full bg-black rounded-md shadow-lg h-[300px] overflow-auto   ">
						{filteredCountryCodes.map(({ code, country }, index) => (
							<li
								key={index}
								className="px-3 py-2 cursor-pointer hover:bg-white/10"
								onClick={() => handleSelect(country)}
							>
								{country.slice(4)} ({code})
							</li>
						))}
					</ul>
				)}
			</div>
		</>
	);
};

export default CountryCodeDropdown;
