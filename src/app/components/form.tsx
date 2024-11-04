import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const FormComponent = () => {
	const formRef = useRef<HTMLFormElement | null>(null); // Specify formRef as HTMLFormElement
	const [formMessage, setFormMessage] = useState(""); // State to manage messages
	const [isProcessing, setIsProcessing] = useState(false); // State to manage button state
	const [isFormSubmit, setFormSubmit] = useState(false); // State to manage button state

	useEffect(() => {
		const formElement = formRef.current;
	
		// Serialize the form data into a URL-encoded string for submission
		const serializeForm = (form: HTMLFormElement) => {
			const formData = new FormData(form);
			return new URLSearchParams(formData as unknown as Record<string, string>).toString();
		};
	
		// Update handleFormSubmit to use native SubmitEvent
		const handleFormSubmit = async (e: SubmitEvent) => {
			e.preventDefault();
			setIsProcessing(true);
	
			const fullname = formElement?.querySelector<HTMLInputElement>("input[name='fullname']")?.value || "";
			if (!fullname.trim() || fullname.split(" ").length < 2) {
				setFormMessage("Please enter your full name.");
				setIsProcessing(false);
				return;
			}
	
			const email = formElement?.querySelector<HTMLInputElement>("input[name='email']")?.value || "";
			if (!email.match(/^[\+_a-z0-9-'&=]+(\.[\+_a-z0-9-']+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,})$/i)) {
				setFormMessage("Enter a valid email address.");
				setIsProcessing(false);
				return;
			}
	
			try {
				const serializedData = serializeForm(formElement!);
				const response = await fetch(
					`https://gitcannabis.activehosted.com/proc.php?${serializedData}&jsonp=true`,
					{
						method: "POST",
						headers: { Accept: "application/json" },
					}
				);
	
				const result = await response.json();
	
				if (result.action && result.action === "show_thank_you") {
					setFormMessage("Thank you for subscribing!");
					setFormSubmit(true);
					formElement?.reset();
				} else {
					setFormMessage("There was an issue with your submission. Please try again.");
				}
			} catch (error) {
				console.error("Form submission error:", error);
				setFormMessage("Error submitting form. Please try again later.");
			} finally {
				setIsProcessing(false);
			}
		};
	
		// Add event listener for form submission
		formElement?.addEventListener("submit", handleFormSubmit);

		// Cleanup event listener on unmount
		return () => {
			formElement?.removeEventListener("submit", handleFormSubmit);
		};
	}, []);
	

	return (
		<>
			{!isFormSubmit ?
				<>
					<h2 className="font-bold text-4xl mb-8 flex items-center gap-2">Hello! <span className="text-5xl">👋</span> You caught us before we are ready.</h2>
					<p className='mb-10 font-[500]'>We&#39;re working hard to put this app together. Things are going well, and we should have more soon. If you’d like us to send you an update as we progress, just sign up below:</p>
				</>
				: 
				<div className="flex flex-row flex-nowrap gap-5 justify-between">
					<div className="w-7/12 font-[500]">
						<h2 className="font-bold text-4xl mb-4 flex items-center gap-2">You&#39;re on the list! <span className="text-5xl">👍</span></h2>
						<p className="mb-4">Thanks so much for signing up for our pre-launch list. We&#39;ll be in touch soon to let you know about our progress and give you sneak peeks on what we&#39;re working on.</p>
						<p className='mb-4'>High five!</p>
						<p className='mb-4'>The team</p>
						<p className='mb-4'>P.S.</p>
						<p className='mb-10'><em>Liked this preview? Help us reach more people who care about healthy eating by sharing it with your friends!</em></p>
						<ul className="flex flex-row gap-4">
							<li><Link target="_blank" href={'https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fdestra.io%2Fconcept-survey'} className="bg-blue-600 text-white py-2 px-4 rounded-md transition-colors hover:bg-blue-400">Share on Facebook</Link></li>
							<li><Link target="_blank" href={'https://x.com/intent/tweet?url=https%3A%2F%2Fdestra.io%2Fconcept-survey'} className="bg-black text-white py-2 px-4 rounded-md transition-colors hover:bg-gray-700">Share on X</Link></li>
						</ul>
					</div>
					<div className="w-4/12">
						<iframe src="https://giphy.com/embed/hZj44bR9FVI3K" className="h-full w-full pointer-events-none" allowFullScreen></iframe>
					</div>
				</div> 
			}

			{!isFormSubmit ?
				<form
					ref={formRef}
					method="POST"
					action="https://gitcannabis.activehosted.com/proc.php"
					id="_form_1_"
					className="_form _form_1 _inline-form _dark"
					noValidate
					data-styles-version="5"
				>
					<input type="hidden" name="u" value="1" />
					<input type="hidden" name="f" value="1" />
					<input type="hidden" name="s" />
					<input type="hidden" name="c" value="0" />
					<input type="hidden" name="m" value="0" />
					<input type="hidden" name="act" value="sub" />
					<input type="hidden" name="v" value="2" />
					<input type="hidden" name="or" value="39f5730a26b19f1e67b4b21a7d3406a1" />

					<div className={`_form-content flex-col gap-4 ${isFormSubmit ? 'hidden' : 'flex'}`}>

						<div className="_form_element _x91782906 _full_width">
							<label htmlFor="fullname" className="_form-label sr-only">Full Name <sup>*</sup></label>
							<div className="_field-wrapper">
								<input
									type="text"
									id="fullname"
									name="fullname"
									placeholder="Full Name"
									required
									className="w-full py-3 px-5"
								/>
							</div>
						</div>

						<div className="_form_element _x19489877 _full_width mb-4">
							<label htmlFor="email" className="_form-label sr-only">Email <sup>*</sup></label>
							<div className="_field-wrapper">
								<input
									type="email"
									id="email"
									name="email"
									placeholder="Email"
									required
									className="w-full py-3 px-5"
								/>
							</div>
						</div>

						<div className="_button-wrapper _full_width">
							<button id="_form_1_submit" className={`_submit bg-[#027e6f] rounded-md py-2 px-6 text-white transition-colors hover:bg-gray-600 ${isProcessing ? "processing pointer-events-none" : ""}`} type="submit" disabled={isProcessing}>
								{isProcessing ? "Processing..." : "Submit"}
							</button>
						</div>

						<div className="_clear-element"></div>
					
					</div>

					{/* Message display for success/error */}
					{formMessage && (
						<div className="_form-thank-you" style={{ color: "green", textAlign: "center", marginTop: "15px" }}>
							{formMessage}
						</div>
					)}
				</form>
				: null}
		</>
	);
};

export default FormComponent;
