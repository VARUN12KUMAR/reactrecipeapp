import React, { Component } from 'react';
import Menu from './MenuComponents'
import Home from './Home'
import {Switch,Route,Redirect} from 'react-router-dom'
import Contact from './Contact'
import About from './about'
import {PROMOTIONS} from '../shared/promotion'
import {LEADERS} from '../shared/leader'
import {COMMENTS} from '../shared/comments' 
import { DISHES } from '../shared/dishes'


class Main extends Component {
  constructor(props){
    super(props)    
    this.state={
      dishes:DISHES,
      promotions: PROMOTIONS,
      comments:COMMENTS,
      leaders:LEADERS

    };
  }

  render() {
    const HomePage = ()=>{
      return(
        <Home dish={this.state.dishes.filter((dish)=>dish.featured)[0]}
        promotion={this.state.promotions.filter((promo)=>promo.featured)[0]}
        leader={this.state.leaders.filter((leader)=>leader.featured)[0]}
        />
      );
    
    }

    return (
      <div className="App">
      <Switch>
        <Route path='/home' component={HomePage}/>
        <Route exact path='/menu' component={() => <Menu dishes={this.state.dishes}/>}/>
        <Route path='/contactus' component={Contact}/>
        <Route path='/aboutus' component={About}/>
        <Redirect to="/home"/>
      </Switch>

      
    
   
      
    
      </div>
    );
  }
}

export default Main;