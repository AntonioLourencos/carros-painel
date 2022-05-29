import React from "react";
import type IDimensions from "@/interfaces/hooks/Dimensions";
const useDimensions = () => {
	const [windowSize, setWindowSize] = React.useState<IDimensions>({
		width: 0,
		height: 0,
	});

	React.useEffect(() => {
		if (typeof window !== "undefined") {
			function handleResize() {
				setWindowSize({
					width: window.innerWidth,
					height: window.innerHeight,
				});
			}

			window.addEventListener("resize", handleResize);
			handleResize();
			return () => window.removeEventListener("resize", handleResize);
		}
	}, []);
	return windowSize;
};

export default useDimensions;
