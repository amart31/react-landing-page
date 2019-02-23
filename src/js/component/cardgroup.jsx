import React from "react";

const Cardgroup = () => {
	return (
		<div className="container">
			<div className="card-deck">
				<div className="card">
					<img
						className="card-img-top"
						src="https://via.placeholder.com/500x325.png/09f/fff"
						alt="Card image cap"
					/>
					<div className="card-body">
						<h5 className="card-title">HTML</h5>
						<p className="card-text">
							This is a wider card with supporting text below as a
							natural lead-in to additional content. This content
							is a little bit longer.
						</p>
					</div>
					<div className="card-footer text-center">
						<a href="#" className="btn btn-primary">
							Find Out More!
						</a>
					</div>
				</div>
				<div className="card">
					<img
						className="card-img-top"
						src="https://via.placeholder.com/500x325.png/09f/fff"
						alt="Card image cap"
					/>
					<div className="card-body">
						<h5 className="card-title">Css</h5>
						<p className="card-text">
							This card has supporting text below as a natural
							lead-in to additional content.
						</p>
					</div>
					<div className="card-footer text-center">
						<a href="#" className="btn btn-primary">
							Find Out More!
						</a>
					</div>
				</div>
				<div className="card">
					<img
						className="card-img-top"
						src="https://via.placeholder.com/500x325.png/09f/fff"
						alt="Card image cap"
					/>
					<div className="card-body">
						<h5 className="card-title">JavaScript</h5>
						<p className="card-text">
							This is a wider card with supporting text below as a
							natural lead-in to additional content. This card has
							even longer content than the first to show that
							equal height action.
						</p>
					</div>
					<div className="card-footer text-center">
						<a href="#" className="btn btn-primary">
							Find Out More!
						</a>
					</div>
				</div>
				<div className="card">
					<img
						className="card-img-top"
						src="https://via.placeholder.com/500x325.png/09f/fff"
						alt="Card image cap"
					/>
					<div className="card-body">
						<h5 className="card-title">React</h5>
						<p className="card-text">
							This is a wider card with supporting text below as a
							natural lead-in to additional content. This card has
							even longer content than the first to show that
							equal height action.
						</p>
					</div>
					<div className="card-footer text-center">
						<a href="#" className="btn btn-primary">
							Find Out More!
						</a>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Cardgroup;
