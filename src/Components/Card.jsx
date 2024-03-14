import react, { useState } from "react";
import { toast } from "react-toastify";
const Card = ({ id, state, info, image, price }) => {
	const [booked, setBooked] = useState(false);

	const bookingHandler = (id, state) => {
		console.log("booked", id);
		toast.success("booked " + state);
		setBooked(true);
	};
	return (
		<div className="card">
			<img src={image} className="image" alt="error"></img>

			<div className="tour-details">
				<h2 className="tour-name">{state}</h2>
				<h2 className="tour-price">{price}</h2>
			</div>

			<div className="description">{info}</div>

			<button
				className={`btn-red ${booked ? "btn-disabled" : ""}`}
				onClick={() => bookingHandler(id, state)}
			>
				Book Now
			</button>
		</div>
	);
};

export default Card;
