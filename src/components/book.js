import React from 'react';



function Book(props) {
    return (
      <div className="book">
        <div class="box">
                <div class="img">
                    <img src={props.text.image} alt=""/>
                </div>
                <div class="title">
                    {props.text.text1}<br/>
                    {props.text.text2}
                </div>
            </div>
      </div>
    );
  }

  export default Book;