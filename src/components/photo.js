import React from 'react';

function Photo(props) {
    return (
      <div className="photo">
       <div class="three-img1">
				<img src={props.photo} alt=""/>
			</div>
      </div>
    );
  }
  export default Photo;