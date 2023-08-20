import React from 'react';
import SearchBar from '../Components/SearchBar';


const SuperiorSection = () => {
  return (
    <section>
      <div className='superior-container'>
        <div className='logo-container'>
          <div className='shadow'>
        <img src='https://boomtown-production-consumer-backup.s3.amazonaws.com/3921/files/2021/01/newhpl-.png'></img>
        <SearchBar/>
        </div>
        </div> 
        <div className="circle-container">
        <div className="img-container">
    <div className="inner-container">
        <img src="https://bt-wpstatic.freetls.fastly.net/wp-content/blogs.dir/3921/files/2017/06/AGT-Condo-Pic-e1496851633937.jpg" alt="Gallery View" />
        <button className="hover-button">See All Listings</button> 
    </div>
</div>
<div className="img-container">
    <div className="inner-container">
        <img class="bt-teaser__image" src="https://bt-wpstatic.freetls.fastly.net/wp-content/plugins/bt-teaser/resources/images/templates/porthole-offset/2.jpg?v=2" alt="Map View" />
        <button className="hover-button">See All Listings</button> 
    </div>
</div>
<div className="img-container">
    <div className="inner-container">
        <img src="https://bt-wpstatic.freetls.fastly.net/wp-content/blogs.dir/3921/files/2017/06/image-2017-06-07.png" alt="Gallery View" />
        <button className="hover-button">Contact Us</button> 
    </div>
</div>

</div>

        </div>
      <h1>Find your home in Coral Gables</h1>
      <p>We’re passionate about the real estate market. We want to provide you with the best local content and additional professional services, if and when your situation requires it. Our goal is to be helpful, not a nuisance. There is no obligation required from you.

We look forward to earning your trust and respect through our ‘on-call’ level of service and our extensive local knowledge.</p>
    </section>
  );
};

export default SuperiorSection;
