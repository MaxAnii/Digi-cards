"use client";
import NavbarContainer from "@/components/NavbarContainer";
import HeroSection from "@/components/HeroSection";
import DescriptionSection from "@/components/DescriptionSection";
import Footer from "@/components/Footer";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
const LandingPage = () => {
	useEffect(() => {
		AOS.init({
			duration: 1200,
			once: true,
		});
	});
	return (
		<>
			<NavbarContainer>
				<></>
			</NavbarContainer>
			<HeroSection></HeroSection>
			<DescriptionSection></DescriptionSection>
			<Footer></Footer>
		</>
	);
};

export default LandingPage;
