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
            <p>Color</p>
            <input type="radio" id="colorBlack" name="filterRadio" onClick={() =>this.props.filterProductsColor('Black')}/>
			<label htmlFor="colorBlack">Black</label><br/>
            <input type="radio" id="colorBrown" name="filterRadio" onClick={() =>this.props.filterProductsColor('Brown')}/>
			<label htmlFor="colorBrown">Brown</label><br/>
            <input type="radio" id="colorCharcoal" name="filterRadio" onClick={() =>this.props.filterProductsColor('Charcoal')}/>
			<label htmlFor="colorCharcoal">Charcoal</label><br/>
            <input type="radio" id="colorCream" name="filterRadio" onClick={() =>this.props.filterProductsColor('Cream')}/>
			<label htmlFor="colorCream">Cream</label><br/>
            <input type="radio" id="colorGrey" name="filterRadio" onClick={() =>this.props.filterProductsColor('Grey')}/>
			<label htmlFor="colorGrey">Grey</label><br/>
            <input type="radio" id="colorVarious" name="filterRadio" onClick={() =>this.props.filterProductsColor('Various')}/>
			<label htmlFor="colorVarious">Various</label><br/>
        </div>
        )
    }
}

export default Sidebar