"use client";

import React from "react";
export default function Ad() {
	const adHolder = React.useRef<HTMLDivElement>(null);
	// React.useEffect(() => {
	//   if (adHolder.current) {
	//     adHolder.current.innerHTML = `<ins class="adsbygoogle"
	//     style="display:block"
	//     data-ad-client="ca-pub-4320323956955727"
	//     data-ad-slot="1063568912"
	//     data-ad-format="auto"
	//     data-full-width-responsive="true"></ins>`;
	//   }

	//   // // // ad cleaner

	//   let timer = setTimeout(() => {
	//     try {
	//       if (typeof window !== "undefined") {
	//         // @ts-ignore
	//         (adsbygoogle = window.adsbygoogle || []).push({});
	//       }
	//     } catch (err) {
	//       console.error(err);
	//     }
	//   }, 3000);
	//   return () => {
	//     clearTimeout(timer);
	//   };
	// }, []);

	// React.useEffect(() => {
	// 	let timer = setTimeout(() => {
	// 		try {
	// 			if (typeof window !== "undefined") {
	// 				// @ts-ignore
	// 				(adsbygoogle = window.adsbygoogle || []).push({});
	// 				console.log("Adsense Id", document.querySelector("#adSenseId"));
	// 				console.log("Adsense Els", document.querySelectorAll("adsbygoogle"));
	// 			}
	// 		} catch (err) {
	// 			console.error(err);
	// 		}
	// 	}, 3000);
	// 	return () => {
	// 		clearTimeout(timer);
	// 	};
	// }, []);

	return (
		<>
			{/* <div id="ads" className="ad-container my-5  bg-primary">
				<p style={{ fontStyle: "italic" }}>Advertisement</p>
				<div className="adHolder  min-h-[300px]" ref={adHolder}>
					{
						<ins
							className="adsbygoogle block m"
							data-ad-client="ca-pub-4320323956955727"
							data-ad-slot="1063568912"
							data-ad-format="auto"
							data-full-width-responsive="true"
						></ins>
					}
				</div>
			</div> */}
			{/* <div className="h-[250px] bg-secondary">
				<ins
					className="adsbygoogle block h-[250px] "
					data-ad-client="ca-pub-4320323956955727"
					data-ad-slot="1063568912"
					data-ad-format="auto"
					data-full-width-responsive="true"
				></ins>
			</div> */}
		</>
	);
}
