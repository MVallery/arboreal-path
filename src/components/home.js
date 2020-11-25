import {Router, Route, Link, Switch } from "react-router-dom";
import BookCover from '../assets/images/cover-header.png';
import ArborealPath from './arboreal-path';


function Home() {

    return (
        <div className= "paragraph-container">
          <div flex-content>
        <h1 >Arboreal Path</h1>  
        <div align="right" className="book-flex">
        {/* <p className= "book-banner">Coming Soon!</p> */}
        <img className="book-cover" src={BookCover} align="left"></img>
        </div>
        
        <p className="paragraph">Dapibus ultrices in iaculis nunc sed. Hendrerit gravida rutrum quisque non tellus orci ac auctor. Rutrum quisque non tellus orci ac auctor. 
        Ut eu sem integer vitae justo eget magna fermentum. Odio tempor orci dapibus ultrices. Tempus iaculis urna id volutpat lacus. Massa tempor nec feugiat nisl pretium fusce id velit. <br/><br/>
        Feugiat scelerisque varius morbi enim nunc faucibus a pellentesque sit. Augue ut lectus arcu bibendum at varius vel pharetra vel. Eget gravida cum sociis natoque penatibus et magnis.

        Ut tristique et egestas quis ipsum suspendisse ultrices gravida dictum. Placerat orci nulla pellentesque dignissim enim sit amet venenatis. Urna et pharetra pharetra massa massa ultricies. 
        Sit amet purus gravida quis blandit. Cum sociis natoque penatibus et magnis. Pretium fusce id velit ut tortor pretium viverra. Est lorem ipsum dolor sit amet consectetur adipiscing elit. <br/><br/>
        Dui sapien eget mi proin sed. At tempor commodo ullamcorper a lacus vestibulum sed. Urna id volutpat lacus laoreet non curabitur gravida arcu. Phasellus vestibulum lorem sed risus ultricies tristique nulla aliquet. Quis blandit turpis cursus in hac. Blandit libero volutpat sed cras ornare arcu dui vivamus. Pretium vulputate sapien nec sagittis aliquam malesuada bibendum. Laoreet sit amet cursus sit amet. Consectetur a erat nam at lectus. Habitasse platea dictumst quisque sagittis purus sit amet volutpat consequat. Nunc eget lorem dolor sed viverra ipsum.<br/><br/>
        
        <Link className="linkAP" to="/arboreal-path">Learn more about Arboreal Path</Link>
        </p>
        </div>
        <main>
        <Switch>
        <Route path="/arboreal-path" component= {ArborealPath} />

        </Switch>
        </main>
    </div>);
  }
  
  export default Home;
  
