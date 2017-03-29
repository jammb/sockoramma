import React from 'react'

class Sidebar extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            typeAlpaca: false
        }
    }

    render() {
        console.log(this.props.filterProducts)
        return ( <div className="col-sm-3 column" id="filterColumn">
            <h4><strong>Filter Items</strong></h4>
            <br/>
            <p>Type</p>
            <input type="checkbox" id="typeAlpaca" name="typeAlpaca" onClick={() =>this.props.filterProducts('Alpaca')}/>
			<label htmlFor="typeAlpaca">Alpaca</label><br/>
            <input type="checkbox" id="typeBlended" name="typeBlended"/>
			<label htmlFor="typeBlended">Blended</label><br/>
            <input type="checkbox" id="typeLlama" name="typeLlama"/>
			<label htmlFor="typeLlama">Llama</label><br/>
            <input type="checkbox" id="typeWool" name="typeWool"/>
			<label htmlFor="typeWool">Wool</label><br/>
            <br/>
            <p>Style</p>
            <input type="checkbox" id="styleCrew" name="styleCrew"/>
			<label htmlFor="styleCrew">Crew</label><br/>
            <input type="checkbox" id="styleDress" name="styleDress"/>
			<label htmlFor="styleDress">Dress</label><br/>
            <input type="checkbox" id="styleKnee" name="styleKnee"/>
			<label htmlFor="styleKnee">Knee</label><br/>
            <br/>
            <p>Size</p>
            <input type="checkbox" id="sizeSmall" name="sizeSmall"/>
			<label htmlFor="sizeSmall">Small</label><br/>
            <input type="checkbox" id="sizeMedium" name="sizeMedium"/>
			<label htmlFor="sizeMedium">Medium</label><br/>
            <input type="checkbox" id="sizeLarge" name="sizeLarge"/>
			<label htmlFor="sizeLarge">Large</label><br/>
            <input type="checkbox" id="sizeXLarge" name="sizeXLarge"/>
			<label htmlFor="sizeXLarge">Extra Large</label><br/>
        </div>
        )
    }
}

export default Sidebar