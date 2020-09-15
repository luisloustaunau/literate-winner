import React from 'react';
import underWeightImg from './ImagesOfWeight/underweight.jpg';
import normalImg from './ImagesOfWeight/normal.jpg';
import overweightImg from './ImagesOfWeight/overweight.jpg';
import obesityImg from './ImagesOfWeight/obesity.jpg';
import obesity2Img from './ImagesOfWeight/obesity second degree.jpg';
import obesity3Img from './ImagesOfWeight/obesity third degree.jpg';


import './App.css'


class App extends React.Component{
  constructor(props) {
  super(props)

    this.state = {
       underWeight: false,
       normal: false,
       overWeight: false,
       obese: false,
       obese2: false,
       obese3: false,
       weight: '',
       height: '',
       weightStandard: '',
       heightStandard: '',
       heightStandardIn: '',
       bodyMass: '',
       showForm: true,
       showResults: false,
       showInformation: true
    }
    
    this.handleHeightChange = this.handleHeightChange.bind(this);
    this.handleWeightChange = this.handleWeightChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    this.handleWeightChangeStan = this.handleWeightChangeStan.bind(this);
    this.handleHeightChangeStan = this.handleHeightChangeStan.bind(this);
    this.handleHeightChangeStanIn = this.handleHeightChangeStanIn.bind(this);
    this.handleSubmitStan = this.handleSubmitStan.bind(this);
  }
  
  handleHeightChange(event) {
    this.setState({height: event.target.value});
  }
  handleWeightChange(event) {
    this.setState({weight: event.target.value});
  }
  

  handleHeightChangeStan(event){
    this.setState({heightStandard: event.target.value});
  }
  handleHeightChangeStanIn(event) {
    this.setState({heightStandardIn: event.target.value})
  }
  handleWeightChangeStan(event){
    this.setState({weightStandard: event.target.value});
  }


  handleSubmitStan(event) {
    this.setState({
        showResults: true,
        showForm: false,
        showInformation: false
    })
    let upper = this.state.weightStandard*703
    let lower = (Number(this.state.heightStandardIn)+(Number(this.state.heightStandard))*12)**2;
    let resultStan = (upper/lower).toFixed(1);
    this.setState({bodyMass: resultStan});

    if (resultStan > 40) {
    this.setState({ obese3: true})
    } else if (resultStan > 35) {
    this.setState({obese2: true})
    } else if (resultStan > 30) {
    this.setState({obese: true}) 
    } else if (resultStan > 24) {
    this.setState({overWeight: true})
    } else if (resultStan > 18.49) {
    this.setState({normal: true})
    } else {
     this.setState({underWeight: true})
    }
  }


  handleSubmit(event) {
    this.setState({
         showResults: true,
         showForm: false,
         showInformation: false
    })
    let result = (this.state.weight/(((Number(this.state.height)/100))**2)).toFixed(1);
    this.setState({bodyMass: result});

    if (result > 40) {
      this.setState({ obese3: true})
    } else if (result > 35) {
     this.setState({obese2: true})
    } else if (result > 30) {
      this.setState({obese: true}) 
    } else if (result > 24) {
      this.setState({overWeight: true})
    } else if (result > 18.49) {
      this.setState({normal: true})
    } else {
      this.setState({underWeight: true})
    }
  }

  handleReturn(event) {
    this.setState({
        underWeight: false,
        normal: false,
        overWeight: false,
        obese: false,
        obese2: false,
        obese3: false,
        weight: '',
        height: '',
        weightStandard: '',
        heightStandard: '',
        bodyMass: '',
        showForm: true,
        showResults: false,
        showInformation: true

    })
  }
   

  render(){
    let showForm = this.state.showForm;
    let showResults = this.state.showResults;
    let underWeight = this.state.underWeight
    let normal = this.state.normal
    let overWeight = this.state.overWeight
    let obese = this.state.obese
    let obese2 = this.state.obese2
    let obese3 = this.state.obese3
    let bodyMass = this.state.bodyMass
    let showInformation = this.state.showInformation
 
   return (
      <main className="App">
      {showInformation && (
      <section className="initial">
        <h1> Body Mass Index  Checker </h1>
        <h2>The Body Mass Index is a useful parameter that allows you to quickly check whether you have a healthy weight using a standardized formula.
        This guide will help you understand where you stand in terms of weight range in response to your height and weight!
        <br></br>
        <br></br>
        NOTE: The Body Mass Index is not accurate in determining weight range for pregnant women, people with high muscle mass or children.
        </h2>
      </section>
      )}
      {showForm && (
      <section className= "data">
        <form id="metric" onSubmit = { ()=> this.handleSubmit()} >
        <h2>Metric units</h2>
          <label for="height"> height (cm)</label>
          <br></br>
          <input id="height" name="height" type="text" pattern="^-?[0-9]\d*\.?\d*$"  required  value = {this.state.value}  onChange={this.handleHeightChange} />
          <br></br>
          <br></br>
          <br></br>
          <label for="weight"> weight (kg)</label>
          <br></br>
          <input id="weight" name="weight" type="text" pattern="^-?[0-9]\d*\.?\d*$"  required value = {this.state.value} onChange={this.handleWeightChange}   />
          <br></br>
          <br></br>
          <label for="subimssion">See results!</label>
          <br></br>
          <button  className="button" type="submit"   >Submit</button>
        </form>
        <form id="standard" onSubmit = {this.handleSubmitStan} >
        <h3>Standard units</h3>
          <label for="height" >height</label>
           <br />
          <label for="height">(ft)</label>
          <label id="inch" for="cm">(in)</label>
          <br></br>
          <input id="height" name="height" type="text" pattern="^-?[0-9]\d*\.?\d*$"   value = {this.state.value} onChange={this.handleHeightChangeStan}  required />
          <input id= "cm" name="cm" type="text" pattern ="^-?[0-9]\d*\.?\d*$" value = {this.state.value} onChange={this.handleHeightChangeStanIn} required />
          <br></br>
          <br></br>
          <label for="weight"> weight (lbs)</label>
          <br></br>
          <input id="weight" name="weight" type="text" pattern="^-?[0-9]\d*\.?\d*$"  value ={this.state.value} onChange={this.handleWeightChangeStan} required/>
          <br></br>
          <br></br>
          <label for="subimssion">See results!</label>
          <br></br>
          <button  className="button" type="submit"  >Submit</button>
        </form>
      </section> ) }
      { showResults && (

      <section className = "results">

      <h1>These are the Results</h1>

      <p id="bodymass" >Your body mass index is {bodyMass}</p> 

      { underWeight && (
      <section className="weight">
        <div className ="resultsImg">
          <p>underweight</p>
          <img src={underWeightImg} />
        </div>
      </section>
      )}
       { normal && (
      <section className="weight">
        <div className ="resultsImg">
          <p> Normal weight</p> 
          <img src={normalImg} />
        </div>
      </section>
      )}
       { overWeight && (
      <section className="weight">
        <div className ="resultsImg">
          <p> Overweight</p>
          <img src={overweightImg} />
        </div>
      </section>
      )}
       { obese && (
      <section className="weight">
        <div className ="resultsImg">
          <p>Obese</p>
          <img src={obesityImg} />
        </div>
      </section>
      )}
       { obese2 && (
      <section className="weight">
        <div className ="resultsImg">
          <p> Obese second degree</p>
          <img src={obesity2Img} />
        </div>
      </section>
      )}
       { obese3 && (
      <section className="weight">
        <div className ="resultsImg">
          <p> Obese third degree</p>
          <img src={obesity3Img} />
        </div>
      </section>
      )}

       <form>
       <button className="button" onClick ={()=> this.handleReturn()} >Return</button>
       </form>
 
      </section>
      )}
      

      </main>



   )  

  }
}




export default App;
