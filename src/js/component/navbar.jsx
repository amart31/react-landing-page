import React from "react";

const Navbar = () => {
	return (
		<nav className="navbar navbar-expand-sm navbar-dark bg-dark mb-4">
			<div className="container">
				<button
					className="navbar-toggler"
					type="button"
					data-toggle="collapse"
					data-target="#nav-content"
					aria-controls="nav-content"
					aria-expanded="false"
					aria-label="Toggle navigation">
					<span className="navbar-toggler-icon" />
				</button>

				<a className="navbar-brand" href="#">
					Andy Martinez
				</a>

				<div
					className="collapse navbar-collapse justify-content-end"
					id="nav-content">
					<ul className="navbar-nav">
						<li className="nav-item">
							<a className="nav-link" href="#">
								Home
							</a>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="#">
								About
							</a>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="#">
								Services
							</a>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="#">
								Contact
							</a>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
