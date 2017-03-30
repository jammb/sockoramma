import React from 'react'

class Sidebar extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            typeAlpaca: false
        }
    }

    render() {
        console.log(this.props.filterProductsMaterial)
        return ( <div className="col-sm-3 column" id="filterColumn">
            <h4><strong>Filter Items</strong></h4>
            
            <input type="radio" id="viewAll" name="filterRadio" onClick={() =>this.props.filterProductsStyle('')}/>
            <label htmlFor="viewAll">View All</label>
            
            <br/>
            
            <p>Type</p>
            <input type="radio" id="typeAlpaca" name="filterRadio" onClick={() =>this.props.filterProductsMaterial('Alpaca')}/>
			<label htmlFor="typeAlpaca">Alpaca</label><br/>
            <input type="radio" id="typeBlended" name="filterRadio" onClick={() =>this.props.filterProductsMaterial('Blended')}/>
			<label htmlFor="typeBlended">Blended</label><br/>
            <input type="radio" id="typeLlama" name="filterRadio" onClick={() =>this.props.filterProductsMaterial('Llama')}/>
			<label htmlFor="typeLlama">Llama</label><br/>
            <input type="radio" id="typeWool" name="filterRadio" onClick={() =>this.props.filterProductsMaterial('Wool')}/>
			<label htmlFor="typeWool">Wool</label><br/>
            <br/>

            
            <p>Style</p>
            <input type="radio" id="styleCrew" name="filterRadio" onClick={() =>this.props.filterProductsStyle('Crew')}/>
			<label htmlFor="styleCrew">Crew</label><br/>
            <input type="radio" id="styleDress" name="filterRadio" onClick={() =>this.props.filterProductsStyle('Dress')}/>
			<label htmlFor="styleDress">Dress</label><br/>
            <input type="radio" id="styleKnee" name="filterRadio" onClick={() =>this.props.filterProductsStyle('Knee')}/>
			<label htmlFor="styleKnee">Knee</label><br/>
            <br/>
            <p>Size</p>
            <input type="radio" id="sizeSmall" name="sizeSmall"/>
			<label htmlFor="sizeSmall">Small</label><br/>
            <input type="radio" id="sizeMedium" name="sizeMedium"/>
			<label htmlFor="sizeMedium">Medium</label><br/>
            <input type="radio" id="sizeLarge" name="sizeLarge"/>
			<label htmlFor="sizeLarge">Large</label><br/>
            <input type="radio" id="sizeXLarge" name="sizeXLarge" />
			<label htmlFor="sizeXLarge">Extra Large</label><br/>
        </div>
        )
    }
}

export default Sidebar