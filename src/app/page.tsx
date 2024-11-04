"use client";

import Image from 'next/image';
import { useInViewport } from './hooks/useInViewport';
import image01 from '../assets/images/1.jpeg';
import image02 from '../assets/images/2.jpg';
import image03 from '../assets/images/3.jpg';
import image04 from '../assets/images/4.jpg';
import image05 from '../assets/images/5.jpeg';
import image06 from '../assets/images/6.jpg';
import image07 from '../assets/images/7.jpg';
import image08 from '../assets/images/8.jpg';
import image09 from '../assets/images/9.jpg';
import img_connect from '../assets/images/connect-person.jpg';
import connect from '../assets/images/connect.png';
import expense from '../assets/images/expense.png';
import grocery from '../assets/images/grocery.png';
import nutrition from '../assets/images/nutrition.png';
import party from '../assets/images/party.png';
import planner from '../assets/images/planner.png';
import recipebook from '../assets/images/recipebook.png';
import reverse from '../assets/images/reverse.png';
import search from '../assets/images/search.png';
import tracker from '../assets/images/tracker.png';
import info from '../assets/images/info.png';
import drops from '../assets/images/drops.png';
import FormComponent from './components/form';
import phone from '../assets/images/phone.png';

export default function Home() {
	// const [isClient, setIsClient] = useState(false);

	const inViewStates = useInViewport('scroll__panel');

	// useEffect(() => {
	// 	setIsClient(true);
	// }, []);
	
	// if (!isClient) return null; // Prevents rendering until client-side

	const DATA = [
		{
			title: 'Healthy eating made easy',
			text: 'Your everyday app for personalized healthy eating—focused on taste, cost, nutrition, and convenience.',
			subtitle: null,
			parameters: null,
			img_path: phone,
		},
		{
			title: 'Better nutrition, better life',
			text: 'Your everyday app for personalized healthy eating—focused on taste, cost, nutrition, and convenience.',
			subtitle: 'Search Parameters',
			parameters: ['Cook Time', 'Cost', 'Diet', 'Allergens', 'Cuisine', 'Meal Type'],
			img_path: image01,
		},
		{
			title: 'Never take too long',
			text: 'Your time is valuable.',
			subtitle: 'Cook Time',
			parameters: ['Under 5 min.', '5 to 10 min.', '10 mins. +'],
			img_path: image02,
		},
		{
			title: 'Never spend too much',
			text: 'Discover recipes that fit your budget.',
			subtitle: 'Cost Per Serving',
			parameters: ['Under $5', 'Under $10', 'Under $10', 'Over $10'],
			img_path: image03,
		},
		{
			title: 'Access a wide variety of choices',
			text: 'Explore recipe options that suit your needs.',
			subtitle: 'Lifestyle Diet',
			parameters: ['Balanced', 'Keto Friendly', 'High Fiber', 'High Protein', 'Low Fat', 'Paleo', 'Pescatarian', 'Sugar Conscious', 'Vegan', 'Vegetarian'],
			img_path: image04,
		},
		{
			title: 'Mind allergies',
			text: 'Exclude ingredients personally unhealthy for you.',
			subtitle: 'Allergens',
			parameters: ['Celery', 'Crustaceans', 'Dairy', 'Fish', 'Eggs', 'Gluten', 'Lupine', 'Peanuts', 'Sesame', 'Shellfish', 'Soy', 'Sulfites', 'Tree Nuts', 'Wheat'],
			img_path: image05,
		},
		{
			title: 'Enjoy your favorites',
			text: 'Include taste and preferences',
			subtitle: 'Cuisine',
			parameters: ['American', 'Chinese', 'Indian', 'Italian', 'Mexican', 'World'],
			subtitle_2: 'Meal',
			parameters_2: ['Breakfast', 'Brunch', 'Lunch / Dinner', 'Snack'],
			img_path: image06,
		},
		{
			title: 'Get nutrition information',
			text: 'Take control of your diet and health with nutrition analysis of recipes and foods, powered by the U.S. FDA\'s extensive database of 480,000 foods and 150 nutrients.',
			img_path: image07,
		},
		{
			title: 'Receive daily personalized recommendations just for you',
			text: 'Get tailored daily suggestions to match your nutritional preferences.',
			subtitle: 'Nutrients',
			parameters: ['Calories', 'Carbs', 'Fat', 'Protein', 'Fiber', 'Vitamins', 'Essential Minerals', 'Cholesterol', 'Saturated Fat', 'Sodium', 'Sugar', 'Specific Nutrients'],
			img_path: image08,
		},
		{
			title: 'Feel free to ask questions',
			text: 'AI’s here to help — whether it’s about cooking, nutrition, cost, diet, recipes, and more!',
			img_path: image09,
		},
		{
			title: 'Connect with people',
			text: 'Connect with friends & family, communities, and food experts, and bond over food: like, comment, share, post, message, create your own community.',
			img_path: img_connect,
		},
	];
	const NAV = [
		{
			title: 'Search',
			icon: search,
			tip: 'Explore recipes by cooking time, cost, dietary needs, cuisine, meal and course',
		},
		{
			title: 'Reverse Lookup',
			icon: reverse,
			tip: 'Find recipes based on the ingredients that you have'
		},
		{
			title: 'Nutrition Analyzer',
			icon: nutrition,
			tip: 'Discover the nutritional value of any food or recipe'
		},
		{
			title: 'Recipe Book',
			icon: recipebook,
			tip: 'Your recipe book to import recipes and videos, create your own, save, write or edit'
		},
		{
			title: 'Connect',
			icon: connect,
			tip: 'Connect with family, friends, groups, and experts to post and share'
		},
		{
			title: 'Meal Planner',
			icon: planner,
			tip: 'Plan meals daily, weekly, monthly, or in advance of any special occasion'
		},
		{
			title: 'Grocery Shopper',
			icon: grocery,
			tip: 'Create digital shopping lists, compare prices and order directly from your favorite grocers'
		},
		{
			title: 'Expense Tracker',
			icon: expense,
			tip: 'Track food expenses by item or category daily, weekly and monthly'
		},
		{
			title: 'Nutrition Tracker',
			icon: tracker,
			tip: 'Track calories, macros and nutrients daily, weekly and monthly'
		},
		{
			title: 'Party Planner',
			icon: party,
			tip: 'Organize party events, menus, budget, invites, confirmations'
		},
	]

	return (
		<main className="flex">
			<section className="scroll flex-1 text-lg">
				{DATA.map((item, index) => (
					<div key={index} className={`scroll__panel h-screen flex flex-row justify-start items-center`}>
						<div className="px-4 w-7/12">
							<div className='max-w-xl px-2 m-auto'>
								{index === 0 ? <h1 className="font-bold text-5xl mb-12">{item.title}</h1> : <h2 className="font-bold text-5xl mb-12">{item.title}</h2> }
								<p className='mb-10 font-[500]'>{item.text}</p>
								{item.subtitle && item.subtitle.length > 0 ? <h3 className="font-bold text-xl mb-4 mt-6">{item.subtitle}</h3> : null}
								{item.parameters && item.parameters.length > 0 ?
									<ul className={`grid grid-cols-4 gap-5 items-center`}>
										{item.parameters.map( (parameter, idx) => (
											<li key={idx} className='w-full'><button className={`w-full inline-block py-2 px-4 text-sm font-medium shadow-md shadow-gray-400 rounded border border-gray-200 border-solid hover:border-gray-300 hover:bg-gray-100`}>{parameter}</button></li>
										))}
									</ul>
								: null}
								{item.subtitle_2 && item.subtitle_2.length > 0 ? <h3 className="font-bold text-xl mb-4 mt-12">{item.subtitle_2}</h3> : null}
								{item.parameters_2 && item.parameters_2.length > 0 ?
									<ul className={`grid grid-cols-4 gap-5 items-center`}>
										{item.parameters_2.map( (parameter, idx) => (
											<li key={idx} className='w-full'><button className={`w-full inline-block py-2 px-4 text-sm font-medium shadow-md shadow-gray-400 rounded border border-gray-200 border-solid hover:border-gray-300 hover:bg-gray-100`}>{parameter}</button></li>
										))}
									</ul>
								: null}
							</div>
						</div>
						<div className={`parallax-image w-5/12 fixed right-10 bottom-10 top-10 flex items-center justify-center transition-opacity ${inViewStates[index] ? 'opacity-100' : 'opacity-0'}`}>
							{item.img_path ? 
								<Image
									src={item.img_path}
									alt=""
									className={`w-full h-full max-h-[80lvh] m-auto ${index === 0 ? 'object-contain' : 'object-cover'} object-center`}
								/> : null }
						</div>
					</div>
				))}
				<div className={`h-screen flex flex-row justify-start items-center relative bg-white`}>
					<div className="px-4 w-full">
						<div className='max-w-screen-xl px-2 m-auto'>
							<h2 className="font-bold text-5xl mb-20">All your tools in one place<br />at your fingertips</h2>
							<dl className='grid grid-rows-2 grid-flow-col gap-x-4 gap-y-20 text-center'>
								{NAV.map((item, index) => (
									<div key={index} className='group'>
										<dd className='relative mb-6'>
											<div className='absolute text-sm z-10 bg-gray-200 p-5 rounded-tr-xl left-1/4 bottom-3/4 opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-opacity duration-300'>{item.tip}</div>
											<div className='relative w-[60px] m-auto z-0'>
												<Image
													src={item.icon}
													alt=""
													className="w-[60px] h-[60px] m-auto object-cover object-center"
												/>
												<Image
													src={info}
													alt=""
													className="w-[20px] h-[20px] m-auto object-cover object-center absolute top-0 ml-4 left-full"
												/>
											</div>
										</dd>
										<dt className={`text-xl font-bold`}>{item.title}</dt>
									</div>
								))}
							</dl>
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
							className="w-full h-full max-h-[80lvh] m-auto object-contain object-center"
						/>
					</div>
				</div>

				<div className={`scroll__panel h-screen flex flex-row justify-start relative items-center bg-white`}>
					<div className="px-4 w-full">
						<div className='max-w-3xl px-12 py-10 m-auto bg-gray-200 rounded-lg'>
							<FormComponent />
						</div>
					</div>
				</div>

				<div className={`scroll__panel h-screen flex flex-row justify-start relative items-center bg-white`}>
					<div className="px-4 w-full">
						<div className='max-w-lg px-2 m-auto text-center font-[500]'>
							<p>You are invited to take this</p>
							<h2 className="font-bold text-5xl mb-12">Survey</h2>
							<p className='mb-2'>Help us shape the future of personalized healthy eating—your input matters, and it only takes 5 minutes to complete!</p>
							<a className='border-black border-solid border-2 px-4 py-2 inline-block rounded-md transition-colors hover:border-gray-700 hover:bg-gray-700 hover:text-white' href="https://forms.office.com/pages/responsepage.aspx?id=DQSIkWdsW0yxEjajBLZtrQAAAAAAAAAAAANAAdMxhw5UMDFaN01MWURVSEU2TVpaUzk0VVoxUDZaRi4u&route=shorturl" target='_blank'>Start Now</a>
						</div>
					</div>
				</div>


			</section>

		</main>
	);
}
