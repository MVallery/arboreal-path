import React, {useState} from 'react';
import WorldMap from '../assets/images/world-map.jpg'
import Popper from '@material-ui/core/Popper';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Fade from '@material-ui/core/Fade';

const World = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [description, setDescription] = useState(null)
  const mapDescription = (desc, e) => {
    console.log(desc)
    console.log(description)
    if (desc === description){
      setAnchorEl(null)
    } else{
    setAnchorEl(e.currentTarget);
    setDescription(desc)

    }
    
  }
  const handleClickAway = (e) =>{
    console.log(e)
    if (e===undefined){
      setAnchorEl(null)

    } else{
      mapDescription(description,e)
    }
  }
  const open = Boolean(anchorEl);

  const handleLocation = (locationList) => {
    console.log('handlelocation', locationList)
    const newLocationList = locationList.map(location=> {
      return(
      <div key={location.name} className={`map-locations map-${location.name.replace(' ', '-')}`} onClick={(e)=>mapDescription(location.description,e)}></div>
      )
    })
    console.log(newLocationList)
    return newLocationList
  }

  const mapLocationList = [{name:'Gren City', description:"Capital of Grenvel and home base of Gren Consortium. While most other cities dismantled their churches after the fall of the Old Faith, Gren City converted the glass structures into greenhouses and used them to grow free food for all."}, 
                            {name:'Hillfarm', description: 'A network of farms cultivating Pasture Downs. Generates most of the food for Grenvel. Once the Quake stranded the northern countries, the desert country of Wolloisha grew dependent upon Hillfarm for more than just delicacies.'}, 
                            {name: 'Pasture Downs', description: "Lush hills filled with grazing animals and few predators. Created by a unified effort between mages and druids after the Old Faith was removed from power. Whatever isn't locked down as part of Hillfarm's food network is free reign for anybody or anything to eat from, making it a prime target for the starving and the frugal."},
                            {name: 'Mudplains', description:'Stretching between Grenvelian and Wolloishan [formerly Thaumic] territory, this inconvenient destination is popular with merchants trying to find exotic goods to sell deeper in their own territory. Tunnels through the mud were created to shield make-shift roads from the rain between the northern Mudplains and Pasture Downs.'},
                            {name: 'Meisha', description: "Serves as Grenvel's trading outpost with Wolloisha through its twin city on the other side of the Trachea, Ahsiem."},
                            {name: 'Belsa',description: 'Established centuries ago as a city for individuals wanting to live in tune with nature, Belsa became the clear choice for the nature-gifted druids to establish themselves. Though technically a city in Grenvel, most consider it separate territory due to rising disdain for druids.'},
                            {name: 'Spirit Arboretum',  description: 'A forest containing every known plant from every country in Our Stranded Lands and the Coveted South. Many endangered animals with magic powers reside here under the care of druids.'},
                            {name: 'Last Stand', description: 'In an effort to halt an invading Diyan army, hundreds, if not thousands, of earth-gifted mages built an impassable mountain to protect Hillfarm. Though hundreds, if not thousands, lost their lives creating the mountain, it proved successful and remains as a memorial to those lost.'},
                            {name: 'Tovaloreande Sanctuary', description: "Created by a rebellious priest of the Old Faith as a sanctuary for people who wanted to embrace nature and enjoy life away from the church. It's most well-known for being the site where the Old Faith assassinated Tovaloreande, fueling a rebellion. It's thought her death is what gave people magic. The ensuing battles resulted in Grenvel becoming druid-controlled and swayed public opinion towards atheism."},
                            {name: 'Wilton', description: "Grenvel's pit-stop for traders. Not prime trading territory, but the high pass-through traffic results in a large, ever-changing \"merchant district\" on the outskirts called Tent Town."},
                            {name: 'Trade Plains', description:"Formerly known for being neutral territory which enabled trade between Grenvel and Thauma, Thauma's transformation into Refulgent Wastes has since made the route unpopular. While Oressa still sends goods west across the plains, the rest of Grenvel chooses to use Meisha as their trading destination due to better access to Wolloishan goods."},
                            {name: 'Oressa', description: 'The only city in Thauma that did not evacuate due to the encroaching wastes. Being so close to Grenvel, it has always been more Grenvelian than Thaumic. Oressa acts as the primary city for both the mining company Sipherra and the mercenary company, the Dreamers. The people of Oressa have preferred isolation since being liberated from Diyan control.'},
                            {name: 'East Peaks', description: "Home to endless mountains and caverns, Sipherra has been extracting valuable minerals from East Peaks for a lifetime. Besides Sipherra's research and mining outposts, the area has no human presence, making it the perfect spot for destructive demonstrations of Sipherra's technology projects."},
                            {name: 'Sky Tower', description: "A place of study, used for alchemy, geology, and astronomy. The giant telescope at the top was what led to Thauma's twin lakes and river being named after a respiratory system."},
                            {name: 'Hearth', description: "Covered in bleached brambles at the center of the Wastes, Hearth is home to a \"second sun\" that ensures Thauma's nights range from short to nonexistent. No adventurer coming anywhere close to Hearth has ever come back."},
                            {name: 'Und dal Sylph', description: "Home to one of Thauma's most wealthy families, it is now locked down by an impenetrable wall of magic fog. It is thought to be hiding a cavalcade of enchanted artifacts worth more than all the money in Grenvel."},
                            {name: 'Stoneport', description: "One of cities used in the Ether Bazaar trade routes for enchanting goods."},
                            {name: 'Strago', description: "Former capital of Thauma. Since Strago sits outside the borders of Refulgent Wastes, the Dreamer mercenary company uses the abandoned city as the primary starting point for expeditions into the Wastes."},
                            {name: 'The Lungs', description: "Twin lakes, discovered to look like human lungs after Thauma's Sky Tower and high-powered telescope were created."},
                            {name: 'Ahsiem', description: "Once a Thaumic city, Wolloisha acquired it alongside Iron Swamp after the Quake. Though Wolloisha lost a significant amount of its own territory, the addition of Ahsiem allowed easy trade with Grenvel."},
                            {name:'Iron Swamp', description: "Rich with iron deposits, the people of Ahsiem make frequent mining trips here to ensure. The most valuable minerals lie behind a fog wall, which disappears every few decades."},
                            {name:'Weeping Pass', description: "Between the eerie whistling wind and the neighboring Phantasmal Reef and Refulgent Wastes, nobody willingly comes to Weeping Pass except for Dreamer mercenaries."},
                            {name:'Mizmiz', description: "Built on an oasis, this city uses water mages to expand its borders and extract water for delivery to Pinpin."},
                            {name:'Pinpin', description: "Wolloisha's capital, destroyed in the Quake and rebuilt as a series of floating buildings and roads in the Sigh. Pinpin is home to the Solstora religion's most holy land and contains spectacular sun temples and the ruling child priest-king. Each priest-king rules from their third birthday to when they are replaced by another orphan on their tenth birthday. This tradition's roots lie in a Solstoran story about the dangers of war and the child who led their people through hard times, but has resulted in abnormally high child abandonment rates. Not in the least due to orphans being often better taken care of and having the potential to become the priest-king."},
                            {name:'Clickclick Dunes', description: "Sacred blue-sanded dunes, where the Solstoran religion was established by an eight year old orphan leading their people from a war-torn town outside the desert. Most of Clikclik dunes fell into Phantasmal Reef due to the Quake."},
                            {name:'Thunder Trail', description: 'Comprising most of Diya, these series of trails mark where the nomadic logu peoples track the clouds to catch water in their rain-dish hats. Between the large water-jugs strapped to their backs and the natural fat-stores in their cheeks and hair, logu never felt the need to settle in cities.'},
                            {name:'Rovilia', description: "After the Quake destroyed Diya's ether bazaar, Rovilia took over as the unofficial capital. Though the country has no government, Diyans grew unhappy being unable to trade due to the Phantasmal Reef and Refulgent Wastes blocking Grenvel, Wolloisha, and the South. The most popular theory pinned fault on Grenvel, stating they initiated the Quake due to jealousy for not being able to take part in Diya's ether bazaar. Due to superior technology and enchanted equipment, Diya's volunteer militia had an easy time invading Grenvel and taking over the city of Oressa."},
                            {name:'Skull Landing', description: "The point at which humans first landed on Diya. The city's townhall was constructed with the skull of the catoblepas that attacked their ships upon reaching shore."},
                            {name:'Phantasmal Reef', description: "Blackened waters filled with the gray clouds of phantoms and streaks of silver lightning. Formed after the Quake tore the land between Wolloisha and the South asunder. The Reef stretches across the continent and circles the Stranded Lands, preventing any ship from crossing."},
                            {name:'Coveted South', description: "Thought to be technologically advanced, humans have tried to cross Phantasmal Reef to get to the South since the day the Reef showed up. Some don't see the point in trying when the north never cared for the south before the divide. Others believe the land to be wiped out by the Quake, citing the fact the South hasn't been able to cross despite five-hundred years to further advance their technology."}]
  return (
    <React.Fragment>

      <Popper open={open} anchorEl={anchorEl} transition>
        {({ TransitionProps}) => (
           <Fade {...TransitionProps} timeout={350}>
            <div className='description'><p>{description}</p></div>
           </Fade>
        )}
      </Popper>
      <div id="world" className="world-main-container">
        <div className="world-main-container-gradient">
      <h1>Explore The World</h1>
      <div className="world-map-container">
      <img className="world-map" src={WorldMap} />
        {handleLocation(mapLocationList)}
      </div>
      </div>
      </div>
    </React.Fragment>
  )
}

export default World;