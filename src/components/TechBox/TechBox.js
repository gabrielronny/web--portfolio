import "./TechBox.css";

export default function TechBox(props) {
  return (
		<div className="box-tech">
			<img src={props.img} alt={props.alt} />
		</div>
	);
}


