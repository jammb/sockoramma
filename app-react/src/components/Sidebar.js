import React from 'react'

class Sidebar extends React.Component {
    render() {
        return ( <div className="col-sm-3 column" id="filterColumn">
            <h4><strong>Filter Items</strong></h4>
            <br/>
            <p>Type</p>
            <input type="checkbox" id="typeAlpaca" name="typeAlpaca"/>
			<label for="typeAlpaca">Alpaca</label><br/>
            <input type="checkbox" id="typeBlended" name="typeBlended"/>
			<label for="typeBlended">Blended</label><br/>
            <input type="checkbox" id="typeLlama" name="typeLlama"/>
			<label for="typeLlama">Llama</label><br/>
            <input type="checkbox" id="typeWool" name="typeWool"/>
			<label for="typeWool">Wool</label><br/>
            <br/>
            <p>Style</p>
            <input type="checkbox" id="styleCrew" name="styleCrew"/>
			<label for="styleCrew">Crew</label><br/>
            <input type="checkbox" id="styleDress" name="styleDress"/>
			<label for="styleDress">Dress</label><br/>
            <input type="checkbox" id="styleKnee" name="styleKnee"/>
			<label for="styleKnee">Knee</label><br/>
            <br/>
            <p>Size</p>
            <input type="checkbox" id="sizeSmall" name="sizeSmall"/>
			<label for="sizeSmall">Small</label><br/>
            <input type="checkbox" id="sizeMedium" name="sizeMedium"/>
			<label for="sizeMedium">Medium</label><br/>
            <input type="checkbox" id="sizeLarge" name="sizeLarge"/>
			<label for="sizeLarge">Large</label><br/>
            <input type="checkbox" id="sizeXLarge" name="sizeXLarge"/>
			<label for="sizeXLarge">Extra Large</label><br/>
        </div>
        )
    }
}

export default Sidebar