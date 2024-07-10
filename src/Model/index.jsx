import { useEffect, useRef } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { disableBodyScroll, enableBodyScroll } from "body-scroll-lock";

function Modal() {
	const modalRef = useRef();
	const { id } = useParams();
	const navigate = useNavigate();

	useEffect(() => {
		const observerRefValue = modalRef.current;
		disableBodyScroll(observerRefValue);

		return () => {
			if (observerRefValue) {
				enableBodyScroll(observerRefValue);
			}
		};
	}, []);

	return (
		<div ref={modalRef} className="modal-wrapper" onClick={() => navigate("/")}>
			<div className="modal">
				<h1>{id}</h1>
				<p>
					Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet,
					consectetur, adipisci velit, sed quia non numquam eius modi tempora
					incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut
					enim ad minima veniam, quis nostrum exercitationem ullam corporis
					suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis
					autem vel eum iure reprehenderit qui in ea voluptate velit esse quam
					nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo
					voluptas nulla pariatur? Neque porro quisquam est, qui dolorem ipsum
					quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam
					eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat
					voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem
					ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi
					consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate
					velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum
					fugiat quo voluptas nulla pariatur? Neque porro quisquam est, qui
					dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed
					quia non numquam eius modi tempora incidunt ut labore et dolore magnam
					aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum
					exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex
					ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in
					ea voluptate velit esse quam nihil molestiae consequatur, vel illum
					qui dolorem eum fugiat quo voluptas nulla pariatur? Neque porro
					quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur,
					adipisci velit, sed quia non numquam eius modi tempora incidunt ut
					labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima
					veniam, quis nostrum exercitationem ullam corporis suscipit
					laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel
					eum iure reprehenderit qui in ea voluptate velit esse quam nihil
					molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas
					nulla pariatur?
				</p>
			</div>
		</div>
	);
}

export default Modal;