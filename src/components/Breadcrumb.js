import React from 'react'
import { withRouter} from "react-router-dom";
import { Link } from 'react-router-dom';

function Pagination(props) {
	
	if(props.location.pathname === '/') return <div></div>;

	const paths = props.location.pathname.split('/').map((p, i, arr) => {

		const firstLetter = p.charAt(0);
		const capitalized = p.replace(firstLetter, firstLetter.toUpperCase());

		if (i === 0) return {
				content: (<Link key={i} to={'/'}>Home</Link>), 
		};

		if (i === arr.length - 1) return {
				content: (<span key={i}><span className="mx-2 mb-0">/</span><strong className="text-black">{capitalized}</strong></span>),
		};

		return { 
				content: (<span key={i}><span className="mx-2 mb-0">/</span><Link to={`${arr.slice(0, i + 1).join('/')}`}>{capitalized}</Link></span>),
		};

	});
	
  return (
    <div>
      <div className="bg-light py-3">
				<div className="container">
					<div className="row">
						<div className="col-md-12 mb-0">{paths.map( path => path.content)}</div>
					</div>
				</div>
			</div>
    </div>
  )
}

export default withRouter(Pagination);