"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { useInViewport } from './hooks/useInViewport';
import phone from '../assets/images/1.png';
import phoneShell from '../assets/images/phone-shell.png';
import mock1 from '../assets/images/imock-1-min.png';
import image01 from '../assets/images/1.jpeg';
import image02 from '../assets/images/cook-times.jpg';
import image03 from '../assets/images/cost-per-serving.jpg';
import image04 from '../assets/images/lifestyle-diet.jpg';
import image05 from '../assets/images/mind-allergies.jpg';
import image06 from '../assets/images/cuisine-meal.jpg';
import results from '../assets/images/results.jpg';
import image07 from '../assets/images/7.jpg';
import image08 from '../assets/images/kitchen-user.jpg';
import image09 from '../assets/images/9.jpg';
import img_connect from '../assets/images/connect-person.jpg';
import connect from '../assets/images/connect.png';
import connectReady from '../assets/images/connectReady.png';
import expense from '../assets/images/expense.png';
import expenseReady from '../assets/images/expenseReady.png';
import grocery from '../assets/images/grocery.png';
import groceryReady from '../assets/images/groceryReady.png';
import nutrition from '../assets/images/nutrition.png';
import nutritionReady from '../assets/images/nutritionReady.png';
import party from '../assets/images/party.png';
import partyReady from '../assets/images/partyReady.png';
import planner from '../assets/images/planner.png';
import plannerReady from '../assets/images/plannerReady.png';
import recipebook from '../assets/images/recipebook.png';
import recipebookReady from '../assets/images/recipebookReady.png';
import reverse from '../assets/images/reverse.png';
import reverseReady from '../assets/images/reverseReady.png';
import search from '../assets/images/search.png';
import searchReady from '../assets/images/search-ready.png';
import tracker from '../assets/images/tracker.png';
import trackerReady from '../assets/images/trackerReady.png';
// import info from '../assets/images/info.png';
import drops from '../assets/images/circles.jpg';
import FormComponent from './components/form';
import abcLogo from '../assets/images/abc-app-logo.png';
import surveyBG from '../assets/images/survey-bg.png';
import arrow from '../assets/images/chevron.png';
import Link from 'next/link';

export default function Home() {
	// const [isClient, setIsClient] = useState(false);

	const inViewStates = useInViewport('scroll__panel');
	const [isOpen, setIsOpen] = useState<boolean>(false);
	const [isClient, setIsClient] = useState<boolean>(false);

	// Ensure the component only renders client-side DOM updates
	useEffect(() => {
		setIsClient(true);
	}, []);

	useEffect(() => {
		if (isOpen) {
		  	document.body.classList.add('overflow-hidden');
		} else {
		  	document.body.classList.remove('overflow-hidden');
		}
	
		// Cleanup when the component unmounts or `isOpen` changes
		return () => {
			document.body.classList.remove('overflow-hidden');
		};
	}, [isOpen]);

	const openModal = (): void => setIsOpen(true);
	const closeModal = (): void => setIsOpen(false);

	if (!isClient) return null; // Render nothing until client-side


	const DATA = [
		// {
		// 	bg: 'bg-white',
		// 	title: 'Receive daily personalized recommendations just for you',
		// 	tagline: null,
		// 	text: 'Get tailored daily suggestions to match your nutritional preferences.',
		// 	subtitle: 'Nutrients',
		// 	parameters: ['Calories', 'Carbs', 'Fat', 'Protein', 'Fiber', 'Vitamins', 'Essential Minerals', 'Cholesterol', 'Saturated Fat', 'Sodium', 'Sugar', 'Specific Nutrients'],
		// 	img_path: image08,
		// },
		// {
		// 	bg: 'bg-white',
		// 	title: 'Better nutrition, better life',
		// 	tagline: null,
		// 	text: 'Make smart food choices tailored to your  diet, cuisine, and unique needs: a variety of  50,000 recipes to choose from.',
		// 	subtitle: 'Search Parameters',
		// 	parameters: ['Cook Time', 'Cost', 'Lifestyle Diet', 'Allergens', 'Cuisine', 'Meal Type'],
		// 	img_path: image01,
		// },
		// {
		// 	bg: 'bg-white',
		// 	title: 'Get nutrition information',
		// 	tagline: null,
		// 	text: 'Take control of your diet and health with nutrition analysis of recipes and foods, powered by the U.S. FDA\'s extensive database of 480,000 foods and 150 nutrients.',
		// 	img_path: image07,
		// },
		{
			bg: 'bg-gray-100',
			title: 'Make smart food choices.',
			tagline: 'Explore.',
			text: 'Make food choices tailored to your preferences and unique needs: choose from a variety of 50,000 recipes, exploring by cook time, cost, diet, allergen exclusion, cuisine, and meal type.',
			subtitle: null,
			more_info: 'Click Here for Search Parameters',
			parameters: ['Cook Time', 'Cost', 'Lifestyle Diet', 'Allergens', 'Cuisine', 'Meal Type'],
			img_path: image02,
		},
		{
			bg: 'bg-white',
			title: 'Save recipes and videos in your cookbook.',
			tagline: 'Recipe Book.',
			text: 'Save a personalized collection of meals you love, making it easy to revisit favorites and experiment with new ideas. Conveniently organize family recipes, adapt dishes to your taste, and track adjustments for perfecting them over time.',
			subtitle: null,
			more_info: null,
			parameters: null,
			img_path: image03,
		},
		{
			bg: 'bg-gray-100',
			title: 'Plan your meals.',
			tagline: 'Meal Planner.',
			text: 'Meal planning saves time, reduces stress, and promotes healthier eating by allowing you to prepare balanced, nutrient-rich meals in advance. Additionally, it supports dietary goals, whether for weight management, specific health needs, or fitness objectives.',
			subtitle: null,
			more_info: null,
			parameters: null,
			img_path: image04,
		},
		{
			bg: 'bg-white',
			title: 'Buy groceries online.',
			tagline: 'Grocery Shopper.',
			text: 'Shop for groceries online from the stores you love. Enjoy the convenience of shopping from home, saving time, and gaining the flexibility to shop anytime. Plus, easily compare prices, track your spending, and avoid impulse buys.',
			subtitle: null,
			more_info: null,
			parameters: null,
			img_path: image05,
		},
		{
			bg: 'bg-gray-100',
			title: 'Get detailed nutrition information.',
			tagline: 'Nutrition Analyzer.',
			text: 'Take control of your diet and health with nutrition analysis of recipes and foods, powered by the U.S. FDA\'s extensive database of 480,000 foods and 150 nutrients.',
			subtitle: 'Cuisine',
			more_info: null,
			parameters: ['American', 'Chinese', 'Indian', 'Italian', 'Mexican', 'World'],
			subtitle_2: 'Meal',
			parameters_2: ['Breakfast', 'Brunch', 'Lunch/Dinner', 'Snack'],
			img_path: image06,
		},
		{
			bg: 'bg-white',
			title: 'Track food expenses.',
			tagline: 'Expense Tracker.',
			text: 'Track your food expenses to stay on budget, uncover spending patterns, and find ways to save. Gain better control over meal planning, supporting your financial health and empowering you to make smarter grocery choices.',
			subtitle: null,
			more_info: null,
			parameters: null,
			img_path: image05,
		},
		{
			bg: 'bg-gray-100',
			title: 'Track your personal nutrition.',
			tagline: 'Nutrition Tracker.',
			text: 'Track what you eat and understand your nutrition, make healthier choices, and adjust your diet to meet goals like weight management, improved energy, and overall well-being.',
			subtitle: null,
			more_info: null,
			parameters: null,
			subtitle_2: null,
			parameters_2: null,
			img_path: image06,
		},
		{
			bg: 'bg-white',
			title: 'Use what you have.',
			tagline: 'Reverse Lookup.',
			text: 'Input a list of ingredients you have on hand to find recipes that can be made with those items. This tool encourages creativity in the kitchen, saves time on shopping, and provides convenient meal ideas, making it efficient to use pantry items and reduce the need for extra groceries.',
			subtitle: null,
			more_info: null,
			parameters: null,
			img_path: image05,
		},
		{
			bg: 'bg-gray-100',
			title: 'Plan parties with ease.',
			tagline: 'Party Planner.',
			text: 'Organize and coordinate every aspect of an event seamlessly from start to finish. This includes selecting a theme, managing budgets, arranging food, drinks, and entertainment, and handling guest lists. invitations and confirmations.',
			subtitle: null,
			more_info: null,
			parameters: null,
			subtitle_2: null,
			parameters_2: null,
			img_path: image06,
		},
		{
			bg: 'bg-white',
			title: 'Feel free to ask questions.',
			tagline: 'Personal Assistant.',
			text: 'Your AI assistant is here to help — whether it\'s with recipe ideas, nutrition and dietary goals, cost-effective meal options, time-saving tips, meal planning, grocery assistance, and more!',
			subtitle: null,
			more_info: null,
			parameters: null,
			img_path: image05,
		},
		{
			bg: 'bg-gray-100',
			title: 'Engage with people.',
			tagline: 'Connect.',
			text: 'Connect with friends & family, communities, and food experts, and bond over food: like, comment, share, post, message, create your own community.',
			subtitle: null,
			more_info: null,
			parameters: null,
			subtitle_2: null,
			parameters_2: null,
			img_path: image06,
		},
	];
	const EXPLORE = [
		{
			title: 'Never take too long.',
			text: 'Your time is valuable. Discover quick and easy recipes designed to fit into your busy schedule without sacrificing flavor or nutrition.',
			subtitle: 'Cook Time',
			parameters: ['Under 10 min.', '10 to 15 min.', '15 to 30 min.', '30 min. +'],
			img_path: image02,
		},
		{
			title: 'Never spend too much.',
			text: 'Discover recipes that fit your budget. Enjoy meal variety and nutritious options that support your lifestyle with ease.',
			subtitle: 'Cost per Serving',
			parameters: ['Under $5', 'Under $7', 'Under $10', 'Over $10'],
			img_path: image02,
		},
		{
			title: 'Access a wide variety of diets.',
			text: 'Explore recipe options that suit your dietary needs, preferences, and lifestyle goals, making healthy eating more enjoyable and accessible.',
			subtitle: 'Lifestyle Diet',
			parameters: ['Balanced', ' High Protein', 'Keto/Low Carb', 'High Fiber', 'Low Fat', 'Low Sugar', 'Paleo', 'Pescatarian', 'Vegan', 'Vegetarian'],
			img_path: image02,
		},
		{
			title: 'Mind allergies.',
			text: 'Exclude ingredients that are personally unhealthy for you, ensuring recipes are safe, enjoyable, and tailored to your dietary needs.',
			subtitle: 'Allergens',
			parameters: ['Celery', ' High Protein', 'Keto/Low Carb', 'High Fiber', 'Low Fat', 'Low Sugar', 'Paleo', 'Pescatarian', 'Vegan', 'Vegetarian'],
			img_path: image02,
		},
		{
			title: 'Tailor to your taste.',
			text: 'Select recipes based on your cuisine preferences and meal types, making each meal a perfect match for your unique tastes.',
			subtitle: 'Cuisine',
			parameters: ['American', 'Chinese', 'Indian', 'Italian', 'Mexican', 'World'],
			subtitle_2: 'Meal',
			parameters_2: ['Breakfast', 'Brunch', 'Lunch/Dinner', 'Snack'],
			img_path: image06,
		},
	];
	const NAV = [
		{
			id: 'today',
			title: 'Today',
			iconDefault: searchReady,
			icon: search,
			tip: 'Explore recipes by cooking time, cost, dietary needs, cuisine, meal and course',
		},
		{
			id: 'explore',
			title: 'Search',
			iconDefault: searchReady,
			icon: search,
			tip: 'Explore recipes by cooking time, cost, dietary needs, cuisine, meal and course',
		},
		{
			title: 'Reverse Lookup',
			iconDefault: reverseReady,
			icon: reverse,
			tip: 'Find recipes based on the ingredients that you have'
		},
		{
			title: 'Nutrition Analyzer',
			iconDefault: nutritionReady,
			icon: nutrition,
			tip: 'Discover the nutritional value of any food or recipe'
		},
		{
			title: 'Recipe Book',
			iconDefault: recipebookReady,
			icon: recipebook,
			tip: 'Your recipe book to import recipes and videos, create your own, save, write or edit'
		},
		{
			title: 'Connect',
			iconDefault: connectReady,
			icon: connect,
			tip: 'Connect with family, friends, groups, and experts to post and share'
		},
		{
			title: 'Meal Planner',
			iconDefault: plannerReady,
			icon: planner,
			tip: 'Plan meals daily, weekly, monthly, or in advance of any special occasion'
		},
		{
			title: 'Grocery Shopper',
			iconDefault: groceryReady,
			icon: grocery,
			tip: 'Create digital shopping lists, compare prices and order directly from your favorite grocers'
		},
		{
			title: 'Expense Tracker',
			iconDefault: expenseReady,
			icon: expense,
			tip: 'Track food expenses by item or category daily, weekly and monthly'
		},
		{
			title: 'Nutrition Tracker',
			iconDefault: trackerReady,
			icon: tracker,
			tip: 'Track calories, macros and nutrients daily, weekly and monthly'
		},
		{
			title: 'Party Planner',
			iconDefault: partyReady,
			icon: party,
			tip: 'Organize party events, menus, budget, invites, confirmations'
		},
		{
			title: 'Assistant',
			iconDefault: partyReady,
			icon: party,
			tip: 'Organize party events, menus, budget, invites, confirmations'
		},
	];

	return (
		<main className={`flex`}>
			<section className="scroll flex-1 text-lg">

				<div className={`scroll__panel`}>
					<div className='max-w-screen-2xl m-auto min-h-[100lvh] relative py-6 flex justify-center items-center'>
						<div className={`max-w-[800px] m-auto`}>
							<div className='text-center'>
								<div className={`flex gap-4 items-center font-bold uppercase text-5xl mb-20 absolute top-6 left-0`}>
									<Image className={`w-[50px] h-[50px]`} src={abcLogo} alt='ABC Logo' /> <span>ABC App</span>
								</div>
								<Image
									src={phoneShell}
									alt=""
									className={`max-h-[500px] w-auto m-auto mb-10`}
								/>
								<h1 className="font-bold text-6xl mb-10">Healthy eating made easy.</h1>
								<p className='mb-10 text-2xl font-[500]'>Your everyday app for personalized healthy eating - focused on taste, cost, nutrition, and convenience. Simple, personal, private.</p>
							</div>
						</div>
					</div>
				</div>

				{/*  <div className={`scroll__panel`}>
					<div className='max-w-screen-2xl m-auto min-h-[100lvh] relative py-6 flex'>
						<div className={`grid grid-cols-12 gap-20 items-center`}>
							<div className={`col-span-7`}>
								<div>
									<div className={`flex gap-4 items-center font-bold uppercase text-5xl mb-20 absolute top-6 left-0`}>
										<Image className={`w-[50px] h-[50px]`} src={abcLogo} alt='ABC Logo' /> <span>ABC App</span>
									</div>
									<h1 className="font-bold text-6xl mb-12">Healthy eating made easy.</h1>
									<p className='mb-10 text-2xl font-[500] max-w-[600px] '>Your everyday app for personalized healthy eating - focused on taste, cost, nutrition, and convenience. Simple, personal, private.</p>
								</div>
							</div>
							<div className={`col-span-5`}>
								<div className={`flex items-center justify-center`}>
									<Image
										src={phoneShell}
										alt=""
										className={`max-h-[80lvh] w-auto`}
									/>
								</div>
							</div>
						</div>
					</div>
				</div> */}

				<div className={`h-screen flex flex-row justify-start items-center relative bg-white`}>
					<div className="px-4 w-full">
						<div className='max-w-screen-2xl px-2 m-auto'>
							<p className="font-bold text-6xl mb-0">All your tools in one place.</p>
							<h2 className="font-bold text-6xl mb-[160px] text-[#d464ae]">At your fingertips.</h2>
							<dl className='flex flex-row flex-wrap gap-x-4 gap-y-20 text-center justify-between'>
								{NAV.map((item, index) => (
									<div key={index} className='group basis-[15%]'>
										<dd className='relative mb-6'>
											{/* <div className='absolute text-sm z-10 bg-gray-200 p-5 rounded-tr-xl left-1/4 bottom-3/4 opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-opacity duration-300'>{item.tip}</div> */}
											<div className='relative w-[60px] m-auto z-0 group'>
												<Image
													src={item.iconDefault}
													alt=""
													className="w-[60px] h-[60px] m-auto object-cover object-center absolute inset-0 transition-opacity group-hover:opacity-0"
												/>
												<Image
													src={item.icon}
													alt=""
													className="w-[60px] h-[60px] m-auto object-cover object-center opacity-0 transition-opacity group-hover:opacity-100"
												/>
											</div>
										</dd>
										<dt className={`text-lg font-bold flex gap-2 items-center justify-center`}>
											<Link href={`#${item.id}`} className='flex gap-3 items-center'>{item.title} <Image
												src={arrow}
												alt=""
												className="w-[15px] h-[15px] transition-transform group-hover:translate-x-1"
											/></Link>
										</dt>
									</div>
								))}
							</dl>
						</div>
					</div>
				</div>

				<div id={`today`} className={`scroll__panel`}>
					<div className='max-w-screen-2xl m-auto min-h-[100lvh] relative py-6 flex'>
						<div className={`grid grid-cols-12 gap-20 items-center justify-between`}>
							<div className={`col-span-6`}>
								<div className={``}>
									<p className="font-bold text-6xl mb-0 text-[#d464ae]">Today.</p>
									<h1 className="font-bold text-6xl mb-12">Daily recommendations, just for you.</h1>
									<p className='mb-10 text-2xl font-[500]'>Receive personalized daily suggestions aligned with your nutritional preferences, adding variety, boosting motivation, and introducing new foods and techniques for a more engaging and supportive experience.</p>
								</div>
							</div>
							<div className={`col-span-5`}>
								<div className={`flex items-center justify-center`}>
									<Image
										src={phone}
										alt=""
										className={``}
									/>
								</div>
							</div>
						</div>
					</div>
				</div>

				{DATA.map((item, index) => (
					<div key={index} className={`scroll__panel ${item.bg}`}>
						<div className='max-w-screen-xl m-auto min-h-[100lvh] relative py-6 flex'>
							<div className={`grid grid-cols-12 gap-20 items-center justify-between`}>
								<div className={`col-span-6`}>
									<div className={``}>
										{item?.tagline ? <p className="font-bold text-6xl mb-0 text-[#d464ae]">{item.tagline}</p> : null}
										<h2 className="font-bold text-6xl mb-12">{item.title}</h2>
										<p className='mb-10 text-2xl font-[500]'>{item.text}</p>
										{item.more_info ? <button onClick={openModal} className="font-bold text-xl mb-4 mt-6">{item.more_info}</button> : null}
										{item.subtitle && item.subtitle.length > 0 ? <h3 className="font-bold text-xl mb-4 mt-6">{item.subtitle}</h3> : null}
										{item.parameters && item.parameters.length > 0 ?
											<ul className={`grid grid-cols-4 gap-5 items-center`}>
												{item.parameters.map( (parameter, idx) => (
													<li key={idx} className='w-full'><button className={`w-full bg-white inline-block py-2 px-2 leading-none text-sm font-[600] shadow-md shadow-gray-400 rounded border border-gray-200 border-solid hover:border-gray-300 hover:bg-gray-100`}>{parameter}</button></li>
												))}
											</ul>
										: null}
										{item.subtitle_2 && item.subtitle_2.length > 0 ? <h3 className="font-bold text-xl mb-4 mt-12">{item.subtitle_2}</h3> : null}
										{item.parameters_2 && item.parameters_2.length > 0 ?
											<ul className={`grid grid-cols-4 gap-5 items-center`}>
												{item.parameters_2.map( (parameter, idx) => (
													<li key={idx} className='w-full'><button className={`w-full bg-white inline-block py-2 px-4 text-sm font-[600] shadow-md shadow-gray-400 rounded border border-gray-200 border-solid hover:border-gray-300 hover:bg-gray-100`}>{parameter}</button></li>
												))}
											</ul>
										: null}
									</div>
								</div>
								<div className={`col-span-5`}>
									<div className={`flex items-center justify-center relative`}>
										<Image
											src={phoneShell}
											alt=""
											className={`absolute pointer-events-none z-1 max-h-[80lvh] w-auto`}
										/>
										<div className={`w-[50%]`}>
											{item.parameters && item.parameters.length > 0 ?
												<ul className={``}>
													{item.parameters.map( (parameter, idx) => (
														<li key={idx} className=''><button className={`bg-white inline-block py-2 px-2 leading-none text-sm font-[600] shadow-md shadow-gray-400 rounded border border-gray-200 border-solid hover:border-gray-300 hover:bg-gray-100`}>{parameter}</button></li>
													))}
												</ul>
											: null}
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				))}
				
				<div className="fixed inset-0 z-50 flex items-center justify-end  transform transition-transform duration-1000 translate-x-full" style={{ transform: isOpen ? 'translateX(0)' : 'translateX(100%)' }}>
					<div className="bg-white py-6 px-20 shadow-xl max-w-[90lvw] w-full h-full overflow-scroll">
						<button onClick={closeModal}>Close</button>

						<div className={`grid grid-cols-12 gap-20 items-start`}>
							<div className={`col-span-7`}>
								{EXPLORE.map((item, index) => (
									<div className={`min-h-screen flex items-center justify-center`}>
										<div>
											<h2 className="font-bold text-6xl mb-12">{item.title}</h2>
											<p className='mb-10 text-2xl font-[500]'>{item.text}</p>
											{item.parameters && item.parameters.length > 0 ?
												<ul className={`grid grid-cols-4 gap-5 items-center`}>
													{item.parameters.map( (parameter, idx) => (
														<li key={idx} className='w-full'><button className={`w-full bg-white inline-block py-2 px-2 leading-none text-sm font-[600] shadow-md shadow-gray-400 rounded border border-gray-200 border-solid hover:border-gray-300 hover:bg-gray-100`}>{parameter}</button></li>
													))}
												</ul>
											: null}
										</div>
									</div>
								))}
							</div>
							<aside className={`col-span-5 sticky top-0`}>
								<div>
									<Image
										src={phoneShell}
										alt=""
										className={`absolute pointer-events-none z-1 max-h-[80lvh] w-auto`}
									/>
								</div>
							</aside>
						</div>

					</div>
				</div>

				<div className={`h-screen flex flex-row justify-start items-center relative bg-[#027e6f]`}>
					<div className="px-4 w-full">
						<div className='max-w-screen-xl px-2 m-auto text-center'>
							<h2 className="font-bold text-5xl mb-20 text-white">What’s the ROI of Healthy Eating?</h2>
							<div className='grid grid-cols-3 gap-8 text-xl font-[500]'>
								<div className='bg-white p-4 rounded-lg min-h-64 flex items-center justify-center'>
									<p>Improved health</p>
								</div>
								<div className='bg-white p-4 rounded-lg min-h-64 flex items-center justify-center'>
									<p>Increased awareness about diet and nutrition</p>
								</div>
								<div className='bg-white p-4 rounded-lg min-h-64 flex items-center justify-center'>
									<p>Reduced health-care costs due to diet</p>
								</div>
							</div>
						</div>
					</div>
				</div>
				
				<div className={`scroll__panel h-screen flex flex-row justify-start items-center relative z-1 bg-white`}>
					<div className="px-4 w-7/12">
						<div className='max-w-xl px-2 m-auto'>
							<h2 className="font-bold text-5xl mb-12">Healthy eating, higher quality of life</h2>
							<p className='font-[500]'>Eat smarter with ABC App to fuel your body, boost your energy, and improve your overall well-being.</p>
						</div>
					</div>
					<div className={`w-5/12 flex items-center justify-center transition-opacity bg-white ${inViewStates[DATA.length] ? 'opacity-100' : 'opacity-0'}`}>
						<Image
							src={drops}
							alt=""
							className="w-full h-full max-h-[70lvh] m-auto object-contain object-center pr-20"
						/>
					</div>
				</div>

				<div className={`scroll__panel h-screen flex flex-row justify-start relative items-center bg-white`}>
					<div className="px-4 w-full">
						<div className='max-w-5xl px-12 py-10 m-auto bg-gray-200 rounded-lg'>
							<FormComponent />
						</div>
					</div>
				</div>

				<div className={`scroll__panel h-screen flex flex-row justify-start relative items-center overflow-hidden`}>
					<div className="px-4 max-w-3xl m-auto relative z-10">
						<div className='font-[500] text-white drop-shadow-md'>
							<p>You are invited to take this</p>
							<h2 className="font-bold text-5xl mb-12">Survey</h2>
							<p className='mb-20'>Help us shape the future of personalized healthy eating—your input matters, and it only takes 5 minutes to complete!</p>
							<a className='border-white border-solid border-2 px-4 py-2 inline-block rounded-md transition-colors hover:bg-white hover:text-black' href="https://forms.office.com/pages/responsepage.aspx?id=DQSIkWdsW0yxEjajBLZtrQAAAAAAAAAAAANAAdMxhw5UMDFaN01MWURVSEU2TVpaUzk0VVoxUDZaRi4u&route=shorturl" target='_blank'>Start Now</a>
						</div>
						<Image
							src={surveyBG}
							alt=""
							className="w-full h-full object-cover object-center absolute"
						/>
					</div>
				</div>


			</section>

		</main>
	);
}
