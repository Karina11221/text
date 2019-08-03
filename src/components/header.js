import React from 'react';
import image from '../assets/book.png';
import Book from './book';
import Shop from '../assets/Shopping_cart.png'
import photo from '../assets/one.png'
import Photo from '../components/photo'


let array = [
    {
        image: Shop,
        text1: 'Бесплатная доставка',
        text2: '381 магазин в сети'
    },
    {
        text1: '',
        text2: ''
    },
    {
        text1: '',
        text2: ''
    },
    {
        text1: '',
        text2: ''
    }
]
let array1 = [
    photo,
    photo,
    photo,
    photo
]

let arraymap = (item) => <Book text={item}/>
let arraymap1 = (item) => <Photo photo={item}/>

function Header() {
    return (
      <div className="header">
        <div class="conteiner">
		    <div class="top">
			    <div class="top-img">
			        <img src={image} alt=""/>
			    </div>
		        <div class="top-text">
			        <div class="top-text_title">
				        Истинная королева
			        </div>
			        <div class="top-text_name">
				        Екатерина Арагонская
				    </div>
                    <div class="top-text_text">
                        «Екатерина Арагонская» — это первый роман популярного автора и известного историка Элисон Уэйр, решившей создать драматическую серию, в которой каждая книга будет посвящена одной из жен короля Генриха VIII.
                    </div>
                    <div class="text-price">
                        399 р.
                    </div>
			        <div class="top-text_button">
                        
				        <button class="top-button1">
					        Купить 
				        </button>
                        <button class="top-button2">
					        Узнать подробнее
				        </button>
			        </div>
                </div>	
		    </div>
	    </div>
	
    <div class="two">
        <div class="two-title">
            Доставка и оплата
        </div>
	    <div class="two-box">
            {
                array.map(arraymap)
            }
	    </div>
	</div>
	
	<div class="three">
		<div class="three-title">
			Кто уже купил эту книгу
		</div>
		<div class="three-box1">
			{
                array1.map(arraymap1)
            }
			
		</div>
		<div class="three-box2">	
        {
                array1.map(arraymap1)
            }
		</div>
	</div>
    </div>
    );
  }
  
  export default Header;